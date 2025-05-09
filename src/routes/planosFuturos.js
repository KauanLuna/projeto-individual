var express = require("express");
var router = express.Router();

var planosFuturosController = require("../controllers/momentoController");

router.post("/cadastrar", function (req, res) {
  planosFuturosController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
  planosFuturosController.listar(req, res);
})

module.exports = router;