import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_2 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The following diagram shows one of the structures involved in the human nervous system. Which statement is true about the structure?",
                choices: [
                    {
                        objective_choice:
                            "Body and thought control centre protected by the skull.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Contains nerves that branch out from the spinal cord.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Located in the vertebral column and functions to carry impulses to the brain.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Interpret the stimulus received by the receptor to produce an impulse.",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah berikut menunjukkan salah satu struktur yang terlibat dalam sistem saraf manusia. Pernyataan yang manakah benar tentang struktur tersebut?",
                choices: [
                    {
                        objective_choice:
                            "Pusat kawalan badan dan pemikiran yang dilindungi oleh tempurung kelapa.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Mengandungi saraf yang bercabang keluar dari saraf tunjang.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Berada di dalam turus vertebra dan berfungsi membawa impuls ke otak.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Mentafsir rangsangan yang diterima oleh reseptor untuk menghasilkan impuls.",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "1",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/brain.jpg",
            type: QuestionType.Objective,
        });
    }
}
