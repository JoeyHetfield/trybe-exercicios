"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, fromUnit, toUnit) {
    var fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    var toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    var exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
function exec() {
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    var value = readline.questionFloat('Digite o valor a ser convertido: \n');
    // pedimos que a pessoa usuária escolha a unidade base
    var fromUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a unidade base:');
    // pedimos que a pessoa usuária escolha a unidade para conversão
    var toUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a conversão:');
    var toUnitChoice = units[toUnitChoiceIndex];
    var fromUnitChoice = units[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log("Fun\u00E7\u00E3o cancelada");
        return 0;
    }
    var result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    var message = "" + value + fromUnitChoice + " \u00E9 igual a " + result + toUnitChoice;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
