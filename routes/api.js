var express = require("express");
const dataController = require("../controller/dataController");

var router = express.Router();

router.get("/all", dataController.getAllData);

router.get("/sum", dataController.sumData);

router.get("/group", dataController.groupDatabyKecamatan);

module.exports = router;