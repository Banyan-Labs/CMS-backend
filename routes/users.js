const express =  require('express')
const router = express.Router()
const User = require('../models/user')

// Get all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json(allUsers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one user
router.get('/:id', getUsers, (req, res) => {
    res.json(res.users)
});

// Post a user
router.post('/', async (req, res) => {
    const UsersPost = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })

    try {
        const newUser = await UsersPost.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


// Patch a user

// Delete a user

// Middleware
async function getUsers(req, res, next) {
    let users
    try {
        users = await User.findById(req.params.id)
        if (users == null) {
            return res.status(404).json({ message: 'Cannot find user'})
    }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.users = users
    next()
};


module.exports = router
