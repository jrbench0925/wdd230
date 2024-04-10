document.getElementById("copyright").innerHTML = new Date().getFullYear()

const hamburgerButton = document.querySelector("#hamburger");
const mainNav = document.querySelector(".navigation");

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerButton.classList.toggle('show');
});