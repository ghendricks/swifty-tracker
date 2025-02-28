CREATE DATABASE college_football;

USE college_football;

-- Table to store metadata about college football teams
CREATE TABLE teams
(
    id               INT AUTO_INCREMENT PRIMARY KEY,
    team_name        VARCHAR(255) NOT NULL,
    mascot           VARCHAR(255),
    established_year INT,
    conference       VARCHAR(255)
);

-- Table to store images related to the teams
CREATE TABLE team_images
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    team_id    INT,
    image_type ENUM('logo', 'player', 'stadium', 'other'),
    image_name VARCHAR(255) NOT NULL,
    mime_type  VARCHAR(100) NOT NULL,
    image_data LONGBLOB     NOT NULL,
    FOREIGN KEY (team_id) REFERENCES teams (id)
);
˜