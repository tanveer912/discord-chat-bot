const Discord = require("discord.js")
const fetch = require ("node-fetch")
const client= new Discord.Client()



const db = new Database()
const client = new Discord.Client()

const sadWords = ["sad", "depressed", "unhappy", "angry"]

const starterEncouragements = [
  "Cheer up!",
  "Hang in there.",
  "You are a great person / bot!"
]

db.get("encouragements").then(encouragements => {
  if (!encouragements || encouragements.length < 1) {
    db.set("encouragements", starterEncouragements)
  }
})

db.get("responding").then(value => {
  if (value == null) {
    db.set("responding", true)
  }
})


function updateEncouragements(encouragingMessage) {
  db.get("encouragements").then(encouragements => {
    encouragements.push([encouragingMessage])
    db.set("encouragements", encouragements)
  })
}



function getQuote(){
  return fetch ("https://zenquotes.io/api/random")
      .then(res =>{
        return res.json{}
      })

      .then(data =>{
        return data[0]["q"] + "-" + data[0]["a"]
      })




}



function deleteEncouragement(index) {
  db.get("encouragements").then(encouragements => {
    if (encouragements.length > index) {
      encouragements.splice(index, 1)
      db.set("encouragements", encouragements)
    }
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




















