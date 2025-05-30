var database = require("../database/config")

function obterDadosDashboard() {
    console.log("ACESSEI O DASHBOARD MODEL");

    var instrucao = `
        SELECT * FROM dashboard;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    obterDadosDashboard
};