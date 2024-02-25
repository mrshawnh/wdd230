document.querySelector('#year').textContent = new Date().getFullYear();

let lastModified = new Date(document.lastModified);

document.querySelector('#lastModified').textContent = lastModified;

/* Hamburger Menu */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});