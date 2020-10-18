class ContentItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set content(content) {
        this._content =content;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
        
            :host {
                max-width: 120px;
                width: 100%;
                padding: 20px;
                margin: 5px 10px;
                background: white;
                box-shadow: 0 0 7px 0 rgb(150, 146, 146);
            }
            
            :host .content-Img {
                display: block;
                top: 0;
                margin: 0 auto;
                width: 100%;
            }
            
            .info {
                padding: 6px;
                font-size: 10px;
                margin: 10px 0 0;
                background-color: #efefef;
                border-radius: 6px;
                text-align: center;
            }
            
            .des {
                font-size: 12px;
            }
            
            .download-logo {
                width: 16px;
            }
        </style>
        <img class="content-Img" src="${this._content.images.svg}" alt="Searched Content">
        <p class="info des">${this._content.description}</p>
        <p class="info">Download: ${this._content.downloads}</p>
    `;
    }
}
customElements.define("content-item", ContentItem);