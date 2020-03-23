module.exports = {
    name: "roll",
    description: "Rolls a random number between 0 and 100",
    execute(message, args) {
        let number = Math.floor(Math.random() * 101);
        message.channel.send(`You rolled a ${number}!`)
    }
}