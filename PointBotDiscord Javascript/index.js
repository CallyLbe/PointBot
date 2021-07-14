const Discord = require("discord.js");
const config = require("./config.json");


const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.username);
    client.user.setActivity("JavaScript")
})

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);


  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  const channel = client.channels.cache.get('864790630080970762')

  if (command === "marco") {
    
    message.reply(`POLOOOOO!`); //Répond en tag l'user de la commande
    channel.send('Polo, j\'ai envoyé ce message sans tag l\'auteur de la commande') //Envoie un message simple sans tag

  }
})                     


client.on("messageReactionAdd", function(messageReactionAdd){
    if (messageReactionAdd == '😀') {
        
    }


})

/*
const channel = <client>.channels.cache.get('<id>');
channel.send('<content>');
*/




client.login(config.BOT_TOKEN);