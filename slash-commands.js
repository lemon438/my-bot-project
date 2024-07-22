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
       .setDescription("Shows all commands expect admin commands!"), 

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
       .setDescription("💀"), 

        new SlashCommandBuilder()
       .setName("invite")
       .setDescription("Invite the bot to your server!")

        new SlashCommandBuilder()
       .setName("text")
       .setDescription("Just a slash command with options")
       .addStringOption(option => {
         return option
        .setName("text")
        .setDescription("The text you want to say")
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(35)
       })
        new SlashCommandBuilder()
       .setName("kick")
       .setDescription("Kicks a user")
       .addUserOption(option => {
         return option
         .setName("user")
         .setDescription("Select a user")
         .setRequired(true)
       })
       .addBooleanOption(option => {
         return option
         .setName("dm")
         .setDescription("Whether to DM the user or not")
         .setRequired(true)
       })
        .addStringOption(option => {
          return option
          .setName("reason")
          .setDescription("The reason for kicking the user")
          .setRequired(false)
          .setMaxLength(150)
       })
      ]
    })
  } catch (error) {
    console.log(error)
  }
}
slashRegister();
