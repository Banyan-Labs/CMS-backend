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
router.get('/:id', getCaseStudy, (req, res) => {
    res.json(res.caseStudy)
});

// CREATE A CASE STUDY
router.post('/', async (req, res) => {
    const caseStudyPost = new CaseStudy({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        findings: req.body.findings,
        discussion: req.body.discussion,
        conclusion: req.body.conclusion,
        recommendations: req.body.recommendations,
        implementation: req.body.implementation,
        references: req.body.references,
        appendices: req.body.appendices
    })

    try {
        const newCaseStudy = await caseStudyPost.save()
        res.status(201).json(newCaseStudy)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATE A CASE STUDY

// DELETE A CASE STUDY
router.delete('/:id', getCaseStudy, async (req, res) => {
    try {
        await res.caseStudy.remove()
        res.json({ message: 'Deleted case study' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

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
