const readline = require('readline-sync');


// Criar o calculo de IMC recebendo os valores por comando de terminal
function bmiCalc(weight, height) {
  const bmi = weight / (height ** 2);
  return bmi;
}

function main() {
  const weight = readline.questionFloat('Seu peso? ');
  const height = readline.questionFloat('Sua altura?(em metros) ');

  const bmi = bmiCalc(weight, height);
  console.log(`Seu IMC É: ${bmi.toFixed(2)}`);

  if (bmi < 18.5) {
    console.log('Abaixo do peso');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('Peso normal');
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log('Acima do peso');
  } else if (bmi >= 30 && bmi <= 34.9) {
    console.log('Obesidade 1');
  } else if (bmi >= 35 && bmi <= 39.9) {
    console.log('Obesidade 2');
  } else {
    console.log('Obesidade 3');
  }
}

main();
