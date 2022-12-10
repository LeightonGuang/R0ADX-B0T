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
        let type = interaction.options.get("type").value;
        await interaction.reply(`${type} game selected`);
        console.log(`${type} game selected`);
    },
};
