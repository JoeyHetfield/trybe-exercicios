#  Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

def invert_name(name):
    for i in range(len(name), 0, -1):
        print(name[:i])

name = input('Digite um nome: ')

invert_name(name)
