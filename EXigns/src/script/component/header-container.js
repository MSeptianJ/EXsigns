class HeaderContainer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
                    
            :host {
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                max-width: 1024px;
                width: 75%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .center {
                width: 100%;
                position: absolute;
                bottom: 0;
                margin-bottom: 25px;
                text-shadow: 6px 0 4px royalblue;
                text-align: center;
            }
            
            .title {
                height: 50px;
                margin-bottom: 5px;
                line-height: 50px;
                font-size: 48px;
                font-weight: bold;
                font-family: "Russo One", sans-serif;
                letter-spacing: 6px;
            }
            
            .sub-title {
                width: 100%;
                height: 16px;
                line-height: 16px;
                font-size: 16px;
                font-family: "Titillium Web", sans-serif;
            }
            
            /* Responsive Tablet */
            @media (min-width: 768px) {
               
                :host {
                    margin: 0;
                    padding: 0;
                }
            
                .center {
                    bottom: unset;
                    text-align: left;
                    margin: 0;
                    padding-left: 3%;
                    opacity: 0.8;
                }
            
                .sub-title {
                    width: 300px;
                    height: 50px;
                    line-height: 25px;
                    font-size: 24px;
                }
            }
            
            /* Responsive Laptop */
            @media (min-width: 1025px){         
                :host {
                    margin: 0;
                    padding: 0;
                    height: 80%;
                    top: 50%;
                    left: 45%;
                    transform: translate(-40%,-50%);
                }
            
                .center {
                    padding: 10%;
                }
                
                .sub-title {
                    width: 300px;
                    height: 50px;
                    line-height: 25px;
                    font-size: 24px;
                }
            }
        </style>
        <div class="center">
            <h1 class="title">EXigns</h1>
            <p class="sub-title">Providing Lots of Example for Your Designs</p>
        </div>`;
    }
}
customElements.define("header-container", HeaderContainer);