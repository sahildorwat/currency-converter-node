const axios = require('axios')

const getExchangeRate = async (from, to) => {
    const response = await  axios.get('http://data.fixer.io/api/latest?access_key=7793ad77f7adabffbda839e8575a3a10&format=1')
    const euroValue =  1 / response.data.rates[from];
    const rate = euroValue * response.data.rates[to]
    return rate
}

const  getCountries = async (currencyCode) => {
     const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
     return response.data.map( country => country.name)
}


const convertCurrency = async (from, to, amount) => {
    const rate = await getExchangeRate(from, to);
    const convertedAmount = (rate * amount).toFixed(2);
    console.log(convertedAmount);
    const countries = await getCountries(to)
    return `${amount} ${from} is equivalent to ${convertedAmount} ${to}. You can spend these in following countries: ${countries.join(', ')}`
}

convertCurrency('USD', 'USD',20).then(res => console.log(res))

// getExchangeRate('USD', 'CAD').then(val => console.log(val)).catch(e => console.log(e))
// getCurrencies('EUR').then( res => console.log(res)).catch( e => console.log(e) )