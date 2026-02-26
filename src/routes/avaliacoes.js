var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.get("/listar", function (req, res) {
    avaliacaoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avaliacaoController.listarPorUsuario(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avaliacaoController.publicar(req, res);
});

router.put("/editar/:idAvaliacao", function (req, res) {
    avaliacaoController.editar(req, res);
});

router.delete("/deletar/:idAvaliacao", function (req, res) {
    avaliacaoController.deletar(req, res);
});

module.exports = router;
