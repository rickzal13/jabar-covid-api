var express = require("express");
var router = express.Router();
var response = require("../model/response");

/* GET home page. */
router.get("/", function(req, res) {
	response.ok("Jabar Covid19 API for more details contact erickrizal13@gmail.com",res);
});

module.exports = router;