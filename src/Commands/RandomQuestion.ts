import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    ComponentType,
    EmbedBuilder,
    SlashCommandBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";
import { readFileSync } from "fs";
import ShuffleArray from "../Functions/ShuffleArray.js";

const jsonString = readFileSync("questions.json", "utf-8");
const Questions = JSON.parse(jsonString);

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

export default class TestCommand extends Command {
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
            cooldown: 3,
        });
    }
    async Execute(interaction: ChatInputCommandInteraction) {
        const { options } = interaction;
        const level = options.getString("level", true);

        const filteredQuestions: QuestionObject = Questions[level].map(
            (q: QuestionObject) => q
        );
        const randomQuestion =
            filteredQuestions[
                Math.floor(Math.random() * filteredQuestions.length)
            ];

        let correctAnswerId: string | null = null; // Store the correct answer's ID here

        const choiceOptions = ["A", "B", "C", "D"];

        const choicesButtonRow =
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                choiceOptions.map((choice) =>
                    new ButtonBuilder()
                        .setCustomId(choice.toLowerCase())
                        .setLabel(choice)
                        .setStyle(ButtonStyle.Primary)
                )
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
                    `:regional_indicator_${choice.label.toLowerCase()}: ${
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
            .setImage(randomQuestion.image ? randomQuestion.image : null)
            .setColor("Random")
            .setFooter({
                text: `Difficulty: ${randomQuestion.difficulty} | Chapter: ${randomQuestion.chapter}`,
            });

        const reply = await interaction.reply({
            embeds: [questionEmbed],
            components: [choicesButtonRow],
        });

        const choicesButtonCollector = reply.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i) => i.user.id === interaction.user.id,
            time: 60_000,
        });

        choicesButtonCollector.on("collect", async (i) => {
            const id = i.customId;
            if (id === correctAnswerId) {
                const disabledRow =
                    new ActionRowBuilder<ButtonBuilder>().addComponents(
                        choicesButtonRow.components.map((btn) =>
                            ButtonBuilder.from(btn).setDisabled(true)
                        )
                    );

                await reply.edit({
                    components: [disabledRow],
                });

                i.reply({
                    content:
                        "🎉 You got it correct! Rerun command: </random:1276458136252842029>",
                    ephemeral: true,
                });
            } else {
                i.reply({
                    content: "❌ Incorrect! Try again.",
                    ephemeral: true,
                });
            }
        });
    }
}