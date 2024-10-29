const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const forecast1 = document.querySelector("#forecast1");
const forecast2 = document.querySelector("#forecast2");
const forecast3 = document.querySelector("#forecast3");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=13.33&lon=122.01&appid=242c69025911a3a0ade03b01b670043d&units=imperial';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=13.33&lon=122.01&appid=242c69025911a3a0ade03b01b670043d&units=imperial'
                
async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
    
}


apiFetch();

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

async function apiFetchForecast() {
    try{
        const response = await fetch(forecasturl);
        if (response.ok){
            const data = await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
    
}

apiFetchForecast()