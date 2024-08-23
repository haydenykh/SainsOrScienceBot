import {
    AutocompleteInteraction,
    ChatInputCommandInteraction,
    ContextMenuCommandBuilder,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
} from "discord.js";
import ExtendedClient from "../Classes/ExtendedClient.js";
import Categories from "../Enums/Categories.js";

export default interface ICommand {
    client: ExtendedClient;
    data:
        | SlashCommandBuilder
        | ContextMenuCommandBuilder
        | SlashCommandOptionsOnlyBuilder;
    category: Categories;
    cooldown: number;

    Execute(interaction: ChatInputCommandInteraction): void;
    AutoComplete(interaction: AutocompleteInteraction): void;
}
