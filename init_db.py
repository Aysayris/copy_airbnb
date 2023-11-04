import sqlite3
# Создаем соединение с базой данных и выполняем SQL-скрипт
connection = sqlite3.connect('database.db')
with open('schema.sql') as f:
    connection.executescript(f.read())

# Создаем курсор для выполнения SQL-запросов
cur = connection.cursor()

# Вставляем данные в таблицу "posts"
cur.execute("INSERT INTO posts (title, content, photo_filename) VALUES (?, ?, ?)",
            ('First Post', 'Content for the first post','photo for the first post')
            )

cur.execute("INSERT INTO posts (title, content, photo_filename) VALUES (?, ?, ?)",
            ('Second Post', 'Content for the second post','photo for the second post')
            )

# Фиксируем изменения в базе данных и закрываем соединение
connection.commit()
connection.close()