/*

Operadores Logicos

&&  -> E -> Pessoa Exigente / Obediente

    true && true = true         // Precisa ter todos os requisitos necessarios para valer
    true && false = false
    false && false = false

||  -> Ou -> Tanto faz  // Se tiver uma variavel true , ja esta valendo, nao precisa ter Todos os requisitos
    
    true || true  = true
    true || false = true
    false || false = false

 !  -> Negacao   ----> Serve para inverter
    !true = false
    !false = true    

*/

const digitarASenha = false
const digitarOToken = false
const numeroDaConta = true

if(digitarASenha || digitarOToken || numeroDaConta ){
    console.log('Logado com Sucesso')
}else{
    console.log('Authenticacao Falhou')
}