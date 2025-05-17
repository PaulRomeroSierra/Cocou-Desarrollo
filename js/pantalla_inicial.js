import { getActiveUser } from "./user_manager.js";
const bienvenida = document.getElementById("bienvenida");
bienvenida.textContent = bienvenida.textContent.replace("{UserName}", getActiveUser().name);
document.addEventListener('DOMContentLoaded', function () {
    const miembrosData = {
        1: {
            nombre: "Jonathan Rossi",
            tareas: [
                {
                    titulo: "Diseñar interfaz de usuario",
                    descripcion: "Crear wireframes para la nueva aplicación",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false
                }
            ]
        },
        2: {
            nombre: "Inael Rodriguez",
            tareas: [
                {
                    titulo: "Formulario Inicio",
                    descripcion: "Correguir error de Formulario de inicio",
                    fecha: "2025-05-27",
                    prioridad: "media",
                    completada: false
                }
            ]
        },
        3: {
            nombre: "Samuel Imitola",
            tareas: [
                {
                    titulo: "Configuracion",
                    descripcion: "Crear modulo de configuracion",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false
                }
            ]
        },
        4: {
            nombre: "Francisco Hernandez",
            tareas: [
                {
                    titulo: "Poster",
                    descripcion: "Crear poster para el proyecto",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false
                },
                {
                    titulo: "Controles",
                    descripcion: "Llevar los controles del play 5",
                    fecha: "2025-06-15",
                    prioridad: "alta",
                    completada: false
                }
            ],

        }
    };

    const modal = document.getElementById('memberModal');
    const closeBtn = document.querySelector('.close-modal');
    const memberNameElement = document.getElementById('member-name');
    const tasksContainer = document.getElementById('member-tasks');

    if (!modal || !closeBtn || !memberNameElement || !tasksContainer) {
        console.error('Error: No se encontraron todos los elementos del modal');
        return;
    }

    document.querySelectorAll('.member-avatar').forEach(avatar => {
        avatar.addEventListener('click', function (event) {
            event.stopPropagation();
            const memberId = this.getAttribute('data-member-id');
            const memberName = this.getAttribute('data-member-name');

            if (memberId && memberName) {
                mostrarTareasMiembro(memberId, memberName);
            } else {
                console.error('Error: Datos del miembro no encontrados');
            }
        });
    });

    function mostrarTareasMiembro(memberId, memberName) {
        const member = miembrosData[memberId];

        if (!member) {
            console.error('Miembro no encontrado');
            return;
        }

        memberNameElement.textContent = memberName;

        tasksContainer.innerHTML = '';

        if (member.tareas && member.tareas.length === 0) {
            tasksContainer.innerHTML = '<p class="no-tasks">Este miembro no tiene tareas asignadas.</p>';
        } else if (member.tareas) {
            member.tareas.forEach(tarea => {
                const tareaElement = document.createElement('div');
                tareaElement.className = 'task-item';
                tareaElement.innerHTML = `
                    <h3>${tarea.titulo}</h3>
                    <p>${tarea.descripcion}</p>
                    <div class="task-meta">
                        <span>Fecha: ${formatDate(tarea.fecha)}</span>
                        <span>Prioridad: ${tarea.prioridad}</span>
                    </div>
                    <div class="task-meta">
                        <span>Estado: ${tarea.completada ? '✅ Completada' : '🟡 Pendiente'}</span>
                    </div>
                `;
                tasksContainer.appendChild(tareaElement);
            });
        }

        modal.style.display = 'flex';
    }

    function formatDate(dateString) {
        if (!dateString) return "No especificada";

        try {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('es-ES', options);
        } catch (e) {
            console.error('Error formateando fecha:', e);
            return dateString;
        }
    }

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});