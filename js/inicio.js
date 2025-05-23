import { getActiveUser, getActiveUser2 } from "./user_manager.js";

const form = document.querySelector("#form_inicio");
const ocultar = document.querySelector(".pass");
const verContraseña = document.querySelector(".contraseña");
const mail = document.getElementById("mail");
const cancel = document.querySelector(".cancel");
const cancel_pass = document.querySelector(".cancel-pass");

// Obtener credenciales
const user1 = getActiveUser();
const user2 = getActiveUser2();

const credenciales = [
    { email: user1.email, contraseña: user1.contraseña },
    { email: user2.email, contraseña: user2.contraseña }
];
// Inicializar eventos
eventsIncio();
// eventsValidacionInicio(); // Esta función tiene problemas, mejor eliminarla por ahora

form.addEventListener("submit", e => {
    e.preventDefault();

    if (!validarInicio()) {
        alert("No puedes iniciar sin ingresar los datos correctamente");
        return;
    }
    enterMainPage();
});


function validarInicio() {
    return validarMailInicio() && validarContraseñaInicio();
}

function eventsIncio() {
    ocultar.addEventListener("mousedown", e => {
        ocultar.innerHTML = "visibility";
        verContraseña.setAttribute("type", "text");
    });

    ocultar.addEventListener("mouseup", e => {
        ocultar.innerHTML = "visibility_off";
        verContraseña.setAttribute("type", "password");
    });
}

function validarMailInicio() {
    const emailIngresado = mail.value;
    return credenciales.some(user => user.email === emailIngresado);
}

function validarContraseñaInicio() {
    const passIngresado = verContraseña.value;
    return credenciales.some(user => user.contraseña === passIngresado);
}
function enterMainPage() {
    const emailIngresado = mail.value;
    const passIngresado = verContraseña.value;
    if (emailIngresado === credenciales[0].email && passIngresado === credenciales[0].contraseña) {
        alert("Iniciando sesion ...");
        window.location.href = "../templates/pantalla_inicial.html";
        return;
    }
    else if (emailIngresado === credenciales[1].email && passIngresado === credenciales[1].contraseña) {
        alert("Iniciando sesion ...");
        window.location.href = "../templates/pantalla_inicial_usuario.html";
        return;
    }
    alert("Credenciales incorrectas");
    mail.value = "";
    verContraseña.value = "";
}