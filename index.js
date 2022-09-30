//requirements (DO NOT TOUCH THESE)
const Discord = require('discord.js');
const client = new Discord.Client();
const myLoggers = require('log4js');
const { setInterval } = require('timers');
const { S_IFREG } = require('constants');
const { randomInt } = require('crypto');
const logger = myLoggers.getLogger("bot");

//token
const token = config.TOKEN; // GO TO VARS.JSON FILE AND ADD YOUR TOKEN ( "token": "your token goes here" )

//vars
var p = ","; //this is the prefix
var date = new Date().toLocaleString();
var config = require('./vars.json');
var index1 = ["avaiable", "dnd", "idle"]; //array with status
var index0 = ["PLAYING", "WATCHING", "STREAMING", "LISTENING"]; //array with activity type

//logger settings
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "./output.txt" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});

client.on('ready', () => {

setInterval((function(){

        var index2 = index1[Math.floor(Math.random() * index1.length)]; //random status
        var index3 = index0[Math.floor(Math.random() * index0.length)]; //random activity type

        client.user.setPresence({
            status: index2,//    <<<< randomized status [index2]
            activity: {
                name: 'your mom',
                type: index3,//  <<<< randomized activity type [index3]
                url: 'https://www.twitch.tv/ttv_bonndubz'
            }
        })
        
    }), 1000)
    
  console.log(`Logged in as ${client.user.tag}!`); //checks connection along with user tag in the prompt
    
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
