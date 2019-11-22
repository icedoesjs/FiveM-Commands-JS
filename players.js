module.exports = class players {
    constructor() {
        this.name = 'players',
            this.alias = ['players'],
            this.usage = '?players', '??players', 'doc?players'
    }

    async run(bot, message, args) {
        const Discord = require('discord.js')
        await message.delete();
        const ip = "YOUR SERVER IP WITH PORT"
        const fivem = require('fivem-api')

        var online = await fivem.getServerInfo(ip)
        var max = online.infos.vars.sv_maxClients
        let embed = new Discord.MessageEmbed()
            .setAuthor(`SERVER NAME Players Online`)
            .setThumbnail(`SERVERLOGO LINK`)
            .setColor(`#0071C1`)
            .addField(`Online`, `${online.players.length}/${max}`, true)
            .setFooter(`IP: ${ip}`)
        message.channel.send(embed)
    }
}