import Header from "./header.js";
import Aside from "./aside.js";
import Main from "./mainContent.js";
import Footer from "./footer.js";

const body = document.querySelector("body");

const header = new Header();
const aside = new Aside();
const main = new Main();
const footer = new Footer();

body.append(
  header.defaultHeader(),
  aside.defaultAside(),
  main.defaultMain(),
  footer.defaultFooter()
);
