import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_17 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows an activity to study the exchange of gases in plants. Which part of the leaf that is involved in the activity?",
                choices: [
                    {
                        objective_choice: "Stoma",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Palisade cell",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Root cell",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Epidermis cell",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan satu aktiviti untuk mengkaji pertukaran gas dalam tumbuhan. Apakah bahagian daun yang terlibat dalam aktiviti?",
                choices: [
                    {
                        objective_choice: "Stoma",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Sel palisad",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Sel akar",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Sel epidermis",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Tinggi,
            chapter: "2",
            hint: "**Membuka spoiler ini akan memberi anda jawapan tersebut.**\n||Setakat Tingkatan 3, hanya satu daripada bahagian daun yang diajar, iaitu **stoma**.||\n_**Opening this spoiler will give you the answer.**\n||As of Form 3, only one of the part of the leaf is taught, which is the **stoma**.||_",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/activity_to_study_the_exchange_of_gases_in_plants.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
