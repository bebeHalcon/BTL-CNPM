var express = require('express');
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var rateLimit = require("express-rate-limit");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');


const signinRoute = require('./routes/signin');
const authorizationRoute = require("./routes/authorization");
const historyRoute = require("./routes/history");
const feedbackRoute = require("./routes/feedback");
// const printRoute = require("./routes/print");


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const cspConfig = {
  directives: {
    scriptSrc: ["'self'", "ajax.googleapis.com", "cdn.jsdelivr.net", "www.google.com"],
    frameSrc: ["'self'", "www.google.com"],
  },
};



var app = express();
// app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.contentSecurityPolicy(cspConfig));
app.use(express.static('assets'));
app.use(limiter);
app.use(cors({ origin: "http://localhost:3000" }))
app.use(cookieParser());
app.use(session({
  secret: "Your secret key",
  resave: false,
  saveUninitialized: true,
}));

app.use("/api/signin", signinRoute);
app.use("/api/authorization", authorizationRoute);
app.use("/api/history", historyRoute);
app.use("/api/feedback", feedbackRoute);
// app.use("/api/print", printRoute);

app.listen(8080);