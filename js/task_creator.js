
const creationForm = document.getElementById("creation_form");
const confirmModal = document.getElementById("confirmModal");
const closeModal = document.querySelector(".close-modal");
const confirmOkBtn = document.getElementById("confirmOkBtn");

function initializeEventListeners() {
    creationForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (validarCreator()) {
            const tarea = await procesarCreator();
            mostrarModalConfirmacion(tarea);
            creationForm.reset();
        }
    });
    closeModal.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });
    confirmOkBtn.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === confirmModal) {
            confirmModal.style.display = 'none';
        }
    });
}
function mostrarModalConfirmacion(tarea) {
    document.getElementById('modal-task-title').textContent = tarea.title;
    document.getElementById('modal-task-description').textContent = tarea.description || "Sin descripción";
    document.getElementById('modal-task-date').textContent = formatearFecha(tarea.date);
    document.getElementById('modal-task-priority').textContent = determinarPrioridad(tarea.date);

    const priorityElement = document.getElementById('modal-task-priority');
    priorityElement.className = '';
    priorityElement.classList.add(determinarPrioridad(tarea.date));

    confirmModal.style.display = 'block';
}

function formatearFecha(fechaString) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaString).toLocaleDateString('es-ES', opciones);
}

function determinarPrioridad(fechaString) {
    const hoy = new Date();
    const fechaTarea = new Date(fechaString);
    const diffTime = fechaTarea - hoy;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 4) return 'urgente';
    if (diffDays <= 7) return 'alta';
    if (diffDays <= 14) return 'media';
    return 'baja';
}

async function procesarCreator() {
    const formData = new FormData(creationForm);
    const tarea = {
        title: creationForm.title.value.trim(),
        description: creationForm.description.value.trim(),
        date: creationForm.date.value
    };

    if (!tarea.date) {
        alert("Por favor selecciona una fecha válida");
        return null;
    }
    return tarea;
}

function validarCreator() {
    if (!creationForm.title.value.trim()) {
        alert("El título es obligatorio");
        return false;
    }

    if (!creationForm.date.value) {
        alert("La fecha es obligatoria");
        return false;
    }
    const fechaSeleccionada = new Date(creationForm.date.value);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    if (fechaSeleccionada < hoy) {
        alert("La fecha no puede ser anterior al día de hoy");
        creationForm.date.focus();
        return false;
    }
    return true;
}

initializeEventListeners();