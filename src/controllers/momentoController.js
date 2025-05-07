var momentoModel = require("../models/momentoModel");

function listar(req, res) {
    carroModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var data = req.body.dataServer;
    var descricao = req.body.descricaoServer;
    var tipoMomento1 = req.body.tipoMomento1Server;
    var tipoMomento2 = req.body.tipoMomento2Server;
    var fkCasal = req.body.fkCasalServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Preencha o campo título!");
    } else if (data == undefined) {
        res.status(400).send("Preencha o campo data!");
    } else if (descricao == undefined) {
        res.status(400).send("Preencha o campo descrição!");
    } else if (tipoMomento1 == undefined) {
        res.status(400).send("Preencha o campo tipo!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo momentoModel.js
        momentoModel.cadastrar(titulo, data, descricao, tipoMomento1, tipoMomento2, fkCasal).then(function (resposta) {
            res.status(200).send("Momento criado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
    }
}

module.exports = {
    listar,
    cadastrar
}