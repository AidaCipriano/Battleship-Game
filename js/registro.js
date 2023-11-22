
const email = document.getElementById("email");
const user = document.getElementById("username");
const pass = document.getElementById("password");
const avatar = document.getElementById("avatar");


const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

const btn = document.getElementById("btnregister");

function btn_guardar_dato()
{
  
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let entrar = false
    let warnings = ""
    parrafo.innerHTML = ""

    


    if(!regexEmail.test(email.value)){
        //alert("La contraseña deeb tener 1 mayuscula, una miniscula, un numero y un caracter especial");
        warnings += "Formato Email incorrecto <br>"
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
        
    }
    else{

       btn.click();
        parrafo.innerHTML = "Enviado"
    }
} 

