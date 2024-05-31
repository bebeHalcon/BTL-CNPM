var connect_DB = require('./connect_db');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

async function loadCurMember(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Người dùng chưa đăng nhập." });
  }
  
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.verify(token, "RANDOM-TOKEN");
    const cur_member = decodeToken;
    req.cur_member = cur_member;
    next();
  }
  catch (error) {
    res.status(401).json({ message: "Phiên đăng nhập đã hết hạn" });
  }
}

async function authorizeStudent(req, res, next) {
  if (!req.cur_member) {
    return res.status(400).json({ message: "Người dùng không xác định. Vui lòng kiểm tra" });
  }
  
  connect_DB.query("SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?", [
    req.cur_member.student_id,
    req.cur_member.email,
    req.cur_member.state,
    req.cur_member.permission
  ],
  function (err, result, field) {
    if (err) {
      return res.status(500).json({ message: "Hệ thống gặp vấn đề. Vui lòng thử lại sau" });
    }
    
    if (result.length == 0) {
      return res.status(400).json({ message: "Người dùng không tồn tại. Vui lòng kiểm tra" });
    }
    
    if (result[0].state != "Đang hoạt động") {
      return res.status(403).json({ message: "Người dùng đang bị khoá!" });
    }
    
    next();
  });
}

async function authorizeAdmin(req, res, next) {
  if (!req.cur_member) {
    return res.status(401).json({ message: "Người dùng không xác định. Vui lòng kiểm tra" });
  }
  
    connect_DB.query("SELECT * FROM members WHERE student_id = ? AND email = ? AND state = ? AND permission = ?", [
    req.cur_member.student_id,
    req.cur_member.email,
    req.cur_member.state,
    req.cur_member.permission
  ], 
  function (err, result, field) {
    if (err) {
      return res.status(500).json({ message: "Hệ thống gặp vấn đề. Vui lòng thử lại sau" });
    }
    
    if (result.length == 0) {
      return res.status(400).json({ message: "Người dùng không tồn tại. Vui lòng kiểm tra" });
    }
    
    if (result[0].state != "Đang hoạt động") {
      return res.status(403).json({ message: "Người dùng đang bị khoá!" });
    }
    
    if (result[0].permission != "Thành viên ban chủ nhiệm") {
      return res.status(403).json({ message: "Người dùng không có quyền truy cập trang hay tác vụ này!" });
    }
    
    next();
  });
}

module.exports = {
  loadCurMember,
  authorizeStudent,
  authorizeAdmin
}