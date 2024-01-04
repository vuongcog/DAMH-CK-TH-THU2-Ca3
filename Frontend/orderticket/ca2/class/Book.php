<?php 
class Book extends Db{
    function all(){
        return $this->select("select * from book");
    }
    function search($key){
        return $this->select("select * from book where namebook like ?", ["%$key%"]);
      }
    function delete($id){
        return $this->deleteTable("delete from book where idbook=?", [$id]);
    }
}