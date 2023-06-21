/* 
        caso for color apenas 1 item, nao precisa de parentezes , caso coloque 2 ou + , ai precisa
    ForEach (item, index, array) // Item => item inteiro  --> obrigatorio usar  -> 1
                                    index => eh a posicao do item no array --> opcional -> 2 
                                    array => vai mostrar o array inteiro  --> opcional -> 3
    .
    --> Serve para interar arrays

    nao possui break , ele sempre vai verificar tudo do array, nao vai parar aonde queremos 

*/

const users = [
    {name: 'Xampola', age: 24 ,contact: '(41) 99940-9876'},
    {name: 'Champa', age: 48 , contact: '(41) 99940-9876'},
    {name: 'BiroBiro', age: 55 , contact: '(41) 99940-9876'},
    {name: 'Creito', age: 36 , contact: '(41) 99940-9876'},
    {name: 'Zelao', age: 15 , contact: '(41) 99940-9876'},
]

users.forEach((item, index, array) => {  // ele vai lendo item por item , ate acabar o ARRAY
    console.log(`${index +1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
    
   
});