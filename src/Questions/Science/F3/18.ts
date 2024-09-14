import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_18 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows the breathing structure of a grasshopper. What is structure P?",
                choices: [
                    {
                        objective_choice: "Spiracle",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Trachea",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Trakeol",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Air sacs",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan struktur pernafasan bagi belalang. Apakah struktur P?",
                choices: [
                    {
                        objective_choice: "Spirakel",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Trakea",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Trakeol",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Pundi udara",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "2",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/grasshopper.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
