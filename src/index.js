import Project from "./project.js";
import "./style.css";
import "./firstLoad.js";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

library.add(faXmark);
dom.watch();

const inbox = new Project("Inbox");
