//import delle classi
const fs = require('node:fs')
const path = require('node:path')
const { Client,Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');


//istanza del client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


//quindo il bot è pronto partira il codice
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

//creazione di una Collezione(Gruppo) di commandi
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

//Logica per prendere i file dei commandi in automatico
for (const folder of commandFolders){
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file=>file.endsWith('.js'));
	for (const file of commandFiles){
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		//Crea un nuovo commando nella Collection con la chiave come nome e il valore come il modulo esportato
		if ('data' in command && 'execute' in command){
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] Al commando in ${filePath} mancano la/le proprietà "data" e/o "execute"`)
		}
	}
}

client.on(Events.InteractionCreate, async interaction=>{
	if (!interaction.isChatInputCommand()) return;
	
	const command = interaction.client.commands.get(interaction.commandName);

	if(!command){
		console.error(`Nessun commando corrispondente a ${interaction.commandName} è stato trovato`);
		return;
	}

	try{
		await command.execute(interaction);
	} catch(error){
		console.error(error);
		if(interaction.replied || interaction.deferred){
			await interaction.followUp({content: 'There was an error while executing this command!', ephemeral: true})
		} else{
			await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true})
		}
	}
})

//Log in del bot tramite token
client.login(token);