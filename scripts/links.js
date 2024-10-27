const baseURL = 'https://mrshawnh.github.io/wdd230//wdd230/';
const linksURL = 'https://mrshawnh.github.io/wdd230/data/links.json';
const ul = document.querySelector("#links");


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);

}

function displayLinks(weeks) {
    weeks.forEach((week) => {

        let weekName = document.createElement('h3');
        let activityList = document.createElement('li');
        let activity = document.createElement('a');

        weekName.textContent = `${week.week}`;
        activity.textContent = `${links.name}`;
        activity.setAttribute('href', links.link);

        ul.appendChild(weekName);
        
        week.links.forEach((link) => {
            let li = document.createElement('li');
            let a = document.createElement('a');

            a.setAttribute('href', links.link);
            a.textContent = link.name;

            li.appendChild(a)
            ul.appendChild(li)
        });

    });
};
getLinks();

