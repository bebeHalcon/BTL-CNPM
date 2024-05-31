const path = require("path");
const authorization_model = require('../models/authorization');

module.exports = {
  student: [authorization_model.loadCurMember, authorization_model.authorizeStudent, function (req, res) {
    res.status(200).json({});
  }],
  admin: [authorization_model.loadCurMember, authorization_model.authorizeAdmin, function (req, res) {
    res.status(200).json({});
  }],
}