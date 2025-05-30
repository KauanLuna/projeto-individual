var express = require('express');
var router = express.Router();

var dashboardController = require('../controllers/dashboardController');
// Rota para obter os dados do dashboard

router.get('/obterDadosDashboard', function(req, res) {
    // Chama a função obterDadosDashboard do controller
    dashboardController.obterDadosDashboard(req, res);
});

module.exports = router;