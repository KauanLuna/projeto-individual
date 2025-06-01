var dashboardModel = require("../models/dashboardModel");

function obterTotalFavoritos(req, res) {
    console.log("Acessando o dashboardController");

    dashboardModel.obterTotalFavoritos()
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

function obterPorcentagemTipos(req, res) {
    console.log("Acessando o dashboardController");

    dashboardModel.obterPorcentagemTipos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao obter porcentagem de tipos:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterTotalFavoritosTotais(req, res) {
    console.log("Acessando o dashboardController");

    dashboardModel.obterTotalFavoritosTotais()
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

function obterNomeMaisFavoritado(req, res) {
    console.log("Acessando o dashboardController");

    dashboardModel.obterNomeMaisFavoritado()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum dado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("Erro ao obter nome mais favoritado:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterTotalFavoritos,
    obterPorcentagemTipos,
    obterTotalFavoritosTotais,
    obterNomeMaisFavoritado
};