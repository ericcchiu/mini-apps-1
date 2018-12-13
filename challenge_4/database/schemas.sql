DROP DATABASE IF EXISTS connect5; 

CREATE DATABASE connect5; 

USE connect5;

DROP TABLE IF EXISTS scores;

CREATE TABLE scores (
  id int auto_increment not null, 
  score int, 
  winner varchar(255), 
  challenger varchar(255), 
  PRIMARY KEY(id)
);

INSERT INTO scores (score, winner, challenger) VALUES (2, 'Red', 'Black'); 
INSERT INTO scores (score, winner, challenger) VALUES (5, 'Red', 'Black'); 
INSERT INTO scores (score, winner, challenger) VALUES (10, 'Black', 'Red'); 
