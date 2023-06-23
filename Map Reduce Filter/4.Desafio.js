

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> Filter
// Somar o valor de mercado das restantes -> Reduce


/*
const marketValueOldCompanies = companies.map(attValue => {
    attValue.marketValue = attValue.marketValue + ((attValue.marketValue * 10) / 100)
    return attValue
}).filter(company => company.foundedOn < 1990).reduce((acc, actualValue) => acc + actualValue.marketValue, 0)

console.log(marketValueOldCompanies) */


    // tanto da maneira de cima , quanto da debaixo funciona

    /*
    const add10Percent = (attValue) => {  
    attValue.marketValue = attValue.marketValue + ((attValue.marketValue * 10) / 100)
    return attValue
}
    const filterCompanies = (company) => company.foundedOn < 1990

    const calculateTotalMarketValue = (acc, actualValue) => acc + actualValue.marketValue

    const marketValueOldCompanies = companies
    .map(add10Percent)
    .filter(filterCompanies)
    .reduce(calculateTotalMarketValue, 0) // o valor de acc, valor inicial VAI AQUI no caso

     console.log(marketValueOldCompanies) */

    /* 
        DESAFIO 

        Subtrair 10% de valor de marcado a todas as companhias
        Filtrar somente companhias fundadas depois do 1980
        Somar o valor de marcado das restantes
    */

    const marketValueNewCompanhies = companies.map(value => {
        value.marketValue = value.marketValue - (value.marketValue / 10)
        return value
    }).filter(company => company.foundedOn > 1980).reduce((acc, companyValue) => acc + companyValue.marketValue, 0)

    console.log(marketValueNewCompanhies)



