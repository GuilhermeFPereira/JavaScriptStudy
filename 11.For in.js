/*
    Estrutura de Repetição - LOOP
        - FOR IN

        ---> Serve para interar OBJETOS 
        --> Pega a chave do obejto(key) e com essa chave consegue interar objeto por objeto

*/

const users = { name: 'PsicoGui', age: 27, hair: 'Black' }

for (const key in users){
    console.log(key + " : " +users[key]) // ou
    console.log(`${key} : ${users[key]}`)
}