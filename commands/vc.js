module.exports = {
    name: "vc",
    description: "Makes bot join the voice channel",
    execute(message, args, bot) {
        if(message.member.voiceChannel) {
            if(!message.guild.voiceConnection) {
                message.member.voiceChannel.join();
            }
        }
    }
}