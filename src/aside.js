class Aside {
  defaultAside() {
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

    const projectList = list.cloneNode(true);
    projectList.classList.add("project-list");

    const addProject = listItem.cloneNode(true);
    addProject.appendChild(listItemLink.cloneNode(true));
    addProject.firstChild.textContent = "+ Add Project";

    projectList.appendChild(addProject);

    projects.textContent = "Projects";

    projects.appendChild(projectList);

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
}

export default Aside;
