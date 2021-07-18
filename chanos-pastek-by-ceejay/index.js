const Discord = require("discord.js");
const config = require("./config.json");

//Code renvoyé par URI : code=S6QfMuU1EUsti3zQPwcHkh0uAJbhqB
//access token : EcxeIv4x5GnoaRHrXseoj2rjhGZuOB


const client = new Discord.Client();

client.on('ready', () => {
    console.log("Connected as " + client.user.username);
    client.user.setActivity("JavaScript")
})

const prefix = "!";

function GuildMemberManager() {
    console.log(GuildMemberManager.cache("458072716298158134"));
}


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


  //AJOUTER ROLE A UNE PERSONNE
  if (command === "role") {
    let role = message.guild.roles.cache.get("865014115910287390");
    message.guild.members.cache.get("248508374533013504").roles.add(role);
  }

})       

       

/*
const channel = <client>.channels.cache.get('<id>');
channel.send('<content>');
*/




client.login(config.BOT_TOKEN);

//https://discord.com/api/oauth2/authorize?response_type=token&client_id=157730590492196864&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https%3A%2F%2Fnicememe.website&prompt=consent


/*
fetch(url,
    type GET
    headers: authorization = bearer token
    )

    .then(reponse)
    .catch(error)

*/