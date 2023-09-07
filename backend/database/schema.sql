-- schema.sql
-- This SQL file outlines the structure of the Cards table.

CREATE TABLE IF NOT EXISTS Cards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    rarity VARCHAR(50) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);
