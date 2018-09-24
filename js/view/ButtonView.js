export class ButtonView {
    constructor(controller) {
        this.controller = controller;
        this.element = this.createElement();
        this.registerEventListeners();
    }

    render() {
        return "<button id=\"btn\">Add Note</button>";
    }

    createElement() {

        let btn = document.createElement('BUTTON');
        let btnText = document.createTextNode("Add Note");
        btn.id = "btn";
        btn.appendChild(btnText);
        return btn;
    }

    registerEventListeners() {
        this.element.addEventListener("click", this.controller.handleOnClick.bind(this.controller));
    }

}
