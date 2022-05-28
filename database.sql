CREATE TABLE users (

id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

nom VARCHAR(100),

prenom VARCHAR(100),

email VARCHAR(255) NOT NULL UNIQUE,

passwords VARCHAR (65) NOT NULL,

photo_url VARCHAR (255),

isAdmin TINYINT NOT NULL DEFAULT '0'

);

CREATE TABLE bab (

id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

fk_postId INTEGER ,

content VARCHAR(200),

image_url VARCHAR(200) ,

title VARCHAR (100),

postId INTEGER ,

UsersCom  INTEGER 

);
CREATE TABLE posts (

id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,

Users_id INTEGER NOT NULL,

post_date   timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ,

title VARCHAR(100) NOT NULL,

image_url TEXT,

message VARCHAR(200)
);
ALTER TABLE posts add FOREIGN KEY(Users_id) REFERENCES users (id);
ALTER TABLE bab add FOREIGN KEY(fk_postId) REFERENCES posts (id);

DROP TABLE users;
DROP TABLE posts;
SELECT * FROM POSTS;
