const { Client, Events, Collection, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions } = require(`discord.js`);
console.log("loading Client, Events, Collection, GatewayIntentBits, EmbedBuilder, PermissionBitField, Permissions");

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
  //if message don't start with prefix or not a bot
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
    
    if(message.content === "pak u"){
      message.reply("pak u too");
    }

    if(message.content === "<:PogOFF:1049258618995867668>"){
      message.reply("<:PogOFF:1049258618995867668>");
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
      message.channel.send("bot is online");
      console.log("bot is online");
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
      message.channel.send(getRandomInt(6));
    }
  }
});

client.login(process.env['TOKEN']);
