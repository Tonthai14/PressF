module.exports = {
    name: "say",
    description: "Have the bot say a sentence",
    execute(message, args) {
        message.reply("What would you like to say?");
        const filter = m => m.author.id === message.author.id;
        message.reply("Will expire in 20 seconds...").then(r => r.delete(20000));
        message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
            if(collected.first().content === "cancel") {
                return message.reply("Cancelled");
            }
            message.channel.send(message.author.username + " says: " + collected.first().content);
        })
    }
}