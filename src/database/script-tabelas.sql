CREATE DATABASE batman;

USE batman;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(25) NOT NULL
);

INSERT INTO usuario(nome, email, senha) VALUES
	('Kauan', 'k@.com', 'admin');

CREATE TABLE vilao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    apelido VARCHAR(45) NOT NULL,
	nome VARCHAR(100) NOT NULL,
    modus_operandi VARCHAR(100) NOT NULL,
    local_atuacao VARCHAR(60) NOT NULL,
    frase VARCHAR(45) NOT NULL,
    foto VARCHAR(20) NOT NULL
);

CREATE TABLE favoritos (
	fk_usuario INT,
    CONSTRAINT fkUsuario FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
	fk_vilao INT,
    CONSTRAINT fkVilao FOREIGN KEY (fk_vilao)
		REFERENCES vilao(id),
	CONSTRAINT pkComposta PRIMARY KEY (fk_usuario, fk_vilao),
	data_favorito DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO vilao(apelido, nome, modus_operandi, local_atuacao, frase, foto) VALUES
('Charada', 'Edward Nashton', 'Deixa enigmas e mensagens enigmáticas nas cenas do crime.', 'Prefeitura de Gotham, cenas de crime político.', 'Se você é a justiça, por favor, não minta.', 'charada.jpg'),
('Pinguim', 'Oswald Cobblepot', 'Envolvido com o submundo de Gotham, dono do Iceberg Lounge.', 'Iceberg Lounge', 'Você me parece nervoso, detetive...', 'pinguim.jpg'),
('Carmine Falcone', 'Carmine Falcone', 'Chefão da máfia que controla Gotham por trás dos panos.', 'Coberturas e edifícios governamentais.', 'Você acha que tem poder? Eu sou o poder.', 'falcone.jpg');

SELECT * FROM favoritos;

SELECT * FROM usuario; 

CREATE VIEW favoritosUsuarios AS
SELECT
	v.nome,
    v.apelido,
    v.modus_operandi,
    v.local_atuacao,
    v.frase,
    v.foto,
    f.fk_usuario
FROM 
    usuario u
JOIN 
	favoritos f
ON
	f.fk_usuario = u.id
JOIN
	vilao v
ON
	v.id = f.fk_vilao;
    
    
SELECT 
	* 
FROM 
	favoritosUsuarios
WHERE
	fk_usuario = 3
ORDER BY 
	Nome DESC;
    
CREATE VIEW dashboard AS
SELECT
    u.nome nome_usuario,
    f.fk_vilao,
    f.fk_usuario,
    v.foto,
    v.frase,
    v.apelido,
    v.local_atuacao,
    v.modus_operandi,
    v.nome nome_vilao
FROM
	usuario u
JOIN
	favoritos f
ON
	f.fk_usuario = u.id
JOIN
	vilao V
ON
	f.fk_vilao = v.id;

SELECT * FROM dashboard;

