
module.exports = class info {
    constructor() {
        this.name = 'info',
            this.alias = ['info'],
            this.usage = '?info', '??info', 'doc?info'
    }

    async run(bot, message, args) {
        const Discord = require('discord.js')
        await message.delete();
        const ip = "107.150.55.130:30120"
        const fivem = require('YOUR SERVER IP WITH PORT')

        var requester = await fivem.getServerInfo(ip)
        var online = requester.players.length
        var shallowed = requester.infos.vars.sv_scriptHookAllowed
        var hostname = requester.infos.vars.sv_hostname
        var vs = requester.infos.server
        var max = requester.infos.vars.sv_maxClients
        let embed = new Discord.MessageEmbed()
            .setAuthor(`${hostname}`)
            .setThumbnail(`YOURSERVER LOGO LINK`)
            .setColor(`#0071C1`)
            .addField(`Players Online`, `${online}/${max}`)
            .addField(`Script Hook allowed`, `${shallowed}`)
            .addField(`Resources`, `To many to count`)
            .setFooter(`FXVersion: ${vs}`)
        message.channel.send(embed)
    }
}