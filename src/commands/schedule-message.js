const { SlashCommandBuilder } = require('discord.js');
const schedule = require('node-schedule');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("schedule-message")
    .setDescription("schedule to send a message in a specific time")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("timer")
        .setDescription("timer for message")
        .addUserOption((option) =>
          option
            .setName('to')
            .setDescription('user to send to')
            .setRequired(true),
        )
        .addStringOption((option) =>
          option
            .setName("message")
            .setDescription("enter a message to be sent for later")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("hour")
            .setDescription("how many hour(s) till message sent")
            .setRequired(false),
        )
        .addIntegerOption((option) =>
          option
            .setName("minute")
            .setDescription("how many minute(s) till message sent")
            .setRequired(false),
        )
        .addIntegerOption((option) =>
          option
            .setName("second")
            .setDescription("how many second(s) till message sent")
            .setRequired(false),
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("date")
        .setDescription("date for message")
        .addUserOption((option) =>
          option
            .setName('to')
            .setDescription('user to send to')
            .setRequired(true),
        )
        .addStringOption((option) =>
          option
            .setName("message")
            .setDescription("enter a message to be sent later")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("day")
            .setDescription("enter the day for scheduled message")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("month")
            .setDescription("enter the month for scheduled message")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("year")
            .setDescription("enter the year for scheduled message")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("hour")
            .setDescription("enter the hour of a 24 hour clock for scheduled message")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("minute")
            .setDescription("enter the minute for scheduled message")
            .setRequired(true),
        )
        .addIntegerOption((option) =>
          option
            .setName("second")
            .setDescription("enter the second for scheduled message")
            .setRequired(true),
        )
    ),

  async execute(interaction) {
    let sender = interaction.member;
    let msg = interaction.options.getString("message");
    let day = interaction.options.getInteger("day");
    let month = interaction.options.getInteger("month");
    let year = interaction.options.getInteger("year");
    let hr = interaction.options.getInteger("hour");
    let min = interaction.options.getInteger("minute");
    let sec = interaction.options.getInteger("second");
    let target = interaction.options.getMember('to');

    function scheduleTimeMessage() {
      const date = new Date(new Date().getTime() + (hr * 3600000) + (min * 60000) + (sec * 1000));
      schedule.scheduleJob(date, () =>
        interaction.channel.send(`Hi, ${target} \n${msg} \n${sender}`)
      );
    }

    function scheduleDateMessage() {
      const date = new Date(year, month - 1, day, hr, min, sec);
      schedule.scheduleJob(date, () =>
        interaction.channel.send(`Hi, ${target} \n${msg} \n${sender}`)
      );
    }

    function convertNum() {
      if (hr == null) {
        hr = 0;

      } if (hr.toString().length === 1) {
        hr = "0" + hr.toString();

      } if (min == null) {
        min = 0;

      } if (min.toString().length === 1) {
        min = "0" + min.toString();

      } if (sec == null) {
        sec = 0;

      } if (sec.toString().length === 1) {
        sec = "0" + sec.toString();
      }
    }

    if (interaction.options.getSubcommand() === "timer") {
      scheduleTimeMessage();
      convertNum();
      await interaction.reply({
        content:
          `You have scheduled to send 
message:\t${msg}
in:\t${hr}:${min}:${sec}
to:\t${target}`, ephemeral: true
      });
      console.log(`LOG: \t ${sender.user.tag} have scheduled to send 
message:\t${msg}
in:\t\t${hr}:${min}:${sec}
to:\t\t${target.user.tag}`);

    } else if (interaction.options.getSubcommand() === "date") {
      scheduleDateMessage();
      convertNum();
      await interaction.reply({
        content:
          `You have scheduled to send 
message:\t${msg}
at:\t${hr}:${min}:${sec}\t${day}/${month}/${year}
to:\t${target}`, ephemeral: true
      });
      console.log(`LOG: \t ${sender.user.tag} have scheduled to send 
message:\t${msg}
at:\t\t${hr}:${min}:${sec}\t${day}/${month}/${year}
to:\t\t${target.user.tag}`);
    }
  },
};
