document.addEventListener("DOMContentLoaded", function() {
  const configForm = document.getElementById("configForm");
  const saveButton = document.getElementById("saveButton");

  saveButton.addEventListener("click", function() {
    const volume = document.getElementById("volume").value;
    const difficulty = document.getElementById("difficulty").value;
    const music = document.getElementById("music").checked;

    // Aquí puedes guardar la configuración en variables, local storage, enviarla al servidor, etc.
    console.log("Configuración guardada:");
    console.log("Volumen:", volume);
    console.log("Dificultad:", difficulty);
    console.log("Música:", music);
  });
});