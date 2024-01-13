document.getElementById("copyright").innerHTML = new Date().getFullYear()

let modifiedDate = new Date(document.lastModified);
let fullDate = modifiedDate.toLocaleString('en-US', { month: "2-digit", day: "2-digit", year: "numeric" });
let time = modifiedDate.toLocaleString('en-GB', { hour: "2-digit", minute: "2-digit", second: "2-digit" });
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;
