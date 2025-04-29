const form = document.querySelector("#form_inicio");
const form_registro = document.querySelector("#form_registro");

if (form) {
    const ocultar = document.querySelector(".pass");
    const verContraseña = document.querySelector(".contraseña");
    const mail = document.getElementById("mail");
    const cancel = document.querySelector(".cancel");
    const cancel_pass = document.querySelector(".cancel-pass");

    eventsIncio();
    form.addEventListener("submit", e => {
        e.preventDefault();
        validarInicio();
    });

    function validarInicio() {
        let flag = false;
        let validar = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!validar.test(mail.value)) {
            flag = true;
            cancel.textContent = "cancel";
            cancel.style.color = "red";
        } else {
            cancel.textContent = "check";
            cancel.style.color = "green";
        }
        if (verContraseña.value.length < 6) {
            flag = true;
            cancel_pass.textContent = "cancel";
            cancel_pass.style.color = "red";
        } else {
            cancel_pass.textContent = "check";
            cancel_pass.style.color = "green";
        }
        if (flag) {
            cancel.style.bottom = "5px";
            cancel_pass.style.bottom = "5px";
        }
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
}


if (form_registro) {
    const ocultar1 = document.querySelector(".pass_register");
    const ocultar2 = document.querySelector(".pass_new");
    const nombre = document.getElementById("name_register");
    const mail_register = document.getElementById("mail_register"); 
    const constraseña1=document.querySelector("#pass_register")
    const verContraseña2 = document.querySelector(".contraseña2_register");
    const cancel_name = document.querySelector(".cancel-name");


    validarRegistro();
    form_registro.addEventListener("submit", e => {
        e.preventDefault();
    });

    function validarRegistro() {
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
}