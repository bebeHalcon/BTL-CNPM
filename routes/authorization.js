const express = require('express');
const authorization_router = express.Router();
const authorization_controller = require('../controllers/authorization');

authorization_router.post("/student", authorization_controller.student);
authorization_router.post("/admin", authorization_controller.admin);

module.exports = authorization_router;