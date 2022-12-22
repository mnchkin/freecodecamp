--Task 1
echo hello PostgreSQL

--Task 2
psql --username=freecodecamp --dbname=postgres

--Task 3. Список
\l

--Task 4. Создание БД
CREATE DATABASE first_database;

--Task 5
\l

--Task 6
CREATE DATABASE second_database;

--Task 7
\l

--Task 8. Подключение БД
\c second_database

--Task 9. Показать таблицы
\d 

--Task 10. Создание таблицы
CREATE TABLE first_table();

--Task 11
\d

--Task 12
CREATE TABLE second_table();

--Task 13
\d

--Task 14. Больше информации о таблице
\d second_table

--Task 15. Добавление колонны в таблицу
ALTER TABLE second_table ADD COLUMN first_column INT;

--Task 16
\d second_table

--Task 17
ALTER TABLE second_table ADD COLUMN id INT;

--Task 18
\d second_table

--Task 19
ALTER TABLE second_table ADD COLUMN age INT;

--Task 20
\d second_table

--Task 21. Удаление колонны
ALTER TABLE second_table DROP COLUMN age;

--Task 22
\d second_table

--Task 23
ALTER TABLE second_table DROP COLUMN first_column;

--Task 24. Максимальная длина
ALTER TABLE second_table ADD COLUMN name VARCHAR(30);

--Task 25
\d second_table

--Task 26. Переименование колонны
ALTER TABLE second_table RENAME COLUMN name TO username;

--Task 27
\d second_table

--Task 28. Добавление данных в таблицу
INSERT INTO second_table(id, username) VALUES(1, 'Samus');

--Task 29. Просмотр данных со всеми колоннами
SELECT * FROM second_table;

--Task 30
INSERT INTO second_table(id, username) VALUES(2, 'Mario');

--Task 31
SELECT * FROM second_table;

--Task 32
INSERT INTO second_table(id, username) VALUES(3, 'Luigi');

--Task 33
SELECT * FROM second_table;

--Task 34. Удаление строки
DELETE FROM second_table WHERE username='Luigi';

--Task 35
SELECT * FROM second_table;

--Task 36
DELETE FROM second_table WHERE username='Mario';

--Task 37
DELETE FROM second_table WHERE username='Samus';

--Task 38
SELECT * FROM second_table;

--Task 39
\d second_table

--Task 40. Удаление колонны
ALTER TABLE second_table DROP COLUMN username;

--Task 41
ALTER TABLE second_table DROP COLUMN id;

--Task 42
\d second_table

--Task 43. Удаление таблицы
DROP TABLE second_table;

--Task 44
DROP TABLE first_table;

--Task 45
/l

--Task 46. Переименование БД
ALTER DATABASE first_database RENAME TO mario_database;

--Task 47
\l

--Task 48
\c mario_database

--Task 49
DROP DATABASE second_database;

--Task 50
\l

--Task 51
\d

--Task 52
CREATE TABLE characters();

--Task 53. SERIAL делает столбец INT с ограничением NOT NULL
ALTER TABLE characters ADD COLUMN character_id SERIAL;

--Task 54
\d characters

--Task 55
ALTER TABLE characters ADD COLUMN name VARCHAR(30) NOT NULL;

--Task 56
ALTER TABLE characters ADD COLUMN homeland VARCHAR(60);

--Task 57
ALTER TABLE characters ADD COLUMN favorite_color VARCHAR(30);

--Task 58
\d characters

--Task 59
INSERT INTO characters(name, homeland, favorite_color) VALUES('Mario', 'Mushroom Kingdom', 'Red');

--Task 60
SELECT * FROM characters;

--Task 61
INSERT INTO characters(name, homeland, favorite_color) VALUES('Luigi', 'Mushroom Kingdom', 'Green');

--Task 62
SELECT * FROM characters;

--Task 63
INSERT INTO characters(name, homeland, favorite_color) VALUES('Peach', 'Mushroom Kingdom', 'Pink');

--Task 64
INSERT INTO characters(name, homeland, favorite_color) VALUES('Toadstool', 'Mushroom Kingdom', 'Red'), ('Bowser', 'Mushroom Kingdom', 'Green');

--Task 65
INSERT INTO characters(name, homeland, favorite_color) VALUES('Daisy', 'Sarasaland', 'Yellow'), ('Yoshi', 'Dinosaur Land', 'Green');

--Task 66
SELECT * FROM characters;

--Task 67. Обновление таблицы
UPDATE characters SET favorite_color='Orange' WHERE name='Daisy';

--Task 68
SELECT * FROM characters;

--Task 69
UPDATE characters SET name='Toad' WHERE favorite_color='Red';

--Task 70
SELECT * FROM characters;

--Task 71
UPDATE characters SET name='Mario' WHERE character_id=1;

--Task 72
SELECT * FROM characters;

--Task 73
UPDATE characters SET favorite_color='Blue' WHERE character_id=4;

--Task 74
UPDATE characters SET favorite_color='Yellow' WHERE character_id=5;

--Task 75
UPDATE characters SET homeland='Koopa Kingdom' WHERE character_id=5;

--Task 76
SELECT * FROM characters;

--Task 77. Всё по порядку по колонне character_id
SELECT * FROM characters ORDER BY character_id;

--Task 78. Добавление первичного ключа
ALTER TABLE characters ADD PRIMARY KEY(name);

--Task 79. Удаление первичного ключа
ALTER TABLE characters DROP CONSTRAINT characters_pkey;

--Task 80
\d characters

--Task 81
ALTER TABLE characters ADD PRIMARY KEY(character_id);

--Task 82
\d characters

--Task 83
CREATE TABLE more_info();

--Task 84
\d

--Task 85
\d characters

--Task 86
ALTER TABLE more_info ADD COLUMN more_info_id SERIAL;

--Task 87
ALTER TABLE more_info ADD PRIMARY KEY(more_info_id);

--Task 88
\d

--Task 89
ALTER TABLE more_info ADD COLUMN birthday DATE;

--Task 90
ALTER TABLE more_info ADD COLUMN height INT;

--Task 91. NUMERIC(4, 1) - десятичная дробь. 4 цифры, 1 цифра после запятой
ALTER TABLE more_info ADD COLUMN weight NUMERIC(4, 1);

--Task 92
\d more_info

--Task 93. Создание внешнего ключа
ALTER TABLE more_info ADD COLUMN character_id INT REFERENCES characters(character_id);

--Task 94
\d more_info

--Task 95
ALTER TABLE more_info ADD UNIQUE(character_id);

--Task 96
ALTER TABLE more_info ALTER COLUMN character_id SET NOT NULL;

--Task 97
\d more_info

--Task 98
SELECT character_id FROM characters;

--Task 99
SELECT character_id, name FROM characters;

--Task 100
INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1981-07-09', 155, 64.5, 1);

--Task 101
SELECT * FROM more_info

--Task 102
SELECT character_id, name FROM characters;

--Task 103
INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1983-07-14', 175, 48.8, 2);

--Task 104
SELECT * FROM more_info;

--Task 105
SELECT character_id, name FROM characters;

--Task 106
INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1985-10-18', 173, 52.2, 3);

--Task 107
SELECT character_id, name FROM characters WHERE name='Toad';

--Task 108
INSERT INTO more_info(birthday, height, weight, character_id) VALUES('1950-01-10', 66, 35.6, 4);

--Task 109
SELECT * FROM more_info;

--Task 110
SELECT character_id, name FROM characters WHERE name='Bowser';