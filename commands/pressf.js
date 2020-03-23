let lastCommandTime, lastCommandUser;
module.exports = {
    name: "pressf",
    description: "Pays respects",
    execute(message, args, bot) {
        const currentTime = new Date();
        const timeout = 60000; // 2 minute timeout 
        if(currentTime - lastCommandTime < timeout) {
            const cooldown = ((timeout - (currentTime - lastCommandTime)) / 60000).toString();
            let seconds = cooldown.substring(cooldown.indexOf("."));
            parseInt(seconds);
            message.channel.send(`The pressf command is still currently in use by **${lastCommandUser}**.`);
            message.channel.send(`Try again in ${(seconds * 60).toFixed(2)} seconds.`);
            return;
        }
        const filter = m => m.author.id === message.author.id;
        message.reply("Who would you like to pay respects to? Expires in 20 seconds...").then(r => r.delete(20000));
        message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
            if(collected.first().content === "cancel") {
                return message.reply("Cancelled");
            }
            message.channel.send(`Press the F emoji to pay respects to **${collected.first().content}**. Event ends in 1 minute.`).then(reactMsg => {
                reactMsg.react("🇫");
                lastCommandTime = currentTime;
                lastCommandUser = message.author.username;
                
                let reactUser;
                const fEmote = (reaction, user) => {
                    reactUser = user;
                    return reaction.emoji.name == "🇫" && user.id != bot.user.id;
                }
                let numUsers = 0;
                const collector = reactMsg.createReactionCollector(fEmote, {time: 60000});
                collector.on("collect", (reaction) => {
                    numUsers++;
                    reaction.message.channel.send(`**${reactUser.username}** has paid respects.`);
                });
                collector.on("end", users => {
                    message.channel.send(`Time has run out! **${numUsers}** people have paid respects to **${collected.first().content}**.`)
                })
            })
        }).catch(console.error);
    }
}