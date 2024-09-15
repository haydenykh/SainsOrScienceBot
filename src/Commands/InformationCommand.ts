import {
    ChatInputCommandInteraction,
    EmbedBuilder,
    SlashCommandBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";

export default class InformationCommand extends Command {
    constructor(client: ExtendedClient) {
        super(client, {
            data: new SlashCommandBuilder()
                .setName("info")
                .setDescription("I'll tell you a bit of myself."),
            category: Categories.Information,
            cooldown: 5,
        });
    }

    Execute(interaction: ChatInputCommandInteraction) {
        const clientCreatedAt = this.client.user!.createdAt;
        const now = Date.now();

        const differenceInMs = Math.abs(clientCreatedAt.getTime() - now);

        const millisecondsInDay: number = 1000 * 60 * 60 * 24;

        const differenceInDays: number = Math.floor(
            differenceInMs / millisecondsInDay
        );

        const infoEmbed = new EmbedBuilder()
            .setTitle(`👋 Hi,`)
            .setDescription(
                `- I am a bot whom provides predominantly **science quizzes** from Malaysia's governmental secondary schools with both **:flag_my: Malay (Bahasa Melayu)** and **:flag_gb: English support**.\n- I'm not affiliated with the government.\n- I was created by [@haydenykh](https://discord.com/users/900561055472840724) using the **[discord.js module](https://discord.js.org)** and **[TypeScript](https://typescriptlang.org)**.\n- If you want to **add new questions** or **fix my errors**, head to the **[CONTRIBUTING.md file](https://github.com/haydenykh/SainsOrScienceBot/blob/main/CONTRIBUTING.md)** on my **[GitHub repository](https://github.com/haydenykh/SainsOrScienceBot)**.\n- I was also created on **${clientCreatedAt.toLocaleDateString(
                    "en-GB"
                )}**, that was approximately **${differenceInDays} days ago**.\n-# > Read more about me in the GitHub repository.`
            )
            .setColor("Random")
            .setThumbnail(
                this.client.user!.avatarURL({ extension: "png", size: 1024 })
            );

        interaction.reply({ embeds: [infoEmbed], ephemeral: true });
    }
}
