function setTimestamp(){
let currentTime = Date.now();
document.getElementById("submissionTime").value = currentTime;
}

document.addEventListener('DOMContentLoaded', setTimestamp);