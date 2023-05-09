const Discord = require("discord.js");
"use strict";
const dotenv = require('dotenv');
const { accessSync } = require("fs");
const fs = require('fs');
dotenv.config();

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildModeration,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ]
});

module.exports = client

client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.guilds.cache.size} Servidores!\n🎈 Estou logado(a) como ${client.user.tag}!`)
  client.user.setStatus("online");
  let status = [
    {
      name: '🎁Confira meu site: https://nyssabot.pages.dev',
      type: Discord.ActivityType.Playing,
    },
    {
      name: `💻${client.guilds.cache.size} Servidores`,
      type: Discord.ActivityType.Playing,
    },
    {
      name: `🎇${client.users.cache.size} Usuários`,
      type: Discord.ActivityType.Playing,
    },
    {
      name: '🎉Confira meu perfil no Top.gg',
      type: Discord.ActivityType.Playing,
    },
    {
      name: '💎Veja meus comandos usando /ajuda.',
      type: Discord.ActivityType.Playing,
    },
  ];
  client.user.setActivity(status[0]);
  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 120000);
});

process.on('multipleResolutions', (type, reason, promise) => {
  console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
});

process.on('unhandledRejection', (reason, promise) => {
  console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
});

process.on('uncaughtException', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

process.on('uncaughtExceptionMonitor', (error, origin) => {
  console.log(`🚫 Erro Detectado:\n\n` + error, origin)
});

fs.readdir('./eventos', (err, file) => {
  file.forEach(event => {
    require(`./eventos/${event}`)
  })
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(process.env.DISCORD_TOKEN);

//Mongodb
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const clientMongo = new MongoClient(uri);

clientMongo.connect((err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("📚 Conectado ao MongoDB!")
  }
});

module.exports.mongoClient = clientMongo;
