/* 
    Operador Ternario

   ? if (se)

   && (if sem else)  --> Caso utiliza apenas o if , e nao precise do else
   
   : else (se Nao) 
    

   Se usa o ternario, quando for pequenos retornos , codigos curtos.


*/
 
const salary = 5000

/*
if(salary < 3000){
    console.log("O Colaborador eh Junior")
}else if(salary >= 3000 && salary < 1000){
    console.log("Ele Eh senior")
}
else{
    console.log("Ele eh Diretor")
}*/

// IF  salary < 3000 && console.log("O Colaborador eh Junior")

// IF/ ELSE  salary < 3000 ? console.log("O Colaborador eh Junior") : console.log("Ele eh Senior")

// ElSE IF

salary < 3000 ? console.log("O Colaborador eh Junior") : salary >= 3000 && salary < 10000 ? console.log("Ele Eh senior") : console.log("Ele eh Diretor")
