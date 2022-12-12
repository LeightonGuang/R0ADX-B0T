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
    console.log("LOG: \t role: " + role);

    //if the role does not exist
    if (role == undefined) {
      //create new role
      interaction.guild.roles.create({ name: roleName });
      console.log("LOG: \t created new cheese touch role");
      await interaction.reply({ content: "created new cheese touch role", ephemeral: true });
      return;

      // the role exist  
    } else {
      //if no one have the role
      console.log("LOG: \t exist but no one have role");
      if (!interaction.member.roles.cache.find(r => r.name === roleName)) {
        sender.roles.add(role);
        await interaction.reply({ content: "Set cheese touch to yourself", ephemeral: true });
        console.log("LOG: \t set cheese touch to yourself")
        return;
      }
    }

    //if the sender has cheese touch
    if (interaction.member.roles.cache.get(role.id)) {

      //if the target alrady has cheese touch
      if (target.roles.cache.some(role => role.name === "cheese touch")) {
        await interaction.reply({ content: `${target} already have cheese touch`, ephemeral: true });
        console.log(`LOG: \t ${target.user.username} already have cheese touch`);
        return;

      } else {
        //target has no cheese touch
        sender.roles.remove(role);
        console.log("LOG: \t cheese touch removed fro yourself");
        target.roles.add(role);
        console.log(`LOG: \t cheese touch given to ${target.user.username}`);
        //giving cheese touch successful
        await interaction.reply({ content: `cheese touch removed from yourself and given to ${target}`, ephemeral: true });
      }

    } else {
      //sender has no cheese touch
      await interaction.reply({ content: `You don't have cheese touch`, ephemeral: true });
      console.log("LOG: \t You don't have cheese touch");
      return;
    }
  }
};