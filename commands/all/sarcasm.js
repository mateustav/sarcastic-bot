const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sarcasm")
    .setDescription("Replies with message!")
    .addStringOption(option =>
      option
        .setName("message")
        .setDescription("The text to convert to sarcasm.")
        .setRequired(true)
    ),
    async execute(interaction) {
      const message = interaction.options.getString("text");
      console.log('message', message);
      await interaction.reply(message);
    },
};
