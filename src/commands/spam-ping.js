const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spam-ping")
    .setDescription("spam ping user 10 times")
    .addUserOption((option) => option.setName('user')
      .setDescription('user')),

  async execute(interaction) {
    let target = interaction.options.getMember('user');
    //await interaction.reply({ content: `pinging ${target} 10 times`, ephemeral: true });
    for (let i = 0; i < 10; i++) {
      interaction.channel.send(`${target}!`);
    }
  },
};
