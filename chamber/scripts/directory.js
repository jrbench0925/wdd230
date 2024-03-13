const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("membersData");
const url = "https://jrbench0925.github.io/wdd230/chamber/data/members.json";
const membersData = document.querySelector('#membersData');

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


let mode = 'grid';

async function getLinks() {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.members);
}

function displayLinks(links) {
    membersData.innerHTML = '';
    links.forEach(link => {
        const article = document.createElement('article');
        

        if (mode === 'grid') {
            article.innerHTML = `
                <img src="${link.logo}" alt="${link.name}">
                <p>${link.address}</p>
                <p>${link.phone}</p>
                <p><a href="${link.website}">${link.website}</a></p>
                <p>${link.membershipLevel}</p>
            `;
        } else if (mode === 'list') {
            article.innerHTML = `
                <h3>${link.name}</h3>
                <p>${link.address}</p>
                <p>${link.phone}</p>
                <p><a href="${link.website}">${link.website}</a></p>
                <p>${link.membershipLevel}</p>
            `;
        }

        membersData.appendChild(article);
    });
}

getLinks();

gridbutton.addEventListener("click", () => {
    mode = 'grid';
    getLinks();
});

listbutton.addEventListener("click", () => {
    mode = 'list';
    getLinks();
});