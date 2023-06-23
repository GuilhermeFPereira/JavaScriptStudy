/*
    ARRAY`S 
        - push    -> Adiciona mais um item ao array // Sempre vai adicionar o item novo na ultima posicao do array, na sequencia
        - length  -> Mostra o tamanho do array // a quantidade de items do array
        - sort    -> Organiza o Array
        - delete  -> Deleta o item de uma posicao do Array, porem, a posicao continua la so que vazia // delete myArray[posicao desejada]
        - every   -> Esse metodo testa se todos os elementos do Array passam por uma condicao. Caso passa, ele da TRUE , se tiver apenas 1 item que nao passa, da falso
        - some    -> O  .some() faz algo parecido com o .every(). A diferenca eh que APENAS 1 passar, ja retorna true

        - fill    -> Preenche posicoes do array como desejarmos// podemos escolher o que por em cada posicao do array 
                    (a primeira posicao eh oq quero por no array, segunda posicao eh qual posicao comeca , terceira eh qual pos termina)

        - find    -> Usamos esse metodo quando queremos encontrar algum elemento dentro do Array 
                    ( exp : const findUser = users.find( user => user.name === 'Xhola'))

        - findIndex -> Faz o mesmo que o .find(), mas retorna apenas qual posicao do array que esta o item
        - concat()  -> ele vai juntar 2 arrays que quiser e por na ordem juntos

*/

const myArray = [1,2, 3]

myArray.push('cingo')

const users = [
    {name: 'Ximbica', credit: 600},
    {name: 'Xampa', credit: 900},
    {name: 'Xhola', credit: 300},
    {name: 'Creito', credit: 200},
]

const findUser = users.findIndex( user => user.name === 'Xhola')

users[findUser].name = 'Matador de Porco' // com o findIndex consegui alterar o nome, nem precisar ir na fonte original

// console.log(users)

const isTRUE = users.some(user => user.credit > 400)

const numbers = [1, 2 , 3, 4]

numbers.fill('campola', 3, 4)
 // console.log(numbers)

 const array = ['a', 'b', 'c']
 const numbers2 = [1 , 7, 9 , 6]

 const array3 = array.concat(numbers2 + numbers)
 console.log(array3)