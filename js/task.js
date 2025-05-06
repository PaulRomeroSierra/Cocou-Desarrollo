export class Task {
    #title;
    #description;
    #date;

    constructor(title, description, date) {
        this.#title = title;
        this.#description = description;
        this.#date = date;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get description() {
        return this.#description;
    }

    set description(description) {
        this.#description = description;
    }
    
    set date(date) {
        this.#date = date;
    }

    get date() {
        return this.#date;
    }
}
