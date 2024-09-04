import {
    ActivityType,
    APIApplicationCommand,
    Collection,
    Events,
    REST,
    Routes,
} from "discord.js";
import Event from "../../Base/Classes/Event.js";
import ExtendedClient from "../../Base/Classes/ExtendedClient.js";
import chalk from "chalk";
import Command from "../../Base/Classes/Command.js";
import logger from "../../Logger.js";

export default class Ready extends Event {
    constructor(client: ExtendedClient) {
        super(client, {
            name: Events.ClientReady,
            once: true,
        });
    }

    async Execute() {
        logger.info(
            chalk.bgGreenBright(" # ") +
                chalk.greenBright(` ${this.client.user?.tag} is ready!`)
        );

        this.client.user?.setPresence({
            status: "online",
            activities: [
                {
                    name: "/random",
                    state: "Sends a random quiz.",
                    type: ActivityType.Watching,
                },
            ],
        });

        const commands: object[] = this.GetJson(this.client.commands);
        const rest = new REST().setToken(process.env.TOKEN ?? "");
        const setCommands = (await rest.put(
            Routes.applicationCommands(this.client.config.clientId),
            {
                body: commands,
            }
        )) as APIApplicationCommand[];

        logger.info(
            chalk.bgGreenBright(" # ") +
                chalk.greenBright(
                    ` Successfully set ${setCommands.length} commands.`
                )
        );
    }

    private GetJson(commands: Collection<string, Command>): object[] {
        const data: object[] = [];

        commands.forEach((command) => {
            data.push(command.data.toJSON());
        });

        return data;
    }
}
