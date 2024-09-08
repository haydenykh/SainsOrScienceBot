import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
    ButtonStyle,
    ChatInputCommandInteraction,
    Collection,
    Colors,
    ComponentType,
    EmbedBuilder,
    ModalActionRowComponentBuilder,
    ModalBuilder,
    SlashCommandBuilder,
} from "discord.js";
import Command from "../Base/Classes/Command.js";
import ExtendedClient from "../Base/Classes/ExtendedClient.js";
import Categories from "../Base/Enums/Categories.js";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "url";
import Question from "../Base/Classes/Question.js";
import { QuestionLanguage, QuestionType } from "../Base/Enums/QuestionEnums.js";
import {
    ObjectiveQuestionChoices,
    TickQuestionChoices,
    WriteQuestionChoices,
    FITBQuestionChoices,
} from "../Base/Interfaces/IQuestionData.js";
import ShuffleArray from "../Functions/ShuffleArray.js";
import ShuffleMap from "../Functions/ShuffleMap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

enum Level {
    Form1 = "f1",
    Form2 = "f2",
    Form3 = "f3",
    Form4 = "f4",
    Form5 = "f5",
}

enum Subject {
    Science = "science",
    Biology = "biology",
    Physics = "physics",
    Geography = "geography",
    Chemistry = "chemistry",
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
                )
                .addStringOption((option) =>
                    option
                        .setName("subject")
                        .setDescription("The subject.")
                        .addChoices([
                            { name: "Science", value: "science" },
                            { name: "Biology", value: "biology" },
                            { name: "Physics", value: "physics" },
                            { name: "Geography", value: "geography" },
                            { name: "Chemistry", value: "chemistry" },
                        ])
                        .setRequired(true)
                ),
            category: Categories.Utilities,
            cooldown: 2,
        });
    }
    async Execute(interaction: ChatInputCommandInteraction) {
        const { options } = interaction;
        const level = options.getString("level", true) as Level;
        const subject = options.getString("subject", true) as Subject;

        const embed = new EmbedBuilder().setTitle("Random Question");
        const answerRow = new ActionRowBuilder<ButtonBuilder>();
        const hintRow = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId("hint")
                .setEmoji({ id: "885065115722981427" })
                .setLabel("Hint")
                .setStyle(ButtonStyle.Secondary)
        );

        let reply;

        if (!(level == Level.Form4 || level == Level.Form5)) {
            if (!(subject == Subject.Science || subject == Subject.Geography)) {
                reply = await interaction.reply({
                    content:
                        "You are not eligible to use this command with certain parameters, please try again.",
                    ephemeral: true,
                });
            }
        }

        reply = await interaction.reply({
            content: "Generating random question…",
        });

        const questions = await loadFiles(subject, level);
        const filteredQuestions: Question[] = questions.map((q: Question) => q);
        const randomQuestion =
            filteredQuestions[Math.floor(Math.random() * questions.length)];

        if (!randomQuestion) {
            return reply.edit({
                content: `No questions has been added to this subject and/or level.\n\n> If you would like to add one, head over to [the GitHub page](https://github.com/haydenykh/SainsOrScienceBot)'s [CONTRIBUTE.md file](https://github.com/haydenykh/SainsOrScienceBot/blob/main/CONTRIBUTE.md). You'll find mostly everything you need in there.`,
            });
        }

        embed
            .setTitle("⁉️ Random Question")
            .setThumbnail(randomQuestion.image ? randomQuestion.image : null)
            .setColor("Random")
            .setAuthor({
                name: randomQuestion.credits!,
            })
            .setFooter({
                text: `Difficulty: ${randomQuestion.difficulty} | Chapter: ${
                    randomQuestion.chapter
                } | Type: ${
                    randomQuestion.type
                        .replaceAll(/_+/g, " ")
                        .charAt(0)
                        .toUpperCase() +
                    randomQuestion.type
                        .replaceAll(/_+/g, " ")
                        .slice(1, randomQuestion.type.length)
                        .toLowerCase()
                }`,
            })
            .setDescription(
                `${randomQuestion.BM.question}\n_${randomQuestion.BI.question}_`
            );

        const filter = (i: ButtonInteraction) =>
            i.user.id == interaction.user.id;

        const collector = interaction.channel!.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter,
            time: 25_000,
        });

        if (randomQuestion.type == QuestionType.Objective) {
            const alphabets_choices = ["A", "B", "C", "D"];

            const biChoices = randomQuestion.BI
                .choices as ObjectiveQuestionChoices;
            const bmChoices = randomQuestion.BM
                .choices as ObjectiveQuestionChoices;
            const mergeChoices = new Collection<
                string,
                ObjectiveQuestionChoices
            >();
            mergeChoices.set("bm", bmChoices);
            mergeChoices.set("bi", biChoices);

            const first: ObjectiveQuestionChoices = [];
            const second: ObjectiveQuestionChoices = [];
            const third: ObjectiveQuestionChoices = [];
            const fourth: ObjectiveQuestionChoices = [];
            const list: ObjectiveQuestionChoices[] = [];
            mergeChoices.map((choices, key) => {
                switch (key) {
                    case "bm":
                        first.push(choices[0]);
                        second.push(choices[1]);
                        third.push(choices[2]);
                        fourth.push(choices[3]);
                        break;
                    case "bi":
                        first.push(choices[0]);
                        second.push(choices[1]);
                        third.push(choices[2]);
                        fourth.push(choices[3]);
                        break;
                    default:
                        break;
                }
            });

            list.push(first, second, third, fourth);

            let correctAnswerId: string;

            const shuffledArray = ShuffleArray(list);

            const listWithAlphabetChoices = new Map<
                string,
                ObjectiveQuestionChoices
            >();
            listWithAlphabetChoices.set(alphabets_choices[0], shuffledArray[0]);
            listWithAlphabetChoices.set(alphabets_choices[1], shuffledArray[1]);
            listWithAlphabetChoices.set(alphabets_choices[2], shuffledArray[2]);
            listWithAlphabetChoices.set(alphabets_choices[3], shuffledArray[3]);

            const choice1 = Array.from(listWithAlphabetChoices.entries())[0];
            const choice2 = Array.from(listWithAlphabetChoices.entries())[1];
            const choice3 = Array.from(listWithAlphabetChoices.entries())[2];
            const choice4 = Array.from(listWithAlphabetChoices.entries())[3];

            if (choice1[1][0]["is_objective_answer"] == true) {
                correctAnswerId = choice1[0].toLowerCase();
            } else if (choice2[1][0]["is_objective_answer"] == true) {
                correctAnswerId = choice2[0].toLowerCase();
            } else if (choice3[1][0]["is_objective_answer"] == true) {
                correctAnswerId = choice3[0].toLowerCase();
            } else if (choice4[1][0]["is_objective_answer"] == true) {
                correctAnswerId = choice4[0].toLowerCase();
            }

            embed.addFields([
                {
                    name: `${choice1[0]}`,
                    value: `${choice1[1][0]["objective_choice"]}\n_${choice1[1][1]["objective_choice"]}_`,
                    inline: randomQuestion.inline,
                },
                {
                    name: `${choice2[0]}`,
                    value: `${choice2[1][0]["objective_choice"]}\n_${choice2[1][1]["objective_choice"]}_`,
                    inline: randomQuestion.inline,
                },
                {
                    name: `${choice3[0]}`,
                    value: `${choice3[1][0]["objective_choice"]}\n_${choice3[1][1]["objective_choice"]}_`,
                    inline: randomQuestion.inline,
                },
                {
                    name: `${choice4[0]}`,
                    value: `${choice4[1][0]["objective_choice"]}\n_${choice4[1][1]["objective_choice"]}_`,
                    inline: randomQuestion.inline,
                },
            ]);

            alphabets_choices.forEach((choice) => {
                answerRow.addComponents(
                    new ButtonBuilder()
                        .setCustomId(choice.toLowerCase())
                        .setLabel(choice)
                        .setStyle(ButtonStyle.Primary)
                );
            });

            reply.edit({
                content: "",
                embeds: [embed],
                components: [answerRow, hintRow],
            });

            collector.on("collect", async (i) => {
                const { customId } = i;

                if (customId == correctAnswerId) {
                    i.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle(`Hurray!`)
                                .setDescription(
                                    `<@!${i.user.id}> got it correct!`
                                )
                                .setColor(Colors.Green),
                        ],
                    });
                    collector.stop();
                } else if (customId == "hint") {
                    i.reply({
                        embeds: [
                            randomQuestion.hint
                                ? new EmbedBuilder()
                                      .setTitle(":bulb: Hint")
                                      .setDescription(`${randomQuestion.hint}`)
                                      .setColor(Colors.Gold)
                                : new EmbedBuilder()
                                      .setTitle(":bulb: Hint")
                                      .setDescription(`No hint available.`)
                                      .setColor(Colors.Red),
                        ],
                        ephemeral: true,
                    });
                } else {
                    i.reply({
                        embeds: [
                            new EmbedBuilder()
                                .setTitle(`Nah.`)
                                .setDescription(`<@!${i.user.id}>, try again!`)
                                .setColor(Colors.Red),
                        ],
                    });
                }
            });

            collector.on("end", async () => {
                answerRow.components.forEach((component) =>
                    component.setDisabled(true)
                );
                hintRow.components.forEach((component) =>
                    component.setDisabled(true)
                );

                reply.edit({
                    content: `The answer was **${correctAnswerId.toUpperCase()}**.`,
                    components: [answerRow, hintRow],
                });
            });
        }
        if (randomQuestion.type == QuestionType.StructuralFillInTheBlanks) {
            answerRow.addComponents([
                new ButtonBuilder()
                    .setCustomId("fitb-slot")
                    .setLabel("Insert answer here.")
                    .setStyle(ButtonStyle.Primary),
            ]);
            reply.edit({
                content: "",
                embeds: [embed],
                components: [answerRow],
            });
        } else if (randomQuestion.type == QuestionType.StructuralTick) {
            answerRow.addComponents([
                new ButtonBuilder()
                    .setCustomId("tick-slot")
                    .setLabel("Insert answer here.")
                    .setStyle(ButtonStyle.Primary),
            ]);
            reply.edit({
                content: "",
                embeds: [embed],
                components: [answerRow],
            });
        } else if (randomQuestion.type == QuestionType.StructuralWrite) {
            answerRow.addComponents([
                new ButtonBuilder()
                    .setCustomId("write-slot")
                    .setLabel("Insert answer here.")
                    .setStyle(ButtonStyle.Primary),
            ]);
            reply.edit({
                content: "",
                embeds: [embed],
                components: [answerRow],
            });
        }
    }
}

/**
 * Loads the respective folder.
 */
async function loadFiles(subject: Subject, level: Level) {
    const files = (
        await glob(
            `${path.join(
                __dirname,
                "..",
                "Questions"
            )}/${subject}/${level}/*.js`
        )
    ).map((filePath) => path.resolve(filePath));
    // .sort((a, b) => {
    //     const numA = parseInt(path.basename(a, ".js").match(/\d+/)![0], 10);
    //     const numB = parseInt(path.basename(b, ".js").match(/\d+/)![0], 10);

    //     return numA - numB;
    // });

    const questions = await Promise.all(
        files.map(async (file: string) => {
            const module = await import(file);
            const questionFile = new module.default() as Question;

            return questionFile;
        })
    );

    return questions;
}
