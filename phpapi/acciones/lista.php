<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// includes
include_once '../config/db';
include_once '../class/accion';
 
// instantiate database and accion object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$accion = new Accion($db);

 
// query products
$stmt = $accion->consulta();
$num = $stmt->rowCount();


// check if more than 0 record found
if($num>0){
 
    // acciones array
    $acciones_arr=array();
    
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $accion_item=array(
            "id" => $id,
            "titulo" => $titulo,
            "texto" => $texto,
            "energia" => $energia,
            "residuos" => $residuos,
            "dificultad" => $dificultad,
            "aprobado" => $aprobado
        );
 
        array_push($acciones_arr, $accion_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($acciones_arr);
}
 
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}

?>