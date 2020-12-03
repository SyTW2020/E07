const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { getMongoIdById, setId } = require('./../utilities/Utils');

router.get('/', async(req, res) => { 
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

router.get('/:id', async(req, res) => { 
    mongoId = await getMongoIdById(req.params.id, User);
    console.log(mongoId)
    const user = await User.findById(mongoId);
    res.json({
        "response": [
            {
                "request": req.body,
                "user": user,
                "userId": user.id
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

router.post('/', async (req, res) => {
    const user = new User(req.body);
    user.id = await setId(User);
    await user.save(); 
    res.json({ 
        _id: user._id,
        id: user.id,
        datos: req.body,
        status: "Guardado usuario nuevo",
        "response": [
            {
                "request": req.body,
                "user": user,
                "userId": user.id
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
    await User.findByIdAndUpdate(mongoId, req.body, {new: true});
    res.json({
        "response": [
            {
                "request": req.body,
                "user": user,
                "userId": users.id,
                "userInformation": user.body
            }
        ],
        "links": [
            {
                "rel": "self",
                "href": `/users/${user.id}`,
                "method": "PUT",
                "description": `Modify user ${user.id}`
            },
            {
                "rel": "get_user",
                "href": `/users/${user.id}`,
                "method": "GET",
                "description": `View user ${user.id}`
            },
            {
                "rel": "delete_user",
                "href": `/users/${user.id}`,
                "method": "DELETE",
                "description": `Delete user ${user.id}`
            }
        ]
    });
});

router.delete('/', async (req, res) => {
    const users = await User.find();
    for (x of users)
        await User.findByIdAndRemove(x._id);
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
                "rel": "delete_users",
                "href": "/users",
                "method": "DELETE",
                "description": "Remove all users from data base"
            }
        ]
    });
})

router.delete('/:id', async(req, res) => {
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