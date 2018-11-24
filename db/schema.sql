DROP DATABASE IF EXISTS burgerdb;

CREATE DATABASE burgerdb;
Use burgerdb;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured boolean DEFAULT false
);