
<!DOCTYPE html>
<html>
<head>
  <title>Página de inicio de sesión</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/styles.css">
  <script src="./../js/sweetalert.min.js"></script>
			
<script src="./../js/jquery-3.2.1.js"></script>
</head>

<body class="gif">
    
  <div class="container d-flex justify-content-center align-items-center h-100">
     <div  class="container d-flex justify-content-center align-items-center h-100 divdiv containertres fondodos">
     
          <div class="login-box p-4">
              <h1 class="mb-4" >Iniciar Sesión</h1>
              <form action="controladores/login.php" method="POST">
                  <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="input-email" class="form-control" id="e_mail" name="email" required>
                  </div>
                  <div class="mb-3">
                      <label for="password" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="pass" name="password">
                  </div>
                  <!--button type="submit" class="btn btn-primary">Iniciar Sesión</button--> 
                  <button type="submit" class="btn btn-primary" name="login">Iniciar sesión</button>
              </form>
              <p class="mt-3">¿No tienes una cuenta? <a href="../index.php">Regístrate aquí</a></p>
              
          </div>
      </div>
  </div>
</body>
</html>
