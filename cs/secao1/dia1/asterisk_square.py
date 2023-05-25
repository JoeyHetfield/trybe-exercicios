# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. 

def asterisk_square():
    n = int(input('Digite um número maior que 1: '))
    if n > 1:
        for i in range(n):
            print('* ' * n)
    else : print('O número deve ser maior que 1')

asterisk_square()

