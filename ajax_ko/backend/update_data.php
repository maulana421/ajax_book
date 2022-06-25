<?php

require_once('../connection.php');

$getJSON = file_get_contents('php://input');
$data = json_decode($getJSON);
$id = $data->id;
$judul_buku = $data->judul_buku;
$penulis = $data->penulis;
$penerbit = $data->penerbit;

$query = "UPDATE buku set judul_buku='$judul_buku',penulis='$penulis',penerbit='$penerbit' where id=".$id;
$result = pg_query($query);
$row = pg_affected_rows($result);

$obj = new stdClass();
if($row > 0){
    $obj->status = "success";
}else{
    $obj->status = "Fail";
}
echo json_encode($obj);


?>