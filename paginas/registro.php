<?php

include("paginas/controladores/registrate.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">

    <title>Registro</title>
</head>
<body class="gif">
    <div class="container d-flex justify-content-center align-items-center h-100">
       <div  class="container d-flex justify-content-center align-items-center h-100 divdiv containertres fondodos">
       
            <div class="login-box p-4">
                <h1 class="mb-4" >Registro</h1>
                <form method="post"  id="form">

                    <div id="form">
                       <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="input-email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="username" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="username" name="username" required>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" name="password" required>
                    </div>
                    <div class="mb-3"> 
                        <label class="nav-link px-2">Elija una imagen como avatar </label>
                            <input type="file" class="form-control" id="customFile" id="avatar" > 
                    </div>
                    <!--button type="submit" class="btn btn-primary">Iniciar Sesión</button-->
                    <div class="espacio_Boton">
                         <!--<button class="btn btn-primary" type="submit"  value="Enviar" name="register">Registrate</button>-->
                        <input class="btn btn-primary"  onclick="btn_guardar_dato();"  value="Enviar">
                        <p></p>
                        <input class="btn btn-primary"  type="submit"  name="register" id="btnregister" value="Enviar">
                         <p class="warnings" id="warnings"></p>
                    </div> 
                    </div>
                    
                </form>
                <p class="mt-3">¿Ya tienes una cuenta? <a href="paginas/iniciosesion.php">Inicia Sesion</a></p>
            </div>
        </div>
    </div>
</body>

<script src="js/registro.js"></script>
<script src="js/jquery.min.js"></script>

</html>
                  