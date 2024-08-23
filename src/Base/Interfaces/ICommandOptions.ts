import {
    ContextMenuCommandBuilder,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
} from "discord.js";
import Categories from "../Enums/Categories.js";

export default interface ICommandOptions {
    data:
        | SlashCommandBuilder
        | ContextMenuCommandBuilder
        | SlashCommandOptionsOnlyBuilder;
    category: Categories;
    cooldown: number | 0;
}
