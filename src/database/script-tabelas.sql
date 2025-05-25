CREATE DATABASE batman;

USE batman;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(25) NOT NULL
);

CREATE TABLE vilao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    apelido VARCHAR(45) NOT NULL,
	nome VARCHAR(100) NOT NULL,
    modus_operandi VARCHAR(100) NOT NULL,
    local_atuacao VARCHAR(30) NOT NULL,
    frase VARCHAR (45) NOT NULL
);

CREATE TABLE favoritos (
	fk_usuario INT,
    CONSTRAINT fkUsuario FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
	fk_vilao INT,
    CONSTRAINT fkVilao FOREIGN KEY (fk_vilao)
		REFERENCES vilao(id),
	data_favorito DATETIME DEFAULT CURRENT_TIMESTAMP
);