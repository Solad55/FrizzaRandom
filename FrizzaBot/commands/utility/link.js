const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const { linkInvite } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('link')
		.setDescription('Manda il link di invito del bot'),
	async execute(interaction) {
		await interaction.reply({content:'Ti ho inviato un DM ;]', ephemeral:true});
		interaction.user.send(`Ecco il [link](${linkInvite}) per invitare il bot nel tuo server`);
		await wait(5_000);
		await interaction.editReply('░M░Y ░P░U░S░S░Y░ I░N░ B░I░O░')
		
	},
};