/* - Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. 
No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature 
para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:

A função sendMarsTemperature receba uma callback;
Dica: Essa callback será uma de nossas funções: temperatureInFahrenheit ou greet;

A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.
Dica: Lembre-se de nossa função messageDelay para gerar o tempo de espera necessário. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const sendMarsTemperature = (planetTemperature) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => planetTemperature(currentTemperature), messageDelay())

};

sendMarsTemperature(greet);
sendMarsTemperature(temperatureInFahrenheit)

