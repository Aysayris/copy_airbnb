import sqlite3

# Создаем подключение к базе данных
conn = sqlite3.connect('apartments.db')
cursor = conn.cursor()

# Добавляем данные об апартаментах в таблицу
apartments_data = [
    ('Mikkeli (Финляндия)', 'Расстояние: 257 километров', '16-21 окт.', '11 999₽ ночь', './assets/appartments/1.png', 5.0),
    ('Helsinki (Финляндия)', 'Расстояние: 100 километров', '10-15 сент.', '14 500₽ ночь', './assets/appartments/2.png', 4.8),
    ('Stockholm (Швеция)', 'Расстояние: 300 километров', '5-10 дек.', '9 999₽ ночь', './assets/appartments/3.png', 4.9),
    ('Oslo (Норвегия)', 'Расстояние: 400 километров', '20-25 нояб.', '12 000₽ ночь', './assets/appartments/4.png', 4.7),
    ('Copenhagen (Дания)', 'Расстояние: 150 километров', '12-18 июн.', '10 500₽ ночь', './assets/appartments/5.png', 4.6),
    ('Tallinn (Эстония)', 'Расстояние: 50 километров', '8-13 авг.', '8 999₽ ночь', './assets/appartments/6.png', 4.5),
    ('Riga (Латвия)', 'Расстояние: 200 километров', '3-9 окт.', '9 500₽ ночь', './assets/appartments/7.png', 4.8),
    ('Vilnius (Литва)', 'Расстояние: 180 километров', '15-20 мар.', '10 200₽ ночь', './assets/appartments/8.png', 4.9),
    ('Warsaw (Польша)', 'Расстояние: 500 километров', '1-7 янв.', '11 200₽ ночь', './assets/appartments/9.png', 4.6),
    ('Berlin (Германия)', 'Расстояние: 700 километров', '28 фев.-5 мар.', '13 500₽ ночь', './assets/appartments/10.png', 5.0)
]

# Вставляем данные в таблицу
cursor.executemany('''
    INSERT INTO apartments (location, distance, dates, price, image_url, rating)
    VALUES (?, ?, ?, ?, ?, ?)
''', apartments_data)

# Сохраняем изменения
conn.commit()

# Закрываем соединение с базой данных
conn.close()
