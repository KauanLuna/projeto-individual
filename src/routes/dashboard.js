var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController');
// Rota para obter os dados do dashboard

router.get('/obterTotalFavoritos', function(req, res) {
    // Chama a função obterDadosDashboard do controller
    dashboardController.obterTotalFavoritos(req, res);
});

router.get('/obterPorcentagemTipos', function(req, res) {
    // Chama a função obterPorcentagemTipos do controller
    dashboardController.obterPorcentagemTipos(req, res);
});

router.get('/obterTotalFavoritosTotais', function(req, res) {
    // Chama a função obterDadosDashboard do controller
    dashboardController.obterTotalFavoritosTotais(req, res);
});

router.get('/obterNomeMaisFavoritado', function(req, res) {
    // Chama a função obterNomeMaisFavoritado do controller
    dashboardController.obterNomeMaisFavoritado(req, res);
});

module.exports = router;