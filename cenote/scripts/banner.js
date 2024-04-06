document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'tempButton') {
        const highTempMessage = document.getElementById('high-temp-message');
        if (highTempMessage) {
            highTempMessage.style.display = 'none';
        }
    }
});