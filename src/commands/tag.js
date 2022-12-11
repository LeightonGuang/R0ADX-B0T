const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tag")
    .setDescription("Tag like cheese touch")
    .addUserOption((option) => option.setName('user')
      .setDescription('user')),

  async execute(interaction) {
    let roleName = "cheese touch";
    let role = interaction.guild.roles.cache.find(x => x.name === roleName);
    let sender = interaction.member;
    let target = interaction.options.getMember('user');
    console.log("LOG: \t sender: " + sender.user.username);

    //if the role does not exist
    if (role == undefined) {
      //create new role
      interaction.guild.roles.create({ name: "cheese touch" });
      console.log("LOG: \t created new cheese touch role");
    }

    //if the user has cheese touch
    if (interaction.member.roles.cache.get(role.id)) {

      //if new tag alrady have cheese touch
      if (target.roles.cache.some(role => role.name === "cheese touch")) {
        await interaction.reply(`${target} already have cheese touch`);
        console.log(target.user.username + " already have cheese touch");
        return;

      } else {
        //target user has no cheese touch
        sender.roles.remove(role);
        console.log("LOG: \t cheese touch removed fro yourself");
        target.roles.add(role);
        console.log(`LOG: \t cheese touch given to ${target.user.username}`);
        //give cheese touch secretly
        await interaction.reply({ content: `cheese touch removed from yourself and given to ${target}`, ephemeral: true });
      }

    } else {
      //user has no cheese touch
      await interaction.reply(`${interaction.member} You don't have cheese touch`);
      return;
    }
  }
};