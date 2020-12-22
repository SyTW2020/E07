const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { getMongoIdById, getUser, isUser, setId } = require('./../utilities/Utils');
const jwt = require('jsonwebtoken');
const config = require('../../config/config_jwt');
const verifyToken = require('./verifyToken');

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
/*
router.get('/:id', async (req, res) => {
    console.log('DEBUG -- GET {:id}')
    mongoId = await getMongoIdById(req.params.id, User);
    const user = await User.findById(mongoId);
    res.json({
        "response": [
            {
                "request": req.body,
                "user": user
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/users/${user.id}`,
                "method": "GET",
                "description": `View user ${user.id} information`
            },
            {
                "rel": "next",
                "href": `/users/${user.id + 1}`, // Tal vez el id + 1 haya sido eliminado
                "method": "GET",
                "description": `View user ${user.id + 1} information`
            },
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
                "description": `Delete user ${user.id}`
            },
        ]
    });
});
*/

// ESTÁ BIEN  -->  NO TOCAR
router.get('/prueba/user', verifyToken, async (req, res) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user)
        return res.status(404).send('Usuario no encontrado');

    res.status(200).json(user);
})


// ESTÁ BIEN  -->  NO TOCAR
router.get('/:nickname&:password', async (req, res) => {
    // const pass = await user.encryptPass(req.params.password);
    let user = await getUser(req.params.nickname, req.params.password, User);
    // let correctPass;
    // const user = await isUser(req.params.nickname, User);
    // if (user)
    //     correctPass = await user.validatePass(req.params.password);
    // console.log(`-------${correctPass}`);
    // if (!correctPass)

    if (!user)
        res.status(400).send({ "response": [{ "code": 400, "error": "Usuario o contraseña incorrectos" }] });
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
                    "rel": "self",
                    "href": `/ users / ${user.nickname}`,
                    "method": "GET",
                    "description": `View user ${user.nickname} information`
                },
 /*               {
                    "rel": "next",
                    "href": `/ users / ${ user.id + 1 }`,                // Tal vez el id + 1 haya sido eliminado
                    "method": "GET",
                    "description": `View user ${ user.id + 1 } information`
                },
*/                {
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

router.post('/', async (req, res) => {
    let userexists = await isUser(req.body.nickname, User);
    if (userexists)
        res.status(400).send({ "response": [{ "code": 400, "error": "Este usuario ya existe" }] });
    else {
        const user = new User(req.body);
        user.id = await setId(User);
        // user.password = await user.encryptPass(user.password);

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

router.put('/:id', async (req, res) => {
    mongoId = await getMongoIdById(req.params.id, User);
    await User.findByIdAndUpdate(mongoId, req.body, { new: true });
    res.json({
        "response": [
            {
                "request": req.body,
                "user": req.body.user,
                "userInformation": req.body
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/ users / ${req.body.id}`,
                "method": "PUT",
                "description": `Modify user ${req.body.id}`
            },
            {
                "rel": "get_user",
                "href": `/ users / ${req.body.id}`,
                "method": "GET",
                "description": `View user ${req.body.id}`
            },
            {
                "rel": "delete_user",
                "href": `/ users / ${req.body.id}`,
                "method": "DELETE",
                "description": `Delete user ${req.body.id}`
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
            }
        ]
    });
});

router.delete('/:id', async (req, res) => {
    mongoId = await getMongoIdById(req.params.id, User);
    await User.findByIdAndRemove(mongoId);
    res.json({
        "response": [
            {
                "request": req.body,
                "status": `Deleted user ${req.params.id}`
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/ users / ${req.params.id}`,
                "method": "DELETE",
                "description": `Delete user ${req.params.id}`
            },
            {
                "rel": "get_users",
                "href": `/ users / `,
                "method": "GET",
                "description": `View all users`
            },
            {
                "rel": "delete_all_users",
                "href": `/ users / `,
                "method": "DELETE",
                "description": `Delete all users`
            }
        ]
    });
});

router.get('/logout', function (req, res) {
    res.status(200).send({ auth: false, token: null });
});

module.exports = router;