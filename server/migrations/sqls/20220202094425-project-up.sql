CREATE TABLE project (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description_project` TEXT NOT NULL,
    `starting_date` DATETIME NOT NULL,
    `end_date` DATETIME NOT NULL,
    `tags` VARCHAR(255),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP()
);