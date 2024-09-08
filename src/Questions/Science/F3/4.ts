import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_4 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "X in the diagram shows one of the photoreceptors found in the retina. The function of the cells is to see during the day or in bright conditions and they are sensitive to colour. Name X.",
                choices: [
                    {
                        objective_choice: "Cone cell",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Rod cell",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Nerve cell",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Ganglion cell",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "_X_ dalam rajah berikut menunjukkan salah satu fotoreseptor yang terdapat pada retina. Sel ini berfungsi untuk penglihatan pada waktu siang atau dalam keadaan terang dan peka terhadap warna. Namakan _X_.",
                choices: [
                    {
                        objective_choice: "Sel kon",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Sel rod",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Sel saraf",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Sel ganglion",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Rendah,
            chapter: "1",
            hint: "Setakat Tingkatan 3, hanya terdapat 2 fotoreseptor yang diajar, iaitu **sel rod** dan **sel kon**. Ini sepatutnya menghapuskan dua pilihan lain.\n_As of Form 3, there are only 2 photoreceptors that was taught and those are the **rod cells** and **cone cells**. This should eliminate two other options._",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/science/f3/photoreceptors_found_in_the_retina.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
