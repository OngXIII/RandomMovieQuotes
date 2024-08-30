const messages = [
    {
        FirstMessage: 'We live in a twilight world. ',
        SecondMessage: 'And there are no friends at dusk. ',
        emoji: '(^_-)'
    },
    {
        FirstMessage: 'I am your father. ',
        SecondMessage: 'NOOOOOOOOOOOOOOOOOOOOOOO!!!! ',
        emoji: '(凸ಠ益ಠ)凸'
    },
    {
        FirstMessage: 'My mama always said life was like a box of chocolates. ',
        SecondMessage: 'You never know what you are gonna get. ',
        emoji: '∩(·ω·)∩'
    },
]

function GenRandomMessage() {
    const randomFirst = messages[Math.floor(Math.random() * messages.length)].FirstMessage;
    const randomSecond = messages[Math.floor(Math.random() * messages.length)].SecondMessage;
    const randomEmoji = messages[Math.floor(Math.random() * messages.length)].emoji;

    return randomFirst + randomSecond + randomEmoji;
}


/*const FirstMessage = ['We live in a twilight world. ', 'I am your father. ', 'My mama always said life was like a box of chocolates. ']
const SecondMessage = ['And there are no friends at dusk. ', 'NOOOOOOOOOOOOOOOOOOOOOOO!!!! ', 'You never know what you are gonna get. ']
const emoji = ['(^_-)', '(凸ಠ益ಠ)凸', '∩(·ω·)∩', '( ﾟ Дﾟ)']

function GenRandomMessage() {
    const randomFirst = FirstMessage[Math.floor(Math.random() * FirstMessage.length)]
    const randomSecond = SecondMessage[Math.floor(Math.random() * SecondMessage.length)]
    const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)]

    return randomFirst + randomSecond + randomEmoji
}*/

console.log(GenRandomMessage())

