const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU2NzI5NTU3NTY3OTMwMzc5.DjdSTg.7orOvHdW7jyCSSlRxSWrDrO5yng);
