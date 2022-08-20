//Exercício 1
//Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2
//Procure o índice do valor "Portfólio" do array menu:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2[2];

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu:

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato')

console.log(menu3);

//Exercício 1
//Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index+=1) {
    console.log(groceryList[index])
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];   
for (let letters of names){
    console.log(letters)
}

//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let indice = 0; indice < numbers.length; indice = indice + 1 ){
    console.log(numbers[indice]);
}
