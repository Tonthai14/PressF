const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();

// Login
const token = 'Token';
bot.on('ready', ()=> {
    bot.user.setActivity("=help for commands", { type: "LISTENING"});
    console.log('The bot is online'); 
});
bot.login(token);

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.on('message', async message => {
    if(message.content.toLowerCase() === "kermit") message.channel.send("https://tenor.com/view/kermit-kermitthefrog-daddy-gif-5368681");
    const PREFIX = '=';
    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(PREFIX)) return;
    
    let args = message.content.substring(PREFIX.length).split(" ");
    const cmd = args.shift().toLowerCase();
    switch(cmd) {
        case "help":
            bot.commands.get("help").execute(message, PREFIX, Discord);
            break;
        case "addrole":
            bot.commands.get("addrole").execute(message, args);
            break;
        case "role":
            bot.commands.get("role").execute(message, args);
            break;
        case "avatar":
            bot.commands.get("avatar").execute(message, args, Discord);
            break;
        case "vc":
            if(message.member.voiceChannel) {
                if(!message.guild.voiceConnection) {
                    message.member.voiceChannel.join().then(connection => {
                        connection.playFile("./rds.mp3");
                    }).catch(err => console.log(err));
                }
            }
            //bot.commands.get("vc").execute(message, args, bot);
            break;
        case "leave":
            if(message.guild.voiceConnection) {
                message.member.voiceChannel.leave();
            }
            //bot.commands.get("leave").execute(message, args);
            break;
        case "roll":
            bot.commands.get("roll").execute(message, args);
            break;
        case "ricsson":
            bot.commands.get("ricsson").execute(message, args);
            break;
        case "emote":
            message.channel.send(bot.emojis.get("642401695678070794").toString());
            break;
        case "pressf":
            bot.commands.get("pressf").execute(message, args, bot);
            break;
        case "clear":
            bot.commands.get("clear").execute(message, args);
            break;
        case "say":
            bot.commands.get("say").execute(message, args);
            break;
        case "8ball":
            bot.commands.get("8ball").execute(message, args);
            break;
    }
})
