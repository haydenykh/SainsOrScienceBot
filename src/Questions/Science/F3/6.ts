import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_6 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "When seeing, an image of an object will be formed on the retina. State the characteristics of the image.",
                choices: [
                    {
                        objective_choice: "Inverted and smaller",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Upright and virtual",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Upright and smaller",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Inverted and larger",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Semasa melihat, imej objek akan terbentuk di atas retina. Nyatakan ciri-ciri imej tersebut.",
                choices: [
                    {
                        objective_choice: "Songsang dan lebih kecil",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Tegak dan maya",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Tegak dan lebih kecil",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Songsang dan lebih besar",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "1",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
