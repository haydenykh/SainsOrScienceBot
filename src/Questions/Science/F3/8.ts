import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_8 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The plant roots and shoots in the following diagram show tropism responses. Name the responses.",
                choices: [
                    {
                        objective_choice:
                            "**Root**: Positive hydrotropism\n**Shoot**: Positive phototropism",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "**Root**: Negative geotropism\n**Shoot**: Positive phototropism",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Root**: Positive geotropism\n**Shoot**: Positive phototropism",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Root**: Negative hydrotropism\n**Shoot**: Negative phototropism",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Akar dan pucuk tumbuhan dalam rajah berikut menunjukkan gerak balas tropisme. Namakan jenis gerak balas tersebut.",
                choices: [
                    {
                        objective_choice:
                            "**Akar**: Hidrotropisme positif\n**Pucuk**: Fototropisme positif",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "**Akar**: Geotropisme negatif\n**Pucuk**: Fototropisme positif",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Akar**: Geotropisme positif\n**Pucuk**: Fototropisme positif",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "**Akar**: Hidrotropisme negatif\n**Pucuk**: Fototropisme negatif",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Sederhana,
            chapter: "1",
            hint: "Dalam imej, **akar tumbuhan** menghadap ke **arah tertentu**, yang kebanyakan tumbuhan tidak lakukan kecuali **air** hadir. Bagi **pucuk tumbuhan**, ia tumbuh **ke atas** dan bukannya ke bawah.\n_In the image, the **plant's root** is facing towards a **specific direction**, which most plants do not do unless **water** is present. As for the **plant's shoot**, it's growing **upwards** instead of downwards._",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/F3/Science/roots_and_shoots_show_tropism_responses.jpg",
            type: QuestionType.Objective,
        });
    }
}
