import { glob } from "glob";
import IHandler from "../Interfaces/IHandler.js";
import path from "path";
import ExtendedClient from "./ExtendedClient.js";
import Event from "./Event.js";
import chalk from "chalk";

import { createRequire } from "node:module";
import Command from "./Command.js";
import SubCommand from "./SubCommand.js";
import logger from "../../Logger.js";
const require = createRequire(import.meta.url);

export default class Handler implements IHandler {
    client: ExtendedClient;

    constructor(client: ExtendedClient) {
        this.client = client;
    }

    async LoadEvents(): Promise<void> {
        const files = (await glob(`dist/Events/**/*.js`)).map((filePath) =>
            path.resolve(filePath)
        );

        files.map(async (file: string) => {
			const eventModule = await import(file);
			const EventClass = eventModule.default || eventModule.Event;
            const event: Event = new EventClass(this.client);

            if (!event.name)
                return (
                    delete require.cache[require.resolve(file)] &&
                    logger.error(
                        chalk.bgRedBright(" ! ") +
                            chalk.redBright(
                                ` ${file
                                    .split("/")
                                    .pop()} does not have a name. `
                            )
                    )
                );

            const execute = (...args: unknown[]) => event.Execute(...args);

            if (event.once) {
                // @ts-expect-error: No overload matches this call.
                this.client.once(event.name, execute);
            } else {
                // @ts-expect-error: No overload matches this call.
                this.client.on(event.name, execute);
            }

            return delete require.cache[require.resolve(file)];
        });
    }

    async LoadCommands(): Promise<void> {
        const files = (await glob(`dist/Commands/**/*.js`)).map((filePath) =>
            path.resolve(filePath)
        );

        files.map(async (file: string) => {
			const commandModule = await import(file);
			const CommandClass = commandModule.default || commandModule.Command || commandModule.SubCommand;
			if (!CommandClass || typeof CommandClass !== 'function') {
				throw new Error(`No valid constructor found in ${file}`);
			}
            const command: Command | SubCommand = new CommandClass(this.client);

            if (!command.data.name)
                return (
                    delete require.cache[require.resolve(file)] &&
                    logger.error(
                        chalk.bgRedBright(" ! ") +
                            chalk.redBright(
                                ` ${file
                                    .split("/")
                                    .pop()} does not have a name. `
                            )
                    )
                );

            if (file.split("/").pop()?.split(".")[2]) {
                return this.client.subCommands.set(
                    command.data.name,
                    command as SubCommand
                );
            }
            this.client.commands.set(command.data.name, command as Command);

            return delete require.cache[require.resolve(file)];
        });
    }
}
