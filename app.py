import sqlite3
import os
import secrets
from datetime import datetime
from flask import Flask, render_template, request, url_for, flash, redirect, send_from_directory
from werkzeug.exceptions import abort
from werkzeug.utils import secure_filename

# Генерировать уникальное имя файла
def generate_unique_filename(filename):
    # Получить текущую временную метку
    current_time = datetime.now().strftime("%Y%m%d%H%M%S")
    # Генерировать случайную строку для уникальности
    random_part = secrets.token_hex(8)
    # Получить расширение файла
    file_extension = os.path.splitext(filename)[1]
    # Составить уникальное имя файла
    unique_filename = f"{current_time}_{random_part}{file_extension}"
    return unique_filename

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

def get_post(post_id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?',
                        (post_id,)).fetchone()
    conn.close()
    if post is None:
        abort(404)
    return post

app = Flask(__name__)
app.config['SECRET_KEY'] = '//flash//'
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    conn = get_db_connection()
    posts = conn.execute('SELECT * FROM posts').fetchall()
    conn.close()
    return render_template('index.html', posts=posts)

@app.route('/<int:post_id>')
def post(post_id):
    post = get_post(post_id)
    return render_template('post.html', post=post)

@app.route('/create', methods=('GET', 'POST'))
def create():
    photo_filename = None  # Инициализируем переменную для хранения имени файла фото
   
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        photo = request.files['photo']

        if not title:
            flash('Title is required!')
        else:
            conn = get_db_connection()

            if photo:
                # Сгенерировать уникальное имя файла для фото
                filename = generate_unique_filename(photo.filename)
                photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                photo_filename = filename
            else:
                photo_filename = None
            
            conn.execute('INSERT INTO posts (title, content, photo_filename) VALUES (?, ?, ?)',
                         (title, content, photo_filename))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))

    return render_template('create.html', photo_filename=photo_filename)

@app.route('/<int:id>/edit', methods=('GET', 'POST'))
def edit(id):
    post = get_post(id)
    photo_filename = post['photo_filename']  # Используем существующее имя файла фото

    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        photo = request.files['photo']

        if not title:
            flash('Title is required!')
        else:
            conn = get_db_connection()

            if photo:
                # Генерировать уникальное имя файла для фото
                filename = generate_unique_filename(photo.filename)
                photo.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                photo_filename = filename

            conn.execute('UPDATE posts SET title = ?, content = ?, photo_filename = ? WHERE id = ?',
                         (title, content, photo_filename, id))
            conn.commit()
            conn.close()
            return redirect(url_for('index'))

    return render_template('edit.html', post=post, photo_filename=photo_filename)

@app.route('/<int:id>/delete', methods=('POST',))
def delete(id):
    conn = get_db_connection()
    post = conn.execute('SELECT * FROM posts WHERE id = ?', (id,)).fetchone()
    if post is not None:
        # Получаем имя файла фото
        photo_filename = post['photo_filename']
        if photo_filename:
            photo_path = os.path.join(app.config['UPLOAD_FOLDER'], photo_filename)
            if os.path.exists(photo_path):
                os.remove(photo_path)

        # Удаляем запись о посте из базы данных
        conn.execute('DELETE FROM posts WHERE id = ?', (id,))
        conn.commit()
        conn.close()
        flash('"{}" was successfully deleted!'.format(post['title']))
    else:
        flash('Post not found!')

    return redirect(url_for('index'))


@app.route('/uploads/<filename>')
def uploaded_photo(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)