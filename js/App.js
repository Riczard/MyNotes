"use strict";

import {ButtonController} from "./controller/ButtonController.js";
import {ButtonView} from "./view/ButtonView.js";
import {storage} from "./Storage/Storage.js";
import {NoteView} from "./view/NoteView.js";
import {NoteController} from "./controller/NoteController.js";

let buttonController = new ButtonController();
let buttonView = new ButtonView(buttonController);

let container = document.getElementById("add-btn");
container.appendChild(buttonView.element);

container = document.getElementById("notes-container");
for(let note of storage.notes){
    let noteController = new NoteController(note);
    let noteView = new NoteView(noteController);
    container.appendChild(noteView.element);
}