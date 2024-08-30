const FirstMessage = ['We live in a twilight world. ', 'I am your father. ', 'My mama always said life was like a box of chocolates. ']
const SecondMessage = ['And there are no friends at dusk. ', 'NOOOOOOOOOOOOOOOOOOOOOOO!!!! ', 'You never know what you are gonna get. ']
const emoji = ['(^_-)', '(凸ಠ益ಠ)凸', '∩(·ω·)∩', '( ﾟ Дﾟ)']

function GenRandomMessage() {
    const randomFirst = FirstMessage[Math.floor(Math.random() * FirstMessage.length)]
    const randomSecond = SecondMessage[Math.floor(Math.random() * SecondMessage.length)]
    const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)]

    return randomFirst + randomSecond + randomEmoji
}

console.log(GenRandomMessage())

