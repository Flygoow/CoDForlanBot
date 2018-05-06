const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = "::";
const dbl = new DBL(process.env.bot_api_token, client);
const fs = require("fs");
let cooldown = new Set();
let cdsecondes = 2;

var cli = new Discord.Client({autoReconnect:true});

var servers = {};

//Les trucs aléatoires
  var sport = [
    "MP3/amoureux.wav",
    "MP3/sport2.wav"
  ]

  var tornade = [
    "MP3/tornade.wav",
    "MP3/tornade2.wav"
  ]

  var tobogland = [
    "MP3/arthur.wav",
    "MP3/tobogland.wav"
  ]

  var reaction =[
    "MP3/aaah.wav",
    "MP3/non.wav",
    "MP3/ole.wav",
    "MP3/vener.wav",
    "MP3/wouh.wav",
    "MP3/wtf.wav",
    "MP3/ytpmvsample.wav",
    "MP3/délire.wav",
    "MP3/inimaginable.wav",
    "MP3/like.wav",
    "MP3/mort.wav"
  ]

  var titre1 = [
    "Cette vidéo",
    "Un enfant",
    "Mon copain",
    "La voix de cette fille",
    "Elle",
    "Ninja",
    "La météorite",
  ]

  var titre2 = [
    " va te faire oublier ton nom.",
    " a arrêté de vivre...",
    " m'a quitté...",
    " dit des gros mots !!",
    " pensait que son live était coupé...",
    " est morte dans ce manège...",
    " s'est écrasée sur Fortnite Battle Royale...",
    " trouve une Scar en diamant sur Fortnite Battle Royale...",
    ' a battu le record du monde de "Victoires" sur Fortnite Battle Royale...'
  ]

  var titre3 = [
    " Et il marche !",
    " Quand je l'ai vu, j'ai été détruit...",
    " (Preuve Vidéo)",
    " (ʘ_ʘ)",
    " ಠ_ಠ",
    " "
  ]

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
    "une carte Amazon d'une valeur de 100€",
    "une carte iTunes d'une valeur de 200€",
    "plus de 2000 V-Bucks"
  ]

  var citationvoc = [
    "MP3/chat.wav"
  ]

  var intro = [
    "MP3/labyrinthe.wav",
    "MP3/ours.wav",
    "MP3/crise.wav",
    "MP3/chips verte.wav",
    "MP3/rubik.wav",
    "MP3/jumelles.wav",
    "MP3/amoureux.wav",
    "MP3/glace.wav",
    "MP3/hallu.wav",
    "MP3/papa.wav",
    "MP3/doigt.wav",
    "MP3/marcel.wav",
    "MP3/tobogland.wav",
    "MP3/dino.wav",
    "MP3/trop tard.wav",
    "MP3/grise.wav",
    "MP3/piscine.wav",
    "MP3/vitre.wav",
    "MP3/tigre.wav",
    "MP3/sable.wav",
    "MP3/prof.wav",
    "MP3/lepauvre.wav",
    "MP3/sexejecrois.wav",
    "MP3/don.wav",
    'MP3/fin.wav',
    "MP3/pote.wav",
    "MP3/puit.wav",
    "MP3/DEPLOQUEZ MOI.wav",
    "MP3/aurevoir.wav",
    "MP3/coca.wav",
    "MP3/anniv.wav",
    "MP3/arthur.wav",
    "MP3/ascenseur.wav",
    "MP3/bus.wav",
    "MP3/cassetoi.wav",
    "MP3/claude.wav",
    "MP3/clown.wav",
    "MP3/crocodile.wav",
    "MP3/egouts.wav",
    "MP3/enfoiré.wav",
    "MP3/fitre.wav",
    "MP3/fond.wav",
    "MP3/franky.wav",
    "MP3/gaz.wav",
    "MP3/gorille.wav",
    "MP3/jardin.wav",
    "MP3/jeanclaude.wav",
    "MP3/kévin.wav",
    "MP3/louis.wav",
    "MP3/mamanforlan.wav",
    "MP3/moise.wav",
    "MP3/nuage.wav",
    "MP3/oskour.wav",
    "MP3/pain.wav",
    "MP3/pedo.wav",
    "MP3/permis.wav",
    "MP3/poisson.wav",
    "MP3/poule.wav",
    "MP3/pue.wav",
    "MP3/putaclic.wav",
    "MP3/rubiks2.wav",
    "MP3/serpent.wav",
    "MP3/slip.wav",
    "MP3/sourd.wav",
    "MP3/sport2.wav",
    "MP3/superbabouin.wav",
    "MP3/tornade.wav",
    "MP3/tornade2.wav",
    "MP3/tsunami.wav",
    "MP3/voisin.wav",
    "MP3/voiture.wav",
    "MP3/volcan.wav"
  ]

  var rubiks = [
    "MP3/rubiks2.wav",
    "MP3/rubik.wav"
  ]

  var tornade =[
    "MP3/tornade.wav",
    "MP3/tornade2.wav"
  ]

  var carte = [
    "MP3/carte.wav",
    "MP3/itunes.wav",
    "MP3/Amazon.wav"
  ]
  var game = [
    ({ game: { name: "::help -- Cette fille s'est suicidée à cause de cette vidéo. quand je l'ai vu, j'ai été détruit...", type: 3, url: "https://www.youtube.com/watch?v=lBUIgZhtZ74"} }),
    ({ game: { name: "::help -- Une fille aide la police a apprivoiser un ours polaire sauvage…", type: 3, url: "https://www.youtube.com/watch?v=DECWgDPv3As"} }),
    ({ game: { name: "::help -- Je suis bloqué dans ce labyrinthe depuis 2 jours, envoyez moi de l'aide...", type: 3, url: "https://www.youtube.com/watch?v=PJ1ZghbmqXc"} }),
    ({ game: { name: "::help -- Si je n'avais pas filmé ma prof en train de faire ça, personne ne m'aurait cru...", type: 3, url: "https://www.youtube.com/watch?v=lk6LtG4584M"} }),
    ({ game: { name: "::help -- Un enfant tombe accidentellement sur son amoureuse en sport...", type: 3, url: "https://www.youtube.com/watch?v=QHfwHE4BnpQ"} }),
    ({ game: { name: "::help -- Si j'avais pas filmé ça, personne ne m'aurait cru...", type: 3, url: "https://www.youtube.com/watch?v=6Dmm3IQr6q8"} }),
    ({ game: { name: "::help -- Un chien retrouve son maitre après 3 ans de séparation...", type: 3, url: "https://www.youtube.com/watch?v=6YevuTWaIrc"} }),
    ({ game: { name: "::help -- Des jumelles se rencontrent pour la toute première fois...", type: 3, url: "https://www.youtube.com/watch?v=GAZSfsSwRHE"} }),
    ({ game: { name: "::help -- il a essayé d'empêcher la vitre de se casser...", type: 3, url: "https://www.youtube.com/watch?v=uQXqBmueGJE"} }),
    ({ game: { name: "::help -- il a essayé d'empêcher la vitre de se casser...", type: 3, url: "https://www.youtube.com/watch?v=uQXqBmueGJE"} }),
    ({ game: { name: "::help -- G Rex - SHUT UP!", type: 2 } })
    
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

        if(message.content.match (/Cod Forlan/i) && (message.content.match (/pute/i))) {
        //Réponse aux insultes
        message.channel.sendMessage("Qu'est ce que tu viens de dire à propos de moi, petite salope ?")
        message.channel.sendFile("./Images/delet.png")
    }

}));
bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (message.content.startsWith(prefix)) {
    message.delete(100);
  if (cooldown.has(message.author.id)){
    return message.reply("laisse moi respirer ! Attends 2 secondes avant la prochaine commande.")
  }
  cooldown.add(message.author.id)
  }
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ")

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdsecondes * 1000)

// Commandes
  switch (args[0]) {
  //INTRO RANDOM
      case "intro":
      if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((intro[Math.floor(Math.random() * intro.length)]))
      } else {
      return;
      }
      break;

  //CHIPS VERTE
    case "chip":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/chips verte.wav")
      } else {
      return;
      }
      break;

  //LABYRINTHE
    case "labi":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
      } else {
      return;
      }
      break;

    case "laby":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
      } else {
      return;
      }
      break;

    case "labyrinthe":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/labyrinthe.wav")
      } else {
      return;
      }
      break;

  //OURS
    case "ours":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/ours.wav")
      } else {
      return;
      }
      break;

  //POULE
    case "poule":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/poule.wav")
      } else {
      return;
      }
      break;

  //CRISE
    case "crise":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/crise.wav")
      } else {
      return;
      }
      break;

  //RUBIKS
    case "rubiks":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((rubiks[Math.floor(Math.random() * rubiks.length)]))
      } else {
      return;
      }
      break;

    case "cube":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((rubiks[Math.floor(Math.random() * rubiks.length)]))
      } else {
      return;
      }
      break;

  //OH LE CHAT OHHHHHHH
      case "chat":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/chat.wav")
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
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((sport[Math.floor(Math.random() * sport.length)]))
      } else {
      return;
      }
      break;

    case "sport":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((sport[Math.floor(Math.random() * sport.length)]))
      } else {
      return;
      }
      break;

    case "amour":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((sport[Math.floor(Math.random() * sport.length)]))
      } else {
      return;
      }
      break;

  //CARTE RANDOM
    case "carte":
      if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((carte[Math.floor(Math.random() * carte.length)]))
      } else {
      return;
      }
      break;

  //GOOGLE PLAY
    case "googleplay":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/carte.wav")
      } else {
      return;
      }
      break;
    case "google":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/carte.wav")
      } else {
      return;
      }
      break;
    case "gp":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/carte.wav")
      } else {
      return;
      }
      break;

  //AMAZON
     case "amazon":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/Amazon.wav")
      } else {
      return;
      }
      break;

  //ITUNES
     case "itunes":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/itunes.wav")
      } else {
      return;
      }
      break;
      case "tunes":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/itunes.wav")
      } else {
      return;
      }
      break;
     case "it":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/itunes.wav")
      } else {
      return;
      }
      break;
      
  //JUMELLES
    case "jumelles":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/jumelles.wav")
      } else {
      return;
      }
      break;
    
  //HALLU
    case "hallu":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/hallu.wav")
      } else {
      return;
      }
      break;

  //PAPA
    case "papa":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/papa.wav")
      } else {
      return;
      }
      break;

  //TG
    case "tg":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/tg.mp3")
      } else {
      return;
      }
      break;

  //GLACE
      case "glace":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/glace.wav")
      } else {
      return;
      }
      break;
    
  //DOIGT
      case "doigt":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/doigt.wav")
      } else {
      return;
      }
      break;

  //TOBOGLAND
      case "tobogland":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/tobogland.wav")
      } else {
      return;
      }
      break;

  //AU REVOIR
      case "aurevoir":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/aurevoir.wav")
      } else {
      return;
      }
      break;
      case "bye":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/aurevoir.wav")
      } else {
      return;
      }
      break;

  //TOBOGLAND
      case "tobogland":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((tobogland[Math.floor(Math.random() * tobogland.length)]))
      } else {
      return;
      }
      break;

  //COCA
      case "coca":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/coca.wav")
      } else {
      return;
      }
      break;

  //ANNIV
      case "anniv":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/anniv.wav")
      } else {
      return;
      }
      break;

  //ASCENQEUR
      case "ascenseur":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/ascenseur.wav")
      } else {
      return;
      }
      break;

  //AHH
      case "ah":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/aaah.wav")
      } else {
      return;
      }
      break;

  //BUS
      case "bus":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/bus.wav")
      } else {
      return;
      }
      break;

  //CASSETOI
      case "cassetoi":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/cassetoi.wav")
      } else {
      return;
      }
      break;

  //CLAUDE
      case "claude":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/claude.wav")
      } else {
      return;
      }
      break;

  //CLOWN
      case "clown":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/clown.wav")
      } else {
      return;
      }
      break;

  //ENFOIRE
      case "avion":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/enfoiré.wav")
      } else {
      return;
      }
      break;
      case "enfoire":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/enfoiré.wav")
      } else {
      return;
      }
      break;

  //VITRE
      case "vitre":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/fitre.wav")
      } else {
      return;
      }
      break;

    //REQUIN
      case "requin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/vitre.wav")
      } else {
      return;
      }
      break;

    //FLAQUE
      case "flaque":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/flaque.wav")
      } else {
      return;
      }
      break;

    //MINION
      case "minion":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/fond.wav")
      } else {
      return;
      }
      break;
      case "minions":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/fond.wav")
      } else {
      return;
      }
      break;

    //FRANKY
      case "franky":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/franky.wav")
      } else {
      return;
      }
      break;
      case "francky":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/franky.wav")
      } else {
      return;
      }
      break;

  //DELIRE
      case "delire":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/délire.wav")
      } else {
      return;
      }
      break;

  //JARDIN
      case "jardin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/jardin.wav")
      } else {
      return;
      }
      break;

  //JARDIN
      case "jardin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/jardin.wav")
      } else {
      return;
      }
      break;

  //JEANCLAUDE
      case "jeanclaude":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/jeanclaude.wav")
      } else {
      return;
      }
      break;
      case "jc":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/jeanclaude.wav")
      } else {
      return;
      }
      break;

  //GAZ
      case "gaz":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/gaz.wav")
      } else {
      return;
      }
      break;

  //KEVIN
      case "kevin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/kévin.wav")
      } else {
      return;
      }
      break;

  //like
      case "like":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/like.wav")
      } else {
      return;
      }
      break;

  //GORILLE
      case "gorille":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/gorille.wav")
      } else {
      return;
      }
      break;

  //LOUIS
      case "louis":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/louis.wav")
      } else {
      return;
      }
      break;

  //BEBE
      case "bebe":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/mamanforlan.wav")
      } else {
      return;
      }
      break;
      case "bb":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/mamanforlan.wav")
      } else {
      return;
      }
      break;

  //SUPER BABOUIN
      case "superbabouin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/superbabouin.wav")
      } else {
      return;
      }
      break;
      case "sb":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/superbabouin.wav")
      } else {
      return;
      }
      break;

  //INIMAGINABLE
      case "inimaginable":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/inimaginable.wav")
      } else {
      return;
      }
      break;

  //MOISE
      case "moise":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/moïse.wav")
      } else {
      return;
      }
      break;

  //MORT
      case "mort":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/mort.wav")
      } else {
      return;
      }
      break;

  //NON
      case "non":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/non.wav")
      } else {
      return;
      }
      break;

  //NUAGE
      case "nuage":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/nuage.wav")
      } else {
      return;
      }
      break;

  //OSKOUR
      case "oskour":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/oskour.wav")
      } else {
      return;
      }
      break;

  //PAIN
      case "pain":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/pain.wav")
      } else {
      return;
      }
      break;

  //TORNADE
      case "tornade":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((tornade[Math.floor(Math.random() * tornade.length)]))
      } else {
      return;
      }
      break;

  //TSUNAMI
      case "tsunami":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/tsunami.wav")
      } else {
      return;
      }
      break;

  //PEDO
      case "pedo":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/pedo.wav")
      } else {
      return;
      }
      break;

  //POISSON
      case "poisson":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/poisson.wav")
      } else {
      return;
      }
      break;

  //vnr
      case "vnr":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/vener.wav")
      } else {
      return;
      }
      break;
      case "vener":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/vener.wav")
      } else {
      return;
      }
      break;

  //PERMIS
      case "permis":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/permis.wav")
      } else {
      return;
      }
      break;

  //VOISIN
      case "voisin":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/voisin.wav")
      } else {
      return;
      }
      break;

  //VOITURE
      case "voiture":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/voiture.wav")
      } else {
      return;
      }
      break;

  //VOLCAN
      case "volcan":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/volcan.wav")
      } else {
      return;
      }
      break;

  //WOUH
      case "wouh":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/wouh.wav")
      } else {
      return;
      }
      break;

  //WTF
      case "wtf":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/wtf.wav")
      } else {
      return;
      }
      break;

  //OOH OH OH
      case "oh":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/ytpmvsample.wav")
      } else {
      return;
      }
      break;

  //PUE
      case "pue":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/pue.wav")
      } else {
      return;
      }
      break;

  //NAGE
      case "nage":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/putaclic.wav")
      } else {
      return;
      }
      break;

  //SERPENT
      case "serpent":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/serpent.wav")
      } else {
      return;
      }
      break;

  //SLIP
      case "slip":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/slip.wav")
      } else {
      return;
      }
      break;

  //SOURD
      case "sourd":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/sourd.wav")
      } else {
      return;
      }
      break;

  //OLE !
      case "ole":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/ole.wav")
      } else {
      return;
      }
      break;


// bonjour à tous les programmeurs ici comment ça va ce code est long
// je sais il est pas optimisé
// mais c'est le plus simple pour moi je suis pas un grand programmeur
// j'espère que vous aimez mon bot sinon


  //EGOUTS
      case "egout":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/egouts.wav")
      } else {
      return;
      }
      break;
      case "egouts":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/egouts.wav")
      } else {
      return;
      }
      break;

  //CROCODILE
      case "crocodile":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/crocodile.wav")
      } else {
      return;
      }
      break;
      case "croco":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream("MP3/crocodile.wav")
      } else {
      return;
      }
      break;

  //FORLA NIQUEUR
      case "reaction":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((reaction[Math.floor(Math.random() * reaction.length)]))
      } else {
      return;
      }
      break;
      case "react":
        if (!message.member.voiceChannel) {
        message.channel.sendMessage("Tu n'es pas dans un salon vocal.")
        }
        if (!message.guild.voiceConnection) {
        message.channel.sendMessage("Je ne suis pas dans un channel vocal ! Je dois rejoindre le channel vocal avec la commande ::join.")
        }
        if (message.guild.voiceConnection) {
        const stream = message.guild.voiceConnection.playStream((reaction[Math.floor(Math.random() * reaction.length)]))
      } else {
      return;
      }
      break;


  //JOIN
      case "join":
        if (!message.member.voiceChannel) {
        return;
        }
        if (message.guild.voiceConnection) {
        return;
        }
        if (message.member.voiceChannel) { 
        message.member.voiceChannel.join()
        }
      break;

  //STOP
      case "stop":
        if (!message.member.voiceChannel) {
        return;
        }
        if (!message.guild.voiceConnection) {
        return;
        }
        if (message.member.voiceChannel) {
        message.guild.voiceConnection.disconnect()
        }
      break;


  //TITRE
      case "titre":
      message.channel.sendMessage((titre1[Math.floor(Math.random() * titre1.length)]) + (titre2[Math.floor(Math.random() * titre2.length)]) + (titre3[Math.floor(Math.random() * titre3.length)])).catch(console.error)
      break;

  //AIDE
    case "help":
      var embed = new Discord.RichEmbed()
       .setAuthor((citation[Math.floor(Math.random() * citation.length)]))
       .setThumbnail((MafiaSquad[Math.floor(Math.random() * MafiaSquad.length)]))
       .setColor(0xe1e6e9)
       .setFooter("Bot créé par Flygoow, avec DiscordJS." + (" Ping : " +  (new Date().getTime() - message.createdTimestamp) + " ms"), "https://i.imgur.com/vUJwkr1.png")
       .addField("Coucou je suis là pour vous aider","Pour voir toutes les commandes, rendez-vous ici : http://flygoow.party/codforlan/commandes\nSi vous aimez ce bot, vous pouvez voter pour lui sur Discord Bots : https://discordbots.org/bot/389084304124280832")
      message.channel.sendEmbed(embed);
      break;
  }

});

bot.login(process.env.BOT_TOKEN);
