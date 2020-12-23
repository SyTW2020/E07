const express = require('express');
const User = require('../models/User');
const { getMongoIdById, getUser, isUser } = require('./../utilities/Utils');
const jwt = require('jsonwebtoken');
const config = require('../../config/config_jwt');
const verifyToken = require('./verifyToken');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.json({
    "response": [
      {
        "request": req.body,
        "allUsers": users,
        "numberOfUsers": users.length
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": "/users",
        "method": "GET",
        "description": "List all users"
      },
      {
        "rel": "delete_users",
        "href": "/users",
        "method": "DELETE",
        "description": "Remove all users"
      }
    ]
  });
});

// Revisar tokens
// router.get('/prueba/user', verifyToken, async (req, res) => {
//   const user = await User.findById(req.userId, { password: 0 });
//   if (!user)
//     return res.status(404).send('Usuario no encontrado');

//   res.status(200).json(user);
// })

// Revisar tokens
router.get('/:nickname&:password', async (req, res) => {
  let pass;
  const user = await isUser(req.params.nickname, User);
  console.log(user);
  if (user){
    pass = await user.validatePass(req.params.password);
    console.log(pass);
	}
  if (!pass)
    res.status(404).send({ "response": [{ "code": 404, "error": "Usuario o contraseña incorrectos" }] });
  else {
    // jwt.
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 60 * 60 * 24
    });

    res.send({
      "response": [
        {
          "code": 200,
          "request": req.body,
          "user": user,
          "token": token
        }
      ],
      "links": [
        {
          "rel": "users",
          "href": "/users",
          "method": "GET",
          "description": `View all users`
        },
        {
          "rel": "users",
          "href": "/users",
          "method": "DELETE",
          "description": `Delete user ${user.nickname}`
        },
      ]
    });
  }
});

router.get('/:nickname', async (req, res) => {
  let user = await isUser(req.params.nickname, User);
  if (!user)
    res.status(404).send({ "response": [{ "code": 404, "error": "Usuario no existe" }] }); 
  else {
    res.json({
      "response": [
				{
					"user": req.params.nickname,
          "userInformation": user
        }
      ],
      "links": [
        {
          "rel": "self",
          "href": `/users/${req.params.nickname}`,
          "method": "GET",
          "description": `List user ${req.params.nickname} information`
        },
        {
          "rel": "modify_users",
          "href": `/users/${req.params.nickname}`,
          "method": "PUT",
          "description": `Modify user ${req.params.nickname}`
        },
        {
          "rel": "delete_user",
          "href": `/users/${req.params.nickname}`,
          "method": "DELETE",
          "description": `Delete user ${req.params.nickname}`
        }
      ]
    });
  }
});

router.post('/', async (req, res) => {
  let user = await isUser(req.body.nickname, User);
  if (user)
    res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario ya existe" }] });
  else {
    const user = new User(req.body);
    user.password = await user.encryptPass(user.password);
    const token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 60 * 60 * 24
    })
    await user.save();
    
    res.json({
      "response": [
        {
          "code": 200,
          "request": req.body,
          "user": user,
          "token": token
        }
      ],
      "links": [
        {
          "rel": "self",
          "href": "/users",
          "method": "POST",
          "description": `Insert a user: ${user.nickname} in data base`
        }
      ]
    });
  }
});

router.put('/:nickname', async (req, res) => {
  let user = await isUser(req.body.nickname, User);
  if (!user)
  	res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario no existe" }] }); 
  else {
    user = await User.findByIdAndUpdate(user._id, req.body, { new: true });
    user.password = await user.encryptPass(user.password);
    await user.save();

    
    res.json({
      "response": [
        {
          "request": req.body,
          "user": req.params.nickname,
          "userInformation": user
        }
      ],
      "links": [
        {
          "rel": "self",
          "href": `/users/${req.body.nickname}`,
          "method": "PUT",
          "description": `Modify user ${req.body.nickname}`
        },
        {
          "rel": "get_user", 
          "href": `/users/${req.body.id}`,
          "method": "GET",
          "description": `View user ${req.body.id}`
        },
        {
          "rel": "delete_user",
          "href": `/users/${req.body.id}`,
          "method": "DELETE",
          "description": `Delete user ${req.body.id}`
        }
      ]
    });
  }
});

router.delete('/', async (req, res) => {
  await User.remove({});
  res.json({
    "response": [
      {
        "request": req.body,
        "deletedUsers": req.body
      }
    ],
    "links": [
      {
        "rel": "delete_users",
        "href": "/users",
        "method": "DELETE",
        "description": "Remove all users from data base"
      }
    ]
  });
});

// router.delete('/:id', async (req, res) => {
//   mongoId = await getMongoIdById(req.params.id, User);
//   await User.findByIdAndRemove(mongoId);
//   res.json({
//     "response": [
//       {
//         "request": req.body,
//         "status": `Deleted user ${req.params.id}`
//       }
//     ],
//     "links": [
//       {
//         "rel": "self",
//         "href": `/ users / ${req.params.id}`,
//         "method": "DELETE",
//         "description": `Delete user ${req.params.id}`
//       },
//       {
//         "rel": "get_users",
//         "href": `/ users / `,
//         "method": "GET",
//         "description": `View all users`
//       },
//       {
//         "rel": "delete_all_users",
//         "href": `/ users / `,
//         "method": "DELETE",
//         "description": `Delete all users`
//       }
//     ]
//   });
// });

router.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;