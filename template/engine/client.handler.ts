import { Client, GatewayIntentBits } from "@discordjs/core";
import { } from "@discordjs/builders";
import { Events } from "discord.js";
import "dotenv/config"

const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "DirectMessages"
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`logged in`)
})

// export default client;
