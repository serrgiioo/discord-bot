const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//COMANDO INVITACIÓN//

client.on("messageCreate", (message) => {
    if (message.content == "!invi"){
        message.reply("Aqui tienes la invitación al discord: **https://discord.gg/hgYbkurNxA**")
    }
})

const welcomeChannelId = "960183877853401148"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)