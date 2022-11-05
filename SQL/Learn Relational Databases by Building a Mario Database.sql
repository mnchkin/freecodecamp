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