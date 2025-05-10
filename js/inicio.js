import { getActiveUser } from "./user_manager.js";

const form = document.querySelector("#form_inicio");

const ocultar = document.querySelector(".pass");
const verContraseña = document.querySelector(".contraseña");

const mail = document.getElementById("mail");

const cancel = document.querySelector(".cancel");
const cancel_pass = document.querySelector(".cancel-pass");

const email = getActiveUser().email;
const password = getActiveUser().contraseña;

eventsIncio();
eventsValidacionInicio();

form.addEventListener("submit", e => {
    if (!validarInicio()) {
        e.preventDefault();
        alert("No puedes iniciar sin ingresar los datos correctamente");
        return;
    }
    enterMainPage();
});

function enterMainPage() {
    window.location.href = "../html/pantalla_inicial.html";
    alert("Iniciando sesión...");
}

function validarInicio() {
    return validarMailInicio() && validarContraseñaInicio();
}

function eventsIncio() {
    ocultar.addEventListener("mousedown", e => {
        ocultar.innerHTML = "visibility";
        verContraseña.setAttribute("type", "text");
    });

    ocultar.addEventListener("click", e => {
        ocultar.innerHTML = "visibility_off";
        verContraseña.setAttribute("type", "password");
    });
}

function validarMailInicio() {
    return mail.value === email;
}

function validarContraseñaInicio() {
    return verContraseña.value === password;
}

function eventsValidacionInicio() {
    mail.addEventListener("input", validarMailInicio);
    verContraseña.addEventListener("input", validarContraseñaInicio);
}
