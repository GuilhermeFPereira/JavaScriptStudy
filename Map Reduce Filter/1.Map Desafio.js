const list = [
    { name: 'Xampola', testGrade: 7},
    { name: 'Xerolane', testGrade: 7},
    { name: 'Ximbica', testGrade: 7},
    { name: 'Cleitim', testGrade: 7},
    { name: 'Ze do Pneu', testGrade: 7},
    { name: 'Matador de Porco', testGrade: 7},
    { name: 'XaoLim', testGrade: 7},
]

const newList = list.map(person =>{
   const newUser ={
    name: person.name,
    braceletColor: person.vip ? 'Black' : 'Green' // ? = if(true)  caso nao seja true, : (else) false
   }

   return newUser
   
})

const students = [
    { name: 'Xampola', testGrade: 7},
    { name: 'Xerolane', testGrade: 5},
    { name: 'Ximbica', testGrade: 8},
    { name: 'Cleitim', testGrade: 9},
    { name: 'Ze do Pneu', testGrade: 3},
    { name: 'Matador de Porco', testGrade: 2},
    { name: 'XaoLim', testGrade: 4},
]

const newStudents = students.map( person =>{
 /*
    let status 
    if(person.testGrade >= 5){
       status = 'Aluno aprovado'
    }else{
      status = 'Aluno Reprovado'
    } */

    return {
        name: person.name,
        status: person.testGrade >= 5 ? 'Aluno Aprovado' : 'Aluno Reprovado'
    }
})

console.log(newStudents)


