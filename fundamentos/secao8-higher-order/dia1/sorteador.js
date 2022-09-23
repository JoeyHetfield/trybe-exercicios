/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número 
apostado e uma função que checa se o número apostado é igual ao número sorteado. 
O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”). */

const sorteio = () => { 
    let number = Math.ceil(Math.random() * 5)
    return number
}

const resultado = (numberBet, numberSorteio) => {
    if (numberBet === numberSorteio){
        return 'Parabéns você ganhou'
    }else return 'Tente novamente'
}



console.log(resultado(1, sorteio()))