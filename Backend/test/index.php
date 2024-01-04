<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$host = 'your_database_host';
$db = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

try {
    $conn = new PDO("mysql:host=localhost;dbname=book","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
    $stmt = $conn->prepare("SELECT * FROM book");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}