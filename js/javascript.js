function opacidadMenu(){
    var boton = document.getElementById("button-id");
    var nav = document.getElementById("navbar-id");
    if(!boton.classList.contains("collapsed")){
        nav.style.backgroundColor = "#000000";
    }
    else{
        nav.style.backgroundColor = "transparent";
    }
}


/* ésto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
    if(localStorage.aceptaCookies != 'true'){
      cajacookies.style.display = 'block';
    }
  }
  
  /* aquí guardamos la variable de que se ha
  aceptado el uso de cookies así no mostraremos
  el mensaje de nuevo */
  function aceptarCookies() {
    localStorage.aceptaCookies = 'true';
    cajacookies.style.display = 'none';
  }

  function rechazarCookies() {
    cajacookies.style.display = 'none';
  }
  
  /* ésto se ejecuta cuando la web está cargada */
  $(document).ready(function () {
    compruebaAceptaCookies();
  });