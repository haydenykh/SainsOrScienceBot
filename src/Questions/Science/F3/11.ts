import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_11 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows the structures of the human respiratory system. What is the function of P?",
                choices: [
                    {
                        objective_choice:
                            "Changes the air pressure in the thoracic cavity.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Protects the lungs.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Raises and lowers the rib cage.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "The place where gas exchange occurs.",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan struktur-struktur sistem respirasi manusia. Apakah fungsi struktur P?",
                choices: [
                    {
                        objective_choice:
                            "Mengubah tekanan udara di dalam rongga toraks.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Melindungi peparu.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Menaikkan dan menurunkan sangkar rusuk.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Tempat pertukaran gas berlaku.",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "2",
            hint: "Dalam rajah, P dikenali sebagai **diafragma** yang terletak di bawah peparu. Apabila anda **menarik nafas**, **diafragma** akan **mengecut dan menarik ke bawah**. **Sangkar rusuk** akan ditarik **ke atas**. Begitu juga sebaliknya apabila anda **menghembus nafas**.\n_In the diagram, P is known as the **diaphragm**, which is just right below the lungs. When you **inhale**, the **diaphragm** **contracts** and **pulls downwards**. The **rib cage** will be **pulled upwards**. Vice versa when you **exhale**._",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/lungs.jpg",
            type: QuestionType.Objective,
        });
    }
}
