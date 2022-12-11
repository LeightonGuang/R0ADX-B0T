const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leighton")
    .setDescription("Founder of R0ADX B0T"),
  async execute(interaction) {
    await interaction.reply("Founder of R0ADX B0T");
  },
};
