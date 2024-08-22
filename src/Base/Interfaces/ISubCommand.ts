import {
    ChatInputCommandInteraction,
    SlashCommandSubcommandBuilder,
} from "discord.js";
import ExtendedClient from "../Classes/ExtendedClient.js";

export default interface ISubCommand {
    client: ExtendedClient;
    data: SlashCommandSubcommandBuilder;

    Execute(interaction: ChatInputCommandInteraction): void;
}
