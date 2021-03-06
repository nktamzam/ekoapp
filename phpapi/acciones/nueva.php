<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);


// headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// conexión db
include_once '../config/db.php';
 
// instanciar objeto accion
include_once '../class/accion.php';
 
$database = new Database($dbpass);
$db = $database->getConnection();
 
$accion = new Accion($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if( !empty($data->titulo) &&
    !empty($data->texto) &&
    !empty($data->energia) &&
    !empty($data->dificultad) &&
    !empty($data->residuos)
){
 
    // set accion property values
    $accion->titulo = $data->titulo;
    $accion->texto = $data->texto;
    $accion->energia = $data->energia;
    $accion->residuos = $data->residuos;
    $accion->dificultad = $data->dificultad;
    $accion->aprobado = $data->aprobado;
 
    // Crear la accion
    if($accion->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("Mensaje" => "Acción creada"));
    }
 
    // if unable to create the accion, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("Mensaje" => "Imposible crear accion."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("Mensaje" => "Datos incompletos error."));
}

$database->closeConnection();
?>