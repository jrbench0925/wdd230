document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateForm() {
        const fields = [
            { name: 'fname', message: 'Please enter your first name.' },
            { name: 'lname', message: 'Please enter your last name.' },
            { name: 'email', message: 'Please enter a valid email address.' },
            { name: 'phone', message: 'Please enter a valid phone number.' },
            { name: 'trip-start', message: 'Please select a trip start date.' },
            { name: 'trip-end', message: 'Please select a trip end date.' },
            { name: 'state', message: 'Please enter your state or country.' }
        ];

        for (const field of fields) {
            const value = form.elements[field.name].value.trim();
            if (value === '') {
                showError(field.name, field.message);
                return false;
            }
        }

        const phone = form.elements['phone'].value.trim();
        if (!isNumeric(phone)) {
            showError('phone', 'Please enter a valid phone number.');
            return false;
        }

        const vehicles = ['metro', 'dio', 'pcx150', 'pioneer', 'jeep2', 'jeep4'];
        for (const vehicle of vehicles) {
            const quantity = form.elements[vehicle].value.trim();
            if (quantity === 'Select Quantity') {
                showError(vehicle, 'Please select a quantity for each vehicle.');
                return false;
            }
        }

        const location = form.elements['location'];
        if (!locationChecked(location)) {
            showError('location', 'Please select a pickup/delivery location.');
            return false;
        }

        return true;
    }

    function showError(fieldName, message) {
        const field = form.elements[fieldName];
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '16px';
        field.parentNode.appendChild(errorMessage);
    }

    function isNumeric(str) {
        return /^\d+$/.test(str);
    }

    function locationChecked(location) {
        for (let i = 0; i < location.length; i++) {
            if (location[i].checked) {
                return true;
            }
        }
        return false;
    }
});
