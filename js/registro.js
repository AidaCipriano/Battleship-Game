
const email = document.getElementById("email");
const user = document.getElementById("username");
const pass = document.getElementById("password");
const avatar = document.getElementById("avatar");

const email1 = document.getElementById("email1");
const pass1 = document.getElementById("password1");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

const form2 = document.getElementById("form2");

const parrafo2 = document.getElementById("warnings1");
const btn = document.getElementById("btnregister");
const btn2 = document.getElementById("btnlogin");

const hide2 = document.getElementById("hide2");

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


var clic = 1;

function btn_iniciarsesion()
{
    let regexPass = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})(?=(?:.*[?¿.#%=*,:;}{"'-]){1})\S{8,}/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let entrar = false
    let warnings2 = ""
    parrafo2.innerHTML = ""


    if(!regexEmail.test(email1.value)){
        //alert("La contraseña deeb tener 1 mayuscula, una miniscula, un numero y un caracter especial");
        warnings2 += "Formato Email incorrecto <br>"
        entrar = true
    }
    
    if(pass1.value.length<8){
        //alert("La contraseña es muy corta");
        warnings2 += "La contraseña es muy corta  <br>"
        entrar = true
    }
    else if(!regexPass.test(pass1.value)){
        //alert("La contraseña deeb tener 1 mayuscula, una miniscula, un numero y un caracter especial");
        warnings2 += "La contraseña deeb tener 1 mayuscula, una miniscula, un numero y un caracter especial"
        entrar = true
    }

    if(entrar){
        parrafo2.innerHTML = warnings2
    }
    else{
        btn2.click();
    }
} 

function btn_ocultar_inicio(){
    form2.style.display = 'none'; 
}


function btn_ocultar_registro(){
    if(clic==2){

        form.style.display = ''; 
        form2.style.display = 'none'; 
     
        clic = 1;
    
    } 
}


function btn_ocultar_inicio2(){
    if(clic==1){

        form2.style.display = ''; 
        form.style.display = 'none'; 
     
        clic = clic + 1;
    
    } 
}
