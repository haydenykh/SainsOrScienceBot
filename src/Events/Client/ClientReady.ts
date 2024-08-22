import { Events } from "discord.js";
import Event from "../../Base/Classes/Event.js";
import ExtendedClient from "../../Base/Classes/ExtendedClient.js";
import chalk from "chalk";

export default class Ready extends Event {
    constructor(client: ExtendedClient) {
        super(client, {
            name: Events.ClientReady,
            once: true,
        });
    }

    Execute() {
        console.log(
            chalk.bgGreenBright(" # ") +
                chalk.greenBright(` ${this.client.user?.tag} is ready!`)
        );
    }
}
