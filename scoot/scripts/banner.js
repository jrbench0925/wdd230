document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('closeButton');
    const reservationBanner = document.getElementById('reservation-banner');

    closeButton.addEventListener('click', function () {
        reservationBanner.style.display = 'none';
    });
});