var database = require("../database/config")

function listar(){
    var instrucao = `
        SELECT * FROM vilao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function favoritar(fk_vilao, fk_usuario) {
    var instrucao = `
        INSERT INTO favoritos (fk_vilao, fk_usuario) VALUES
        (${fk_vilao}, ${fk_usuario});
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    favoritar
}