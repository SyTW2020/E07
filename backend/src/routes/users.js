const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getMongoIdById, getMongoIdByNicknameAndPassword, setId} = require('./../utilities/Utils');

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
                "href": `/users/${user.id + 1}`,                // Tal vez el id + 1 haya sido eliminado
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

router.get('/:nickname&:password', async (req, res) => {

    mongoNickname = await getMongoIdByNicknameAndPassword(req.params.nickname, req.params.password, User);
    if (!mongoNickname)
        res.status(400).send({ "response": [ { "code": 400, "error": "Usuario no encontrado" } ] } );
    else {
        const user = await User.findById(mongoNickname);
        res.send({
            "response": [
                {
                    "code": 200,
                    "request": req.body,
                    "user": user
                }
            ],
            "links": [
                {
                    "rel": "self",
                    "href": `/users/${user.nickname}`,
                    "method": "GET",
                    "description": `View user ${user.nickname} information`
                },
 /*               {
                    "rel": "next",
                    "href": `/users/${user.id + 1}`,                // Tal vez el id + 1 haya sido eliminado
                    "method": "GET",
                    "description": `View user ${user.id + 1} information`
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
    const user = new User(req.body);
    user.id = await setId(User);
    await user.save();
    res.json({
        _id: user._id,
        id: user.id,
        datos: req.body,
        status: "New user saved",
        "response": [
            {
                "request": req.body,
                "user": user
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
                "href": `/users/${req.body.id}`,
                "method": "PUT",
                "description": `Modify user ${req.body.id}`
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
                "href": `/users/${req.params.id}`,
                "method": "DELETE",
                "description": `Delete user ${req.params.id}`
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

module.exports = router;