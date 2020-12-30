const express = require('express');
const User = require('../models/User');
const { isUser } = require('./../utilities/Utils');
const jwt = require('jsonwebtoken');
const config = require('../../config/config_jwt');
const verifyToken = require('./verifyToken');

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

router.get('/:nickname&:password', async (req, res) => {
  let pass;
  const user = await isUser(req.params.nickname, User);
  if (user)
    pass = await user.validatePass(req.params.password);
  if (!pass)
    res.status(404).send({ "response": [{ "code": 404, "error": "Usuario o contraseña incorrectos" }] });

  const token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 60 * 60 * 24
  });

  res.send({
    "response": [
      {
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
});

router.get('/:nickname', verifyToken, async (req, res) => {
  const user = await isUser(req.params.nickname, User);
  if (!user)
    res.status(404).send({ "response": [{ "code": 404, "error": "Usuario no existe" }] }); 

  res.json({
    "response": [
      {
        "user": user.nickname,
        "userInformation": user
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/users/${user.nickname}`,
        "method": "GET",
        "description": `List user ${user.nickname} information`
      },
      {
        "rel": "modify_users",
        "href": `/users/${user.nickname}`,
        "method": "PUT",
        "description": `Modify user ${user.nickname}`
      },
      {
        "rel": "delete_user",
        "href": `/users/${user.nickname}`,
        "method": "DELETE",
        "description": `Delete user ${user.nickname}`
      }
    ]
  });
});

router.post('/', async (req, res) => {
  let user = await isUser(req.body.nickname, User);
  if (user)
    res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario ya existe" }] });

  user = new User(req.body);
  user.password = await user.encryptPass(user.password);
  const token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 60 * 60 * 24
  })
  await user.save();
  
  res.json({
    "response": [
      {
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

});

router.put('/:nickname', verifyToken, async (req, res) => {
  const user = await isUser(req.params.nickname, User);
  if (!user)
  	res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario no existe" }] }); 

  user = await User.findByIdAndUpdate(user._id, req.body, { new: true });
  user.password = await user.encryptPass(user.password);
  await user.save();

  res.json({
    "response": [
      {
        "request": req.body,
        "user": user.nickname,
        "userInformation": user
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/users/${user.nickname}`,
        "method": "PUT",
        "description": `Modify user ${user.nickname}`
      },
      {
        "rel": "get_user", 
        "href": `/users/${user.nickname}`,
        "method": "GET",
        "description": `View user ${user.nickname}`
      },
      {
        "rel": "delete_user",
        "href": `/users/${user.nickname}`,
        "method": "DELETE",
        "description": `Delete user ${user.nickname}`
      }
    ]
  });
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
      },
      {
        "rel": "get_users",
        "href": `/users/`,
        "method": "GET",
        "description": `View all users`
      },
    ]
  });
});

router.delete('/:nickname', verifyToken, async (req, res) => {
  const user = await isUser(req.params.nickname, User);
  if (!user)
  	res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario no existe" }] });
  
  await User.findByIdAndRemove(user);
  res.json({
    "response": [
      {
        "request": req.body,
        "status": `Deleted user ${user.nickname}`
      }
    ],
    "links": [
      {
        "rel": "self",
        "href": `/users/${user.nickname}`,
        "method": "DELETE",
        "description": `Delete user ${user.nickname}`
      },
      {
        "rel": "get_users",
        "href": `/users/`,
        "method": "GET",
        "description": `View all users`
      },
      {
        "rel": "delete_all_users",
        "href": `/users/`,
        "method": "DELETE",
        "description": `Delete all users`
      }
    ]
  });
});

router.get('/logout/:nickname', verifyToken, async (req, res) => {
  const user = await isUser(req.params.nickname, User);
  if (!user)
    res.status(404).send({ "response": [{ "code": 404, "error": "Este usuario no existe" }] });

  res.status(200).send({ auth: false, token: null });
});

module.exports = router;