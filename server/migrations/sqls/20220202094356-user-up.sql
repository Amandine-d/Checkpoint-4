CREATE TABLE user (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255),
    `email` VARCHAR(255),
    `password` VARCHAR(255) NOT NULL,
    `role` INT NOT NULL,
    `experience` TEXT
);