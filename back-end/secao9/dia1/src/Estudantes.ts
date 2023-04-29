 // Exercício 1: Vamos modelar algumas partes de um software de uma escola.
 // Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
 // Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
 // Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
 // Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[]

  constructor(matricula: string, nome: string, notasProva: number[], notasTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
  }

  get getMatricula() {
    return this._matricula;
  }

  set setMatricula(newValue: string) {
    this._matricula = newValue;
  }

  get getNome() {
    return this._nome;
  }

  set setNome(newValue: string) {
    this._nome = newValue;
  }

  get getNotasProva() {
    return this._notasProva;
  }

  set setNotasProva(newValue: number[]) {
    this._notasProva = newValue;
  }

  get getNotasTrabalho() {
    return this._notasTrabalho;
  }

  set setNotasTrabalho(newValue: number[]) {
    this._notasTrabalho = newValue;
  }

  calculaSomaNotas(): number {
    let somaNotas = 0;
    this._notasProva.forEach(nota => {
      somaNotas += nota;
    });
    this._notasTrabalho.forEach(nota => {
      somaNotas += nota;
    });
    return somaNotas;
  }

  calculaMediaNotas(): number {
    const somaNotas = this.calculaSomaNotas();
    return somaNotas / (this._notasProva.length + this._notasTrabalho.length);
  }

}