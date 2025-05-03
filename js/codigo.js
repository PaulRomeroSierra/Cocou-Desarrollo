const form = document.querySelector("#form_inicio");
const form_registro = document.querySelector("#form_registro");

//fORMULARIO DE INICIO
if (form) {
    const ocultar = document.querySelector(".pass");
    const verContraseña = document.querySelector(".contraseña");
    const mail = document.getElementById("mail");
    const cancel = document.querySelector(".cancel");
    const cancel_pass = document.querySelector(".cancel-pass");

    eventsIncio();
    validacionInicio();
    form.addEventListener("submit", e => {
        if(validarInicio()){
            e.preventDefault();
            alert("No puedes iniciar sin ingresar los datos");
        }
    });

    function validarInicio(){
        let valido =false;
        if(validarMailInicio()){
            valido=true;
        }
        if(validarContraseñaInicio()){
        valido=true;
        }
        return valido;
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

    function validarMailInicio(){
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
        if (flag) {
            cancel.style.bottom = "5px";
        } else {
            cancel.style.bottom = "5px";
        }
        return flag;
    }

    function validarContraseñaInicio(){
        let flag = false;
        let validarContraseña = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,}$/;
        if (!validarContraseña.test(verContraseña.value)) {
            flag = true;
            cancel_pass.textContent = "cancel";
            cancel_pass.style.color = "red";
        } else {
            cancel_pass.textContent = "check";
            cancel_pass.style.color = "green";
        }
        if (flag) {
            cancel_pass.style.bottom = "5px";
        } else {
            cancel_pass.style.bottom = "5px";
        }
        return flag;
    }


    function validacionInicio(){
        mail.addEventListener("input", validarMailInicio);
        verContraseña.addEventListener("input",validarContraseñaInicio);
    }
}


//fORMULARIO DE REGISTRO
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
    const aviso = document.querySelector(".aviso");
    const contraseña_aviso=document.querySelector(".aviso--1");

    eventsRegistro();
    validacionRegistro();
    form_registro.addEventListener("submit", e => {
        if(validarFormulario()){
            e.preventDefault();
            alert("No puedes registrarte sin llenar los campos correctamente");
        }
    });

    function validarFormulario(){
        let valido =false;
        if(validacionNombre()){
            valido=true;
        }
        if(validacionMail()){
        valido=true;
        }
        if(validacionContraseñaNueva()){
        valido=true;
        }
        return valido;
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

    function validacionRegistro() {
        nombre.addEventListener("input", validacionNombre);
        mail_register.addEventListener("input", validacionMail);
        constraseña1.addEventListener("input", validacionContraseñaNueva);
        verContraseña2.addEventListener("input",validacionContraseñaNueva);
    }

    function validacionNombre() {
        let flag = false;
        let ValidarNombre = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
        if (!ValidarNombre.test(nombre.value)) {
            flag = true;
            cancel_name.textContent = "cancel";
            cancel_name.style.color = "red";
        } else {
            cancel_name.textContent = "check";
            cancel_name.style.color = "green";
        }
        if (flag) {
            cancel_name.style.bottom = "5px";
        } else {
            cancel_name.style.bottom = "5px";
        }
        return flag;
    }
    function validacionMail() {
        let flag = false;
        let validarMail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (!validarMail.test(mail_register.value)) {
            flag = true;
            cancel_mail.textContent = "cancel";
            cancel_mail.style.color = "red";
        } else {
            cancel_mail.textContent = "check";
            cancel_mail.style.color = "green";
        }
        if (flag) {
            cancel_mail.style.bottom = "5px";
        } else {
            cancel_mail.style.bottom = "5px";
        }
        return flag;
    }
    function validacionContraseñaNueva() {
        let flag = false;
        let validarContraseñaRegistro = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{5,}$/;
        if (!validarContraseñaRegistro.test(constraseña1.value) ) {
            flag = true;
            cancel_new_pass.textContent = "cancel";
            cancel_new_pass.style.color = "red";
        } else {
            cancel_new_pass.textContent = "check";
            cancel_new_pass.style.color = "green";
        }
        if (!validarContraseñaRegistro.test(verContraseña2.value)) {
            flag =true;
            cancel_confirm_pass.textContent = "cancel";
            cancel_confirm_pass.style.color = "red";
            aviso.style.opacity = "1";
        } else {
            cancel_confirm_pass.textContent = "check";
            cancel_confirm_pass.style.color = "green";
            aviso.style.opacity = "0";
        }
        if(constraseña1.value != verContraseña2.value){
            flag=true;
            contraseña_aviso.style.display="block";
        }else{
            contraseña_aviso.style.display="none";
        }
        if (flag) {
            cancel_new_pass.style.bottom = "5px";
            cancel_confirm_pass.style.bottom = "5px";
        } else {
            cancel_new_pass.style.bottom = "5px";
            cancel_confirm_pass.style.bottom = "5px";
        }
        return flag;
    }
}