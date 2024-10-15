const visitDate = document.querySelector("#visit-date");

const msToDays = 86400000;

let today = Date.now()

let visitTimeStamp = Number(window.localStorage.getItem("Date-Is")) || 0;

if(visitTimeStamp !== 0 && (today/msToDays) > 1){
    visitDate.textContent = ` Back so soon! Awesome!.`
} else if (visitTimeStamp !==0 && (today/msToDays) < 1){
    let number = parseInt(today/msToDays) 
    if (number = 1){
        visitDate.textContent = `You last visited 1 day ago.`
    } else {
        visitDate.textContent = `You last visited ${number} days ago.`
    }
}

localStorage.setItem("Date-Is", today);

