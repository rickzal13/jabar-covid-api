require("dotenv").config();

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

app.listen(port);
console.log("RESTful API server started on: " + port);