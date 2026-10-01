-- Anjappar San Diego (anjapparsd.com)
-- Import this file in cPanel phpMyAdmin after the MySQL database exists.

CREATE TABLE IF NOT EXISTS inquiries (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  inquiry_type VARCHAR(32) NOT NULL,
  subject VARCHAR(180) NOT NULL,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(180) NOT NULL,
  phone VARCHAR(40) DEFAULT NULL,
  details VARCHAR(255) DEFAULT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_inquiries_type (inquiry_type),
  KEY idx_inquiries_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
