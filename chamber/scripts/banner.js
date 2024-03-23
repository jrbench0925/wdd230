document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeBtn = document.getElementById("closeBanner");

    const today = new Date();
    const dayOfWeek = today.getDay();

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
    //banner.style.display = 'block'; //check banner
    closeBtn.addEventListener("click", function () {
        banner.style.display = "none";
    });
});