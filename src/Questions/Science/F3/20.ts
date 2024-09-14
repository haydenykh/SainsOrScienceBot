import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_20 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows an equation to represent a process the occurs in the human respiratory system. What is represented by X?",
                choices: [
                    {
                        objective_choice: "Oxygen",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Nitrogen",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Hydrogen",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Carbon dioxide",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan satu persamaan yang mewakili satu proses yang berlaku dalam sistem respirasi manusia. Apakah yang diwakili oleh X?",
                choices: [
                    {
                        objective_choice: "Oksigen",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Nitrogen",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Hidrogen",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Karbon dioksida",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "2",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/oxyhaemoglobin_formula.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
