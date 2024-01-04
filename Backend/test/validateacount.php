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
$getData = file_get_contents("php://input");
if(!empty($getData) ){
    $data = json_decode($getData);
    if( !empty($data->username && !empty($data->password))){
        try {
            $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT * FROM user where username  = :username");
            $stmt->bindValue(':username', $data->username, PDO::PARAM_STR); // Use bindValue instead of bindParam
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
        } catch(PDOException $e) {
            echo "Error: " . $e->getMessage();
        }   
            if(!empty($result && password_verify($data->password,$result["password"]))  )
        {
            $stmt = $conn->prepare("UPDATE user SET state = 1 WHERE username  = :username");
            $stmt->bindValue(':username', $data->username, PDO::PARAM_STR); // Use bindValue instead of bindParam
            $stmt->execute();
            $token = JWT::encode([
                'iss' => 'your_issuer',    // Người tạo token (issuer)
                'aud' => 'your_audience',  // Người nhận token (audience)
                'data' => $result,
            ], $secretKey, 'HS256');
            echo json_encode(['token' => $token]);
        }
        }
    
}

?>