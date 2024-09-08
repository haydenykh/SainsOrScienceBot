import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_3 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The following diagram shows a type of involuntary action to avoid injury. What sensory organs and receptors are involved in detecting the stimulus?",
                choices: [
                    {
                        objective_choice:
                            "**Sensory organ**: Skin\n**Receptor**: Heat receptor",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "**Sensory organ**: Finger\n**Receptor**: Pain receptor",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Sensory organ**: Skin\n**Receptor**: Pain receptor",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Sensory organ**: Finger\n**Receptor**: Heat receptor",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah berikut menunjukkan sejenis tindakan luar kawal untuk mengelakkan kecederaan. Apakah organ deria dan reseptor yang terlibat dalam mengesan rangsangan tersebut?",
                choices: [
                    {
                        objective_choice:
                            "**Organ deria**: Kulit\n**Reseptor**: Reseptor haba",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "**Organ deria**: Jari\n**Reseptor**: Reseptor sakit",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Organ deria**: Kulit\n**Reseptor**: Reseptor sakit",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Organ deria**: Jari\n**Reseptor**: Reseptor haba",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "1",
            hint: "Apakah yang **dibebaskan** oleh lilin?\nWhat do candles **release**?",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/involuntary_action_to_avoid_injury.jpg",
            type: QuestionType.Objective,
        });
    }
}
