
<?php


include("conexion.php");
//echo('coenxion exito');
if(isset($_POST['register'])){
    if(
        strlen($_POST['email'])     >= 1 &&
        strlen($_POST['username'])  >= 1 &&
        strlen($_POST['password'])  >= 1 
    ){
        $idsuario = null;
        $email = trim($_POST['email']);
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        $consulta = "CALL sp_Registro_Base('$email', '$username', '$password')";
       // $consulta = "INSERT INTO usuario(id_usuario, email, nombreusuario, contrasena)
       //                 VALUES('$idsuario', '$email', '$username', '$password')";
        $resultado = mysqli_query($conexion, $consulta);
        if($resultado){
          header("location:paginas/iniciosesion.php");
        }
        else{
            echo('Error');
        }


    }


}
?>

