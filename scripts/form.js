const ratingvale = document.getElementById("ratingvalue");
const range = document.getElementById("rating");


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingvalue.innerHTML = range.value;
};

document.addEventListener("DOMContentLoaded", function () {

	function handleSubmit(event) {

		event.preventDefault();

		let formt = event.target;
		let formData = new FormData(formt);

		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});

const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#confirmPass");
const message = document.querySelector("#message")

pass2.addEventListener("focusout", checkSame)

function checkSame() {

    if (pass1.value !== pass2.value) {

        message.textContent = "Password does not match previously entered password.";
        message.style.visibility = "show";

		pass2.style.backgroundColor = "linen";
        pass1.value = "";
		pass2.value = "";
		pass1.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "white";
		pass2.style.color = "black";
	}
};