module.exports = {
    name: "help",
    description: "Displays commmands",
    execute(message, PREFIX, Discord) {
        const image = new Discord.Attachment("./everzon.jpg", "everzon.jpg");
        var helpList = new Discord.RichEmbed()
            .setColor("DARK_BLUE")
            .setTitle("Bobby B Help")
            .setDescription(`Command symbol is currently: ${PREFIX}`)
            .addField('Commands:', "``avatar`` ``clear`` ``emote`` ``pressf`` ``roll`` ``8ball``")
            .attachFile(image)
            .setImage("attachment://everzon.jpg");
        message.channel.send(helpList);
    }
}