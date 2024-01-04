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
    $object= json_decode($input_data);
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $checkUserQuery = "SELECT * FROM user WHERE username = :username";
    $checkStmt = $conn->prepare($checkUserQuery);
    $checkStmt->bindParam(':username', $object->usernameRe);
    $checkStmt->execute();
    if($checkStmt->rowCount() > 0)
    {
    }
    else
    {
        $randomCode = "id".generateRandomNumber();
        $sql = "INSERT INTO user (iduser, username, password,email ) VALUES (:iduser, :username, :password, :email)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':iduser', $randomCode);
            $stmt->bindParam(':username',$object->usernameRe);
            $stmt->bindParam(':password', password_hash($object->passwordRe,PASSWORD_DEFAULT));
            $stmt->bindParam(':email', $object->emailRe);
            $stmt->execute();
            echo "Dữ liệu đã được chèn thành công";
    }
    
    } catch (PDOException $e) {
        echo "Lỗi: " . $e->getMessage();
    }
}
function generateRandomNumber() {
    return str_pad(mt_rand(0, 99999999), 8, '0', STR_PAD_LEFT);
}

?>