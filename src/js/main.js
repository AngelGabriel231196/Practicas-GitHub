document.getElementById("btn_registrarse").addEventListener("click",register);
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarsesion);

window.addEventListener("resize", anchoPagina);

//declaracion de variables
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_register");
var contenedor_login_register = document.querySelector(".contenedor_login-register");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_register");


function anchoPagina(){
    if(window.innerWidth > 850){
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}

anchoPagina();

function iniciarsesion(){
    if(window.innerWidth > 850){
        formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
        formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
    }
    
}


function register(){

    if(window.innerWidth > 850){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }else{
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity ="1";
    }
    
}

function imprimir(){
    var doc = new jsPDF();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let especialidad = document.getElementById("especialidad").value;
    let fecha = document.getElementById("fecha").value;
    let correo = document.getElementById("correo").value;
    doc.text(20, 20, "Nombre: ");
    doc.text(90, 20, "Apellidos: ");
    doc.text(20, 26, "Telefono: ");
    doc.text(20, 32, "Especialidad: ");
    doc.text(20, 38, "Fecha: ");
    doc.text(80, 38, "Correo: ");
    doc.text(45, 20, nombre);
    doc.text(120, 20, apellido);
    doc.text(46, 26, telefono);
    doc.text(55, 32, especialidad);
    doc.text(40, 38, fecha);
    doc.text(100,38,correo);
    doc.save(nombre);
}



// document.addEventListener('DOMContentLoaded', function () {
    
//     const nombreCompletoInput = document.getElementById('nombre_completo');
//     const nombreMostrado = document.getElementById('nombre_mostrado');

    
//     const nombreGuardado = localStorage.getItem('nombre');

    
//     if (nombreGuardado) {
//         nombreMostrado.textContent = `¡Hola, ${nombreGuardado}!`;
//     }

    
//     document.querySelector('.formulario_register').addEventListener('submit', function (event) {
//         event.preventDefault();

        
//         const nombre = nombreCompletoInput.value;

        
//         localStorage.setItem('nombre', nombre);

        
//         nombreMostrado.textContent = `¡Hola, ${nombre}!`;

//     });
// });
