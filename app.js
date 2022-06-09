
 async function getCountryByName(countryName){
    fetch("https://restcountries.com/v3.1/name/peru")
    .then(response => response.json())
    .then ( data => {
    countryPeru = data[0];
    Object.values(countryPeru)[6];
    });
 }
getCountryByName("peru");


