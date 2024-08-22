import { ChatInputCommandInteraction, Collection, Events } from "discord.js";
import Event from "../../Base/Classes/Event.js";
import ExtendedClient from "../../Base/Classes/ExtendedClient.js";
import Command from "../../Base/Classes/Command.js";

export default class CommandHandler extends Event {
    constructor(client: ExtendedClient) {
        super(client, {
            name: Events.InteractionCreate,
        });
    }
    async Execute(interaction: ChatInputCommandInteraction) {
        if (!interaction.isChatInputCommand()) return;

        const { commands, cooldowns } = this.client;

        const command: Command = commands.get(interaction.commandName)!;

        if (!command)
            return (
                (await interaction.reply({
                    content: "This command does not exist.",
                    ephemeral: true,
                })) && commands.delete(interaction.commandName)
            );

        if (!cooldowns.has(command.data.name))
            cooldowns.set(command.data.name, new Collection());

        const now = Date.now();
        const timestamps = cooldowns.get(command.data.name)!;
        const cooldownAmount = (command.cooldown || 3) * 1000;

        if (
            timestamps.has(interaction.user.id) &&
            now < (timestamps.get(interaction.user.id) || 0) + cooldownAmount
        ) {
            return interaction.reply({
                content: `Please wait for another \`${(
                    ((timestamps.get(interaction.user.id) || 0) +
                        cooldownAmount -
                        now) /
                    1000
                ).toFixed(1)}\` seconds to run /\`${command.data.name}\``,
                ephemeral: true,
            });
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => {
            timestamps.delete(interaction.user.id);
        }, cooldownAmount);

        try {
            const subCommandGroup =
                interaction.options.getSubcommandGroup(false);
            const subCommand = `${interaction.commandName}${
                subCommandGroup ? `.${subCommandGroup}` : ""
            }.${interaction.options.getSubcommand(false) || ""}`;

            return (
                this.client.subCommands.get(subCommand)?.Execute(interaction) ||
                command.Execute(interaction)
            );
        } catch (error) {
            console.error(error);
        }
    }
}
