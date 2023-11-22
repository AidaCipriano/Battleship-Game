const otroElemento = document.querySelector('#startButton'); 
if (otroElemento !== null) {
  otroElemento.addEventListener('click', function () {
      alert('¡El juego ha comenzado!');
      location.href ="./pantalladeljuego.php";
    });
}

const modo = document.querySelector('#startButton2'); 
if (modo !== null) {
  modo.addEventListener('click', function () {
      alert('¡Elige un modo de juego!');
      location.href ="menu_modoJuego.php";
    });
}

const modo2 = document.querySelector('#startButton3'); 
if (modo2 !== null) {
  modo2.addEventListener('click', function () {
      alert('¡El juego ha comenzado!');
      location.href ="./pantalladeljuego2.php";
    });
}

const modo3 = document.querySelector('#startButton4'); 
if (modo3 !== null) {
  modo3.addEventListener('click', function () {
      alert('¡Elige un modo de juego!');
      location.href ="./pantalladeljuego3.php";
    });
}

const salida = document.querySelector('#exitButton'); 
if (salida !== null) {
  salida.addEventListener('click', function() {
  if (confirm('¿Estás seguro de que quieres salir?')) {
    location.href ="./iniciosesion.php"; }
    });
  }

  const salida2 = document.querySelector('#startconfig'); 
if (salida2 !== null) {
  salida2.addEventListener('click', function() {
    location.href ="./menu_config.php";
  });
}
