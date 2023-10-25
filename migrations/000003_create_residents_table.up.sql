CREATE TABLE residents (
  id             SERIAL      PRIMARY KEY,
  first_name     VARCHAR(65) NOT NULL,
  last_name      VARCHAR(65) NOT NULL,
  city_id        INTEGER     NOT NULL,
  
  CONSTRAINT FK_45d515503b0253f6443a4a97cf8 FOREIGN KEY (city_id)
      REFERENCES cities(id)
      ON DELETE NO ACTION ON UPDATE NO ACTION
);