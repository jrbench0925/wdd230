function displayMessage() {
    const oneDay = 60 * 60 * 24 * 1000;
    const visitDate = localStorage.getItem('lastVisit')
    const today = new Date();

    if (!visitDate) {
        document.getElementById("visitCount").textContent = "Welcome! Let us know if you have any questions.";
    }
    else {
        const differenceInDays = Math.floor(Math.abs(today - new Date(visitDate)) / oneDay);

        if (differenceInDays < 1){
            document.getElementById('visitCount').textContent = "Back so soon! Awesome";
        } else if (differenceInDays === 1) {
            document.getElementById('visitCount').textContent = "You last visited 1 day ago.";
        } else{
            document.getElementById('visitCount').textContent = `You last visited ${differenceInDays} days ago.`;
        }
    }
    localStorage.setItem('lastVisit', today);
}
displayMessage();