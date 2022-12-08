const { Client, Events, Collection, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions } = require(`discord.js`);
console.log("loading Client, Events, Collection, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions");

require("dotenv").config();
const TOKEN = process.env.TOKEN;

const prefix = "/";
console.log("prefix set to '/'");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
console.log("create new client");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log("getting ready");
client.on("ready", () => {
  console.log("Bot is online!");
  
  client.user.setActivity(`I'm working`, {type: "WATCHING"});
});

client.on("messageCreate", (message) => {
  if(!message.author.bot){
  console.log(`Server: ${message.guild.name} \t User: ${message.author.tag} \t Message: ${message.content}`);
  }
  //if message don't start with prefix and not a bot
  if (!message.content.startsWith(prefix) && !message.author.bot) {
    if(message.content === "rock"){
      message.reply("Paper, you lost");
    }

    if(message.content === "paper"){
      message.reply("Scissors, you lost");
    }

    if(message.content === "scissors"){
      message.reply("Rock, you lost");
    }

    let kayla = /kayla/i;
    if(kayla.test(message.content)){
      message.reply("https://cdn.discordapp.com/emojis/993072878511722516.webp?size=48");
    }
    
  } else if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];
  
  
    if (command === "status") {
      message.reply("online");
      console.log("online");
    }
    
    if(command === "kayla"){
      message.channel.send("is pepega");
      console.log("is pepega");
    }
    
    if(command === "leighton"){
      message.channel.send("founder of R0ADX B0T");
      console.log("founder of R0ADX B0T");
    }

    if(command === "roll"){
      message.reply((getRandomInt(6) + 1).toString());
    }

    if(command ==="help"){
      const helpEmbed = new EmbedBuilder()
      .setAuthor({ name: "R0ADX B0T"})
      .setTitle("HELP")
      .setDescription("list of commands available for R0ADX B0T\n vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
      .addFields(
      { name: "/status", value: "Bot online status"},
      { name: "/kayla", value: "Kayla is pepega"},
      { name: "/leighton", value: "Founder of R0ADX B0T"},
      { name: "There are also keywords that will trigger R0ADX B0T to reply", value: "-", inline: true},
      { name: "kayla", value: "Reply with pepega" },
      { name: "rock / paper / scissors", value: "You will always loose"},

      )
      .setTimestamp()
      .setFooter({ text: "R0ADX B0T" })
      message.reply({ embeds: [helpEmbed] });
    }
  }
});

client.login(TOKEN);
