var express = require("express");
var router = express.Router();

var momentoController = require("../controllers/momentoController");

router.post("/cadastrar", function (req, res) {
  momentoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  momentoController.listar(req, res);
})

module.exports = router;