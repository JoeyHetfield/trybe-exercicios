"use strict";
// Exercício 1: Vamos modelar algumas partes de um software de uma escola.
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.
class Student {
    constructor(matricula, nome, notasProva, notasTrabalho) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasProva = notasProva;
        this._notasTrabalho = notasTrabalho;
    }
    get getMatricula() {
        return this._matricula;
    }
    set setMatricula(newValue) {
        this._matricula = newValue;
    }
    get getNome() {
        return this._nome;
    }
    set setNome(newValue) {
        this._nome = newValue;
    }
    get getNotasProva() {
        return this._notasProva;
    }
    set setNotasProva(newValue) {
        this._notasProva = newValue;
    }
    get getNotasTrabalho() {
        return this._notasTrabalho;
    }
    set setNotasTrabalho(newValue) {
        this._notasTrabalho = newValue;
    }
    calculaSomaNotas() {
        let somaNotas = 0;
        this._notasProva.forEach(nota => {
            somaNotas += nota;
        });
        this._notasTrabalho.forEach(nota => {
            somaNotas += nota;
        });
        return somaNotas;
    }
    calculaMediaNotas() {
        const somaNotas = this.calculaSomaNotas();
        return somaNotas / (this._notasProva.length + this._notasTrabalho.length);
    }
}
