import "../component/content-list.js";
import "../component/search-box.js";
import FlatIconApi from "../data/flat-icon-api.js";

const main = () => {
    $("#title-box").hide();
    const searchBox = document.querySelector("search-box");
    const contentList = document.querySelector("content-list");
    const icon = "ICON";

    const onButtonSearchClicked = async () => {
        try{
            contentList.shadowRoot.innerHTML = '';

            if (searchBox.selection === icon) {
                const result = await FlatIconApi.searchIcon(searchBox.value);
                renderResult(result);
            } else {
                $("#title-box").fadeOut( () => {
                    $("header").fadeIn();
                });
                fallbackResult("This feature has not implemented yet");
            }
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = results => {
        contentList.contents = results;
    };

    const fallbackResult = message => {
        contentList.renderError(message);
    };

    searchBox.clickEvent = onButtonSearchClicked;
};
export default main;