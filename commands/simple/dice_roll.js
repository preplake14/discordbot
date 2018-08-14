const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
             name: 'roll',
             group: 'simple',
             memberName: 'roll',
             description: 'Rolls a dice'
            });
    }
    async run(message, args)
    {
        var DiceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice landed on " + DiceRoll);
    }
}

module.exports = DiceRollCommand;