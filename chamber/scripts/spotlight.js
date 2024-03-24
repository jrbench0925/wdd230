async function fetchBusinessData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getMedalIcon(level) {
    switch (level) {
        case "Gold":
            return "🥇";
        case "Silver":
            return "🥈";
        case "Bronze":
            return "🥉";
        default:
            return "";
    }
}

async function displayRandomBusinesses() {
    const members = await fetchBusinessData();
    const filteredBusinesses = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
    const randomBusinesses = shuffle(filteredBusinesses);

    const companySpotlightDiv = document.getElementById('company-spotlight');

    companySpotlightDiv.innerHTML = '';

    for (let i = 0; i < 4 && i < randomBusinesses.length; i++) {
        const business = randomBusinesses[i];
        const businessDiv = document.createElement('div');
        businessDiv.classList.add('business-card', 'card');
        businessDiv.innerHTML = `
        <img src="${business.logo}" alt="${business.name} Logo">
        <h2>${business.name} ${getMedalIcon(business.membershipLevel)}</h2>
        <p><strong>Address:</strong> ${business.address}</p>
        <p><strong>Phone:</strong> ${business.phone}</p>
        <p><strong>Website:</strong> <a href="${business.website}" target="_blank">${business.website}</a></p>
    `;
        companySpotlightDiv.appendChild(businessDiv);
    }
}

displayRandomBusinesses();