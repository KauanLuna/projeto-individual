var express = require("express");
var router = express.Router();

var personagensController = require("../controllers/personagensController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando /viloes/listar
    personagensController.listar(req, res);
});

router.post("/favoritar", function (req, res) {
    // função a ser chamada quando /viloes/favoritar
    personagensController.favoritar(req, res);
});

router.get("/favoritos/:fk_usuario", function (req, res) {
    // Função a ser chamada quando /viloes/favoritos/:fk_usuario
    personagensController.listarFavoritos(req, res);
});

router.delete("/desfavoritar", function (req, res) {
    // função a ser chamada quando /viloes/desfavoritar
    personagensController.desfavoritar(req, res);
});


module.exports = router;