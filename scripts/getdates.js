document.getElementById("copyright").innerHTML = new Date().getFullYear()

var modifiedDate = document.lastModified
document.getElementById("lastModified").innerHTML = modifiedDate;


//Hamburger Menu
const hamburgerButton = document.querySelector("#hamburger");
const mainNav = document.querySelector(".navigation");

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first visit. Welcome!";
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
