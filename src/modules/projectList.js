import Project from "./project.js";

class ProjectList {
  #projects;

  constructor() {
    this.#projects = [];
    this.#projects.push(new Project("Inbox"));
    this.#projects.push(new Project("Today"));
    this.#projects.push(new Project("This Week"));
  }

  get projects() {
    return this.#projects;
  }

  addProject(project) {
    this.#projects.push(project);
  }

  removeProject(index) {
    this.#projects.splice(index, 1);
  }
}

export default ProjectList;
