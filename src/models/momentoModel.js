var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM momento ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(titulo, data, descricao, tipoMomento1, tipoMomento2, fkCasal) {
    var instrucao = `
        INSERT INTO momento (titulo, data, descricao, tipoMomento1, tipoMomento2, fkCasal) VALUES ('${titulo}', '${data}', '${descricao}', '${tipoMomento1}', '${tipoMomento2}', ${fkCasal});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};