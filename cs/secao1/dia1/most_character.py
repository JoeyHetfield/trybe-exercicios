# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres.

def most_character():
    names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
    bigger = ''
    for name in names:
        if len(name) > len(bigger):
            bigger = name
    return bigger

print(most_character())