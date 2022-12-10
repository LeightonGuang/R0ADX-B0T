const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("games")
        .setDescription("pick a game")
        .addStringOption((option) =>
            option
                .setName("type")
                .setDescription("type of games")
                .setRequired(true)
                .setChoices(
                    {
                        name: "Rock paper scissors",
                        value: "rps",
                    },
                    {
                        name: "tag",
                        value: "tag",
                    },
                ),
        ),

    async execute(interaction) {
        c
        let type = interaction.options.get("type").value;
        if (type === "rps") {
            let guess = Math.floor(Math.random() * max);
            let hand = ["rock", "paper", "scissors"];
            

        } else if (type === "tag") {

        }
        await interaction.reply(`${type} game selected`);
        console.log(`${type} game selected`);
    },
};
