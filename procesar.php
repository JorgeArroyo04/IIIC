<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $edad = $_POST["edad"];
    $dni = $_POST["dni"];
    $genero = $_POST["genero"];

    $response = array(
        "nombre" => $nombre,
        "edad" => $edad,
        "dni" => $dni,
        "genero" => $genero
    );

    header("Content-Type: application/json");
    echo json_encode($response);
}
?>
