import { Client, Collection, GatewayIntentBits } from "discord.js";
import IExtendedClient from "../Interfaces/IExtendedClient.js";
import IConfig from "../Interfaces/IConfig.js";
import chalk from "chalk";
import Handler from "./Handler.js";

import { createRequire } from "node:module";
import Command from "./Command.js";
import SubCommand from "./SubCommand.js";
import logger from "../../Logger.js";
const require = createRequire(import.meta.url);

export default class ExtendedClient extends Client implements IExtendedClient {
    handlers: Handler;
    config: IConfig;
    commands: Collection<string, Command>;
    subCommands: Collection<string, SubCommand>;
    cooldowns: Collection<string, Collection<string, number>>;

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
        this.commands = new Collection();
        this.subCommands = new Collection();
        this.cooldowns = new Collection();
    }

    Init(): void {
        this.LoadHandlers();

        this.login(process.env.TOKEN)
            .then(() => {
                logger.info(
                    chalk.bgGreenBright(" # ") +
                        chalk.greenBright(" Logged in to client.")
                );
            })
            .catch((error) => console.error(error));
    }

    LoadHandlers(): void {
        this.handlers.LoadEvents();
        this.handlers.LoadCommands();
    }
}
