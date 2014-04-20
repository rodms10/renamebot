var oldName = 'johnnyOld',
  newName = 'joAwesome',
  nameChangeMSG = oldName + " is now known as " + newName,
  botName = oldName + "_renamebot";


module.exports = {
  oldName: oldName,
  newName: newName,
  nameChangeMSG: nameChangeMSG,
  config: {
    channels: ["#madeup", "#tripplea"],
    server: "irc.freenode.net",
    botName: botName,
    realName: nameChangeMSG
  }
};
