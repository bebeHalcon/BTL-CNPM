const path = require("path");
const feedback_model = require("../models/feedback")
const authorization_model = require('../models/authorization');

module.exports = {
    getFeedbackSPSO: function (req, res) {
        feedback_model.getFeedbackSPSO(res);
    },

    getFeedbackStudent: [authorization_model.loadCurMember, feedback_model.getFeedbackStudent, function (req, res) {
        res.status(200).json({});
    }],

    giveFeedbackStudent: function (req, res){
        let obj = {
            name: req.body.name,
            contactNumber: req.body.name,
            mssv: req.body.name,
            email: req.body.name,
            comment: req.body.name,
            experienceScale: req.body.name
        };
        feedback_model.giveFeedbackStudent(res, obj);
    }

}