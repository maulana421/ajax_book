<?php
session_start();
$host = 'ec2-34-200-35-222.compute-1.amazonaws.com';
$port = '5432';
$user = 'dwjapxvbifwpgf'; 
$password = '4989164f450089a75512490f53a473b38d004c86e2abc2712a42f29b46fec6c3';
$db   = 'deiekbofkshsn0';

$connection = pg_connect("host=$host port =$port dbname=$db user=$user password=$password");
// if($connection){
// echo 'Koneksi Berhasil';
// }
// else{
// echo 'Koneksi Gagal';
// }
?>