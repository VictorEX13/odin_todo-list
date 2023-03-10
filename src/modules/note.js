class Note {
  #title;
  #description;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }
}

export default Note;
