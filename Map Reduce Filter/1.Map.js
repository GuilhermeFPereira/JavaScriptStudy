/* 
    MAP = Mapear o nosso array
    - Cria um novo array, a partir do array percorrido (array original)  --> ELE CRIAA, NAO ALTERA E SIM CRIA UM NOVOO
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parametros
        - item do array  --> Obrigatorio
        - index  --> Posicao no array --> Opcional
        - array completo --> Opcional

*/

const number = [2, 4, 6, 8, 10, 12, 14]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + ' -> Posicao')
    console.log(arrayOriginal + ' -> Array Original')
    const newItem = item * 2
    return newItem                 // --> tudo que ele criar ali , e estiver no return, ele vai salvar no NOVO array, no caso o --> double
})

console.log(double)
console.log(number)