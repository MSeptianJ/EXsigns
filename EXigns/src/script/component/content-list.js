import "./content-item.js";

class ContentList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set contents(contents) {
        this._contents = contents;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `<h2 class="error-message">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host.error-message {
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    margin: 0 auto;
                    font-size: 20px;
                    text-align: center;
                    color: rgba(255,158,158,0.5);
                }
            </style>
        `;

        this._contents.forEach(content => {
            const contentItemEl = document.createElement("content-item");
            contentItemEl.content = content;
            this.shadowDOM.appendChild(contentItemEl);
        })
    }
}
customElements.define("content-list", ContentList);