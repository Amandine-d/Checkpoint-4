CREATE TABLE testimonial (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `quote` TEXT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP()
);