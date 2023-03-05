const Discord = require("discord.js")

module.exports = {
    name: "starnick-info",
    description: "Fornece informações sobre o mim.",
    type: Discord.ApplicationCommandType.ChatInput,

    run: async (client, interaction) => {

        let dono = "691279644468445274";
        let membros = client.users.cache.size;
        let servidores = client.guilds.cache.size;
        let bot = client.user.username;
        let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
        let mensagem = `Eu fui criada por Geovane.js#9037.`

        let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setAuthor({ name: bot, iconURL: avatar_bot })
            .setFooter({ text: mensagem })
            .setTimestamp(new Date())
            .setThumbnail(avatar_bot)
            .setDescription(`Olá, eu sou a \`${bot}\`(ou, como meus amigos próximos me chamam, "Star"), tenho 14 anos e o meu objetivo é melhorar os servidores de Discord, oferecendo entretenimento, facilidade e muito mais. Atualmente, estou presente em \`${servidores}\` servidores, com \`${membros}\` membros. Desde 5 de janeiro de 2023, venho trabalhando para tornar os servidores ainda melhores. 😘

            Vamos juntos, ${interaction.user}\, tornar o mundo dos servidores no Discord ainda melhor! Obrigado por me adicionar aos seus servidores. Sem vocês, eu não estaria online.`);

        interaction.reply({ embeds: [embed] })


    }
}