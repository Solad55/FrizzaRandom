const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, ComponentType, SlashCommandBuilder } = require('discord.js');
//const decache = require('decache');
//decache('../../funct/utils.js')
const utilsFun = require('../../funct/utils.js');
const Utils = new utilsFun()


const persone = [
    {
        label: "FrizzaCaxxerelli",
        description: null,
        value: "FrizzaCaxxerelli",
    },
    {
        label: "LudoAmica",
        description: null,
        value: "LudoAmica",
    },
    {
        label: "ILDraduxxo",
        description: null,
        value: "ILDraduxxo",
    },
    {
        label: "TokaToka",
        description: null,
        value: "TokaToka",
    },
    {
        label: "SIGNOR-ALESSIOKIRAY",
        description: null,
        value: "SIGNOR-ALESSIOKIRAY",
    },
    {
        label: "StefanoErMinorato",
        description: null,
        value: "StefanoErMinorato",
    },
    {
        label: "La Soladdussy",
        description: null,
        value: "La Soladdussy",
    },
    {
        label: "Marcello",
        description: null,
        value: "Marcello",
    },
    {
        label: "FrizzarinaLaFrocettina",
        description: null,
        value: "FrizzarinaLaFrocettina",
    },
    {
        label: "Baraldaino",
        description: null,
        value : "Baraldaino",
    },
    {
        label: "JustRon PVTech",
        description: null,
        value: "JustRon PVTech",
    },
    {
        label: "Sawnya",
        description: null,
        value: "Sawnya",
    },
    {
        label: "Kasakino piccolino",
        description: null,
        value: "Kasakino piccolino",
    },
    {
        label: "Mezzino Monopolino",
        description: null,
        value: "Mezzino Monopolino"
    },
];


module.exports = {
    data: new SlashCommandBuilder()
        .setName('lobby')
        .setDescription('Crea una lobby')
        .addStringOption(option =>
            option.setName('tipo')
                .setDescription('Il tipo di lobby da creare')
                .setRequired(true)
                .addChoices(
                    { name: 'Normal', value: 'normal' },
                    { name: 'Arena', value: 'arena' },
                )),
    async execute(interaction) {
        const tipo = interaction.options.getString('tipo')

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId(interaction.id)
            .setPlaceholder('Scegli i frocetti')
            .setMinValues(0)
            .setMaxValues(persone.length)
            .addOptions(
                persone.map((persone) =>
                    new StringSelectMenuOptionBuilder()
                        .setLabel(persone.label)
                        .setValue(persone.value)
                )
            );


        const actionRow = new ActionRowBuilder().addComponents(selectMenu)
        const reply = await interaction.reply({
            components: [actionRow],
        });

        const collector = reply.createMessageComponentCollector({
            ComponentType: ComponentType.StringSelect,
            filter: (i) => i.user.id === interaction.user.id && i.customId === interaction.id,
            time: 60_000
        })

        collector.on('collect', (interaction) => {
            const bLobby = interaction.values;
            let s = '';
            let x = '';
            let lobby = Utils.shuffle(bLobby);
            lobby = Utils.cercascemi(lobby, tipo)
            for (i = 0; i < lobby.length; i++) {
                x = lobby[i].join('\n')
                x = x + '\n'
                s = s + (`**Squadra ${i + 1}: ${Utils.randTeam()}**\n${x}`);
            }
            interaction.update(s);
        })
    }
};
