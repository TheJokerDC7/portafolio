<?php
require("../conector/cn.php");

// Recibir datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Verificar si la conexión está abierta
if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Preparar la consulta SQL
$consulta = $conn->prepare("INSERT INTO datos (name, email, message) VALUES (?, ?, ?)");

// Verificar si la preparación fue exitosa
if ($consulta === false) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

$consulta->bind_param('sss', $name, $email, $message);

// Ejecutar la consulta
if ($consulta->execute()) {
    echo "<script>alert('Datos enviados correctamente');</script>";
    echo "<script>window.location = '../index.php';</script>"; // Redirigir a index.php

} else {
    echo "<script>alert('Error al enviar el formulario');</script>" . $consulta->error;
}

// Cerrar la conexión
$consulta->close();
mysqli_close($conn);
?>
