import {renderFooter} from '../js/shadow.js'


document.addEventListener("DOMContentLoaded", () => {
    const jsFooter = document.getElementById("shad-js-footer");
    if (jsFooter) {
        renderFooter(jsFooter);
    }
});