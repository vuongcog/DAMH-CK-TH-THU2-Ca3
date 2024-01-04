<?php 
class Db{
    public  $conn;
    function __construct(){
       $this->conn = new PDO("mysql:host=localhost;dbname=book","root","");
        $this->conn->query('set names utf8');
    }
    protected function select($sql, $params = array()){
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    protected function insert($sql, $params = array()){
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);
        return $stmt->rowCount();
    }
    protected function deleteTable($sql, $params = array()){
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);
        return $stmt->rowCount();
    }
}