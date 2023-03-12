import ProjectList from "./projectList.js";
import NoteList from "./noteList.js";
import Project from "./project.js";
import Item from "./item.js";
import Note from "./note.js";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import "../styles/main.css";

class UI {
  static projectList = new ProjectList();
  static noteList = new NoteList();
  static selectedTab = 0;

  static loadHomePage() {
    const body = document.querySelector("body");

    body.append(
      UI.defaultHeader(),
      UI.defaultAside(),
      UI.defaultMain(),
      UI.defaultFooter()
    );

    UI.renderTodos();

    library.add(faXmark);
    library.add(faPlus);
    library.add(faCheck);
    library.add(faPenToSquare);
    dom.watch();
  }

  // DEFAULT COMPONENTS
  // -----------------------------------------------------

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
    const addButton = document.createElement("button");
    const plusIcon = document.createElement("i");

    addButton.classList.add("add-button");
    plusIcon.classList.add("fa-solid", "fa-plus");
    listItemLink.setAttribute("href", "#");

    const inbox = listItem.cloneNode(true);
    const todayItems = listItem.cloneNode(true);
    const thisWeekItems = listItem.cloneNode(true);
    const projects = listItem.cloneNode(true);
    const notes = listItem.cloneNode(true);

    inbox.setAttribute("data-index", "0");
    todayItems.setAttribute("data-index", "1");
    thisWeekItems.setAttribute("data-index", "2");

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
    addProject.classList.add("add-project");
    addProject.appendChild(plusIcon.cloneNode(true));
    addProject.appendChild(listItemLink.cloneNode(true));
    addProject.lastChild.textContent = "Add Project";

    addProject.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      if (!modal) {
        UI.renderAddProjectModal();
      }
    });

    projects.textContent = "Projects";

    projects.append(projectListClone, addProject);

    inbox.classList.add("inbox-link");
    todayItems.classList.add("today-link");
    thisWeekItems.classList.add("this-week-link");
    projects.classList.add("projects-link");
    notes.classList.add("notes-link");

    list.append(inbox, todayItems, thisWeekItems, projects, notes);

    nav.appendChild(list);
    addButton.appendChild(plusIcon.cloneNode(true));

    addButton.addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      if (!modal) {
        UI.renderAddItemModal(UI.selectedTab);
      }
    });

    inbox.addEventListener("click", () => {
      const selectedTabTitle = document.querySelector(".tab-title");

      UI.selectedTab = inbox.getAttribute("data-index");

      selectedTabTitle.textContent = "Inbox";

      UI.renderTodos(UI.selectedTab);
    });

    todayItems.addEventListener("click", () => {
      const selectedTabTitle = document.querySelector(".tab-title");

      UI.selectedTab = todayItems.getAttribute("data-index");

      selectedTabTitle.textContent = "Today";

      UI.renderTodos(UI.selectedTab);
    });

    thisWeekItems.addEventListener("click", () => {
      const selectedTabTitle = document.querySelector(".tab-title");

      UI.selectedTab = thisWeekItems.getAttribute("data-index");

      selectedTabTitle.textContent = "This Week";

      UI.renderTodos(UI.selectedTab);
    });

    notes.addEventListener("click", () => {
      const selectedTabTitle = document.querySelector(".tab-title");

      selectedTabTitle.textContent = "Notes";

      UI.selectedTab = -1;
      UI.renderNotes();
    });

    aside.append(nav, addButton);

    return aside;
  }

  static defaultMain() {
    const main = document.createElement("main");
    const mainSection = document.createElement("section");
    const selectedTabTitle = document.createElement("h2");

    mainSection.classList.add("tab-section");
    selectedTabTitle.classList.add("tab-title");

    selectedTabTitle.textContent = "Inbox";

    mainSection.appendChild(selectedTabTitle);

    main.appendChild(mainSection);

    return main;
  }

  static defaultFooter() {
    const footer = document.createElement("footer");
    const copyright = document.createElement("small");

    copyright.textContent = "Copyright © 2023 VictorEX13";

    footer.appendChild(copyright);

    return footer;
  }

  // Dynamic Components
  // -----------------------------------------------------

  static renderAddProjectModal() {
    const body = document.querySelector("body");
    const modal = document.createElement("modal");
    const form = document.createElement("form");
    const inputGroup = document.createElement("div");
    const inputContainer = document.createElement("div");

    const title = document.createElement("input");
    const submitButton = document.createElement("button");
    const closeButton = document.createElement("button");

    const titleLabel = document.createElement("label");

    title.id = "title";

    title.setAttribute("required", "true");

    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");

    modal.classList.add("modal");
    inputContainer.classList.add("input-container");
    inputGroup.classList.add("input-group");
    submitButton.classList.add("submit-button");
    closeButton.classList.add("times-button");

    submitButton.textContent = "Add";

    const titleContainer = inputContainer.cloneNode(true);

    titleContainer.append(titleLabel, title);

    closeButton.appendChild(xIcon);
    inputGroup.appendChild(titleContainer);

    closeButton.addEventListener("click", () => {
      modal.parentElement.removeChild(modal);
    });

    form.append(inputGroup, submitButton);

    form.addEventListener("submit", (e) => {
      const submittedTitle = document.querySelector("#title");

      UI.projectList.addProject(new Project(submittedTitle.value));

      console.log(UI.projectList);

      submittedTitle.value = "";

      UI.renderProjects();

      e.preventDefault();
    });

    modal.append(form, closeButton);
    body.appendChild(modal);
  }

  static renderAddItemModal(selectedIndex) {
    const body = document.querySelector("body");
    const modal = document.createElement("div");
    const form = document.createElement("form");
    const inputGroup = document.createElement("div");
    const inputContainer = document.createElement("div");

    const title = document.createElement("input");
    const description = document.createElement("textarea");
    const submitButton = document.createElement("button");
    const closeButton = document.createElement("button");

    const titleLabel = document.createElement("label");
    const descriptionLabel = document.createElement("label");

    title.id = "title";
    description.id = "description";

    title.setAttribute("required", "true");
    description.setAttribute("required", "true");

    titleLabel.setAttribute("for", "title");
    descriptionLabel.setAttribute("for", "description");
    titleLabel.textContent = "Title";
    descriptionLabel.textContent = "Description";

    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");

    modal.classList.add("modal");
    inputContainer.classList.add("input-container");
    inputGroup.classList.add("input-group");
    submitButton.classList.add("submit-button");
    closeButton.classList.add("times-button");

    submitButton.textContent = "Add";

    const titleContainer = inputContainer.cloneNode(true);
    const descriptionContainer = inputContainer.cloneNode(true);

    titleContainer.append(titleLabel, title);
    descriptionContainer.append(descriptionLabel, description);

    closeButton.appendChild(xIcon);
    inputGroup.append(titleContainer, descriptionContainer);

    if (selectedIndex >= 0) {
      const dueDate = document.createElement("input");
      const priority = document.createElement("select");

      const low = document.createElement("option");
      const normal = document.createElement("option");
      const high = document.createElement("option");

      const dueDateLabel = document.createElement("label");
      const priorityLabel = document.createElement("label");

      dueDate.id = "due-date";
      priority.id = "priority";

      dueDateLabel.setAttribute("for", "due-date");
      priorityLabel.setAttribute("for", "priority");
      dueDateLabel.textContent = "Date";
      priorityLabel.textContent = "Priority";

      dueDate.setAttribute("required", true);
      priority.setAttribute("required", true);

      dueDate.setAttribute("type", "date");
      low.setAttribute("value", "low");
      normal.setAttribute("value", "normal");
      high.setAttribute("value", "high");

      low.textContent = "low";
      normal.textContent = "normal";
      high.textContent = "high";

      priority.append(low, normal, high);

      const dueDateContainer = inputContainer.cloneNode(true);
      const priorityContainer = inputContainer.cloneNode(true);

      dueDateContainer.append(dueDateLabel, dueDate);
      priorityContainer.append(priorityLabel, priority);

      inputGroup.append(dueDateContainer, priorityContainer);

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const submittedTitle = document.querySelector("#title");
        const submittedDescription = document.querySelector("#description");
        const submittedDueDate = document.querySelector("#due-date");
        const submittedPriority = document.querySelector("#priority");

        UI.projectList.projects[selectedIndex].addItem(
          new Item(
            submittedTitle.value,
            submittedDescription.value,
            submittedDueDate.value,
            submittedPriority.value
          )
        );

        const container = document.querySelector(".todos-container");

        container.appendChild(
          UI.createTodoArticle(
            UI.projectList.projects[selectedIndex].title,
            submittedTitle.value,
            submittedDueDate.value,
            submittedPriority.value,
            false,
            UI.projectList.projects[selectedIndex].itemList.length - 1
          )
        );

        submittedTitle.value = "";
        submittedDescription.value = "";
        submittedDueDate.value = "";
        submittedPriority.value = "low";
      });
    } else if (selectedIndex < 0) {
      form.addEventListener("submit", (e) => {
        const submittedTitle = document.querySelector("#title");
        const submittedDescription = document.querySelector("#description");
        UI.noteList.addNote(
          new Note(submittedTitle.value, submittedDescription.value)
        );

        submittedTitle.value = "";
        submittedDescription.value = "";

        const container = document.querySelector(".notes-container");

        container.appendChild(
          UI.createNoteArticle(
            UI.noteList.notes[UI.noteList.notes.length - 1].title,
            UI.noteList.notes[UI.noteList.notes.length - 1].description,
            UI.noteList.notes.length - 1
          )
        );

        e.preventDefault();
      });
    }

    closeButton.addEventListener("click", () => {
      modal.parentElement.removeChild(modal);
    });

    form.append(inputGroup, submitButton);

    modal.append(form, closeButton);
    body.appendChild(modal);
  }

  static renderEditItemModal(projectTitle, itemIndex) {
    const body = document.querySelector("body");
    const modal = document.createElement("div");
    const form = document.createElement("form");
    const inputGroup = document.createElement("div");
    const inputContainer = document.createElement("div");

    const title = document.createElement("input");
    const description = document.createElement("textarea");
    const dueDate = document.createElement("input");
    const priority = document.createElement("select");
    const submitButton = document.createElement("button");
    const closeButton = document.createElement("button");

    const low = document.createElement("option");
    const normal = document.createElement("option");
    const high = document.createElement("option");

    const titleLabel = document.createElement("label");
    const descriptionLabel = document.createElement("label");
    const dueDateLabel = document.createElement("label");
    const priorityLabel = document.createElement("label");

    title.id = "title";
    description.id = "description";
    dueDate.id = "due-date";
    priority.id = "priority";

    title.setAttribute("required", "true");
    description.setAttribute("required", "true");
    dueDate.setAttribute("required", "true");
    priority.setAttribute("required", "true");

    titleLabel.setAttribute("for", "title");
    descriptionLabel.setAttribute("for", "description");
    dueDateLabel.setAttribute("for", "due-date");
    priorityLabel.setAttribute("for", "priority");
    titleLabel.textContent = "Title";
    descriptionLabel.textContent = "Description";
    dueDateLabel.textContent = "Date";
    priorityLabel.textContent = "Priority";

    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");

    modal.classList.add("modal");
    inputContainer.classList.add("input-container");
    inputGroup.classList.add("input-group");
    submitButton.classList.add("submit-button");
    closeButton.classList.add("times-button");

    submitButton.textContent = "Add";

    const titleContainer = inputContainer.cloneNode(true);
    const descriptionContainer = inputContainer.cloneNode(true);
    const dueDateContainer = inputContainer.cloneNode(true);
    const priorityContainer = inputContainer.cloneNode(true);

    titleContainer.append(titleLabel, title);
    descriptionContainer.append(descriptionLabel, description);
    dueDateContainer.append(dueDateLabel, dueDate);
    priorityContainer.append(priorityLabel, priority);

    closeButton.appendChild(xIcon);
    inputGroup.append(titleContainer, descriptionContainer);

    dueDate.setAttribute("type", "date");
    low.setAttribute("value", "low");
    normal.setAttribute("value", "normal");
    high.setAttribute("value", "high");

    low.textContent = "low";
    normal.textContent = "normal";
    high.textContent = "high";

    priority.append(low, normal, high);

    inputGroup.append(dueDateContainer, priorityContainer);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const submittedTitle = document.querySelector("#title");
      const submittedDescription = document.querySelector("#description");
      const submittedDueDate = document.querySelector("#due-date");
      const submittedPriority = document.querySelector("#priority");

      UI.projectList.projects[UI.selectedTab].itemList[itemIndex].title =
        submittedTitle.value;
      UI.projectList.projects[UI.selectedTab].itemList[itemIndex].description =
        submittedDescription.value;
      UI.projectList.projects[UI.selectedTab].itemList[itemIndex].dueDate =
        submittedDueDate.value;
      UI.projectList.projects[UI.selectedTab].itemList[itemIndex].priority =
        submittedPriority.value;

      const articleIndex = `[data-${projectTitle}-index="${itemIndex}"]`;

      const articleToUpdate = document.querySelector(`${articleIndex}`);

      articleToUpdate.classList.remove("low", "normal", "high");
      articleToUpdate.classList.add(submittedPriority.value);

      const articleTitle = document.querySelector(
        `${articleIndex}>.todo-title`
      );

      const articleDueDate = document.querySelector(
        `${articleIndex}>.todo-due-date`
      );

      articleTitle.textContent = submittedTitle.value;

      articleDueDate.textContent = submittedDueDate.value;

      submittedTitle.value = "";
      submittedDescription.value = "";
      submittedDueDate.value = "";
      submittedPriority.value = "low";
    });

    closeButton.addEventListener("click", () => {
      modal.parentElement.removeChild(modal);
    });

    form.append(inputGroup, submitButton);

    modal.append(form, closeButton);
    body.appendChild(modal);
  }

  static renderProjects() {
    const navProjectList = document.querySelector(".project-list");

    navProjectList.replaceChildren();

    for (let i = 3; i < UI.projectList.projects.length; i++) {
      const projectListItem = document.createElement("li");
      projectListItem.textContent = UI.projectList.projects[i].title;

      projectListItem.setAttribute("data-index", i.toString());

      projectListItem.addEventListener("click", () => {
        const selectedTabTitle = document.querySelector(".tab-title");

        UI.selectedTab = projectListItem.getAttribute("data-index");

        selectedTabTitle.textContent =
          UI.projectList.projects[UI.selectedTab].title;

        UI.renderTodos(UI.selectedTab);
      });

      navProjectList.appendChild(projectListItem);
    }
  }

  static renderTodos() {
    const selectedTabSection = document.querySelector(".tab-section");
    const selectedTabContainer = document.querySelector(".tab-section>div");

    const container = document.createElement("div");
    container.classList.add("todos-container");

    for (
      let i = 0;
      i < UI.projectList.projects[UI.selectedTab].itemList.length;
      i++
    ) {
      container.append(
        UI.createTodoArticle(
          UI.projectList.projects[UI.selectedTab].title,
          UI.projectList.projects[UI.selectedTab].itemList[i].title,
          UI.projectList.projects[UI.selectedTab].itemList[i].dueDate,
          UI.projectList.projects[UI.selectedTab].itemList[i].priority,
          UI.projectList.projects[UI.selectedTab].itemList[i].complete,
          i
        )
      );
    }

    if (selectedTabContainer) {
      selectedTabSection.removeChild(selectedTabContainer);
    }
    selectedTabSection.appendChild(container);
  }

  static createTodoArticle(
    projectTitle,
    titleValue,
    dueDateValue,
    priorityValue,
    completeValue,
    itemIndex
  ) {
    const article = document.createElement("article");
    const checkComplete = document.createElement("div");
    const todoTitle = document.createElement("span");
    const todoDueDate = document.createElement("span");
    const todoEdit = document.createElement("div");
    const todoDelete = document.createElement("div");

    const checkIcon = document.createElement("i");
    const editIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");

    todoTitle.classList.add("todo-title");
    todoDueDate.classList.add("todo-due-date");
    checkComplete.classList.add("todo-check");
    todoEdit.classList.add("todo-edit");
    todoDelete.classList.add("todo-delete");

    checkIcon.classList.add("fa-solid", "fa-check");
    editIcon.classList.add("fa-regular", "fa-pen-to-square");
    deleteIcon.classList.add("fa-solid", "fa-xmark");

    article.classList.add("todo-article");

    article.setAttribute(`data-${projectTitle}-index`, String(itemIndex));

    priorityValue === "low"
      ? article.classList.add("low")
      : priorityValue === "normal"
      ? article.classList.add("normal")
      : article.classList.add("high");

    todoTitle.textContent = titleValue;
    todoDueDate.textContent = dueDateValue;

    if (completeValue) {
      checkComplete.appendChild(checkIcon);
      todoTitle.classList.toggle("checked-item");
    }
    todoEdit.appendChild(editIcon);
    todoDelete.appendChild(deleteIcon);

    checkComplete.addEventListener("click", () => {
      const isChecked = checkComplete.hasChildNodes();

      UI.projectList.projects[UI.selectedTab].itemList[
        Number(article.getAttribute(`data-${projectTitle}-index`))
      ].complete = !isChecked;

      todoTitle.classList.toggle("checked-item");

      isChecked
        ? checkComplete.replaceChildren()
        : checkComplete.appendChild(checkIcon);
    });

    todoEdit.addEventListener("click", () => {
      UI.renderEditItemModal(
        projectTitle,
        Number(article.getAttribute(`data-${projectTitle}-index`))
      );
    });

    todoDelete.addEventListener("click", () => {
      UI.projectList.projects[UI.selectedTab].removeItem(itemIndex);
      article.parentElement.removeChild(article);

      for (
        let i = Number(article.getAttribute(`data-${projectTitle}-index`));
        i < UI.projectList.projects[UI.selectedTab].itemList.length;
        i++
      ) {
        const articleToUpdate = document.querySelector(
          `[data-${projectTitle}-index="${i + 1}"]`
        );
        articleToUpdate.setAttribute(`data-${projectTitle}-index`, String(i));
      }
    });

    article.append(checkComplete, todoTitle, todoDueDate, todoEdit, todoDelete);

    return article;
  }

  static renderNotes() {
    const selectedTabSection = document.querySelector(".tab-section");
    const selectedTabContainer = document.querySelector(".tab-section>div");

    const container = document.createElement("div");
    container.classList.add("notes-container");

    for (let i = 0; i < UI.noteList.notes.length; i++) {
      container.append(
        UI.createNoteArticle(
          UI.noteList.notes[i].title,
          UI.noteList.notes[i].description,
          i
        )
      );
    }

    if (selectedTabContainer) {
      selectedTabSection.removeChild(selectedTabContainer);
    }
    selectedTabSection.appendChild(container);
  }

  static createNoteArticle(titleValue, descriptionValue, itemIndex) {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const noteContent = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const deleteButton = document.createElement("button");
    const xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");

    title.textContent = titleValue;
    description.textContent = descriptionValue;

    noteContent.append(title, description);

    article.classList.add("note-article");
    deleteButton.classList.add("times-button");

    article.setAttribute("data-note-index", String(itemIndex));
    title.setAttribute("contenteditable", "true");
    description.setAttribute("contenteditable", "true");

    deleteButton.appendChild(xIcon);

    title.addEventListener("blur", () => {
      UI.noteList.notes[Number(article.getAttribute("data-note-index"))].title =
        title.textContent;
    });

    description.addEventListener("blur", () => {
      UI.noteList.notes[
        Number(article.getAttribute("data-note-index"))
      ].description = description.textContent;
    });

    deleteButton.addEventListener("click", () => {
      UI.noteList.removeNote(article.getAttribute("data-note-index"));
      article.parentElement.removeChild(article);

      for (
        let i = Number(article.getAttribute("data-note-index"));
        i < UI.noteList.notes.length;
        i++
      ) {
        const articleToUpdate = document.querySelector(
          `[data-note-index="${i + 1}"]`
        );
        articleToUpdate.setAttribute("data-note-index", String(i));
      }
    });

    div.append(noteContent, deleteButton);

    article.append(div);

    return article;
  }
}

export default UI;
