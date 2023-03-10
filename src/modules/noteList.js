class NoteList {
  #notes;

  constructor() {
    this.#notes = [];
  }

  get notes() {
    return this.#notes;
  }

  addNote(note) {
    this.#notes.push(note);
  }

  removeNote(index) {
    this.#notes.splice(index, 1);
  }
}

export default NoteList;
