import {
    CacheType,
    ChatInputCommandInteraction,
    SlashCommandSubcommandBuilder,
} from "discord.js";
import ISubCommand from "../Interfaces/ISubCommand.js";
import ExtendedClient from "./ExtendedClient.js";
import ISubCommandOptions from "../Interfaces/ISubCommandOptions.js";

export default class SubCommand implements ISubCommand {
    client: ExtendedClient;
    data: SlashCommandSubcommandBuilder;

    constructor(client: ExtendedClient, options: ISubCommandOptions) {
        this.client = client;
        this.data = options.data;
    }

    Execute(interaction: ChatInputCommandInteraction<CacheType>): void {}
}
