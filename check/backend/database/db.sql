CREATE DATABASE checkwineries; 

use checkwineries ;

CREATE TABLE usuarios (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
