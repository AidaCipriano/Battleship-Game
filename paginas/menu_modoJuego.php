<?php
 // session_start();
  //include 'controladores/conexion.php';
 // $user = $_SESSION['user_id'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú modo de juego - Mi Videojuego</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link href="https://fonts.cdnfonts.com/css/copperplate" rel="stylesheet">  
    <script src="https://kit.fontawesome.com/29079834be.js" crossorigin="anonymous"></script>
</head>
<body class="gif">

    <div class="container  d-flex justify-content-center align-items-center containertres ">
    <br><br>
        <div class=" fondo  text-center containertres">
        <br><br>
        <h1 class="text-center letras"> <b>Battleship Game</b></h1>
            
            <br><br><br><br><br><br><br><br>
            <h3 class="text-center letras1"> <b>¡Elige un modo de juego!</b></h3>
            <br><br>
            <button  id="startButton" class="btn btn-primary button">Normal</button>
            <button id="startButton3" class="btn btn-primary  button">Difícil</button>
            <button id="startButton4" class="btn btn-primary  button " >Especial</button>
            <a href="menuinicial.php"> <button class="btn btn-primary button3">Regresar</button></a>
            <br><br>
            

            <div class="main-social">
            <a href="https://facebook.com/battleshigame" class="facebook-icon"><i class="fa-brands fa-facebook" style="color: #2766d3;"></i></a>
            </div>
        </div>
    </div>

    <script src="../includes/script.js"></script>
</body>
</html>

