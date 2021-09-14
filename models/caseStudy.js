const mongoose = require('mongoose')

const caseStudySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    findings: {
        type: String,
        required: true
    },
    discussion: {
        type: String,
        required: true
    },
    conclusion: {
        type: String,
        required: true
    },
    recommendations: {
        type: String,
        required: true
    },
    implementation: {
        type: String,
        required: true
    },
    references: {
        type: String,
        required: true
    },
    appendices: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = mongoose.model('CaseStudy', caseStudySchema)
