const axios = require('axios')

const getExchangeRate = async (from, to) => {
    const response = await  axios.get('http://data.fixer.io/api/latest?access_key=7793ad77f7adabffbda839e8575a3a10&format=1')
    const euroValue =  1 / response.data.rates[from];
    const to_value = euroValue * response.data.rates[to]
    return to_value
}

const  getCurrencies = async (currencyCode) => {
     const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
     return response.data.map( country => country.name)
}

// getExchangeRate('USD', 'CAD').then(val => console.log(val)).catch(e => console.log(e))

getCurrencies('EUR').then( res => console.log(res)).catch( e => console.log(e) )