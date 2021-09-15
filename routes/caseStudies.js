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
router.patch('/:id', getCaseStudy, async (req, res) => {
    if(req.body.name != null) {
        res.caseStudy.name = req.body.name
    }
    if(req.body.image != null) {
        res.caseStudy.image = req.body.image
    }
    if(req.body.description != null) {
        res.caseStudy.description = req.body.description
    }
    if(req.body.findings != null) {
        res.caseStudy.findings = req.body.findings
    }
    if(req.body.discussion != null) {
        res.caseStudy.discussion = req.body.discussion
    }
    if(req.body.conclusion != null) {
        res.caseStudy.conclusion = req.body.conclusion
    }
    if(req.body.recommendations != null) {
        res.caseStudy.recommendations = req.body.recommendations
    }
    if(req.body.implementation != null) {
        res.caseStudy.implementation = req.body.implementation
    }
    if(req.body.references != null) {
        res.caseStudy.references = req.body.references
    }
    if(req.body.appendices != null) {
        res.caseStudy.appendices = req.body.appendices
    }
    try {
        const updatedCaseStudy = await res.caseStudy.save()
        res.json(updatedCaseStudy)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
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
