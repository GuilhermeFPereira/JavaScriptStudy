/* 
    Filter: o metodo FILTER serve para filtrar um array. Ele passara por todos os valores do array
    e voce decidira quais valores vao para seu novo array, e quais vao ser descartados.

    const novaArray = arrayOriginal.filter((valorAtual, index, arrayOriginal) =>{
        seu codigo aqui
    })

    1) o filter vai passar por todos os items do array, e o primeiro parametro eh cada item,
    um por vez do array que estamos filtrando. item OBRIGATORIO

    2) o index eh a posicao atual que estamos filtrando. --> item OPCIONAL

    3) Uma copia do array original. --> ITEM OPCIONAL

        A cada item, fazemos uma 'pergunta' ao codigo. Se a resposta for verdadeira naquele item, ele guardara
    o valorATUAL no novo array. Caso seja falso, ele sera descartado.

    return TRUE  -> Item atual passa para o novo array --- So vai passar se tiver true
    return FAlse -> item atual NAO passa para o novo array

*/

const list = [20 , 3, 234, 12, 17, 58, 4556, 87, 275, 1000]

const newList = list.filter(item => { // ou da pra fazer assim --> const newList = list.filter(item => item > 100)
    if(item > 100 && item % 2 === 0) return true
    else return false
})


const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const newCompanies = companies.filter( company => {
    if(company.marketValue < 200 && company.foundedOn > 1990) return true
    else return false
})

console.log(newCompanies)