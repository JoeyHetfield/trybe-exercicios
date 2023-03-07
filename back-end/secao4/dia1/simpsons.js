const fs = require('fs').promises;

// Exercicio 6A 
async function readAll() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

// Exercicio 6B

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
 


async function main() {
  // await readAll();
  // await searchSimpsonsId(3);
  
}

main();