<?php
include 'pass.php';

class Database{
    
    private $password;
    public function __construct($dbpass) {
      $this->password=$dbpass;
    } 
    
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "ekoappdb";
    private $username = "ekoappusr";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Error de conexión: " . $exception->getMessage();
        }
 
        return $this->conn;
    }

    public function closeConnection(){
        $this->conn = null;
    }
}

?>