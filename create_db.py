import sqlite3

# Создаем подключение к базе данных (если ее нет, то она будет создана)
conn = sqlite3.connect('apartments.db')

# Создаем курсор для работы с базой данных
cursor = conn.cursor()

# Создаем таблицу для апартаментов
cursor.execute('''
    CREATE TABLE IF NOT EXISTS apartments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        location TEXT,
        distance TEXT,
        dates TEXT,
        price TEXT,
        image_url TEXT,
        rating REAL
    )
''')

# Сохраняем изменения
conn.commit()

# Закрываем соединение с базой данных
conn.close()
