const express =  require('express')
const router = express.Router()
const CaseStudy = require('../models/caseStudy')

// GET ALL CASE STUDIES
router.get('/', async (req, res) => {
    try {
        const allCaseStudies = await CaseStudy.find()
        res.json(allCaseStudies)
        console.log("Stephanie")
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET ONE CASE STUDY

// CREATE A CASE STUDY

// UPDATE A CASE STUDY

// DELETE A CASE STUDY

// MIDDLEWARE TO FIND ONE CASE STUDY BY ID


module.exports = router