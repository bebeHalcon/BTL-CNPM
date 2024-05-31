var connect_DB = require('./connect_db')
var mysql = require("mysql")

function getPrintListSPSO(res) {
    connect_DB.query("SELECT * FROM members", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ printHistory: JSON.stringify(result) });
    });
}

function getBuyListSPSO(res) {
    connect_DB.query("SELECT * FROM buyings", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ buyHistory: JSON.stringify(result) });
    });
}

async function getPrintListStudent(req, res, next) {
    connect_DB.query("SELECT * FROM printings WHERE student_id = " + req.cur_member.student_id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ printHistory: JSON.stringify(result) });
    });
    next();
}

async function getBuyListStudent(req, res, next) {
    connect_DB.query("SELECT * FROM buyings WHERE student_id = " + req.cur_member.student_id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ buyHistory: JSON.stringify(result) });
    });
    next();
}

module.exports = { getPrintListSPSO, getBuyListSPSO, getPrintListStudent, getBuyListStudent};
