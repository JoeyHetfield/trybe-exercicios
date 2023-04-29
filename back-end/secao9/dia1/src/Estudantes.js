// Exercício 1: Vamos modelar algumas partes de um software de uma escola.
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.
var Student = /** @class */ (function () {
    function Student(matricula, nome, notasProva, notasTrabalho) {
        this._matricula = matricula;
        this._nome = nome;
        this._notasProva = notasProva;
        this._notasTrabalho = notasTrabalho;
    }
    Object.defineProperty(Student.prototype, "getMatricula", {
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "setMatricula", {
        set: function (newValue) {
            this._matricula = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
