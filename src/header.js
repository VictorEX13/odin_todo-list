class Header {
  defaultHeader() {
    const header = document.createElement("header");
    const heading = document.createElement("h1");

    heading.textContent = "2 Doo";

    header.appendChild(heading);

    return header;
  }
}

export default Header;
