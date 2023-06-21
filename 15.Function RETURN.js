/* 
    Funcao void (vazia), nao retorna nada. SO EXECUTA OQ PEDE E PERFEITO, exemplo: Desafio For , sorteador

    Funcao return, retorna um valor para quem chamou a funcao

*/
/*
function mult(value, value2){ // funcao void/vazia  --> nao returna nd
    console.log(value,value2)
}

function sum(value, value2){
    const result = value + value2

    return result // aqui ele guarda o valor e responde quando for chamado
}
const myResult = sum(12, 22)
console.log(myResult + " resultado")



function salt(){
    return 'test 1'
}

console.log(salt()) */

/* 
    Calcula Desconto:
    Todos os Produtos acima de R$ 30,00 tem desconto de 10% 
*/

const cart = [10, 244, 98, 5, 15, 23, 45, 322, 25]
let finalValueWithDiscount = 0
let finalValue = 0

cart.forEach(value => {
    finalValue = finalValue + value
});

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
     return result
}

cart.forEach(value => {

    if( value > 30 ){
        const discount = calculateDiscount(value,10)

        finalValueWithDiscount = finalValueWithDiscount + ( value - discount )
    }else{
        finalValueWithDiscount += value /// ---> finalValue = finalValue + value
    }
});

economy = finalValue - finalValueWithDiscount

console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)},
porem Voce teve desconto, ira pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}, ou seja,
voce economizou R$ ${economy.toFixed(2)}`)





