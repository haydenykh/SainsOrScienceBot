import {
    QuestionType,
    QuestionDifficulty,
} from "../../../Base/Enums/QuestionEnums.js";
import Question from "../../../Base/Classes/Question.js";

export default class F3_10 extends Question {
    constructor() {
        super({
            BI: {
                question:
                    "The fish has a longitudinal line on its body known as the lateral line. What is the function of the line?",
                choices: [
                    {
                        objective_choice:
                            "Detecting prey and avoiding predators around it.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Scaring the predators in their habitat.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "As a signal of maturity to attract mating partners.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Making the fish look stronger to scare the prey around it.",
                        is_objective_answer: false,
                    },
                ],
            },
            BM: {
                question:
                    "Ikan mempunyai satu garisan memanjang apda badannya yang dikenali sebagai garis lateral. Apakah fungsi garisan tersebut?",
                choices: [
                    {
                        objective_choice:
                            "Mengesan mangsa dan mengelakkan diri dari pemangsa di sekelilingnya.",
                        is_objective_answer: true,
                    },
                    {
                        objective_choice:
                            "Menakutkan pemangsa yang ada di dalam habitatnya.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Sebagai isyarat kematangan untuk menarik pasangan mengawan.",
                        is_objective_answer: false,
                    },
                    {
                        objective_choice:
                            "Menjadikan ikan kelihatan lebih kuat untuk menakutkan mengsa di sekelilingnya.",
                        is_objective_answer: false,
                    },
                ],
            },
            difficulty: QuestionDifficulty.Tinggi,
            chapter: "1",
            image: "https://raw.githubusercontent.com/haydenykh/SainsOrScienceBot/main/assets/images/science/f3/fishes_lateral_line.jpg",
            type: QuestionType.Objective,
        });
    }
}
