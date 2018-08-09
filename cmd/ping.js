var Discord = require("discord.js");
  exports.run = (bot, message, args = []) => {
    message.channel.send('Ping?')
    .then(msg => {
      msg.delete()
      var pingembed = new Discord.RichEmbed()
     .setTitle("Pong")
     .setDescription(`took: \`${msg.createdTimestamp - message.createdTimestamp}\` ms`)
     .setColor('36393e')
     msg.channel.send(pingembed)
    });
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pong"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Ping/Pong command. I wonder what this does? /sarcasm",
  category: "info",
  usage: "ping"
};
