import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_16 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows the situation in one public area. Who is the passive smoker in the diagram?",
                choices: [
                    {
                        objective_choice: "Q and R",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "P and Q",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "P and R",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "P, Q and R",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan situasi di suatu tempat awam. Siapakah perokok pasif dalam rajah tersebut?",
                choices: [
                    {
                        objective_choice: "Q dan R",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "P dan Q",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "P dan R",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "P, Q dan R",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Tinggi,
            chapter: "2",
            hint: "Perokok pasif bermakna mereka **terhidu asap yang dihisap oleh orang lain**.\n_A passive smoker meaning they **inhaled smoke smoked by someone else**._",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/passive_smoker.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
