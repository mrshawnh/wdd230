const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-Is")) || 0;

if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. Welome to the page.`;
}

numVisits++;

localStorage.setItem("numVisits-Is", numVisits);