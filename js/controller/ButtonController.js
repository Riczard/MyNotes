import {Note} from "../model/Note.js";
import {NoteView} from "../view/NoteView.js";
import {NoteController} from "./NoteController.js";

export class ButtonController {
    constructor() {
    }

    handleOnClick() {
        let note = new Note();
        let noteController = new NoteController(note);
        let noteView = new NoteView(noteController);
        let container = document.getElementById("notes-container");
        container.appendChild(noteView.element);
    }
}
