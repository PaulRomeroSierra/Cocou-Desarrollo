import { addTask } from "./tasks.js";
import { Task } from "./task.js";

const creationForm = document.getElementById("creation_form");
const addTask = document.getElementById("agregar");

let formData = FormData();
let taskName;
let taskDescription;
let taskDate;

initializeEventListeners();

function initializeEventListeners() {
    addTask.addEventListener("click", getFormData);
}

const getFormData = () => {
    formData = FormData(creationForm);
    taskName = formData.get("title");
    taskDescription = formData.get("description");
    taskDate = formData.get("date");

    if (taskName === "") {
        alert("El nombre de la tarea no puede estar vacio.");
        // Añade el vainoso este que hiciste del mensaje de error con el icono de la X
        return;
    }

    // Aca añades el del chulito
    addTask(new Task(taskName, taskDescription, taskDate));
    alert("Tarea agregada");
}
