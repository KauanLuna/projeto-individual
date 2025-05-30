var viloesModel = require("../models/viloesModel")

function listar(req, res) {
    viloesModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function favoritar(req, res) {

    var fk_usuario = req.body.fk_usuario;
    var fk_vilao = req.body.fk_vilao;

    console.log("ID do usuário: ", fk_usuario);

    if (fk_usuario == undefined){
        res.status(400).send("O usuário precisa estar logado para favoritar!");
    }
    if (fk_vilao == undefined) {
        res.status(400).send("O ID do vilão não foi definido!");
    }
    viloesModel.favoritar(fk_vilao, fk_usuario).then(function (resultado) {
        res.status(200).json("Personagem favoritado com sucesso! " + resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarFavoritos(req, res) {
    var fk_usuario = req.params.fk_usuario;

    viloesModel.listarFavoritos(fk_usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum favorito encontrado!");
            }
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function desfavoritar () {
    var fk_vilao = req.body.fk_vilao;
    var fk_usuario = req.body.fk_usuario;

    viloesModel.desfavoritar(fk_vilao, fk_usuario)
        .then(function (resultado) {
            if (resultado.affectedRows > 0) {
                res.status(200).json("Vilão desfavoritado com sucesso!");
            } else {
                res.status(404).send("Vilão não encontrado nos favoritos.");
            }
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    listar,
    favoritar,
    listarFavoritos,
    desfavoritar
}