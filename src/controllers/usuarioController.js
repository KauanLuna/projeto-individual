var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Preencha o campo nome");
    } else if (senha == undefined) {
        res.status(400).send("Preencha o campo senha!");
    } else {

        usuarioModel.autenticar(nome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Nome ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo Nome e senha!");
                    }
                }
            ).catch(
                function (erro) { 
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Preencha o campo nome!");
    } else if (senha == undefined) {
        res.status(400).send("Preencha o campo senha!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}