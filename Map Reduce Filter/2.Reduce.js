/* 
    O reduce aceita ate 4 parametros:

    const novoArray = arrayOriginal.reduce(
        (acumulador, valorAtual, index, arrayOriginal) =>{
            return xxx
        }, valor inicial) 

        1) O Acumulador, na primeira interacao tera o valor inicial que daremos a ele.
            Ja nas demais interacoes, ele tera o valor que iremos acumular nele. -> OBRIGATORIO  // a cada passada , ele assume o valor novo

        2) o ValorAtual do elemento sendo interado, item por item. --> Item OBRIGATORIO
        3) o index do elemento atual. --> OPCIONAL  --> Posicao atual
        4) o array Completo original. --> OPCIONAL   
*/

const list = [5, 4 ,8 , 1, 2, 6, 58, 95]

const sum = list.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
}, 0) // O zero , eh o valor do acumulador valor inicial, eu escolho ele


const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
];

const marketValue = companies.reduce((acc, value) => {
    return acc + value.marketValue
}, 0)


const cart = [  // Pode se usar em qualquer carrinho de comprar , produtos eletronicos , mercado , so multiplicar o preco + quantidade
    {productName: 'Abobora', pricePerk:5, kg: 1},
    {productName: 'Pepino', pricePerk:3.55, kg: 1.3},
    {productName: 'Limao', pricePerk:1.2, kg: 2},
    {productName: 'Abacate', pricePerk:5.4, kg: 1.67},
    {productName: 'Morango', pricePerk:11.9, kg: 3},
]

const finalPrice = cart.reduce((acc, value) =>{
    return acc + (value.pricePerk * value.kg )
}, 0)

console.log(`Valor final da compra: R$ ${finalPrice.toFixed(2)}`)