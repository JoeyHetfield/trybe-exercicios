// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = [];

for (let index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 !=0){
        impar += numbers[index] + ' '
    }
}

console.log(impar)




//Esse de baixo é o certo, o de cima foi meu raciocinio de separar os impares, mas não foi o proposto pelo exercicio
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;

//for (let index = 0; index < numbers.length; index += 1) {
//  if (numbers[index] % 2 !== 0) {
//    result += 1;
//  }
//}

//if (result === 0) {
//  console.log('nenhum valor ímpar encontrado');
//} else {
//  console.log(result);
//}