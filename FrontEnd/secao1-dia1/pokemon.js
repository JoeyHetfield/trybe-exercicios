/* Complete a função handlePokemonSearch de modo que:

Ao chamar a função getPokemonDetails com um pokémon existente, imprime no console a mensagem com os detalhes deste pokémon.

Ao chamar a função getPokemonDetails com um pokémon não existente, imprime no console o erro.

 */

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}


const handlePokemonSearch = (error, message) => {
  // Insira a callback de tratamento
  if (error) { // 2, 3. Criamos o `if/else` com o parâmetro `error`
    console.log(error); // 4. Colocamos o console.log() para imprimir o erro
  } else {
    console.log(message);// 5. Colocamos o console.log() para imprimir a mensagem
  }
};

getPokemonDetails('Bulbasaur', handlePokemonSearch);   