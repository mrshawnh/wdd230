document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;