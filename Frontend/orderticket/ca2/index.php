<?php 
function loadClass($c){
    include "class/$c.php";
}
spl_autoload_register("loadClass");
$book = new Book();//class Book
// $data = $book->all();
// print_r($data);
$key = $_GET['key']??'';
$data = $book->search($key);
?>
<form action="index.php" method="get">
    <input type="text" name="key" value='<?php echo $key ?>'>
    <input type="submit" value="Tim kiem">
</form>
<?php 
foreach($data as $item)
{   
    ?>
<div><?php echo $item['namebook'] ?></div>
<?php
}