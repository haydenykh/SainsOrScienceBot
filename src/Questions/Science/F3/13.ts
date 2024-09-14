import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_13 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows the apparatus set-up to study the effects of smoking on the lungs. Which part of the human respiratory system is represented by the cotton wool? `The thermometer and the white cotton are not visible in the diagram but it is there.`",
                choices: [
                    {
                        objective_choice: "Lungs",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Thoracic cavity",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Diaphragm",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Bronchus",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan susunan radas untuk mengkaji kesan merokok terhadap peparu. Bahagian sistem respirasi manusia yang manakah diwakili oleh kapas? `Termometer dan kapas putih tidak kelihatan dalam rajah tetapi ia memang di sana.`",
                choices: [
                    {
                        objective_choice: "Peparu",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Rongga toraks",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Diafragma",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Bronkus",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "2",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/apparatus_set-up_to_study_the_effects_of_smoking_on_the_lungs.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
