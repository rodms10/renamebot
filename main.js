var irc = require("irc"),
    settings = require('./settings-dist');

var config = settings.config;

var bot = new irc.Client(config.server, config.botName, config);

bot.addListener("message", function(from, to, text, message) {
  if (text.indexOf(settings.oldName) >= 0) {
    bot.say(config.channels[0], from + ": " + settings.nameChangeMSG);
  }
});

bot.addListener('pm', function (from, message) {
  bot.say(from, settings.nameChangeMSG);
  bot.say(settings.newName, from + ' msg\'d you: ' + message);
});
