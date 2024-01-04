<?php
// Xác thực tên người dùng và mật khẩu, sau đó tạo token
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require 'vendor/autoload.php'; // Đảm bảo tệp autoload.php đã được bao gồm
use Firebase\JWT\JWT;
use Firebase\JWTK\Key;
$secretKey = "123123";
$input_data = file_get_contents("php://input");
if(!empty($input_data))
{
    try {
    $data= json_decode($input_data);
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("UPDATE user SET state = 0 WHERE iduser  = :iduser");
    $stmt->bindValue(':iduser', $data->user, PDO::PARAM_STR); // Use bindValue instead of bindParam
    $stmt->execute();
    }
    catch(PDOException $e){
        
    }
}



?>