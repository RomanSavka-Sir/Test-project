CREATE TABLE IF NOT EXISTS cities (
  id            SERIAL        PRIMARY KEY,
  name          VARCHAR(200)  NOT NULL,
  description   TEXT          NOT NULL
);