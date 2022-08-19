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
if (parametro > 0) {
    console.log('positive')
} else if (parametro < 0) {
    console.log('negative')
} else console.log('zero')

//🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let triangulo = angulo1 + angulo2 + angulo3;
if (triangulo === 180) {
    console.log(true)
} else console.log(false)

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 85
if (nota >= 90 && nota < 101){
    console.log ('A ')
}else if(nota >= 80 && nota < 90){
    console.log('B')
}else if(nota >= 70 && nota < 80){
    console.log('C')
}else if(nota >= 0 && nota < 70){
    console.log('Recuperação')
}else console.log('invalid number')

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

const naruto1 = 10;
const naruto2 = 10;
const naruto3 = 10;

if(naruto1 % 2 === 0 || naruto2 % 2 === 0 || naruto3 % 2 === 0){
    console.log(true)
}else console.log(false)

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
//Bonus: use somente um if.

if(naruto1 % 2 != 0 || naruto2 % 2 != 0 || naruto3 % 2 != 0){
    console.log(true)
}else console.log(false)

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 100;
const valorVenda = 150;

if(valorCusto >0 && valorVenda >= 0){
    const valorCustoTotal = valorCusto * 1.2;
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro)
}else {
    console.log('Valor de entrada não pode ser menor que zero')
}
