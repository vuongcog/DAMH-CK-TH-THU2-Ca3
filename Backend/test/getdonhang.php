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
    $sql = "SELECT * FROM donhang JOIN phim ON donhang.maphim = phim.maphim JOIN user ON donhang.iduser = user.iduser JOIN suatchieu ON donhang.masc = suatchieu.masc JOIN phong on suatchieu.maphong = phong.maphong WHERE donhang.iduser= :iduser";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':iduser', $data->iduser);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result,JSON_UNESCAPED_UNICODE);   
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}




?>