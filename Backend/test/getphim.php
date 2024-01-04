<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

try {
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM phim");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}