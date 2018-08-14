const commando = require('discord.js-commando');
const discord = require('discord.js');

class WebSiteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'website',
             group: 'simple',
             memberName: 'website',
             description: 'preplakes website'
            });
    }
    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
        .setTitle("Website")
        .setColor(0xFF0000)
        .setThumbnail(message.author.avatarURL)
        .setURL("http://preplak.rf.gd/")
        .setFooter("yeet")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = WebSiteCommand;