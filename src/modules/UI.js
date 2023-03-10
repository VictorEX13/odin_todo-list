import ProjectList from "./projectList.js";
import NoteList from "./noteList.js";
import Project from "./project.js";
import Item from "./item.js";
import Note from "./note.js";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import "../styles/main.css";

class UI {
  static projectList = new ProjectList();
  static noteList = new NoteList();

  static loadHomePage() {
    const body = document.querySelector("body");

    body.append(
      UI.defaultHeader(),
      UI.defaultAside(),
      UI.defaultMain(),
      UI.defaultFooter()
    );

    UI.renderNotes();

    library.add(faXmark);
    dom.watch();
  }

  static defaultHeader() {
    const header = document.createElement("header");
    const heading = document.createElement("h1");

    heading.textContent = "2 Doo";

    header.appendChild(heading);

    return header;
  }

  static defaultAside() {
    const aside = document.createElement("aside");
    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const listItem = document.createElement("li");
    const listItemLink = document.createElement("a");
    listItemLink.setAttribute("href", "#");

    const inbox = listItem.cloneNode(true);
    const todayItems = listItem.cloneNode(true);
    const thisWeekItems = listItem.cloneNode(true);
    const projects = listItem.cloneNode(true);
    const notes = listItem.cloneNode(true);

    inbox.appendChild(listItemLink.cloneNode(true));
    todayItems.appendChild(listItemLink.cloneNode(true));
    thisWeekItems.appendChild(listItemLink.cloneNode(true));
    notes.appendChild(listItemLink.cloneNode(true));

    inbox.firstChild.textContent = "Inbox";
    todayItems.firstChild.textContent = "Today";
    thisWeekItems.firstChild.textContent = "This Week";
    notes.firstChild.textContent = "Notes";

    const projectListClone = list.cloneNode(true);
    projectListClone.classList.add("project-list");

    const addProject = listItem.cloneNode(true);
    addProject.appendChild(listItemLink.cloneNode(true));
    addProject.firstChild.textContent = "+ Add Project";

    projectListClone.appendChild(addProject);

    projects.textContent = "Projects";

    projects.appendChild(projectListClone);

    inbox.classList.add("inbox-link");
    todayItems.classList.add("today-link");
    thisWeekItems.classList.add("this-week-link");
    projects.classList.add("projects-link");
    notes.classList.add("notes-link");

    list.append(inbox, todayItems, thisWeekItems, projects, notes);

    nav.appendChild(list);
    aside.appendChild(nav);

    return aside;
  }

  static defaultMain() {
    const main = document.createElement("main");

    return main;
  }

  static defaultFooter() {
    const footer = document.createElement("footer");
    const copyright = document.createElement("small");

    copyright.textContent = "Copyright © 2023 VictorEX13";

    footer.appendChild(copyright);

    return footer;
  }

  static createTodoArticle(
    titleValue,
    dueDateValue,
    priorityValue,
    completeValue
  ) {
    const article = document.createElement("article");

    return article;
  }

  static renderNotes() {
    const main = document.querySelector("main");

    const container = document.createElement("div");
    container.classList.add("notes-container");

    for (let i = 0; i < UI.noteList.notes.length; i++) {
      container.append(
        UI.createNoteArticle(
          UI.noteList.notes[i].title,
          UI.noteList.notes[i].description
        )
      );
    }

    main.replaceChildren();
    main.appendChild(container);
  }

  static createNoteArticle(titleValue, descriptionValue) {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const noteContent = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const deleteButton = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-xmark");

    title.textContent = titleValue;
    description.textContent = descriptionValue;

    noteContent.append(title, description);

    article.classList.add("note-article");

    deleteButton.appendChild(icon);

    div.append(noteContent, deleteButton);

    article.append(div);

    return article;
  }
}

export default UI;
