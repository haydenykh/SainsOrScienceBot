import { Client, GatewayIntentBits } from "discord.js";
import IExtendedClient from "../Interfaces/IExtendedClient.js";
import IConfig from "../Interfaces/IConfig.js";
import chalk from "chalk";
import Handler from "./Handler.js";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export default class ExtendedClient extends Client implements IExtendedClient {
    handlers: Handler;
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
        this.handlers = new Handler(this);
    }

    Init(): void {
        this.LoadHandlers();

        this.login(process.env.TOKEN)
            .then(() => {
                console.log(
                    chalk.bgGreenBright(" # ") +
                        chalk.greenBright(" Logged in to client.")
                );
            })
            .catch((error) => console.error(error));
    }

    LoadHandlers(): void {
        this.handlers.LoadEvents();
    }
}
