const express = require('express');
const feedback_router = express.Router();
const feedback_controller = require('../controllers/feedback');
const path = require("path");

// For SPSOs
feedback_router.get("/admin", feedback_controller.getFeedbackSPSO);

// For Students
feedback_router.post("/student/get", feedback_controller.getFeedbackStudent);
feedback_router.post("/student/give", feedback_controller.giveFeedbackStudent);

module.exports = feedback_router;