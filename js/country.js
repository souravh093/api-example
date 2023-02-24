let serial = 0;

const getCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data))
} 


const showCountries = (countries) => {
    const countryContainer = document.getElementById('countryContainer');
    countries.forEach( country => {
        serial += 1;
        const countryInfo = document.createElement('tr');
        countryInfo.innerHTML = `
        <th>${serial}</th> 
        <td>${country.name.common}</td> 
        <td>${country.region}</td> 
        <td>${country.subregion}</td> 
        <td>${country.capital ? country.capital[0] : 'No Capital'}</td> 
        <td>${country.area}</td> 
        <td>${country.population}</td>
        <button for="my-modal-3" onclick="loadCountryDEtails('${country.cca2}')" class="bg-blue-500 px-2 py-1 font-semibold text-white ml-2 rounded-md">Details</button>
        
        `
        countryContainer.appendChild(countryInfo);
    })
}

const loadCountryDEtails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then( res => res.json())
        .then( data => showCountriesDetails(data[0]))
}

const showCountriesDetails = country => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h2>Country Details</h2>
        <ul>
            <li>Flag: <img src="${country.flags.png}"></li>
            <li>Name: ${country.name.common}</li>
        </ul>
    `
}


getCountries();