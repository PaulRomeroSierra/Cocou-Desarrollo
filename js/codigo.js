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


    /**
     * Al menos una letra mayúscula en inglés
Al menos una letra minúscula en inglés
Al menos un dígito
Al menos un carácter especial
Mínimo de ocho pulgadas de largo
     */
    function validarInicio() {
        const aviso = document.querySelector(".aviso");
        let flag = false;
        let validar = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        let validarContraseña = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,}$/;
        if (!validar.test(mail.value)) {
            flag = true;
            cancel.textContent = "cancel";
            cancel.style.color = "red";
        } else {
            cancel.textContent = "check";
            cancel.style.color = "green";
        }
        if (!validarContraseña.test(verContraseña.value)) {
            flag = true;
            cancel_pass.textContent = "cancel";
            cancel_pass.style.color = "red";
            aviso.style.opacity="1"
        } else {
            cancel_pass.textContent = "check";
            cancel_pass.style.color = "green";
            aviso.style.opacity="0";
        }
        if (flag) {
            cancel.style.bottom = "5px";
            cancel_pass.style.bottom = "5px";
        }else{
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
    const constraseña1 = document.querySelector(".contraseña1_register")
    const verContraseña2 = document.querySelector(".contraseña2_register");
    const cancel_name = document.querySelector(".cancel_user");
    const cancel_mail = document.querySelector(".cancel_mail");
    const cancel_new_pass = document.querySelector(".cancel_new_pass");
    const cancel_confirm_pass = document.querySelector(".cancel_confirm_pass");


    eventsRegistro();
    form_registro.addEventListener("submit", e => {
        e.preventDefault();
        validarRegistro();
    });
    function validarRegistro() {
        let flag = false;
        let ValidarNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        let validarMail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        let validarContraseñaRegistro = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,}$/;
        if (!ValidarNombre.test(nombre.value)) {
            flag = true;
            cancel_name.textContent = "cancel";
            cancel_name.style.color = "red";
        }else {
            cancel_name.textContent = "check";
            cancel_name.style.color = "green";
        }
        if(!validarMail.test(mail_register.value)){
            flag= true;
            cancel_mail.textContent="cancel";
            cancel_mail.style.color="red";
        }else{
            cancel_mail.textContent="check";
            cancel_mail.style.color="green";
        }
        if(!validarContraseñaRegistro.test(constraseña1.value)|| constraseña1.value != verContraseña2.value){
            cancel_new_pass.textContent="cancel";
            cancel_new_pass.style.color="red";
        }else{
            cancel_new_pass.textContent="check";
            cancel_new_pass.style.color="green";

        }
        if(!validarContraseñaRegistro.test(verContraseña2.value) || constraseña1.value!=verContraseña2.value){
            cancel_confirm_pass.textContent="cancel";
            cancel_confirm_pass.style.color="red";
        }else{
            cancel_confirm_pass.textContent="check";
            cancel_confirm_pass.style.color="green";
        }
        if (flag) {
            cancel_name.style.bottom = "5px";
            cancel_mail.style.bottom = "5px";
            cancel_new_pass.style.bottom="5px";
            cancel_confirm_pass.style.bottom="5px";
        }
        }

        function eventsRegistro(){
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