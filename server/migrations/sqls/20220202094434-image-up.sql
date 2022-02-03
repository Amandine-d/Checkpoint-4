CREATE TABLE image (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `srcBefore` VARCHAR(255) NOT NULL,
    `altBefore` VARCHAR(100) NOT NULL,
    `srcAfter` VARCHAR(255),
    `altAfter` VARCHAR(100),
    `description_img` TEXT,
    `is_poster` INT,
    `location_project` VARCHAR(255),
    `author` VARCHAR(255),
    `project_id` INT,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
    CONSTRAINT `fk_project_image` FOREIGN KEY (`project_id`) REFERENCES project(`id`) ON DELETE CASCADE
);