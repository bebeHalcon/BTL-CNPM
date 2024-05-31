const express = require('express');
const history_router = express.Router();
const history_controller = require('../controllers/history');
const path = require("path");

// For SPSOs
history_router.post("/admin/printings", history_controller.getPrintListSPSO);
history_router.post("/admin/buyings", history_controller.getBuyListSPSO);

// For Students
history_router.post("/student/printings", history_controller.getPrintListStudent);
history_router.post("/student/buyings", history_controller.getBuyListStudent);


module.exports = history_router;