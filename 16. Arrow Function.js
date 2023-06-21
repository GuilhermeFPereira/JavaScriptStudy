/* 
    function padrao ->  function () {}

    arrow function  -> () => {}  // nao precisa de return, caso seja em uma linha so 
    --> ela tbm eh guardada em uma variavel
    --> quando tem APENAS 1 PARAMETRO , os () sao opcionais

*/

function sayMyName(name) {
    return `Seu nome EH ${name}`
}

const sayMyName2 = name => `My name is ${name}`

const sum = (one, two) => one * two

console.log(sum(7,8))
console.log(sayMyName('Cleitin'))
console.log(sayMyName2('Robertim'))