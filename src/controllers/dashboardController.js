var dashboardModel = require("../models/dashboardModel");

function obterDadosDashboard(req, res) {
    console.log("Acessando o dashboardController");

    dashboardModel.obterDadosDashboard()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao obter dados do dashboard:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterDadosDashboard
};