export class Tasks {
    #tasks

    constructor() {
        this.#tasks = []
    }

    get tasks() {
        return this.#tasks;
    }

    addTask(task) {
        this.#tasks.push(task);
    }

    removeTask(index) {
        this.#tasks.splice(index, 1);
    }
}
