import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_14 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "Which of the following structures has the function of protecting the lungs?",
                choices: [
                    {
                        objective_choice: "Rib cage",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Alveolus",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Bronchus",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Diaphragm",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Antara struktur yang berikut, yang manakah berfungsi melindungi peparu?",
                choices: [
                    {
                        objective_choice: "Sangkar rusuk",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Alveolus",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Bronkus",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Diafragma",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "2",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
