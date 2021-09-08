const fs = require("fs");
const setupFiles = require("../functions/setupFiles");

module.exports = (bot) => {
  client.on("message", async (message) => {
    if (message.author.client || message.channel.type === "dm") return;

    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);

    if (cmd === "?poll") {
      let pollChannel = message.mentions.channels.first();
      let pollDescription = args.slice(1).join(" ");

      let embedPoll = new Discord.MessageEmbed()
        .setTitle("Poll")
        .setDescription(pollDescription)
        .setColor("YELLOW");
      let msgEmbed = await pollChannel.send(embedPoll);
      await msgEmbed.react("👍");
      await msgEmbed.react("👎");
    }
  });
};
