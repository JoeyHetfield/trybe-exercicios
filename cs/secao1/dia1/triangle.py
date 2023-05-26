def triangle():
    side1 = int(input('Digite o primeiro lado do triângulo: '))
    side2 = int(input('Digite o segundo lado do triângulo: '))
    side3 = int(input('Digite o terceiro lado do triângulo: '))

    if side1 + side2 > side3 or side1 + side3 > side2 or side2 + side3 > side1:
        if side1 == side2 and side1 == side3:
            return 'Equilátero'
        elif side1 == side2 or side1 == side3 or side2 == side3:
            return 'Isósceles'
        else:
            return 'Escaleno'
    else:
        return 'Não é triângulo'
    
print(triangle())