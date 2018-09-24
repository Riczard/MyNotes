import {storage} from "../Storage/Storage.js";

export class NoteController{
    constructor(note){
        this.note = note;
        storage.add(this.note);
    }

    handleContentChange(e){
        this.note.content = e.target.value;
        storage.save();
    }

    handleTitleChange(e){
        this.note.title = e.target.innerText;
        storage.save();
    }

    handleRemove(e){
        e.target.closest('.note').remove();
        storage.remove(this.note);
        delete this.model;
        delete this;
    }

}