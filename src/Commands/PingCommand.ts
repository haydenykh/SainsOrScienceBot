import {
    ChatInputCommandInteraction,
    Colors,
    EmbedBuilder,
    SlashCommandBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";
import moment from "moment";

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
        const PingEmbed = new EmbedBuilder()
            .setTitle("🏓 Pinging…")
            .setDescription(`Retrieving latency…`)
            .setColor(Colors.Orange);

        interaction.reply({ embeds: [PingEmbed] }).then((i) => {
            PingEmbed.setTitle("🏓 Pong!")
                .setDescription(
                    `Successfully retrieved latency of \`${
                        this.client.ws.ping
                    }ms\`.\n> ${moment().format(
                        "HH:mm:ss"
                    )} UTC${moment().format("Z")}.`
                )
                .setColor(Colors.Green);
            i.edit({ embeds: [PingEmbed] });
        });
    }
}
