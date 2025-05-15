const creationForm = document.getElementById("creation_form");
const managmentform = document.getElementById("gestion_tareas");
const addTask = document.getElementById("agregar");

let formData = new FormData();
let taskName;
let taskDescription;
let taskDate;

initializeEventListeners();
function initializeEventListeners() {
    creationForm.addEventListener("submit", e => {
        e.preventDefault();
        if (validarCreator()) {
            procesarCreator();
            creationForm.reset();
            redirigir();
        }
    }
    );
}

function procesarCreator() {
    formData = new FormData(creationForm);
    taskName = formData.get("title");
    taskDescription = formData.get("description");
    taskDate = formData.get("date");
}

function validarCreator() {
    if (creationForm.title.value === "" || creationForm.description.value === "" || creationForm.date.value === "") {
        alert("Todos los campos deben estar llenados");
        return false;
    }
    return true;
}

function redirigir(){
    window.location.href = " ../templates/message.html";
}