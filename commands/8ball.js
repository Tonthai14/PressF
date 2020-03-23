module.exports = {
    name: "8ball",
    description: "Generate random response",
    execute(message, args) {
        let replies = [ "Yes", "No", "Absolutely", "Probably not", "Without doubt", "Don't count on it", "Certainly", "Ask again later"];
        let choice = Math.floor(Math.random() * replies.length);
        message.channel.send(replies[choice]);
    }
}