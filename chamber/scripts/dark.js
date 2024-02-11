const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const nav = document.querySelector("main ul");
const firsth3 = document.querySelector("main h3");
const cardP1 = document.querySelector("main p");

let elementBackgroundColor = "#161616";
let backgroundColor = "#000000";


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = backgroundColor;
        header.style.background = elementBackgroundColor;
        main.style.color = "#faebd7";
        footer.style.background = elementBackgroundColor;
        nav.style.background = elementBackgroundColor;
        cardP1.style.background = elementBackgroundColor;
        firsth3.style.background = elementBackgroundColor;


        modeButton.textContent = "🔆";
    } else {
        body.style.background = "";
        header.style.background = "";
        main.style.color = "";
        footer.style.background = "";
        nav.style.background = "";
        firsth3.style.background = "";
        modeButton.textContent = "🕶️";
    }
});