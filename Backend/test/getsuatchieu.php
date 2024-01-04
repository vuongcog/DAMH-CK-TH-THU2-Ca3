<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json,charset=utf-8');

// header('Content-Type: application/json');

$input_data = file_get_contents("php://input");
$decoded_data = json_decode($input_data);
echo $decoded_data->idFilm;
try {
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT * FROM suatchieu JOIN phim ON suatchieu.maphim = phim.maphim where  suatchieu.maphim = :maphim");
    $stmt->bindValue(':maphim', $decoded_data->idFilm, PDO::PARAM_STR); // Use bindValue instead of bindParam
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}


?>