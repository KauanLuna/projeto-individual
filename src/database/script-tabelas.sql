CREATE DATABASE batman;

USE batman;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(25) NOT NULL
);

INSERT INTO usuario(nome, email, senha) VALUES
	('Kauan', 'k@.com', 'admin');
    
INSERT INTO usuario(nome, email, senha) VALUES
	('B', 'b@.com', '1'),
	('B', 'c@.com', '1'),
	('B', 'd@.com', '1'),
	('B', 'e@.com', '1'),
	('B', 'f@.com', '1'),
	('B', 'g@.com', '1'),
	('B', 'j@.com', '1');

CREATE TABLE personagem (
	id INT PRIMARY KEY AUTO_INCREMENT,
    apelido VARCHAR(45) NOT NULL,
	nome VARCHAR(100) NOT NULL,
    modus_operandi VARCHAR(100) NOT NULL,
    local_atuacao VARCHAR(60) NOT NULL,
    frase VARCHAR(45) NOT NULL,
    foto VARCHAR(20) NOT NULL,
    tipo VARCHAR(30) NOT NULL,
    CONSTRAINT chkTIPO CHECK (tipo in('Vilão', 'Heroi'))
);

CREATE TABLE favoritos (
	fk_usuario INT,
    CONSTRAINT fkUsuario FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id),
	fk_personagem INT,
    CONSTRAINT fkVilao FOREIGN KEY (fk_personagem)
		REFERENCES personagem(id),
	CONSTRAINT pkComposta PRIMARY KEY (fk_usuario, fk_personagem),
	data_favorito DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO personagem (apelido, nome, modus_operandi, local_atuacao, frase, foto, tipo) VALUES
('Batman', 'Bruce Wayne', 'Combate ao crime com inteligência e força bruta', 'Gotham City', 'Eu sou a vingança.', 'batman.jpg', 'Heroi'),
('Charada', 'Edward Nashton', 'Jogos mentais e assassinatos enigmáticos', 'Gotham City', 'Você é tão inteligente quanto pensa que é?', 'charada.jpg', 'Vilão'),
('Pinguim', 'Oswald Cobblepot', 'Manipulação e controle do submundo do crime', 'Iceberg Lounge, Gotham City', 'Você sabe quem eu sou?!', 'pinguim.jpg', 'Vilão'),
('Carmine Falcone', 'Carmine Falcone', 'Corrupção, extorsão e poder político', 'Gotham City', 'A cidade me pertence.', 'falcone.jpg', 'Vilão'),
('Mulher-Gato', 'Selina Kyle', 'Furtos precisos e justiça pessoal', 'Gotham City', 'Eu cuido de mim mesma.', 'mulhergato.jpg', 'Heroi'),
('Comissário Gordon', 'James Gordon', 'Investigação policial e parceria com Batman', 'Departamento de Polícia de Gotham', 'Confiamos um no outro.', 'gordon.jpg', 'Heroi');


INSERT INTO favoritos(fk_usuario, fk_personagem) VALUES
	(1, 2),
	(2, 3),
	(3, 2),
	(4, 2),
	(5, 2),
	(6, 2),
	(7, 2),
	(7, 1),
    (1, 1),
	(2, 4),
	(3, 1),
	(4, 6),
	(5, 6),
	(6, 5),
	(7, 5);
    
    

SELECT * FROM favoritos;

SELECT * FROM usuario; 
    
CREATE OR REPLACE VIEW favoritosUsuarios AS
SELECT
	p.nome,
    p.apelido,
    p.modus_operandi,
    p.local_atuacao,
    p.frase,
    p.foto,
    f.fk_usuario,
    f.fk_personagem
FROM
    usuario u
JOIN 
	favoritos f
ON
	f.fk_usuario = u.id
JOIN
	personagem p
ON
	p.id = f.fk_personagem;
    
SELECT 
	* 
FROM 
	favoritosUsuarios
WHERE
	fk_usuario = 1
ORDER BY 
	Nome DESC;
    
CREATE OR REPLACE VIEW dashboard AS
SELECT
    f.fk_personagem,
    p.nome,
    p.apelido,
    COUNT(f.fk_personagem) AS total_favoritos_personagens,
    count(*) as total_favoritos
FROM
    favoritos f
JOIN
    personagem p ON f.fk_personagem = p.id
GROUP BY
    f.fk_personagem
ORDER BY
	total_favoritos desc;


SELECT
	* 
FROM
	dashboard;

CREATE VIEW porcentagemTipos as
SELECT p.tipo, COUNT(*) AS quantidade 
FROM favoritos f
JOIN personagem p ON p.id = f.fk_personagem
GROUP BY tipo;


SELECT * FROM porcentagemTipos;

CREATE OR REPLACE VIEW nomeMaisFavoritado as
SELECT
	p.nome,
    p.apelido,
    count(f.fk_personagem) as qtdFavoritados
FROM
	favoritos f
JOIN
	personagem p 
ON 
	p.id = f.fk_personagem
GROUP BY
	p.apelido, p.nome
ORDER BY
	count(f.fk_personagem) desc limit 1;
    
SELECT * FROM nomeMaisFavoritado;

SELECT * FROM personagem ORDER BY apelido asc;


    
    


