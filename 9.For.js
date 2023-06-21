/*
    - FOR

    1) INICIALIZACAO - Criar uma variavel e colocar um valor inicial para ela
    2) CONDIÇÃO - Enquanto for TRUE, o laço continuará interando.
                  Ele irá verificar antes de cada interação.
    3) EXPRESSÃO FINAL - O que ira acorrer a cada vez que o nosso laço der uma volta
    
    for ( [inicializacao]; [Condicao]; [Expressao final] ){
           Seu codigo aqui 

    }
*/

//for(let i = 0; i < 15; i++){
//  console.log(i)
//}

//  users.length => length significa o tamanho do array

const users = ['Ximbica', 'Piolho', 'Pentelho', 'Ze Do Gas', 'Rei do Grau', 'Arranca Diu']

for (let i = 0 ; i < users.length; i++){
    console.log(users[i])
}

// Tem que usar o let , pq ele vai adicionando +1 ele vai trocando o valor de i , e nao pode ser const, pq const eh fixo nao pode auterar
