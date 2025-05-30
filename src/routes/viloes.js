var express = require("express");
var router = express.Router();

var viloesController = require("../controllers/viloesController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando /viloes/listar
    viloesController.listar(req, res);
});

router.post("/favoritar", function (req, res) {
    // função a ser chamada quando /viloes/favoritar
    viloesController.favoritar(req, res);
});

router.get("/favoritos/:fk_usuario", function (req, res) {
    // Função a ser chamada quando /viloes/favoritos/:fk_usuario
    viloesController.listarFavoritos(req, res);
});


module.exports = router;