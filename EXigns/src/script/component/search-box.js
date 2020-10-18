class SearchBox extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#search").value;
    }

    get selection(){
        if (window.innerWidth < 768){
            let selection;
            return selection = "ICON";
        }
        return this.shadowDOM.querySelector(".default-option").innerText;
    }

    render() {
        this.shadowDOM.innerHTML =`
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                /* Search Box */
                :host {
                    z-index: 2;
                    margin: 0 auto;
                    max-width: 800px;
                    width: 80%;
                    padding: 20px;
                    background: rgb(83,2,126);
                    color: white;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 0 10px 0 rgb(169,16,251);
                }
                
                .search-title {
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                
                .flex-row {
                    width: 100%;
                    display: flex;
                }
                
                /* Dropdown Options */
                .dropdown {
                    position: relative;
                    flex-basis: 20%;
                    margin-right: 10px;
                    background: rgb(115,3,175);
                    padding: 20px;
                    border-radius: 8px;
                    cursor: pointer;
                }
                
                .dropdown .default-option {
                    display: none;
                }
                
                .dropdown ul {
                    width: 200%;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    background: rgb(115,3,175);
                    border-radius: 8px;
                    padding: 20px;
                    display: none;
                }
                
                .dropdown ul.active {
                    display: block;
                }
                
                .dropdown ul li {
                    width: 100%;
                    height: 100%;
                    padding-bottom: 20px;
                    list-style: none;
                }
                
                .dropdown ul li:last-child {
                    padding-bottom: 0;
                }
                
                .dropdown ul li:hover {
                    color: rgb(104,193,250);
                }
                
                .dropdown:before {
                    content: "";
                    position: absolute;
                    top: 60%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    border: 9px solid;
                    border-color: rgb(104,193,250) transparent transparent transparent;
                }
                
  
                /* Search Input */
                .search-area {
                    position: relative;
                    display: flex;
                    width: 100%;
                }
                
                .search-area input {
                    background: none;
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-radius: 8px;
                    background: rgb(115,3,175);
                    color: white;
                    padding-left: 20px;
                    padding-right: 100px;
                    font-size: 16px;
                }
                
                .search-area ::placeholder {
                    color: #a2a0a0;
                    opacity: 0.5;
                }
                
                .search-area button {
                    position: absolute;
                    top: 50%;
                    right: 2%;
                    width: 80px;
                    padding: 8px;
                    transform: translateY(-50%);
                    background: rgb(83,2,126);
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-size: 14px;
                    cursor: pointer;
                }
                /* Responsive Tablet */
                @media (min-width: 768px) {
                   
                    /* Search Box */
                    .dropdown .default-option {
                        display: block;
                        text-transform: uppercase;
                        line-height: 14px;
                        font-size: 14px;
                    }
                    
                    .dropdown:before {
                        right: 10px;
                        left: unset;
                        transform: translateY(-50%);
                    }
                
                    .dropdown ul {
                        width: 100%;
                        top: 75px;
                    }
                }
            </style>
            <label for="search" class=search-title>Search</label>
                <div class="flex-row">
                    <div class="dropdown">
                        <div class="default-option">Icon</div>
                        <ul class="options">
                            <li class="option">Icon</li>
                            <li class="option">Picture</li>
                            <li class="option">Logo</li>
                            <li class="option">Vector</li>
                        </ul>
                    </div>
                    <div class="search-area">
                        <input type="search" id="search" name="icon-search" placeholder="Type a word">
                        <button id="searchButton" type="submit">Search</button>
                    </div>
                </div>
        `;

        this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);

        // Dropdown options and changing placeholder
        const searchBox = document.querySelector("search-box");
        const shadowDOM = searchBox.shadowRoot;
        const dropDown = shadowDOM.querySelector(".dropdown");
        const options = shadowDOM.querySelector(".options");
        const option = shadowDOM.querySelectorAll(".option");
        const defOpt = shadowDOM.querySelector(".default-option");

        dropDown.addEventListener("click", event => {
            if (event.currentTarget !== event.target) {
                return ;
            }
            options.classList.toggle("active");
        });

        for (let selections of option) {
            selections.addEventListener("click", event => {
                const target = event.target;
                defOpt.innerText = target.innerText;
                options.classList.remove("active");
            });
        }
    }
}
customElements.define("search-box", SearchBox);