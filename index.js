const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["Guilds"] })
const keep_alive = require('./keep_alive.js')

client.on("ready", () => {
  console.log("The bot is online!")

  client.user.setActivity({
    name: 'skulling💀', 
  })
})

client.on("interactionCreate", async (interaction) => {
  if(interaction.isCommand()) {
    if(interaction.commandName === "ping") {
      interaction.reply("Pong! :ping_pong:")
    }
    if(interaction.commandName === "cmds") {
      interaction.reply("Commands: **`ping`**, **`cmds`**, **`kill`**, **`wack`**, **`explode`**, **`yes`**, **`skull`**, **`invite`**, **`text`**")
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
    if(interaction.commandName === "text") {
      const textRecieved = interaction.options.getString("text")
      interaction.reply({ content: `You said ${textRecieved}`, ephemeral: true })
    }
    if(interaction.commandName === "kick") {
      if (!(interaction.member.permissions.bitfield & BigInt(0x00000002))) {
    return interaction.reply({ content: "You do not have permission to use this command.", ephemeral: true });
      }
    if (!interaction.member.permissions.bitfield & requiredPermission) {
        return interaction.reply({ content: "You do not have permission to use this command.", ephemeral: true });
    }
    const user = interaction.options.getUser("user");
    const dm = interaction.options.getBoolean("dm");
    const reason = interaction.options.getString("reason");
    const member = interaction.guild.members.cache.get(user.id);
    if (!member) {
        return interaction.reply({ content: "User not found!", ephemeral: true })
    }
    try {
        if (dm) {
            await user.send(`You have been kicked from **${interaction.guild.name}**. Reason: **${reason}**`);
        }
        await member.kick();
        await interaction.reply(`${user.tag} has been kicked from the server!`);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: "An error occurred while trying to kick the user.", ephemeral: true });
    }
    }
  }
})

client.login(process.env.token)
