class Notes {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get description() {
    return this.description;
  }

  set description(description) {
    this.description = description;
  }
}

export default Notes;
