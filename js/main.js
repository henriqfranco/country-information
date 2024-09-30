const infoBtn = document.getElementById('infoBtn');
const flag = document.getElementById('flag');
const countryName = document.getElementById('name');
const countryCapital = document.getElementById('capital');
const countryLanguage = document.getElementById('language');
const countryPopulation = document.getElementById('population');

function getCountryInfo(url){
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        flag.src = data[0].flags.png;
        countryName.textContent = data[0].name.common;
        countryCapital.textContent = data[0].capital;
        countryLanguage.textContent = Object.values(data[0].languages)[0];
        countryPopulation.textContent = data[0].population.toLocaleString();
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getCountryInfo('https://restcountries.com/v3.1/name/Brazil');
})

infoBtn.addEventListener('click', () => {
    const name = document.getElementById('country').value;
    const url = `https://restcountries.com/v3.1/name/${name}`

    getCountryInfo(url);
})