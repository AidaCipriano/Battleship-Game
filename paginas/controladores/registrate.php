
<?php


require("conexion.php");
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

        //$consulta = "CALL sp_Registro_Base('$email', '$username', '$password')";
       // $consulta = "INSERT INTO usuario(id_usuario, email, nombreusuario, contrasena)
       //                 VALUES('$idsuario', '$email', '$username', '$password')";
       /* $resultado = mysqli_query($conexion, $consulta);
        if($resultado){
          header("location:paginas/iniciosesion.php");
        }
        else{
            echo('Error');
        }
        */

        $consulta = "CALL sp_Registro('Registro', '$idsuario', '$email', '$username', '$password');";
        // $consulta = "INSERT INTO usuario(id_usuario, email, nombreusuario, contrasena)
        //                 VALUES('$idsuario', '$email', '$username', '$password')";
         $resultado = mysqli_query($conexion, $consulta);
         $filas = mysqli_fetch_array($resultado);
 
         if($filas['Mensaje']=="Registrado"){
            echo '<script>  alert("Usuario registrado"); </script>';
            header("location:paginas/login.php");
         }
         else if($filas['Mensaje']=='Cuenta existente'){    
            echo '<script>  alert("Cuenta existente. Intentelo de nuevo"); </script>';
           
         }
         else{
            echo('Error');
         }
 

    }


}

if(isset($_POST['login'])) {
	
	if(
        strlen($_POST['email1'])     >= 1 &&
        strlen($_POST['password1'])  >= 1 
    ){
        $email1 = trim($_POST['email1']);
        $password1 = trim($_POST['password1']);
        $consulta1 = "CALL sp_Inicio_Sesion('$email1', '$password1')";
       // $consulta = "INSERT INTO usuario(id_usuario, email, nombreusuario, contrasena)
       //                 VALUES('$idsuario', '$email', '$username', '$password')";
        $resultado1 = mysqli_query($conexion, $consulta1);
		$filas1 = mysqli_fetch_array($resultado1); 
        
        $id =  $filas1['id_usuario'];

        $MENSAJE = $filas1['mensaje'];
		if($MENSAJE =="Contraseña incorrecta"){
            echo '<script>  alert("Contraseña incorrecta"); </script>';
           // header("location:iniciosesion.php");
        }
		else if($MENSAJE =="Email incorrecto"){
            echo '<script>  alert("Email incorrecto"); </script>';
           // header("location:iniciosesion.php");
        }
		else if($MENSAJE =="inicio"){
		
			header("location:../BattleshipP010/paginas/menu_modoJuego.php?id=$id");
		
		}


    }

}

?>

