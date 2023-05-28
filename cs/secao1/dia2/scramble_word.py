import random 

my_words = ['naruto', 'sasuke', 'sakura', 'kakashi', 'gaara', 'hashirama', 'madara', 'nagato']

max_tentatives = 3
actual_tentative = 0

while actual_tentative < max_tentatives:
    actual_tentative += 1
    word = random.choice(my_words)
    scrambled_word = ''.join(random.sample(word, len(word)))
    left_attempts = max_tentatives - actual_tentative

    print(f'Você tem {left_attempts + 1} tentativas para acertar a palavra embaralhada: {scrambled_word}')
    user_word = input('Digite a palavra: ').lower()
    if user_word == word:
        print('Você acertou!')
        break
    else:
        print('Você errou!')
        if actual_tentative == max_tentatives:
            print(f'Você perdeu! A palavra era {word}')


