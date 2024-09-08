import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_7 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "In addition to difficulty breathing, people with colds also lack appetite. Which of the following statements describes the situation?",
                choices: [
                    {
                        objective_choice:
                            "The nasal cavity is filled with mucus and prevents chemical molecules from the food from being detected by the smell receptors.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Her throat feels bitter and she has no desire for food.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Taste bud cells on the tongue become insensitive to the delicious taste of food.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Mucus fills the oesophagus making the process of swallowing food difficult.",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Selain daripada sukar bernafas, orang yang mengalami selsema juga kurang selera makan. Antara pernyataan berikut, yang manakah menerangkan keadaan tersebut?",
                choices: [
                    {
                        objective_choice:
                            "Rongga hidungnya dipenuhi mukus dan menghalang molekul bahan kimia dari makanan untuk dikesan oleh reseptor bau.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Tekaknya berasa pahit dan tiada keinginan terhadap makanan.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Sel-sel tunas rasa pada lidah menjadi tidak peka terhadap rasa lazat makanan.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Mukus memenuhi saluran esofagus menyebabkan proses menelan makanan menjadi sukar.",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Tinggi,
            chapter: "1",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/people_with_colds_lack_appetite.jpg",
            type: QuestionType.Objective,
        });
    }
}
