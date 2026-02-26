var avaliacaoModel = require("../models/avaliacaoModel");

function listar(req, res) {
    avaliacaoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as avaliações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    avaliacaoModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar as avaliações: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var descricao = req.body.descricao;
    var nota = req.body.nota;
    var idUsuario = req.params.idUsuario;

    if (descricao == undefined) {
        res.status(400).send("A descrição está indefinida!");
    } else if (nota == undefined) {
        res.status(400).send("A nota está indefinida!");
    } else if (Number.isNaN(Number(nota))) {
        res.status(400).send("A nota precisa ser um número!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avaliacaoModel.publicar(descricao, Number(nota), idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novaDescricao = req.body.descricao;
    var novaNota = req.body.nota;
    var idAvaliacao = req.params.idAvaliacao;

    if (novaDescricao == undefined) {
        res.status(400).send("A descrição está indefinida!");
    } else if (novaNota == undefined) {
        res.status(400).send("A nota está indefinida!");
    } else if (Number.isNaN(Number(novaNota))) {
        res.status(400).send("A nota precisa ser um número!");
    } else if (idAvaliacao == undefined) {
        res.status(403).send("O id da avaliação está indefinido!");
    } else {
        avaliacaoModel.editar(novaDescricao, Number(novaNota), idAvaliacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    var idAvaliacao = req.params.idAvaliacao;

    avaliacaoModel.deletar(idAvaliacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar,
    editar,
    deletar
};
