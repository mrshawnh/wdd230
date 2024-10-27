const baseURL = 'https://github.com.io/mrshawnh/wdd230/';
const linksURL = 'https://github.com.io/mrshawnh/wdd230/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();

