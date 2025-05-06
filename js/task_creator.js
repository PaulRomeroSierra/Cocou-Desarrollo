const creationForm = document.getElementById("creation_form");
const addTask = document.getElementById("agregar");

let formData = new FormData();
let taskName;
let taskDescription;
let taskDate;

initializeEventListeners();
function initializeEventListeners() {
    addTask.addEventListener("click", getFormData);
}

const getFormData = () => {
    formData = new FormData(creationForm);
    taskName = formData.get("title");
    taskDescription = formData.get("description");
    taskDate = formData.get("date");

    if (taskName === "") {
        alert("El nombre de la tarea no puede estar vacio.");
        // Añade el vainoso este que hiciste del mensaje de error con el icono de la X
        return;
    }

    // Aca añades el del chulito
    alert("Tarea agregada");
}
