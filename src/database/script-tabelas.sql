CREATE DATABASE amor;

USE amor;

CREATE TABLE usuario(
	id INT PRIMARY KEY AUTO_INCREMENT, 
    nome VARCHAR(30) NOT NULL, 
    email VARCHAR(45) NOT NULL, 
    senha VARCHAR(45) NOT NULL, 
    data_nascimento DATE NOT NULL, 
    fk_parceiro INT NOT NULL,
    CONSTRAINT fkParceiro FOREIGN KEY (fk_parceiro) 
		REFERENCES usuario(id)
    );

CREATE TABLE plano_futuro (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL, 
    descricao VARCHAR(300) NOT NULL, 
    data_planejada DATE NOT NULL, 
    fk_casal_plano INT NOT NULL,
    CONSTRAINT fkCasalPlano FOREIGN KEY (fk_casal_plano)
		REFERENCES usuario(id)
);
    
CREATE TABLE momento (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45) NOT NULL, 
    data_momento DATE NOT NULL,
    descricao VARCHAR(300) NOT NULL, 
	tipo_momento1 VARCHAR(45) NOT NULL, 
    tipo_momento2 VARCHAR(45), 
    fk_casal INT NOT NULL,
    CONSTRAINT fkCasal FOREIGN KEY (fk_casal)
		REFERENCES usuario(id)
);

CREATE TABLE local_visitado(
	id INT AUTO_INCREMENT, 
    nome_local VARCHAR(30) NOT NULL, 
    tipo VARCHAR(25) NOT NULL, 
    cidade VARCHAR(30) NOT NULL, 
    data_visita DATE NOT NULL, 
    nota INT NOT NULL, 
    comentario VARCHAR(100) NOT NULL,
    fk_momento INT NOT NULL,
    CONSTRAINT fkMomento FOREIGN KEY (fk_momento)
		REFERENCES momento(id),
	CONSTRAINT pkComposta PRIMARY KEY (id, fk_momento)
);

CREATE TABLE presente (
	id INT, 
	fk_momento_presente INT, 
	item VARCHAR(30) NOT NULL,
    presenteado VARCHAR(45) NOT NULL, 
    nota INT NOT NULL, 
    comentario VARCHAR(200) NOT NULL,
    CONSTRAINT fkMomentoPresente FOREIGN KEY (fk_momento_presente)
		REFERENCES momento(id),
	CONSTRAINT pkComposta PRIMARY KEY (id, fk_momento_presente)
    );