const a = 10
const b = 2

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao)

console.log(subtracao)

console.log(multiplicacao)

console.log(divisao)

console.log(modulo);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const comparacao1 = 15
const comparacao2 = 10

if (comparacao1 > comparacao2) {
    console.log(comparacao1)
} else if (comparacao1 === comparacao2) {
    console.log('Números iguais')
} else {
    console.log(comparacao2)
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (comparacao1 > comparacao2 && comparacao1 > a) {
    console.log(comparacao1)
} else if (comparacao2 > comparacao1 && comparacao2 > a) {
    console.log(comparacao2)
} else if (a > comparacao1 && comparacao2) {
    console.log(a)
} else console.log('Um ou mais números iguais')

//Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

const parametro = 0
if (parametro > 0){
    console.log('positive')
}else if (parametro < 0){
    console.log('negative')
}else console.log('zero')

//🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let triangulo = angulo1 + angulo2 + angulo3;
if (triangulo === 180){
    console.log(true)
}else console.log(false)