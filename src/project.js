class Project {
  #title;
  #itemsList;

  constructor(title, itemsList = []) {
    this.#title = title;
    this.#itemsList = itemsList;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get itemsList() {
    return this.#itemsList;
  }

  addItem = (item) => {
    this.#itemsList.push(item);
  };
}

export default Project;
