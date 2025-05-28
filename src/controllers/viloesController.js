var viloesModel = require("../models/viloesModel")

function listar(req, res) {
    viloesModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function favoritar(req, res) {

    var fk_usuario = sessionStorage.ID_USUARIO;
    var fk_vilao = req.body.fk_vilao;
    console.log("ID do usuário: ", fk_usuario);

    if (fk_usuario != undefined){
        res.status(400).send("O usuário precisa estar logado para favoritar!");
    }
    if (fk_vilao == undefined) {
        res.status(400).send("O ID do vilão não foi definido!");
    }
    viloesModel.favoritar(fk_usuario, fk_vilao).then(function (resultado) {
        res.status(200).json("Personagem favoritado com sucesso! " + resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    favoritar
}