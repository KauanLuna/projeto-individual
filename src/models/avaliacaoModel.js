var database = require("../database/config");
var mysql = require("mysql2");

function listar() {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAvaliacao,
            a.descricao,
            a.nota,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email
        FROM avaliacao a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = mysql.format(`
        SELECT 
            a.id AS idAvaliacao,
            a.descricao,
            a.nota,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email
        FROM avaliacao a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE u.id = ?;
    `, [idUsuario]);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(descricao, nota, idUsuario) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", descricao, nota, idUsuario);
    var instrucaoSql = mysql.format(
        "INSERT INTO avaliacao (descricao, nota, fk_usuario) VALUES (?, ?, ?);",
        [descricao, nota, idUsuario]
    );
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, novaNota, idAvaliacao) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, novaNota, idAvaliacao);
    var instrucaoSql = mysql.format(
        "UPDATE avaliacao SET descricao = ?, nota = ? WHERE id = ?;",
        [novaDescricao, novaNota, idAvaliacao]
    );
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAvaliacao) {
    console.log("ACESSEI O AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAvaliacao);
    var instrucaoSql = mysql.format(
        "DELETE FROM avaliacao WHERE id = ?;",
        [idAvaliacao]
    );
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar,
    editar,
    deletar
};
