const fs = require("fs");
const setupFiles = require("../functions/setupFiles");

module.exports = (bot) => {
  client.on("guildMemberAdd", function (member) {
    console.log(`a user joins a guild: ${member.tag}`);
  });
};
