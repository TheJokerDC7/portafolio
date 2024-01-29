<?php
$servername = "localhost";
$databasename = "portafolio";
$user = "root";
$password = "";

// Establecer la conexión
$conn = mysqli_connect($servername, $user, $password, $databasename);

// Verificar la conexión
if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
