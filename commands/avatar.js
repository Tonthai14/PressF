module.exports = {
    name: "avatar",
    description: "Displays message user's avatar",
    execute(message, args, Discord) {
        let avatarEmbed = new Discord.RichEmbed().setColor(0x333333);
        if(args[0]) {
            let member = message.mentions.users.first();
            avatarEmbed.setTitle(member.username).setImage(member.avatarURL);
        } else {
            avatarEmbed.setTitle(message.author.username).setImage(message.author.avatarURL);
        }
        message.channel.send(avatarEmbed);
    }
}