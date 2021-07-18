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
  const channel = client.channels.cache.get('865011224390533160')
  //const webAttachement = new Discord.WebAttachement("images/speecatbot3.png");

  if (command === "marco") {
    
    message.reply(`POLOOOOO!`); //Répond en tag l'user de la commande
    channel.send('Polo, j\'ai envoyé ce message sans tag l\'auteur de la commande') //Envoie un message simple sans tag

  }

  if (command === "chanos") {
      channel.send({files: ["images/chanos_v1.png"]});
  }

  if (command === "rhum") {
      channel.send("J'ai soif ! :champagne: ");
  }

  if (command === "role_test") {
      messageReactionAdd(':champagne:')
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