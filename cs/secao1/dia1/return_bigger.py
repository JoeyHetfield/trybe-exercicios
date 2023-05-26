# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def return_bigger():
    num1 = int(input('Digite o primeiro número: '))
    num2 = int(input('Digite o segundo número: '))

    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2
    else : return 'os números são iguais'

print(return_bigger())