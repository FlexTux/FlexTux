const { RockPaperScissors } = require("discord-gamecord")
const Discord = require("discord.js")

module.exports = {
    name: "rps",
    description: "Jogue pedra, papel ou tesoura com alguém (BETA)",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [

        {
            name: "oponente",
            type: Discord.ApplicationCommandOptionType.User,
            description: "Mencione um usuário para jogar contra.",
            required: true
        }

    ],

    run: async (client, interaction, args) => {

        let user = interaction.options.getUser('oponente');

        if (user.id === interaction.user.id) {
            interaction.reply({ content: "Você não pode jogar pedra, papel e tesoura com você mesmo!", ephemeral: true })
            return
        }
        if (user.id === client.user.id) {
            interaction.reply({ content: 'Para jogar pedra, papel e tesoura comigo use o comando **/rps2**, eu amo um desafio em!', ephemeral: true })
            return
        }

        new RockPaperScissors({
            message: interaction,
            slash_command: true,
            opponent: user,

            embed: {
                title: '[PEDRA | PAPEL | TESOURA]',
                description: 'Clique em um botão para jogar.',
                color: "Random",
            },
            
            buttons: {
                pedra: 'Pedra',
                papel: 'Papel',
                tesoura: 'Tesoura',
            },

            emojis: {
                pedra: '🗿',
                papel: '📃',
                tesoura: '✂️',
            },

            othersMessage: 'Você não possui permissão para utilizar este botão!',
            mentionUser: true,
            timeoutTime: 60000,
            chooseMessage: 'Você escolheu {emoji}!',
            noChangeMessage: 'Você não pode alterar sua escolha! ✋',
            askMessage: 'Eii {opponent}, {challenger} desafiou você para jogar pedra, papel ou tesoura! 🤜🤛',
            cancelMessage: 'Parece que o pedido foi recusado. 😔',
            timeEndMessage: 'O jogo foi cancelado, pois não obtive uma resposta! 🤷‍♀️',
            drawMessage: 'Foi um empate! 😱',
            winMessage: '{player} Venceu o jogo! 🏆',
            gameEndMessage: 'O jogo não pode ser encerrado! 😢',
            timeoutMessage: "O tempo para esse jogo acabou! 😢",
            playerOnlyMessage: 'Somente o {player} e {opponent} podem usar esse botão.',
        }).startGame();

    }
};