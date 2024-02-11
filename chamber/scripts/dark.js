
const modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("change", function () {
    const body = document.body;

    if (modeSwitch.checked) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
});