<?php

include("../php/connect.php");

// Запит до бази даних
$sql = "SELECT id, name, year, imgsrc, srclnk FROM singles";
$result = $conn->query($sql);

// Перетворення результатів запиту у формат JSON
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);

// Закриття підключення до бази даних
$conn->close();
?>