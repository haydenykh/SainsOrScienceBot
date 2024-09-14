import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_12 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The diagram shows the gas exchange in the blood capillaries through process P in alveolus. What is process P?",
                choices: [
                    {
                        objective_choice: "Diffusion",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Excretion",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Assimilation",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Absorption",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Rajah menunjukkan pertukaran gas dalam kapilari darah melalui proses P dalam alveolus. Apakah proses P?",
                choices: [
                    {
                        objective_choice: "Resapan",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice: "Perkumuhan",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Asimilasi",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice: "Penyerapan",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "2",
            hint: "**Membuka spoiler ini akan memberi anda jawapan tersebut.**\n||Setakat Tingkatan 3, hanya satu daripada proses tubuh manusia kita yang diajar, iaitu **proses resapan**.||\n_**Opening this spoiler will give you the answer.**\n||As of Form 3, only one of the processes of our human body is taught, which is the **diffusion process**.||_",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/gas_exchange_in_the_blood_capillaries.jpg",
            type: QuestionType.Objective,
            inline: true,
        });
    }
}
