from flask import Flask, jsonify, request
from flask_cors import CORS

import sqlite3

app = Flask(__name__)
CORS(app)  # Разрешение CORS для всех маршрутов

# Функция для получения всех апартаментов из базы данных
def get_apartments_from_db():
    conn = sqlite3.connect('apartments.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM apartments')
    apartments = cursor.fetchall()

    conn.close()
    return apartments

def get_apartment_by_id_from_db(id):
    conn = sqlite3.connect('apartments.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM apartments where id=%s'%id)
    apartments = cursor.fetchone()

    conn.close()
    return apartments

@app.route('/apartments', methods=['GET'])
def get_apartments():
    apartments = get_apartments_from_db()

    # Преобразуем данные об апартаментах в список словарей для JSON
    apartments_list = []
    for apartment in apartments:
        apartment_dict = {
            'id': apartment[0],
            'location': apartment[1],
            'distance': apartment[2],
            'dates': apartment[3],
            'price': apartment[4],
            'image_url': apartment[5],
            'rating': apartment[6]
        }
        apartments_list.append(apartment_dict)

    return jsonify(apartments_list)

@app.route('/apartments', methods=['POST'])
def add_apartment():
    data = request.json  # Получаем данные из запроса

    conn = sqlite3.connect('apartments.db')
    cursor = conn.cursor()

    # Вставляем данные нового апартамента в базу данных
    cursor.execute('''
        INSERT INTO apartments (location, distance, dates, price, image_url, rating)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (data['location'], data['distance'], data['dates'], data['price'], data['image_url'], data['rating']))

    conn.commit()
    conn.close()

    return jsonify({'message': 'Apartment added successfully'})

@app.route('/apartments/<int:apartment_id>', methods=['GET'])
def get_apartment_by_id(apartment_id):
    apartment = get_apartment_by_id_from_db(apartment_id)

    if apartment:
        apartment_dict = {
            'id': apartment[0],
            'location': apartment[1],
            'distance': apartment[2],
            'dates': apartment[3],
            'price': apartment[4],
            'image_url': apartment[5],
            'rating': apartment[6]
        }
        return jsonify(apartment_dict)
    else:
        return jsonify({'error': 'Apartment not found'}), 404


if __name__ == '__main__':
    app.run(debug=True)
