const directory = document.querySelector("#directory");

const json = "https://mrshawnh.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(json);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
    
}

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = member.name;
        address.textContent = member.address;
        phoneNumber.textContent = member.phone;
        website.textContent = member.website;

        logo.setAttribute('src' , member.logo);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');
        website.setAttribute('href', member.website);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        directory.appendChild(card);

    });
}

getMembers();