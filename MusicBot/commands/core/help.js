const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h", "cmd"],
  showHelp: false,
  utilisation: "{prefix}help",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("RED");
    embed.setTitle(client.user.username);
    embed.setThumbnail(client.user.displayAvatarURL());
    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.addField(
      `Available - ${commands.size} Command Available`,
      commands
        .map(
          (x) =>
            `\`${x.name}${
              x.aliases[0] ? ` (${x.aliases.map((y) => y).join(", ")})\`` : "`"
            }`
        )
        .join(" | ")
    );

    embed.setTimestamp();
 
    message.channel.send({ embeds: [embed] });
  },
};
