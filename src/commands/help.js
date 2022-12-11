const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("list of all commands"),
  async execute(interaction) {
    const helpEmbed = new EmbedBuilder()
      .setAuthor({ name: "R0ADX B0T" })
      .setTitle("HELP")
      .setDescription("list of commands available for R0ADX B0T\n vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
      .addFields(
        { name: "/status", value: "Bot online status" },
        { name: "/roll", value: "Roll a random number from 1 to a spefic number by you" },
        { name: "/rock-paper-scissors", value: "rock paper scissors game" },
        { name: "/tag", value: "tag like cheese touch" },
        { name: "/leighton", value: "Founder of R0ADX B0T" },

      )
      .setTimestamp()
      .setFooter({ text: "R0ADX B0T" })
    await interaction.reply({ embeds: [helpEmbed] });
    console.log("LOG: \t embed help list");
  },
};