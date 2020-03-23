function del_msgs(message, num_messages) {
    message.channel.bulkDelete(num_messages).then(() => {
        message.channel.send(`Cleared ${num_messages} messages. This message will expire in 3 seconds.`).then(r => r.delete(3000));
    })
}

module.exports = {
    name: "clear",
    description: "Clears X number of lines",
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("This command is only available to admins 🙂");
            return;
        }
        if(!args[0]) { // No number inputted
            const filter = m => m.author.id === message.author.id;
            message.reply("How many messages would you like to clear? Expires in 20 seconds...").then(r => r.delete(20000));
            message.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
                if(collected.first().content === "cancel") {
                    return message.reply("Cancelled");
                }
                del_msgs(message, collected.first().content);
            }).catch(console.error);
        } else {
            del_msgs(message, args[0]);
        }
    }
}