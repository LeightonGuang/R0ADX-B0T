const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get-guild-id")
    .setDescription("get gulid id"),
  async execute(interaction) {
    await interaction.reply("guild id: " + interaction.guild.id);
  },
};