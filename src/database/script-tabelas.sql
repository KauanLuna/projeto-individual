CREATE DATABASE batman;

USE batman;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    email VARCHAR(45),
    senha VARCHAR(25)
);

CREATE TABLE jogo (
	id INT PRIMARY KEY,
    nome VARCHAR(30)
);

CREATE TABLE usuario_jogo (
	fk_usuario INT,
    fk_jogo INT,
    qtd_tentativas INT,
    pontos INT,
	data_jogada DATE,
    CONSTRAINT fkUsuario FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
	CONSTRAINT fkJogo FOREIGN KEY (fk_jogo)
		REFERENCES jogo(id),
	CONSTRAINT pkComposta PRIMARY KEY (fk_jogo, fk_usuario) 
);