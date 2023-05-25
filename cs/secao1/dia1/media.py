# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

lista = [10, 10, 9]

def media() :
    soma = 0
    for i in lista:
        soma += i
    result = soma / len(lista)
    return round(result, 2)
print(media())