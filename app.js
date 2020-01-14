"use strict";
class ProjectInput {
    constructor() {
        this.templateInput = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importNode = document.importNode(this.templateInput.content, true);
        this.element = importNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const projInput = new ProjectInput();
