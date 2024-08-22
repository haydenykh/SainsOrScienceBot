import { Client, GatewayIntentBits } from "discord.js";
import IExtendedClient from "../Interfaces/IExtendedClient.js";
import IConfig from "../Interfaces/IConfig.js";
import chalk from "chalk";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export default class ExtendedClient extends Client implements IExtendedClient {
    config: IConfig;

    constructor() {
        super({
            intents: [
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.Guilds,
            ],
        });

        this.config = require(`${process.cwd()}/data/config.json`);
    }

    Init(): void {
        this.login(process.env.TOKEN)
            .then(() => {
                console.log(
                    chalk.bgGreenBright(" # ") +
                        chalk.greenBright(" Logged in to client. ")
                );
            })
            .catch((error) => console.error(error));
    }
}
