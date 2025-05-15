const message = document.querySelector(".circule2");
const textMessage = document.querySelector(".message__text");
let img = document.createElement("img");
let contador = 5;

mostrarTemporizador();
function mostrarTemporizador() {
    cuentaRegresiva();
}

function cuentaRegresiva() {
    const intervalo = setInterval(() => {
        contador--;
        if (contador == 0) {
            mostrarImg();
            mostrarTexto();
            redirigirGestionTareas();
        } else {
            message.textContent = contador;
        }
    }, 1000);

    setTimeout(() => {
        clearTimeout(intervalo);
    }, 5000);
}

function mostrarImg() {
    img.setAttribute("src", "../img/check_img.png")
    img.classList.add("circule2-check");
    message.appendChild(img);
}

function mostrarTexto() {
    textMessage.textContent = "Agregada correctamente";
    return true;
}
function redirigirGestionTareas() {
    if (mostrarTexto) {
        setTimeout(() => {
            window.location.href = "../templates/gestion_tareas.html";
        }, 500);
    }
}
