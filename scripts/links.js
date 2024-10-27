const baseURL = 'https://github.com/mrshawnh/wdd230';
const linksURL = 'https://github.com/mrshawnh/wdd230/blob/main/data/links.json';

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}

getLinks();