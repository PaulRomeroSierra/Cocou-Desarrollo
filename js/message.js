const message = document.querySelector(".circule2")
let contador = 5;

let img = document.createElement("img")

mostrarTemporizador();
function mostrarTemporizador() {
    cuentaRegresiva();
}


function cuentaRegresiva() {
    const intervalo = setInterval(() => {
        contador--;
        if (contador == 0) {
            mostrarImg();
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
