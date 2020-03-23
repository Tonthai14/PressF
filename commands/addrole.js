module.exports = {
    name: "addrole",
    description: "Add a role to the server",
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You don't currently have admin priveliges. Ask Ricsson if you want to add a role.");
            return;
        }
    }
}