import {
    SlashCommandBuilder,
    ContextMenuCommandBuilder,
    ChatInputCommandInteraction,
    AutocompleteInteraction,
    CacheType,
} from "discord.js";
import Categories from "../Enums/Categories.js";
import ICommand from "../Interfaces/ICommand.js";
import ExtendedClient from "./ExtendedClient.js";
import ICommandOptions from "../Interfaces/ICommandOptions.js";

export default class Command implements ICommand {
    client: ExtendedClient;
    data: SlashCommandBuilder | ContextMenuCommandBuilder;
    category: Categories;
    cooldown: number;

    constructor(client: ExtendedClient, options: ICommandOptions) {
        this.client = client;
        this.data = options.data;
        this.category = options.category;
        this.cooldown = options.cooldown;
    }

    Execute(interaction: ChatInputCommandInteraction<CacheType>): void {}
    AutoComplete(interaction: AutocompleteInteraction<CacheType>): void {}
}
