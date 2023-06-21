/*

    Estrutura de Repeticao  -- LOOP
        - FOR OF 

        Ele vai interar letra por letra no meu Array
        Se for um array, item por item (name)
        Ele nao intera um OBJETO
*/

const myName = 'Guilherme'
const users = ['Xampola', 'Champa', 'Pontaria']

for (const name of users) {         // Ele vai encontrar sozinho, ate o final dos obejtos e entao para, nao precisa dar
                                    //condicao, igual o FOR padrao
    
    console.log(name)
}

// a cada passada, ele cria um valor do ZERO, por isso consegue criar item por item
// Por isso ele pode ser Const , vai criando um novo , ao contrario do For que ele cria o (i) e vai adicionando +1 vai trocando de valor ao inves de criar um novo
