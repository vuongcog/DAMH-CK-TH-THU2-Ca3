<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json,charset=utf-8');

// header('Content-Type: application/json');
$input_data = file_get_contents("php://input");
$data = json_decode($input_data);
try {
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "DELETE FROM `donhang` WHERE madh = :madh";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':madh', $data->madh);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);   
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}




?>