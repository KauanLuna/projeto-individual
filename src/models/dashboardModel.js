var database = require("../database/config")

function obterTotalFavoritos() {
    console.log("ACESSEI O DASHBOARD MODEL");

    var instrucao = `
        SELECT * FROM dashboard;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterTotalFavoritosTotais() {
    console.log("ACESSEI O DASHBOARD MODEL");

    var instrucao = `
        SELECT COUNT(*) as total_favoritos_totais FROM favoritos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterPorcentagemTipos() {
    console.log("ACESSEI O DASHBOARD MODEL");

    var instrucao = `
        SELECT * FROM porcentagemTipos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function obterNomeMaisFavoritado() {
    console.log("ACESSEI O DASHBOARD MODEL");

    var instrucao = `
        SELECT * FROM nomeMaisFavoritado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterTotalFavoritos,
    obterTotalFavoritosTotais,
    obterPorcentagemTipos,
    obterNomeMaisFavoritado
};