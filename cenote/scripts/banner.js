/* Removed Call To action button
document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const reservationBanner = document.getElementById('reservation-banner');

    closeButton.addEventListener('click', function () {
        reservationBanner.style.display = 'none';
    });
});
*/

document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'tempButton') {
        const highTempMessage = document.getElementById('high-temp-message');
        if (highTempMessage) {
            highTempMessage.style.display = 'none';
        }
    }
});