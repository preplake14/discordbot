const Discord = require("discord.js");
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = process.env.TOKEN;

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};



bot.on('message', function(message, member, addRole){
    if(message.content == 'hello')
    {
        message.channel.sendMessage('hello, ' + message.author + ' how are you?');
    }
    if(message.content == 'op baby')
    {
        member.addRole(member.guild.roles.find("name", "moderator"));
        console.log("op actvated");
    }
});



bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to the server")
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole);
});

bot.on('ready',function(){
console.log("Ready");
})

bot.login(TOKEN);