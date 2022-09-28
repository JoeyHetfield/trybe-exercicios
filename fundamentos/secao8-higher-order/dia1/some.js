const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return  arr.some((x) => x === name);
};

console.log(hasName(names, 'Ana'));



const people = [
    { name: 'Mateus', age: 180},
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
        return arr.every((x) => x.age > minimumAge )
};
  
  console.log(verifyAges(people, 18));


