DROP DATABASE IF EXISTS `multicheckout`; 
CREATE DATABASE `multicheckout`; 

USE `multicheckout`;


DROP TABLE IF EXISTS `Account`;

CREATE TABLE `Account` (
  `id` int auto_increment not null,
  `username` varchar(255), 
  `email` varchar(255) UNIQUE,
  `pass` varchar(255),
  PRIMARY KEY(ID)
);

DROP TABLE IF EXISTS `Address`;

CREATE TABLE `Address`(
  `id` int auto_increment not null, 
  `line1` varchar(255),
  `line2` varchar(255), 
  `city` varchar(255), 
  `state_province` varchar(40), 
  `zip_code` varchar(50), 
  `phone_number` varchar(100),
  PRIMARY KEY(ID)
); 

INSERT INTO `Address`(line1, line2, city, state_province, zip_code, phone_number) VALUES ('443', 'Ave du President-Kennedy', 'Montreal', 'Quebec', 'H3A0A4', '5145677676');
INSERT INTO `Account` (username, email, pass) VALUES ('Eric', 'eric@gmail.com', '12345678sasfd');