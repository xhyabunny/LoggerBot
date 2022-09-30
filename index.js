const Discord = require('discord.js');
const client = new Discord.Client();
var config = require('./vars.json');

const myLoggers = require('log4js');
const { setInterval } = require('timers');
const { S_IFREG } = require('constants');
const { randomInt } = require('crypto');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "./output.txt" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});

const logger = myLoggers.getLogger("bot");
const token = config.TOKEN; // GO TO VARS.JSON FILE AND ADD YOUR TOKEN
const p = ",";

var date=new Date(). toLocaleString();

var index1 = ["avaiable", "dnd", "idle"];
var index0 = ["PLAYING", "WATCHING", "STREAMING", "LISTENING"];

client.on('ready', () => {

setInterval((function(){

        var index3 = index0[Math.floor(Math.random() * index0.length)];
        var index2 = index1[Math.floor(Math.random() * index1.length)];
        client.user.setPresence({
            status: index2,
            activity: {
                name: 'your mom',
                type: index3,
                url: 'https://www.twitch.tv/ttv_bonndubz'
            }
        })
        
    }), 1000)
    
  console.log(`Logged in as ${client.user.tag}!`);
    
});



client.on('message', message => {
    
if(message.content !== null){ // THE LOGGER (finally)

    if(message.author.id === client.user.id){ //if its the bot
        
        logger.debug(
            " BOT SENT - In Server: " + message.member.guild.name + " (" + message.member.lastMessage.guild.id +
            ") - Channel: #" + message.member.lastMessage.channel.name + " ("+message.member.lastMessage.channel.id+
            ") " + message.member.user.tag + message.member.user.id +" Messaged: '" + message.member.user.lastMessage.content + "'");
        
    }else{                                    //if its not the bot
        
        logger.debug(
            " MESSAGE SENT - In Server: " + message.member.guild.name + " (" + message.member.lastMessage.guild.id +
            ") - Channel: #" + message.member.lastMessage.channel.name + " ("+message.member.lastMessage.channel.id+
            ") " + message.member.user.tag + message.member.user.id +" Messaged: '" + message.member.user.lastMessage.content + "'");
        
    }
}

client.login(token); //run the bot
