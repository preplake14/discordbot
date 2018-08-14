const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'info',
             group: 'simple',
             memberName: 'info',
             description: 'Learn a little bit more about me'
            });
    }
    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Info")
        .addField("About Preplake" , "My name is Nathan, i am 14 years old and i am from Belgium")
        .setColor(0xFF0000)
        .setThumbnail(message.author.avatarURL)
        .setURL("https://steamcommunity.com/id/preplake14/")
        .setFooter("Thanks for reading.")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;