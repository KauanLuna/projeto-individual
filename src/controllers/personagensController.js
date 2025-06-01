var personagensModel = require("../models/personagensModel")

function listar(req, res) {
    personagensModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function favoritar(req, res) {

    const fk_usuario = req.body.fk_usuario;
    const fk_personagem = req.body.fk_personagem;

    console.log("ID do usuário: ", fk_usuario);

    if (fk_usuario == undefined){
        res.status(400).send("O usuário precisa estar logado para favoritar!");
    }
    if (fk_personagem == undefined) {
        res.status(400).send("O ID do personagem não foi definido!");
    }
    personagensModel.favoritar(fk_personagem, fk_usuario).then(function (resultado) {
        res.status(200).json("Personagem favoritado com sucesso! " + resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function listarFavoritos(req, res) {
    const fk_usuario = req.params.fk_usuario;

    personagensModel.listarFavoritos(fk_usuario)
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

function desfavoritar (req, res) {
    const fk_personagem = req.body.fk_personagem;
    const fk_usuario = req.body.fk_usuario;

    personagensModel.desfavoritar(fk_personagem, fk_usuario)
        .then(function (resultado) {
            if (resultado.affectedRows > 0) {
                res.status(200).json("Personagem desfavoritado com sucesso!");
            } else {
                res.status(404).send("Personagem não encontrado nos favoritos.");
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