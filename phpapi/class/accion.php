<?php
class Accion{
 
    // database connection and table name
    private $conn;
    private $table_name = "acciones";
 
    // object properties
    public $id;
    public $titulo;
    public $texto;
    public $energia;
    public $residuos;
    public $dificultad;
    public $aprobado;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


// Leer acciones
function consulta(){
 
    // select all query
    $query = "SELECT * FROM acciones";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

// Crear acción
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                titulo=:titulo, texto=:texto, energia=:energia, residuos=:residuos, dificultad=:dificultad, aprobado=:aprobado ";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->titulo=htmlspecialchars(strip_tags($this->titulo));
    $this->texto=htmlspecialchars(strip_tags($this->texto));
    $this->energia=htmlspecialchars(strip_tags($this->energia));
    $this->residuos=htmlspecialchars(strip_tags($this->residuos));
    $this->dificultad=htmlspecialchars(strip_tags($this->dificultad));
    $this->aprobado=htmlspecialchars(strip_tags($this->aprobado));
 
    // bind values
    $stmt->bindParam(":titulo", $this->titulo);
    $stmt->bindParam(":texto", $this->texto);
    $stmt->bindParam(":energia", $this->energia);
    $stmt->bindParam(":residuos", $this->residuos);
    $stmt->bindParam(":dificultad", $this->dificultad);
    $stmt->bindParam(":aprobado", $this->aprobado);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

// Leer un acción
function readOne(){
 
    // query to read single record
    $query = "SELECT * FROM " . $this->table_name . " WHERE id = ?";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of accion to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->titulo = $row['titulo'];
    $this->texto = $row['texto'];
    $this->energia = $row['energia'];
    $this->residuos = $row['residuos'];
    $this->dificultad = $row['dificultad'];
    $this->aprobado = $row['aprobado'];
}

}

?>