const random = (deck) => {
    const len = deck.length;
    for(let i = 0; i < len; i++){
        let randomIndex = Math.floor(Math.random() * len);
        console.log(randomIndex)
        let temp = deck[randomIndex];
        deck[randomIndex] = deck[i];
        deck[i] = temp;
    }
    return console.log(deck);
}

random(["to", "win", "you", "must", "first", "learn", "to lose"]);