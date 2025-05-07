import { getActiveUser } from "./user_manager.js";

const bienvenida = document.getElementById("bienvenida");
bienvenida.textContent = bienvenida.textContent.replace("{UserName}", getActiveUser().name);
