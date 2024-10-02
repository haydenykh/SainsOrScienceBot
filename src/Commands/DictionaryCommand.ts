import {
    ActionRowBuilder,
    ChatInputCommandInteraction,
    Colors,
    EmbedBuilder,
    SlashCommandBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";
import axios from "axios";

export default class TestCommand extends Command {
    constructor(client: ExtendedClient) {
        super(client, {
            data: new SlashCommandBuilder()
                .setName("define")
                .setDescription("Find the definition of a phrase.")
                .addStringOption((option) =>
                    option
                        .setName("phrase")
                        .setDescription("The phrase to define.")
                        .setRequired(true)
                ),
            category: Categories.Utilities,
            cooldown: 4,
        });
    }

    async Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({content: "Unavailable for now.", ephemeral: true})
    }
}
