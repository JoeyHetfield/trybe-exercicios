def sum_numbers():
    n = int(input('Digite um número: '))
    total = 0
    for i in range(1, n+1):
        total += i
    return total

print(sum_numbers())