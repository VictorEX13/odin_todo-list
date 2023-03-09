class NoteArticle {
  createNoteArticle(titleValue, descriptionValue) {
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

export default NoteArticle;
