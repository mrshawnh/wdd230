const darkModeButton = document.querySelector('#mode');
const body = document.querySelector('body');

darkModeButton.addEventListener("click", () => {
	darkModeButton.classList.toggle('open');
	body.classList.toggle('open');
});
