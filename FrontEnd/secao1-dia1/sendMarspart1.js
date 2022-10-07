/* A função sendMarsTemperature imprima no console o seguinte texto: “A temperatura de Marte é: temperaturaAtual graus celsius” onde, 
temperaturaAtual é o valor recebido da função getMarsTemperature; e

A mensagem deve ser impressa no console depois de no máximo 5 segundos.

Dica: utilize a função messageDelay para gerar o tempo de espera necessário

 */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (planetTemperature) => {
  console.log(`A temperatuda de Marte é: ${planetTemperature} graus celsius`)
};

// Imprime "A temperatura de Marte é: X graus celsius", por exemplo

/* setTimeout(() => {
  sendMarsTemperature(getMarsTemperature());
}, messageDelay()); */

setTimeout(() => sendMarsTemperature(getMarsTemperature()), messageDelay())