def asterisk_triangle():
    n = int(input('Digite um número maior que 1: '))
    if n > 1:
        for i in range(n):
            print('* ' * (i + 1))
    else : print('O número deve ser maior que 1')

asterisk_triangle()


# outra forma usando while 
# def asterisk_triangle():
#     n = int(input('Digite um número maior que 1: '))
#     if n > 1:
#         i = 0
#         while i < n:
#             i += 1
#             print('* ' * i)
#     else:
#         print('O número deve ser maior que 1')

# asterisk_triangle()