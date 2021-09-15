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

// Patch a user

// Delete a user

module.exports = router
