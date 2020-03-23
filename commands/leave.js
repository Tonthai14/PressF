module.exports = {
    name: "leave",
    description: "Leaves the voice channel",
    execute(message, args) {
        if(message.guild.voiceConnection) {
            message.member.voiceChannel.leave();
        }
    }
}