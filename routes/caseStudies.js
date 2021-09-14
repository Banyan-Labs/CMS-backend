const express =  require('express')
const router = express.Router()
const CaseStudy = require('../models/caseStudy')

// GET ALL CASE STUDIES
router.get('/', async (req, res) => {
    try {
        const allCaseStudies = await CaseStudy.find()
        res.json(allCaseStudies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// GET ONE CASE STUDY

// CREATE A CASE STUDY

// UPDATE A CASE STUDY

// DELETE A CASE STUDY

// MIDDLEWARE TO FIND ONE CASE STUDY BY ID
async function getCaseStudy(req, res, next) {
    let caseStudy
    try {
        caseStudy = await CaseStudy.findById(req.params.id)
        if (caseStudy == null) {
            return res.status(404).json({ message: 'Cannot find case study'})
    }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    res.caseStudy = caseStudy
    next()
};

module.exports = router
