const Discord = require("discord.js")
const fetch = require ("node-fetch")
const client= new Discord.Client()

function getQuote(){
  return fetch ("https://zenquotes.io/api/random")
      .then(res =>{
        return res.json{}
      })

      .then(data =>{
        return data[0]["q"] + "-" + data[0]["a"]
      })




}

client.on("ready",() => {
console.log('Logged in as ${client}')
})

client.on("message", msg =>{
  if(msg.content === "ping") {
    msg.reply("pong")
  }
})

client.login(process.env.TOKEN)