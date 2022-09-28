const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',    
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// ache o autor que nasceu em x ano
const authorBornIn1947 = (x) => {
  return books.find((book) => book.author.birthYear === x).author.name
}

console.log(authorBornIn1947(1947));

//primeiro livro que tenha 26 caracteres no nome
function getNamedBook() {
return books.find((book) => book.name.length === 26).name
}
console.log(getNamedBook())

//livros em ordem decrescente de lançamento
function booksOrderedByReleaseYearDesc() {
  return books.sort((a,b) => b.releaseYear - a.releaseYear)
}

//console.log(booksOrderedByReleaseYearDesc())


//Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => {
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  })
}
console.log(everyoneWasBornOnSecXX())


// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989)
}
console.log(someBookWasReleaseOnThe80s())




//  Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique() {

}