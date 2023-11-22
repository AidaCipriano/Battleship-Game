<?php
 // session_start();
  //include 'controladores/conexion.php';
  //$user = $_SESSION['user_id'];

?>


<<<<<<< HEAD

<div class="modal" tabindex="-1" role="dialog" id="exampleModal">>
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
          <div  class="container d-flex justify-content-center align-items-center h-100 divdiv containertres fondodos">
          
          <h1 class="text-center letras"> <b>Menú de configuración</b></h1>
          <form id="configForm">
              <label class="letras2" for="volume"><b>Volumen:</b></label>
              <input type="range" id="volume" name="volume" min="0" max="100" value="50" class="form-control-range letras2">
              
              <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="music" name="music" checked>
                  <label class="form-check-label letras2" for="music"><b>Música de fondo</b></label>
              </div>                       

              <div style="text-align:center">
                  <a href="#"><button type="button" id="saveButton" class="btn btn-primary button2">Guardar Configuración</button></a>
                  &nbsp;&nbsp;
                <a href="#"> <button type="button" id="logoutButton" class="btn btn-primary button3" data-dismiss="modal">Salir</button></a>
              </div>
          </form>
      
          </div>
  
=======
            <div style="text-align:center">
                <a href="pantalladeljuego.php"><button type="button" id="saveButton" class="btn btn-primary button2">Guardar Configuración</button></a>
                &nbsp;&nbsp;
               <a href="pantalladeljuego.php"> <button type="button" id="logoutButton" class="btn btn-primary button3">Salir</button></a>
            </div>
        </form>
    </div>  
>>>>>>> ce6394da662f5e46c3d59b6558ee2b3975327a06
    </div>
      
    </div>
 

    <script src="../includes/xcript_config.js"></script>
    <script src="../includes/script.js"></script>
