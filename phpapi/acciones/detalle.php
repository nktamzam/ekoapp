<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// includes
include_once '../config/db.php';
include_once '../class/accion.php';
 
// get database connection
$database = new Database($dbpass);
$db = $database->getConnection();
 
// prepare accion object
$accion = new Accion($db);
 
// set ID property of record to read
$accion->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of accion to be edited
$accion->readOne();
 
if($accion->titulo!=null){
    // create array
    $accion_arr = array(
        "id" =>  $accion->id,
        "titulo" => $accion->titulo,
        "texto" => $accion->texto,
        "energia" => $accion->energia,
        "residuos" => $accion->residuos,
        "dificultad" => $accion->dificultad,
        "aprobado" => $accion->aprobado
    );
 
    // set response code - 200 OK
    http_response_code(200);
 
    // make it json format
    echo json_encode($accion_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user accion does not exist
    echo json_encode(array("Mensaje" => "La acción no existe."));
}

    $database->closeConnection();

?>