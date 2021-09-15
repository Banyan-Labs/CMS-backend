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
