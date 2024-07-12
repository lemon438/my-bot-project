const {  REST, Routes, SlashCommandBuilder } = require("discord.js")
//Info needed for slash commands
const botID = process.env.botID
const serverID = "1250426499052605512"
const botToken = process.env.token

const rest = new REST(). setToken(botToken)
const slashRegister = async () => {
  try {
    await rest.put(Routes.applicationCommands(botID), {
      body: [
        new SlashCommandBuilder()
       .setName("ping")
       .setDescription("Replies with pong!"), 

        new SlashCommandBuilder()
       .setName("cmds")
       .setDescription("Shows all commands!"), 

        new SlashCommandBuilder()
       .setName("kill")
       .setDescription("Kills the bot!"),

        new SlashCommandBuilder()
       .setName("wack")
       .setDescription("clear da memory"), 

        new SlashCommandBuilder()
       .setName("explode")
       .setDescription("make the bot explode"), 

        new SlashCommandBuilder()
       .setName("yes")
       .setDescription("Yes, No."), 

        new SlashCommandBuilder()
       .setName("skull")
       .setDescription("💀")
      ]
    })
  } catch (error) {
    console.log(error)
  }
}
slashRegister();