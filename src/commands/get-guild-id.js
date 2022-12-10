const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get-guild-id")
    .setDescription("bot online status"),
  async execute(interaction) {
    await interaction.reply("Bot is online");
  },
};
