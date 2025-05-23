import { getActiveUser, getActiveUser2 } from "./user_manager.js";
const bienvenida = document.getElementById("bienvenida");
const pantalla_inicial = document.querySelector(".container");
const pantalla_inicial_usuario = document.querySelector(".container2");
if (pantalla_inicial) {
    bienvenida.textContent = bienvenida.textContent.replace(
        "{UserName}",
        getActiveUser().name
    );
}
if (pantalla_inicial_usuario) {
    bienvenida.textContent = bienvenida.textContent.replace(
        "{UserName}",
        getActiveUser2().name
    );
}
document.addEventListener("DOMContentLoaded", function () {
    const miembrosData = {
        1: {
            nombre: "Jonathan Rossi",
            tareas: [
                {
                    titulo: "Diseñar interfaz de usuario",
                    descripcion: "Crear wireframes para la nueva aplicación",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: true,
                },
            ],
        },
        2: {
            nombre: "Inael Rodriguez",
            tareas: [
                {
                    titulo: "Formulario Inicio",
                    descripcion: "Correguir error de Formulario de inicio",
                    fecha: "2025-05-27",
                    prioridad: "media",
                    completada: false,
                },
            ],
        },
        3: {
            nombre: "Samuel Imitola",
            tareas: [
                {
                    titulo: "Configuracion",
                    descripcion: "Crear modulo de configuracion",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: true,
                },
            ],
        },
        4: {
            nombre: "Francisco Hernandez",
            tareas: [
                {
                    titulo: "Poster",
                    descripcion: "Crear poster para el proyecto",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false,
                },
                {
                    titulo: "Controles",
                    descripcion: "Llevar los controles del play 5",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false,
                },
            ],
        },
    };

    const modal = document.getElementById("memberModal");
    const closeBtn = document.querySelector(".close-modal");
    const memberNameElement = document.getElementById("member-name");
    const tasksContainer = document.getElementById("member-tasks");

    if (!modal || !closeBtn || !memberNameElement || !tasksContainer) {
        console.error("Error: No se encontraron todos los elementos del modal");
        return;
    }

    document.querySelectorAll(".member-avatar").forEach((avatar) => {
        avatar.addEventListener("click", function (event) {
            event.stopPropagation();
            const memberId = this.getAttribute("data-member-id");
            const memberName = this.getAttribute("data-member-name");

            if (memberId && memberName) {
                mostrarTareasMiembro(memberId, memberName);
            } else {
                console.error("Error: Datos del miembro no encontrados");
            }
        });
    });

    function mostrarTareasMiembro(memberId, memberName) {
        const member = miembrosData[memberId];

        if (!member) {
            console.error("Miembro no encontrado");
            return;
        }

        memberNameElement.textContent = memberName;

        tasksContainer.innerHTML = "";

        if (member.tareas && member.tareas.length === 0) {
            tasksContainer.innerHTML =
                '<p class="no-tasks">Este miembro no tiene tareas asignadas.</p>';
        } else if (member.tareas) {
            member.tareas.forEach((tarea) => {
                const tareaElement = document.createElement("div");
                tareaElement.className = "task-item";
                tareaElement.innerHTML = `
                    <h3>${tarea.titulo}</h3>
                    <p>${tarea.descripcion}</p>
                    <div class="task-meta">
                        <span>Fecha: ${formatDate(tarea.fecha)}</span>
                        <span>Prioridad: ${tarea.prioridad}</span>
                    </div>
                    <div class="task-meta">
                        <span>Estado: ${tarea.completada ? "🟩 Completada" : "🟨 Pendiente"
                    }</span>
                    </div>
                `;
                tasksContainer.appendChild(tareaElement);
            });
        }

        modal.style.display = "flex";
    }

    function formatDate(dateString) {
        if (!dateString) return "No especificada";

        try {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(dateString).toLocaleDateString("es-ES", options);
        } catch (e) {
            console.error("Error formateando fecha:", e);
            return dateString;
        }
    }

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    let currentMemberId = null;

    document.querySelectorAll(".member-avatar").forEach((avatar) => {
        avatar.addEventListener("click", function (event) {
            event.stopPropagation();
            currentMemberId = this.getAttribute("data-member-id");
            const memberName = this.getAttribute("data-member-name");
            if (currentMemberId && memberName) {
                mostrarTareasMiembro(currentMemberId, memberName);
            }
        });
    });

    document.getElementById("btn-agregar-tarea").addEventListener("click", () => {
        if (!currentMemberId) return;

        const titulo = document.getElementById("nueva-tarea-titulo").value.trim();
        const descripcion = document
            .getElementById("nueva-tarea-desc")
            .value.trim();
        const fecha = document.getElementById("nueva-tarea-fecha").value;
        const prioridad = document.getElementById("nueva-tarea-prioridad").value;
        const fechaSeleccionada = new Date(fecha);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        if (fechaSeleccionada < hoy) {
            alert("La fecha no puede ser anterior al día de hoy");
            creationForm.date.focus();
            return false;
        }

        if (!titulo || !fecha) {
            alert("Título y fecha son obligatorios.");
            return;
        }
        if (fechaSeleccionada < hoy) {
            alert("La fecha no puede ser anterior al día de hoy");
        }
        const nuevaTarea = {
            titulo,
            descripcion,
            fecha,
            prioridad,
            completada: false,
        };

        miembrosData[currentMemberId].tareas.push(nuevaTarea);
        mostrarTareasMiembro(currentMemberId, miembrosData[currentMemberId].nombre);

        // Limpiar campos
        document.getElementById("nueva-tarea-titulo").value = "";
        document.getElementById("nueva-tarea-desc").value = "";
        document.getElementById("nueva-tarea-fecha").value = "";
        document.getElementById("nueva-tarea-prioridad").value = "alta";
    });

    function mostrarTareasMiembro(memberId, memberName) {
        const member = miembrosData[memberId];
        if (!member) return;

        memberNameElement.textContent = memberName;
        tasksContainer.innerHTML = "";

        if (!member.tareas || member.tareas.length === 0) {
            tasksContainer.innerHTML =
                '<p class="no-tasks">Este miembro no tiene tareas asignadas.</p>';
        } else {
            member.tareas.forEach((tarea, index) => {
                const tareaElement = document.createElement("div");
                tareaElement.className = "task-item";
                tareaElement.innerHTML = `
                <h3>${tarea.titulo}</h3>
                    <p>${tarea.descripcion}</p>
                    <div class="task-meta">
                        <span>Fecha: ${formatDate(tarea.fecha)}</span>
                        <span>Prioridad: ${tarea.prioridad}</span>
                    </div>
                    <div class="task-meta">
                        <span>Estado: ${tarea.completada ? "🟩 Completada" : "🟨 Pendiente"}</span>
                    </div>
                    <div class="task-actions">
                        <button class="btn-cambiar-estado" data-index="${index}">
                            ${tarea.completada ? "Marcar Pendiente" : "Marcar Completada"}
                        </button>
                        <button class="btn-eliminar-tarea" data-index="${index}">Eliminar</button>
                    </div>
                `;
                tasksContainer.appendChild(tareaElement);
            });

            document.querySelectorAll(".btn-eliminar-tarea").forEach((btn) => {
                btn.addEventListener("click", function () {
                    const index = this.getAttribute("data-index");
                    miembrosData[memberId].tareas.splice(index, 1);
                    mostrarTareasMiembro(memberId, memberName);
                });
            });
            document.querySelectorAll(".btn-cambiar-estado").forEach((btn) => {
                btn.addEventListener("click", function () {
                    const index = this.getAttribute("data-index");
                    miembrosData[memberId].tareas[index].completada =
                        !miembrosData[memberId].tareas[index].completada;
                    mostrarTareasMiembro(memberId, memberName);
                });
            });
        }
        modal.style.display = "flex";
    }

    // Efecto de despliegue
    const desplegarbtn = document.querySelector(".desplegar");
    const modalAgregar = document.querySelector(".add-task-form");

    desplegarbtn.addEventListener("click", (e) => {
        aplicarEstilos(modalAgregar);
        desplegarbtn.style.display = "none";
    });
    modalAgregar.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    modal.addEventListener("click", (e) => {
        aplicarEstilos2(modalAgregar);
        desplegarbtn.style.display = "block";
    });

    function aplicarEstilos(ventana) {
        ventana.style.width = "auto";
        ventana.style.height = "auto";
    }

    function aplicarEstilos2(ventana) {
        ventana.style.width = "100px";
        ventana.style.height = "25px";
    }
});
