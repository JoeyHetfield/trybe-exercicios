# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a
# partir do tamanho de uma parede (em m²).

def paint_square():
    square_meters = int(input('Digite o tamanho da parede em m²: '))
    liters = square_meters / 3
    cans = liters / 18
    price = cans * 80

    round_cans = round(cans, 2)
    round_price = round(price, 2)
    return (round_cans, round_price)

print(paint_square())