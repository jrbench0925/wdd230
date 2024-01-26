document.getElementById("copyright").innerHTML = new Date().getFullYear()

var modifiedDate = document.lastModified
document.getElementById("lastModified").innerHTML = modifiedDate;

const hamburgerButton = document.querySelector("#hamburger");
const mainNav = document.querySelector(".navigation");

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});
