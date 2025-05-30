var database = require("../database/config")

function listar() {
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

function listarFavoritos(fk_usuario) {
    var instrucao = `
        SELECT * FROM favoritosUsuarios WHERE fk_usuario = ${fk_usuario} ORDER BY Nome DESC;
    `;
    return database.executar(instrucao);
}

function desfavoritar(fk_vilao, fk_usuario) {
    var instrucao = `
        DELETE FROM favoritos WHERE fk_vilao = ${fk_vilao} AND fk_usuario = ${fk_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar,
    favoritar,
    listarFavoritos,
    desfavoritar
}