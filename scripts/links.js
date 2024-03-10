const baseURL = "https://jbench0925.github.io/wdd230/";
const linksURL = "https://jrbench0925.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
    let output = '<section class="card"><h3>Learning Activities</h3><ul>';
    weeks.forEach((week) => {
        output += `<li>${week.lesson}: `;
        week.links.forEach((link, index) => {
            output += `<a href="${link.url}" target="_blank">${link.title}</a>`;
            if (index < week.links.length - 1) {
                output += ' | ';
            }
        });
        output += '</li>';
    });
    document.getElementById('links').innerHTML = output;
}