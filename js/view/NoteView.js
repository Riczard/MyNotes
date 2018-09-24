export class NoteView {
    constructor(controller){
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();

    }

    render(){
        return `<div class="note">
                    <div class="note-header" contenteditable="">${this.controller.note.title}
                    </div>
                    <button class="delete-btn">X</button>
                    <div class="note-text"><textarea>${this.controller.note.content}</textarea></div>
                </div>`
    }

    createElement(){
        let elem = document.createElement("template");
        elem.innerHTML = this.render().trim();
        return elem.content.firstChild;
    }

    registerEventListeners(){
        this.element.getElementsByClassName("delete-btn")[0].addEventListener("click", this.controller.handleRemove.bind(this.controller));
        this.element.getElementsByClassName("note-header")[0].addEventListener('input', this.controller.handleTitleChange.bind(this.controller));
        this.element.getElementsByTagName("textarea")[0].addEventListener('input', this.controller.handleContentChange.bind(this.controller));
    }


}