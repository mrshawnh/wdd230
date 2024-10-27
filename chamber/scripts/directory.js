const directory = document.querySelector("#directory");

const json = "https://mrshawnh.github.io/wdd230/chamber/members.json";

async function getMembers() {
    const response = await fetch(json);
    const data = await response.json();
    console.log(data);
    displayMembers(data.members);
    
}

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('h3');
        let phoneNumber = document.createElement('h3');
        let website = document.createElement('a');
        let logo = document.createElement('img');

        name.textContent = member.name;

        logo.setAttribute('src' , member.logo);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');

    });
}
getMembers();