var database = require("../database/config")

function listar(){
    var instrucao = `
        SELECT * FROM vilao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
}