import { isValidEmail, isValidPassword } from "./modules/validation_module.js";

const form = document.querySelector("#form_inicio");

const ocultar = document.querySelector(".pass");
const verContraseña = document.querySelector(".contraseña");

const mail = document.getElementById("mail");

const cancel = document.querySelector(".cancel");
const cancel_pass = document.querySelector(".cancel-pass");

const applyProperties = (valid, element) => {
    if (valid) {
        element.textContent = "check";
        element.style.color = "green";
        element.style.bottom = "5px";
        return;
    }

    element.textContent = "cancel";
    element.style.bottom = "5px";
    element.style.color = "red";
}

eventsIncio();
eventsValidacionInicio();

form.addEventListener("submit", e => {
    if (!validarInicio()) {
        e.preventDefault();
        alert("No puedes iniciar sin ingresar los datos correctamente");
    }
});

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
    let validate = isValidEmail(mail.value);
    applyProperties(validate, cancel);
    return validate;
}

function validarContraseñaInicio() {
    let validate = isValidPassword(verContraseña.value);
    applyProperties(validate, cancel_pass);
    return validate;
}

function eventsValidacionInicio() {
    mail.addEventListener("input", validarMailInicio);
    verContraseña.addEventListener("input", validarContraseñaInicio);
}

