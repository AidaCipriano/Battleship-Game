<?php
   
   $conexion = mysqli_connect("localhost", "root", "saraiEM1", "battleship");
   
   /*
    class Conexion{

    public static function conectar(){
        $host = "localhost";
        $db = "battleship";
        $user = "root";
        $pass = "";
        $conexion = mysqli_connect( $host, $user, $pass, $db);
        mysqli_set_charset($conexion, "utf8");
        mysqli_select_db($conexion, $db);

        return $conexion;
    }
        
        
        function Registro($conexion) {

            $res = $conexion->query("CALL sp_Registro()");
        
            while($f = $res->fetch_object()){
                echo $f->nombreUsuario.' <br/>';
            }
        }

    }*/


?>