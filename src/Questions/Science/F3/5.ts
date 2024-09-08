import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_5 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The surface of the tongue is divided into several areas that are sensitive to different tastes. Which of the following foods is associated with sensitivity in area X of the tongue?",
                choices: [
                    {
                        objective_choice: "Bitter gourd",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Cake",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Chilli",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Vinegar",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Permukaan lidah terbahagi kepada beberapa kawasan yang peka terhadap rasa yang berlainan. Antara manakah yang berikut, yang manakah berkaitan dengan kepekaan kawasan _X_ pada lidah?",
                choices: [
                    {
                        objective_choice: "Peria",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Kek",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Cili",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Cuka",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "1",
            hint: "Lidah terdiri daripada **5** kawasan rasa. Di kawasan _X_, kebanyakannya boleh berasa **pahit**.\n_The tongue consists of **5** taste areas. In area X, it can predominantly taste **bitter**._",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/science/f3/tongue.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
