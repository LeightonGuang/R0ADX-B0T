const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("creator")
    .setDescription("creator of R0ADX B0T"),
  async execute(interaction) {
    await interaction.reply("Leighton");
  },
};
