const { writeFile } = require('fs');

const fs = require('fs').promises;

// Exercicio 6A 
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readAll() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

// Exercicio 6B
//  Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. 
// Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

async function searchSimpsonsId(id) {
  try{
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const findSimpsons = simpsons.find((simpson) => Number(simpson.id) === id)
        if(!findSimpsons) {
      throw new Error('id não encontrado')
    }
        console.log(findSimpsons);
  }
  catch(e){
    console.log(`Erro : ${e}`)
  }
}

// Exercicio 6C 
// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function changeSimpsons() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  // const changeSimpson = simpsons.filter((simpson) => simpson.id !== id ) assim seria com o valor sendo dinamico, mas não consegui colocar dois valores dinamicos
  const changeSimpson = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
  await fs.writeFile('.simpsons.json', JSON.stringify(changeSimpson))    // faltou o / antes do .simpsons.json
}

// Exercicio 6D 
// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

async function newFamily() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const familyIds = [1, 2, 3, 4];
  const newSimpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newSimpsonsFamily));
}


 // Exercicio 6E
 // E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function addNelson() {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(data)
  // await simpsons.push('Nelson')  Desse jeito eu adiciono só o nome, sem id e sem chave pro nome
  await simpsons.push({'id': '5', 'Name': 'Nelson'}) 
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}


// Comentando as funções não usadas no momento, para poder testar todas no mesmo arquivo
async function main() {
  // await readAll();
  // await searchSimpsonsId(3);
  // await changeSimpsons()
  // newFamily()
  addNelson() 
}

main();