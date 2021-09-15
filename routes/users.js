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

module.exports = router
