const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("roll a random number")
        .addStringOption((option) =>
            option
                .setName("number")
                .setDescription("type of games")
                .setRequired(true),
        ),

    async execute(interaction) {
        console.log("LOG: \t /roll command used");
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let num = interaction.options.get("number").value;
        num = (getRandomInt(num) + 1).toString();

        await interaction.reply({ content: num });
        console.log(`LOG: \t random number generated: ${num}`);

    }
}
