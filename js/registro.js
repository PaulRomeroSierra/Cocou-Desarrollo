import { isValidEmail, isValidPassword, isValidName } from "./modules/validation_module.js";

const form_registro = document.querySelector("#form_registro");

const ocultar1 = document.querySelector(".pass_register");
const ocultar2 = document.querySelector(".pass_new");

const nombre = document.getElementById("name_register");
const mail_register = document.getElementById("mail_register");

const constraseña1 = document.querySelector(".contraseña1_register")
const verContraseña2 = document.querySelector(".contraseña2_register");

const cancel_name = document.querySelector(".cancel_user");
const cancel_mail = document.querySelector(".cancel_mail");
const cancel_new_pass = document.querySelector(".cancel_new_pass");
const cancel_confirm_pass = document.querySelector(".cancel_confirm_pass");

const aviso = document.querySelector(".aviso");
const contraseña_aviso = document.querySelector(".aviso--1");

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

eventsRegistro();
eventsValidacionRegistro();

form_registro.addEventListener("submit", e => {
    if (!validarFormulario()) {
        e.preventDefault();
        alert("No puedes registrarte sin llenar los campos correctamente");
    }
});

function applyRegisterPasswordProperties(valid) {
    if (valid) {
        cancel_new_pass.textContent = "check";
        cancel_new_pass.style.color = "green";
        aviso.style.opacity = "0";

        if (constraseña1.value != verContraseña2.value) {
            contraseña_aviso.style.display = "block";
            cancel_confirm_pass.textContent = "cancel";
            cancel_confirm_pass.style.color = "red";
        } else {
            contraseña_aviso.style.display = "none";
            cancel_confirm_pass.textContent = "check";
            cancel_confirm_pass.style.color = "green";
        }

        cancel_new_pass.style.bottom = "5px";
        cancel_confirm_pass.style.bottom = "5px";

        return;
    }

    cancel_new_pass.textContent = "cancel";
    cancel_new_pass.style.color = "red";
    aviso.style.opacity = "1";

    cancel_new_pass.style.bottom = "5px";
    cancel_confirm_pass.style.bottom = "5px";
}

function validarFormulario() {
    return validacionNombre() && validacionMail() && validacionContraseñaNueva();
}

function eventsRegistro() {
    ocultar2.addEventListener("mousedown", e => {
        ocultar2.innerHTML = "visibility";
        verContraseña2.setAttribute("type", "text");
    });

    ocultar2.addEventListener("click", e => {
        ocultar2.innerHTML = "visibility_off";
        verContraseña2.setAttribute("type", "password");
    });

    ocultar1.addEventListener("mousedown", e => {
        ocultar1.innerHTML = "visibility";
        constraseña1.setAttribute("type", "text");
    });

    ocultar1.addEventListener("click", e => {
        ocultar1.innerHTML = "visibility_off";
        constraseña1.setAttribute("type", "password");
    });
}

function eventsValidacionRegistro() {
    nombre.addEventListener("input", validacionNombre);
    mail_register.addEventListener("input", validacionMail);
    constraseña1.addEventListener("input", validacionContraseñaNueva);
    verContraseña2.addEventListener("input", validacionContraseñaNueva);
}

function validacionNombre() {
    let validate = isValidName(nombre.value);
    applyProperties(validate, cancel_name);
    return validate;
}

function validacionMail() {
    let validate = isValidEmail(mail_register.value);
    applyProperties(validate, cancel_mail);
    return validate;
}

function validacionContraseñaNueva() {
    let validate = isValidPassword(constraseña1.value);
    applyRegisterPasswordProperties(validate);
    return validate;
}
