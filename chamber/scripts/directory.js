const directory = document.querySelector("#directory");
const spotlight1 = document.querySelector("#spotlight1");

const json = "https://mrshawnh.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(json);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
    displaySpotlights(data.members);
    
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



function displaySpotlights(members){
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = members[0].name;
    address.textContent = members[0].address;
    phoneNumber.textContent = members[0].phone;
    website.textContent = members[0].website;
    website.setAttribute('href', member.website);

    spotlight1.appendChild(name);
    spotlight1.appendChild(address);
    spotlight1.appendChild(phoneNumber);
    spotlight1.appendChild(website);
}

getMembers();