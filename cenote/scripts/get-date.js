document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();

    const hamburgerButton = document.querySelector("#hamburger");
    const mainNav = document.querySelector(".nav-links");

    hamburgerButton.addEventListener('click', () => {
        mainNav.classList.toggle('show');
        hamburgerButton.classList.toggle('show');
    });
});