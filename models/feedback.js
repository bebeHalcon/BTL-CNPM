var connect_DB = require('./connect_db')
var mysql = require("mysql")

function getFeedbackSPSO(res) {
    connect_DB.query("SELECT * FROM feedbacks", function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ feedback: JSON.stringify(result) });
    });
}

async function getFeedbackStudent(req, res, next) {
    connect_DB.query("SELECT * FROM feedbacks WHERE student_id = " + req.cur_member.student_id, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        res.json({ feedback: JSON.stringify(result) });
    });
    next();
}

function giveFeedbackStudent(res, obj){
    const currentDate = new Date().toISOString().split('T')[0];
    connect_DB.query(`UPDATE feedbacks SET student_name = "${obj.name}", comment = "${obj.comment}", scale = "${obj.experienceScale}",
                        feedback_date = "${currentDate}", student_id = "${obj.mssv}"`, function (err, result, fields) {
        if (err) res.json({ code: 500 });
        else res.json({ code: 300 });
    });
}


module.exports = { getFeedbackSPSO, getFeedbackStudent, giveFeedbackStudent};