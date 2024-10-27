const directory = document.querySelector("#directory");

const json = "https://mrshawnh.github.io/wdd230/chamber/members.json";

async function getMembers() {
    const response = await fetch(json);
    const data = await response.json();
    console.log(data);
    
}

getMembers();