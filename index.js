const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["Guilds"] })
const keep_alive = require('./keep_alive.js')

client.on("ready", () => {
  console.log("The bot is online!")
})

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    if(interaction.commandName === "ping") {
      interaction.reply("Pong! :ping_pong:")
    }
    if(interaction.commandName === "cmds") {
      interaction.reply("Commands: **`ping`**, **`cmds`**, **`kill`**, **`wack`**, **`explode`**, **`yes`**, **`skull`**")
    }
    if(interaction.commandName === "kill") {
      interaction.reply("**dies**")
    }
    if(interaction.commandName === "wack") {
      interaction.reply("OUCH MY HEAD HURTS!!!")
    }
    if(interaction.commandName === "explode") {
      interaction.reply("erm what is happenin- **explodes like an actual skull**")
    }
    if(interaction.commandName === "yes") {
      interaction.reply("no")
    }
    if(interaction.commandName === "skull") {
      interaction.reply("💀")
    }
    if(interaction.commandName === "invite") {
      interaction.reply("https://discord.com/oauth2/authorize?client_id=1260863388129431625&permissions=608017011179127&integration_type=0&scope=bot")
    }
  }
})

client.login(process.env.token)
