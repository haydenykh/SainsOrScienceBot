import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_15 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "Which of the following contains little oxygen but has more carbon dioxide?",
                choices: [
                    {
                        objective_choice: "Deoxygenated blood",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Red blood cells",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "White blood cells",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Oxygenated blood",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Antara berikut, yang manakah mengandungi sedikit oksigen tetapi lebih banyak karbon dioksida?",
                choices: [
                    {
                        objective_choice: "Darah terdeoksigen",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Sel darah merah",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Sel darah putih",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Darah beroksigen",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "2",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
