const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rock-paper-scissors")
        .setDescription("rock paper scissors")
        .addStringOption((option) =>
            option
                .setName("hand")
                .setDescription("hand")
                .setRequired(true)
                .setChoices(
                    {
                        name: "Rock",
                        value: "rock",
                    },
                    {
                        name: "Paper",
                        value: "paper",
                    },
                    {
                        name: "Scissors",
                        value: "scissors",
                    },
                ),
        ),

    async execute(interaction) {
        console.log("LOG: \t playing rock paper scissors");
        let user_guess = interaction.options.get("hand").value;
        let bot_guess = Math.floor(Math.random() * 3);
        let hand = ["rock", "paper", "scissors"];

        if (hand[bot_guess] === user_guess) {
            await interaction.reply(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou tied`);
            console.log(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou tied`);

        } else if ((hand[bot_guess] === "rock" && user_guess === "scissors") || (hand[bot_guess] === "paper" && user_guess === "rock") || (hand[bot_guess] === "scissors" && user_guess === "paper")) {
            await interaction.reply(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou lost`);
            console.log(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou lost`);

        } else if ((user_guess === "rock" && hand[bot_guess] === "scissors") || (user_guess === "paper" && hand[bot_guess] === "rock") || (user_guess === "scissors" && hand[bot_guess] === "paper")) {
            await interaction.reply(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou won`);
            console.log(`
            You: ${user_guess}\tBot: ${hand[bot_guess]}\nYou won`);
        }
    }
};
