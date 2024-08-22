import { ContextMenuCommandBuilder, SlashCommandBuilder } from "discord.js";
import Categories from "../Enums/Categories.js";

export default interface ICommandOptions {
    data: SlashCommandBuilder | ContextMenuCommandBuilder;
    category: Categories;
    cooldown: number | 0;
}
