const Discord = require("discord.js");
const client = new Discord.Client();

function presence()
{
  client.user.setPresence({
    status: "online",
    game:
    {
      name: "!/help",
      type: "PLAYING"
    }
  });
}

client.on("ready", () => {
    console.log("Holi mundo");
    presence();
});
 
   //Lista de comandos y ayuda
client.on("message", (message) => {
    if(message.content.startsWith("!/help")) 
    {
      message.channel.send("!/ BotInsulta = El bot te insulta");
      message.channel.send("! ip");
      message.channel.send("@ everyone = el bot te dice que no hagas ping a todo el mundo");
      message.channel.send("!/ CovidInfo = Information of Covid-19 (this informationthis information may be out of date)");
      message.channel.send("!/ HowGorilla");
      message.channel.send("!/ BotA = aaaaaaaaaaaaa");
      message.channel.send("!/ HowAutista");
      message.channel.send("!/Move @USERNAME To #CHANEL (EN DESARROLLO)")
    }

   //comandos de texto
  if(message.content.startsWith("!ip")) 
  {
    message.channel.send("Vete a la Mierda");
  }

  if(message.content.startsWith("@everyone")) 
  {
    message.channel.send("¡NO HAGAS PING A TODO EL MUNDO, PEDAZO DE TROZO DE HIJO DE PUTA!");
  }

  //among us
  if(message.content.startsWith("!/among-us")) 
  {
    message.channel.send("@Among Us  alguien juega?");
  }

  //informacion of Covid-19
  if(message.content.startsWith("!/CovidInfo"))
  {
    message.channel.send("WORLD: Contagions = 38,6 M   Dead = 1,09 M");
    message.channel.send("SPAIN: General: Contagions = 908.000    Dead = 33.413    Today: Contagions = 11.970");
    message.channel.send("USA: General: Contagions = 7,95M    Dead = 217.000");
    message.channel.send("GERMANI: General: Contagions = 344.000    Dead = 9716    Today: Contagions = 5.132");
    message.channel.send("ARGENTINA: General: Contagions = 932.000    Dead = 24.921    Today: Contagions = 14.932");
    message.channel.send("CHILE: General: Contagions = 485.000    Dead = 13.415    Today: Contagions = 1.092");
    message.channel.send("COSTA RICA: General: Contagions = 91.780    Dead = 1.134    Today: Contagions = 1.542");
    message.channel.send("NORTH COREA: General: Contagions = ?    Dead = ?    Today: Contagions = ?");
  }
});
/*
if (message.content.startsWith("!/CovidInfo")){
  const embed = new Discord.RichEmbed() 
  .setTitle("COVID INFO")
  .setColor(0x00AE86)
  .setDescription("Information of COVID-19")
  .setTimestamp()
  .setURL("https://www.google.com/search?q=casos+coronavirus+hoy+en+euskadi&oq=caso&aqs=chrome.0.69i59j69i57j69i59l3j69i60l3.2160j0j1&sourceid=chrome&ie=UTF-8")
  .addField("COVID-19 Contagions and deads")
  .addBlankField(true)
  .addField("WORLD:", "Contagions = 40,1 M", "Dead = 1,11 M", true)
  .addBlankField(true)
  .addField("SPAIN:", "Contagions = 937.000", "Dead = 33.775", true)
  .addBlankField(true)
  .addField("USA:", "Contagions = 8,19 M", "Dead = 220.000", true)
  .addBlankField(true)
  .addField("GERMANI:", "Contagions = 369.000", "Dead = 9.798", true)
  .addBlankField(true)
  .addField("ARGENTINA:", "Contagions = 990.000", "Dead = 26.267", true)
  .addBlankField(true)
  .addField("CHILE:", "Contagions = 492.000", "Dead = 13.635", true)
  .addBlankField(true)
  .addField("COSTA RICA:", "Contagions = 95.514", "Dead = 1.183", true)
  .addBlankField(true)
  .addField("NORTH COREA:", "Contagions = ?", "Dead = ?", true);
  
  message.channel.send({embed});
}
*/
  //how gorilla
client.on("message", message => {
   var Mensajes = ["0% Gorilla", "1% Gorilla", "9% Gorilla", "11% Gorilla", "14% Gorilla", "17% Gorilla", "19% Gorilla", "27% Gorilla", "31% Gorilla", "34% Gorilla", "38% Gorilla", "45% Gorilla", "49% Gorilla", "50% Gorilla", "51% Gorilla", "53% Gorilla", "59% Gorilla", "67% Gorilla", "69% Gorilla", "71% Gorilla", "78% Gorilla", "82% Gorilla", "83% Gorilla", "86% Gorilla", "88% Gorilla", "91% Gorilla", "92% Gorilla", "93% Gorilla", "94% Gorilla", "95% Gorilla", "96% Gorilla", "97% Gorilla", "98% Gorilla", "99% Gorilla", "100% Gorilla", "1000000000000% Gorilla"];
   var aleatorio = Math.floor(Math.random()*(Mensajes.length))
  if (message.content.startsWith("!/HowGorilla"))
  {
    message.channel.send(Mensajes[aleatorio]);
  }
});

//bot insulta
client.on("message", message => {
  var Mensajes1 = ["Pedazo de trozo de hijo de puta", "Gilipollas!", "Comeme el coño", "Hijo de puta", "Capullo", "Desperdicio de semen", "La concha de tu renegrisima hermana", "Hijo de puta, dejarme al niño, me vais a comer el coño", "Hijo de puta, a la puta carcel", "La reconcha de tu madre","AHORA METEN EL TRIPLE LA RE CONCHA BIEN PUTA DE SUS MADRES JUGADORES PORONGA QUE SE HICIERON LOS PIOLA LLEGANDO INVICTOS A UNA FINAL PARA QUE SE LES CIERRE EL ORTO AHORA CONTRA ESPAÑA HIJOS DE RE MIL PUTA. ERA EL ULTIMO PARTIDO DE SCOLA FORROS, NI UNA ALEGRIA LE DEJAN AL VETERANO", "¡PELOTUDOS HIJOS DE CIEN MIL CAMIONES RELLENOS DE PUTAS, QUE NOS ESTÁN GANANDO CUATRO GALLEGOS BARBUDOS, HASTA MARADONA CON EL ORTO LLENO DE COCA LE ECHARÍA MÁS HUEVOS!", "PERO LO QUE MÁS BRONCA ME DA ES QUE SEAN TAN AMARGOS GALLEGOS HDP COMO VAN A SER TAN TIBIOS PARA CELEBRAR NOSOTROS HUBIÉRAMOS HECHO PIJA EL ESTADIO, LO HUBIERAN MEADO AL OVEJA ENTRE TODOS, LE CHOREABAN LAS CÁMARAS A LOS PERIODISTAS, SANGRE DE PATO TIENEN USTEDES", "No me banco todos estos gallegos sucios, barbudos, despeinados. Bañense la puta madre. Y usen bidet para lavarse el culo", "Españoles del orto, tienen una tremenda selección de fútbol, de basquet, hacen tremendas series, la tienen a Ester Exposito. Todo tienen Gallegos putos", "PELOTUDOS HIJOS DE CIEN MIL CAMIONES RELLENOS DE PUTAS, QUE NOS ESTÁN GANANDO CUATRO GALLEGOS BARBUDOS, HASTA MARADONA CON EL ORTO LLENO DE COCA LE ECHARÍA MÁS HUEVOS!"];
  var aleatorio1 = Math.floor(Math.random()*(Mensajes1.length))
 if (message.content.startsWith("!/BotInsulta"))
 {
   message.channel.send(Mensajes1[aleatorio1]);
 }
});
 
//bot a
client.on("message", message => {
  var MensajesA = ["aaaaaaaaaaaaaaaaa", "aaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaa", "a", "aa", "aaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaa", "aaaaaaaaaaaaaaaaaaaa"];
  var aleatorioA = Math.floor(Math.random()*(MensajesA.length))
 if (message.content.startsWith("!/BotA"))
 {
   message.channel.send(MensajesA[aleatorioA]);
 }
});

//how autista
client.on("message", message => {
  var Mensajes2 = ["0% Autista", "1% Autista", "9% Autista", "11% Autista", "14% Autista", "17% Autista", "19% Autista", "27% Autista", "31% Autista", "34% Autista", "38% Autista", "45% Autista", "49% Autista", "50% Autista", "51% Autista", "53% Autista", "59% Autista", "67% Autista", "69% Autista", "71% Autista", "78% Autista", "82% Autista", "83% Autista", "86% Autista", "88% Autista", "91% Autista", "92% Autista", "93% Autista", "94% Autista", "95% Autista", "96% Autista", "97% Autista", "98% Autista", "99% Autista", "100% Autista", "1000000000000% Autista"];
  var aleatorio2 = Math.floor(Math.random()*(Mensajes2.length))
 if (message.content.startsWith("!/HowAutista"))
 {
   message.channel.send(Mensajes2[aleatorio2]);
 }
});
/*
//mover todas las personas de un canal a otro //puede que no funcione, hay que probarlo, si todo el bot da error es por esto
const config = require('../config.json');

exports.run = function(client, message) {

client.on("message", message => {
if(message.content.startsWith("!/Move" + user.name + "To" + chan)) //el user.name me lo he inventado por probar algo, puede que ahi este el error
  if (command === 'move') {
  const mem = message.mentions.members.first()
  const vc = args.join(" ")
  const chan = client.channels.get('someID')
    mem.setVoiceChannel(chan)
      .then(() => console.log(`Moved ${mem.displayName} to ${chan}`))
  .catch(console.error);
  }
})
}
*/
client.login("NzY0OTgwMzU3MjU4NTQzMTI1.X4OJeQ.30A93i4IpaT78FAVxrFb5kh2Ydc");
