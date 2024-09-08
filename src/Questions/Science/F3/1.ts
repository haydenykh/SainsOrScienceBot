import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_1 extends Question {
    constructor() {
        super({
            BI: {
                question: "What is the definition of stimulus?",
                choices: [
                    {
                        objective_choice:
                            "The change in surrounding that can be detected by the body system.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "The organism's action based on the stimulus.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "The change in surrounding that can affect the body system.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "The change in the body system that can be detected by the surroundings.",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question: "Apakah definisi rangsangan?",
                choices: [
                    {
                        objective_choice:
                            "Perubahan persekitaran yang boleh dikesan oleh sistem badan.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Tindakan organisma terhadap rangsangan tersebut.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Perubahan persekitaran yang boleh mempengaruhi sistem badan.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Perubahan sistem badan yang boleh dikesan oleh persekitaran.",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "1",
            type: QuestionType.Objective,
        });
    }
}
