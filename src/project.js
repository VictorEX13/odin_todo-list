class Project {
  #title;
  #itemList;

  constructor(title, itemList = []) {
    this.#title = title;
    this.#itemList = itemList;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get itemList() {
    return this.#itemList;
  }

  addItem = (item) => {
    this.#itemList.push(item);
  };

  removeItem = (index) => {
    this.#itemList.splice(index, 1);
  };
}

export default Project;
