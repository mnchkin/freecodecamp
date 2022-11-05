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