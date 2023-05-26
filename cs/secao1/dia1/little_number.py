#  Exercício 1: Dada uma lista, descubra o menor elemento.

lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

def little_number(lista):
    little = lista[0]
    for number in lista:
        if number < little:
            little = number
    return little

print(little_number(lista))