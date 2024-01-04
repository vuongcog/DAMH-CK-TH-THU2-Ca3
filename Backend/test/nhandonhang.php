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
        echo $object->data->ghe;
    
    $conn = new PDO("mysql:host=localhost;dbname=phim","root","");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $randomCode = "dh".generateRandomNumber();
    $sql = "INSERT INTO donhang (madh, ngaylapdon, ghe, dongia, hinhthuc, tongien, masc, soluong, maphim,iduser) 
            VALUES (:madh, :ngaylapdon, :ghe, :dongia, :hinhthuc, :tongtien, :masc, :soluong, :maphim, :iduser)";
            
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':madh', $randomCode);
            $dateTime = "22/02/2002";       
            $datetime =  date("y-m-d h:i:s"); 
            $stmt->bindParam(':ngaylapdon',$datetime);
            $stmt->bindParam(':ghe', $object->data->ghe);
            $stmt->bindParam(':dongia', $object->data->dongia);
            $stmt->bindParam(':hinhthuc', $object->data->hinhthuc);
            $stmt->bindParam(':tongtien', $object->data->tongtien);
            $stmt->bindParam(':masc', $object->data->masc);
            $stmt->bindParam(':soluong', $object->data->soluong);
            $stmt->bindParam(':maphim', $object->data->maphim);
            $stmt->bindParam(':iduser', $object->data->iduser);
            $stmt->execute();
            echo "Dữ liệu đã được chèn thành công";
    } catch (PDOException $e) {
        echo "Lỗi: " . $e->getMessage();
    }


}


function generateRandomNumber() {
    return str_pad(mt_rand(0, 99999999), 8, '0', STR_PAD_LEFT);
}

?>