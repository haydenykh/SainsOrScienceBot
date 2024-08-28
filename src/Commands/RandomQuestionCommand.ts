import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    Colors,
    ComponentType,
    EmbedBuilder,
    SlashCommandBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";
import { readFileSync } from "node:fs";
import ShuffleArray from "../Functions/ShuffleArray.js";

const scienceJsonString = readFileSync("questions/science.json", "utf-8");
const ScienceQuestions = JSON.parse(scienceJsonString);

type QuestionObject = [
    {
        BI: {
            question: string;
            choices: [
                {
                    choice: string;
                    isAnswer: boolean;
                }
            ];
        };
        BM: {
            question: string;
            choices: [
                {
                    choice: string;
                    isAnswer: boolean;
                }
            ];
        };
        difficulty: number;
        chapter: string;
        hint?: string;
        image?: string;
    }
];
enum Language {
    BI = "BI",
    BM = "BM",
}
interface Choice {
    label: string;
    bmChoice: string;
    biChoice: string;
    originalIndex: number;
}

export default class RandomQuestionCommand extends Command {
    constructor(client: ExtendedClient) {
        super(client, {
            data: new SlashCommandBuilder()
                .setName("random")
                .setDescription("Sends a random question.")
                .addStringOption((option) =>
                    option
                        .setName("level")
                        .setDescription("The level range.")
                        .addChoices([
                            { name: "Form 1", value: "f1" },
                            { name: "Form 2", value: "f2" },
                            { name: "Form 3", value: "f3" },
                            { name: "Form 4", value: "f4" },
                            { name: "Form 5", value: "f5" },
                        ])
                        .setRequired(true)
                ),
            category: Categories.Utilities,
            cooldown: 2.5,
        });
    }
    async Execute(interaction: ChatInputCommandInteraction) {
        const { options } = interaction;
        const level = options.getString("level", true);

        const filteredQuestions: QuestionObject = ScienceQuestions[level].map(
            (q: QuestionObject) => q
        );
        const randomQuestion =
            filteredQuestions[
                Math.floor(Math.random() * filteredQuestions.length)
            ];

        let correctAnswerId: string | null = null;

        const choiceOptions = ["A", "B", "C", "D"];

        const choicesButtonRow =
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                choiceOptions.map((choice) =>
                    new ButtonBuilder()
                        .setCustomId(choice.toLowerCase())
                        .setLabel(choice)
                        .setStyle(ButtonStyle.Secondary)
                )
            );

        const hintButtonRow =
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setCustomId("hint")
                    .setEmoji("💡")
                    .setLabel("Hint")
                    .setStyle(ButtonStyle.Danger)
            );

        function formatChoices(): string[] {
            const combinedChoices: Choice[] = randomQuestion[
                Language.BM
            ].choices.map(
                (
                    bmChoice: { choice: string; isAnswer: boolean },
                    index: number
                ): Choice => {
                    const biChoice = randomQuestion[Language.BI].choices[index];
                    return {
                        label: "",
                        bmChoice: bmChoice.choice,
                        biChoice: biChoice.choice,
                        originalIndex: index,
                    };
                }
            );

            const shuffledChoices: Choice[] = ShuffleArray(
                combinedChoices
            ) as Choice[];

            shuffledChoices.forEach((choice, index) => {
                choice.label = `${choiceOptions[index]}`;

                if (
                    randomQuestion[Language.BM].choices[choice.originalIndex]
                        .isAnswer == true
                ) {
                    correctAnswerId = choice.label.toLowerCase();
                }
            });

            const formattedChoices = shuffledChoices.map(
                (choice) =>
                    `:regional_indicator_${choice.label.toLowerCase()}:\n${
                        choice.bmChoice
                    }\n_${choice.biChoice}_`
            );

            return formattedChoices;
        }

        const questionEmbed = new EmbedBuilder()
            .setTitle(`⁉️ Random Question`)
            .setDescription(
                `**${randomQuestion[Language.BM].question}**\n**_${
                    randomQuestion[Language.BI].question
                }_**\n\n${formatChoices().join("\n\n")}`
            )
            .setThumbnail(randomQuestion.image ? randomQuestion.image : null)
            .setFooter({
                text: `Difficulty: ${randomQuestion.difficulty} | Chapter: ${randomQuestion.chapter}`,
            });

        const reply = await interaction.reply({
            embeds: [questionEmbed],
            components: [choicesButtonRow, hintButtonRow],
        });

        const buttonCollector = reply.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i) =>
                i.user.id === interaction.user.id ||
                i.user.id !== interaction.user.id,
            time: 30_000,
        });

        buttonCollector.on("collect", async (i) => {
            if (i.user.id !== interaction.user.id) {
                await i.reply({
                    content: `This is <@!${interaction.user.id}>'s button. You wanna try it out too? Run this command (</random:1276458136252842029>).`,
                    ephemeral: true,
                });
                return;
            }

            const id = i.customId;

            if (id === "hint") {
                i.reply({
                    content: randomQuestion.hint
                        ? `💡 Hint:\n${randomQuestion.hint}`
                        : "No hint available.",
                    ephemeral: true,
                });
                return;
            }
            if (id === correctAnswerId) {
                await i
                    .reply({
                        content: `@everyone The correct answer was **${correctAnswerId.toUpperCase()}**.`,
                        flags: [4096],
                    })
                    .then((i_) => {
                        setTimeout(() => {
                            i_.delete();
                        }, 10_000);
                    });

                i.followUp({
                    content:
                        "🎉 You got it correct! Rerun command? </random:1276458136252842029>",
                    ephemeral: true,
                });

                buttonCollector.stop();
            } else {
                await reply.edit({
                    embeds: [questionEmbed.setColor(Colors.Red)],
                });
                i.reply({
                    content: "❌ Incorrect! Try again.",
                    ephemeral: true,
                });
            }
        });

        buttonCollector.on("end", async () => {
            const disabledRow =
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    choicesButtonRow.components.map((button) =>
                        ButtonBuilder.from(button)
                            .setDisabled(true)
                            .setStyle(ButtonStyle.Success)
                    )
                );
            const disabledHintRow =
                new ActionRowBuilder<ButtonBuilder>().addComponents(
                    hintButtonRow.components.map((button) =>
                        ButtonBuilder.from(button).setDisabled(true)
                    )
                );

            await reply.edit({
                content: `The correct answer was **${correctAnswerId?.toUpperCase()}**.`,
                embeds: [questionEmbed.setColor(Colors.Green)],
                components: [disabledRow, disabledHintRow],
            });
        });
    }
}
