const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = ",";
const fs = require("fs");

var cli = new Discord.Client({autoReconnect:true});

var servers = {};

//Les trucs aléatoires
  var citation =[
    "Si vous voyez des chips vertes dans votre paquet, ne les mangez surtout pas !!",
    "Ca fait deux jours que je suis bloqué dans ce labyrinthe, A L'AIDDDDDEEEE"
  ]
  var MafiaSquad = [
    "https://i.imgur.com/qMKA2ig.jpg",
    "https://i.imgur.com/5AcH0wc.jpg",
    "https://i.imgur.com/rbItyxW.jpg",
    "https://i.imgur.com/MFbkyxb.jpg",
    "https://i.imgur.com/DB8T2Wf.jpg",
    "https://i.imgur.com/kYRbRYP.jpg",
    "https://i.imgur.com/casEBjv.jpg",
    "https://i.imgur.com/pqsz8Ja.jpg"
  ]

  var giveaway = [
    "un iPhone X d'une valeur de 1000€",
    "un Mac Book Air d'une valeur de 1000€",
    "une carte Google Play d'une valeur de 100€",
    "un Burger d'OR d'une valeur de 200€",
    "un onk mignon"
  ]

  var intro = [
    "MP3/labyrinthe.wav",
    "MP3/ours.wav",
    "MP3/crise.wav",
    "MP3/chips verte.wav",
    "MP3/rubik.wav",
    "MP3/carte.wav",
    "MP3/jumelles.wav",
    "MP3/amoureux.wav"
  ]
  var game = [
    ({ game: { name: ",help - Cette fille s'est suicidée à cause de cette vidéo. quand je l'ai vu, j'ai été détruit...", type: 3, url: "https://www.youtube.com/watch?v=lBUIgZhtZ74"} }),
    ({ game: { name: ",help - Une fille aide la police a apprivoiser un ours polaire sauvage…", type: 3, url: "https://www.youtube.com/watch?v=DECWgDPv3As"} }),
    ({ game: { name: ",help - Je suis bloqué dans ce labyrinthe depuis 2 jours, envoyez moi de l'aide...", type: 3, url: "https://www.youtube.com/watch?v=PJ1ZghbmqXc"} }),
    ({ game: { name: ",help - Si je n'avais pas filmé ma prof en train de faire ça, personne ne m'aurait cru...", type: 3, url: "https://www.youtube.com/watch?v=lk6LtG4584M"} }),
    ({ game: { name: ",help - Un enfant tombe accidentellement sur son amoureuse en sport...", type: 3, url: "https://www.youtube.com/watch?v=QHfwHE4BnpQ"} }),
    ({ game: { name: ",help - Si j'avais pas filmé ça, personne ne m'aurait cru...", type: 3, url: "https://www.youtube.com/watch?v=6Dmm3IQr6q8"} }),
    ({ game: { name: ",help - Un chien retrouve son maitre après 3 ans de séparation...", type: 3, url: "https://www.youtube.com/watch?v=6YevuTWaIrc"} }),
    ({ game: { name: ",help - Des jumelles se rencontrent pour la toute première fois...", type: 3, url: "https://www.youtube.com/watch?v=GAZSfsSwRHE"} }),
    ({ game: { name: ",help - il a essayé d'empêcher la vitre de se casser...", type: 3, url: "https://www.youtube.com/watch?v=uQXqBmueGJE"} }),
    ({ game: { name: ",help - il a essayé d'empêcher la vitre de se casser...", type: 3, url: "https://www.youtube.com/watch?v=uQXqBmueGJE"} }),
    ({ game: { name: ",help - G Rex - SHUT UP!", type: 2 } })
    
  ]

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on('ready', function() {
    console.log("UN MONSTRE DANS LE METRO https://discordapp.com/oauth2/authorize?client_id=389084304124280832&scope=bot&permissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence((game[Math.floor(Math.random() * game.length)]));
}),

bot.on('message', (message) => {
    if (message.author.equals(bot.user)) return;

        if(message.content.match (/Cod Forlan/i) && (message.content.match (/merde/i))) {
        //Réponse aux insultes
        message.channel.sendMessage("Qu'est ce que tu viens de dire à propos de moi, petite salope ?")
        message.channel.sendFile("./Images/delet.png")
    }

        if(message.content.match (/XPB/i)) {
        //Réponse au message 'XPB'
        message.channel.sendMessage("Non KuFF pour les ref, et putain non Koalol, la 3d est tellement laid, on dirait un XPB. Les png sont drôle par contre.")
    }


}));

bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix)) {
     message.delete(100)
  }

  var args = message.content.substring(prefix.length).split(" ")

// Commandes
  switch (args[0]) {
  //RANDOM
      case "intro":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream((intro[Math.floor(Math.random() * intro.length)]))
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",intro") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //CHIPS VERTE
    case "chip":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/chips verte.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",earrape") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

       case "chips":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/chips verte.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",earrape") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //LABYRINTHE
    case "labi":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",labi") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

    case "laby":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
        if (message.content === ",laby")
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

    case "labyrinthe":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",labyrinthe") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //OURS
    case "ours":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/ours.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",ours") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //CRISE
    case "crise":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/crise.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",crise") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //RUBIKS
    case "rubiks":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/rubik.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",rubiks") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
    break;

    case "cube":
       if (!message.member.voiceChannel) {
       return;
       }
       if (message.member.voiceChannel) {
       message.member.voiceChannel.join()
       .then (connection => {
       const stream = message.guild.voiceConnection.playStream("MP3/rubik.wav")
       stream.on('end', () => (message.guild.voiceConnection).disconnect())
       if (message.content === ",cube") 
       return;
       })
       } else {
       return;
       }
    break;

  //GIVEAWAY
      case "giveaway":
        message.channel.sendMessage("Giveaway d'" + (giveaway[Math.floor(Math.random() * giveaway.length)]) + ", pour participer tapez sur le chat '**Je participe suce moi**' ! Fin du giveaway dans une minute ! Limité à 25 participations ! Go Go Go !")
        .then(() => {
        message.channel.awaitMessages(response => response.content === 'Je participe suce moi', {
          max: 25,
          time: 60000,
      })
      .then((collected) => {
      message.channel.send(`Le gagnant est ${collected.random().author} ! Bravo à lui !`);
      })
      .catch(() => {
      message.channel.send("Personne n'a voulu participer à mon giveaway. C'est pas grave. 😢");
      });
    });
    break;

//AMOUREUX
        case "amoureux":
       if (!message.member.voiceChannel) {
       return;
       }
       if (message.member.voiceChannel) {
       message.member.voiceChannel.join()
       .then (connection => {
       const stream = message.guild.voiceConnection.playStream("MP3/amoureux.wav")
       stream.on('end', () => (message.guild.voiceConnection).disconnect())
       if (message.content === ",cube") 
       return;
       })
       } else {
       return;
       }
    break;

        case "sport":
       if (!message.member.voiceChannel) {
       return;
       }
       if (message.member.voiceChannel) {
       message.member.voiceChannel.join()
       .then (connection => {
       const stream = message.guild.voiceConnection.playStream("MP3/amoureux.wav")
       stream.on('end', () => (message.guild.voiceConnection).disconnect())
       if (message.content === ",cube") 
       return;
       })
       } else {
       return;
       }
    break;

        case "amour":
       if (!message.member.voiceChannel) {
       return;
       }
       if (message.member.voiceChannel) {
       message.member.voiceChannel.join()
       .then (connection => {
       const stream = message.guild.voiceConnection.playStream("MP3/amoureux.wav")
       stream.on('end', () => (message.guild.voiceConnection).disconnect())
       if (message.content === ",cube") 
       return;
       })
       } else {
       return;
       }
    break;

  //CARTE GOOGLE PLAY
    case "carte":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/carte.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",carte") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;
    case "googleplay":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/carte.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",googleplay") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;
  //jumelles
    case "jumelles":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("MP3/jumelles.wav")
        stream.on('end', () => (message.guild.voiceConnection).disconnect())
        if (message.content === ",jumelles") 
        stream.on (message.guild.voiceChannel).leave()
        })
      } else {
      return;
      }
      break;

  //STOP
    case "stop":
        var server = servers[message.guild.id];
        if (!message.guild.voiceConnection) {
          return;
        }
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;

    case "leave":
        var server = servers[message.guild.id];
        if (!message.guild.voiceConnection) {
          return;
        }
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;

  //AIDE
    case "help":
      var embed = new Discord.RichEmbed()
       .setAuthor((citation[Math.floor(Math.random() * citation.length)]))
       .setThumbnail((MafiaSquad[Math.floor(Math.random() * MafiaSquad.length)]))
       .setColor(0xe1e6e9)
       .setDescription("Bot maintenant hébergé sur Heroku. Le bot peut être parfois en maintenance.\n**Mise à jour (01/02/2018) : La commande earrape a été enlevée. D'autres commandes ont étés ajoutés. Grosse update bientôt.**")
       .setFooter("Bot crée par Flygoow, avec DiscordJS.", "https://i.imgur.com/vUJwkr1.png")
       .setTimestamp()
       .addField("Commandes audio", " Labyrinthe : ,laby \nOurs : ,ours \nCrise : ,crise \nRubiks Cube : ,cube ou ,rubiks \nTombe sur son amoureuse en sport : ,amoureux \nCarte cadeau Google Play : ,carte ou ,googleplay \nJumelles : ,jumelles \nAléatoire : ,intro \nPour que le bot se casse : ,leave ou ,stop")
       .addField("Commandes textuelles", " Giveaway : ,giveaway");
      message.channel.sendEmbed(embed);
      break;

    default:
      var embed = new Discord.RichEmbed()
       .setAuthor((citation[Math.floor(Math.random() * citation.length)]))
       .setThumbnail((MafiaSquad[Math.floor(Math.random() * MafiaSquad.length)]))
       .setColor(0xe1e6e9)
       .setDescription("Bot maintenant hébergé sur Heroku. Le bot peut être parfois en maintenance.\n**Mise à jour (01/02/2018) : La commande earrape a été enlevée. D'autres commandes ont étés ajoutés. Grosse update bientôt.**")
       .setFooter("Bot crée par Flygoow, avec DiscordJS.", "https://i.imgur.com/vUJwkr1.png")
       .setTimestamp()
       .addField("Commandes audio", " Labyrinthe : ,laby \nOurs : ,ours \nCrise : ,crise \nRubiks Cube : ,cube ou ,rubiks \nTombe sur son amoureuse en sport : ,amoureux \nCarte cadeau Google Play : ,carte ou ,googleplay \nJumelles : ,jumelles \nAléatoire : ,intro \nPour que le bot se casse : ,leave ou ,stop")
       .addField("Commandes textuelles", " Giveaway : ,giveaway");
      message.channel.sendEmbed(embed);
      break;
  }

});

bot.login(process.env.BOT_TOKEN);
