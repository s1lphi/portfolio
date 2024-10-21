<?php
// Підключення до бази даних
$servername = "localhost:3306"; // Назва сервера бази даних
$username = "morgueof_website"; // Ім'я користувача бази даних
$password = "26062002s@"; // Пароль користувача бази даних
$dbname = "morgueof_website"; // Назва бази даних

$conn = new mysqli($servername, $username, $password, $dbname);

$conn->set_charset("utf8");

/* // Перевірка підключення до бази даних
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
} */
?>