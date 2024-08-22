import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";

export default class TestCommand extends Command {
    constructor(client: ExtendedClient) {
        super(client, {
            data: new SlashCommandBuilder()
                .setName("ping")
                .setDescription("Pong!"),
            category: Categories.Miscellaneous,
            cooldown: 5,
        });
    }

    Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({ content: `Pong!\n${this.client.ws.ping}ms` });
    }
}
