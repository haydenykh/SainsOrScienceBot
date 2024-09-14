import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_19 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "What gases are involved in the gaseous exchange process between alveoli and blood capillaries?\nI. Oxygen | II. Nitrogen | III. Carbon monoxide | IV. Carbon dioxide",
                choices: [
                    {
                        objective_choice: "I and IV",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "I and II",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "III and IV",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "II and III",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Gas apakah yang terlibat dalam proses pertukaran gas antara alveolus dengan kapilari darah?\nI. Oksigen | II. Nitrogen | III. Karbon monoksida | IV. Karbon dioksida",
                choices: [
                    {
                        objective_choice: "I dan IV",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "I dan II",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "III dan IV",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "II dan III",
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
