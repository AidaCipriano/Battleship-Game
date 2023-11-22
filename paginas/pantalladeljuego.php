<?php
 // session_start();
 // include 'controladores/conexion.php';
 // $user = $_SESSION['user_id'];

?>
<!DOCTYPE html>
<html lang="en">

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.min.js"></script>-->

<<<<<<< HEAD
=======





>>>>>>> ce6394da662f5e46c3d59b6558ee2b3975327a06
<head>
  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>-->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Videojuego</title>
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/styles.css">
  <link href="https://fonts.cdnfonts.com/css/copperplate" rel="stylesheet">

  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
  </style>
  <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  

  <script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@v0.155.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.155.0/examples/jsm/"
    }
  }
</script>
<<<<<<< HEAD
<header class="py-3 mb-3 header-pantallajuego border-bottom">
    <?php
    include("menu_config.php"); 
    include("menu_pausa.php"); 
    include("ganaste.php"); 
    include("perdiste.php"); 
    ?>
=======
</head>


<body>

<main>
<header class="py-3  header-pantallajuego border-bottom">
>>>>>>> ce6394da662f5e46c3d59b6558ee2b3975327a06
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <ul class="nav col-12 col-lg-auto  mb-md-0">
        <li>
          <a class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><?php //echo( $user ); ?> </a>
          <ul class="dropdown-menu dropdown-menu-dark ">
            <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal" >Configuracion</a></li> 
            <li><a class="dropdown-item" href="#" data-toggle="modal" data-target="#pausaModal" >Pausa</a></li>
            <li>
<<<<<<< HEAD
              <hr class="dropdown-divider">
=======
              <a class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> </a>
              <ul class="dropdown-menu dropdown-menu-dark ">
              <li><a class="dropdown-item" href="menu_config.php">Configuracion</a></li>
              <li><a class="dropdown-item" href="menu_pausa.php">Pausa</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="iniciosesion.php">Cerrar Sesion</a></li>
              </ul>
>>>>>>> ce6394da662f5e46c3d59b6558ee2b3975327a06
            </li>
            <li><a class="dropdown-item" href="iniciosesion.php">Cerrar Sesion</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </header>

  <main>
  <div class="ms-auto ">
          <button id="siguienteTablero" class="btn btn-primary">Siguiente Tablero</button>
          <button id="comenzarJuego" class="btn btn-success">Comenzar</button>
        </div>
    <div id="Impacto" class="Impacto"></div>
    <div id="Puntos" class="Puntos"></div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<<<<<<< HEAD
    <script type="module" src="../includes/main.js"></script>
  </main>

  <script src="../includes/script.js"></script>
  <script src="../js/bootstrap.bundle.min.js"></script>

  
</body>

</html>




=======
		<script type="module" src="./../includes/main.js"></script>

  </body>
   
    
 
</main>

		
<script src="../includes/script.js"></script>
<script src="../js/bootstrap.bundle.min.js"></script>
</body>
</html>




>>>>>>> ce6394da662f5e46c3d59b6558ee2b3975327a06

