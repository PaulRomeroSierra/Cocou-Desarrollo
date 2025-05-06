import { Tasks } from './tasks.js';

export class User {
    #name;
    #email;
    #password;
    #tasks;

    constructor(name, email, password) {
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#tasks = new Tasks();
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get password() {
        return this.#password.hash()
    }

    set password(password) {
        this.#password = password
    }
}