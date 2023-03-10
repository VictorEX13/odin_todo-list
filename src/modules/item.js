class Item {
  #title;
  #description;
  #dueDate;
  #priority;
  #complete;

  constructor(title, description, dueDate, priority, complete = false) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#complete = complete;
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

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    this.#dueDate = value;
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    this.#priority = value;
  }

  get complete() {
    return this.#complete;
  }

  set complete(value) {
    this.#complete = value;
  }
}

export default Item;
