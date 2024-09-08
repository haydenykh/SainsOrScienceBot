import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_9 extends Question {
    constructor() {
        super({
            BI: {
                question: "Which animals have stereoscopic vision?",
                choices: [
                    {
                        objective_choice: "Eagle",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Goat",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Rabbit",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Horse",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Haiwan manakah yang mempunyai penglihatan stereoskopik?",
                choices: [
                    {
                        objective_choice: "Helang",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Kambing",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Arnab",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Kuda",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "1",
            hint: "Haiwan yang **penglihatan stereoskopik** kebanyakannya adalah **pemangsa**.\n_Animals with **stereoscopic vision** are mostly **predators**._",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
