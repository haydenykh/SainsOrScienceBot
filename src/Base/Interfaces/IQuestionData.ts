import { QuestionType, QuestionDifficulty } from "../Enums/QuestionEnums.js";

export type ObjectiveQuestionChoices = {
    objective_choice: string;
    is_objective_answer: boolean;
}[];
export type TickQuestionChoices = {
    tick_choice: string;
    is_tick_answer: boolean;
}[];
export type WriteQuestionChoices = {
    write_answer: string;
}[];
export type FITBQuestionChoices = {
    fitb_answer: string;
}[];

interface IQuestionData {
    BI: {
        question: string;
        choices:
            | ObjectiveQuestionChoices
            | TickQuestionChoices
            | WriteQuestionChoices
            | FITBQuestionChoices;
    };
    BM: {
        question: string;
        choices:
            | ObjectiveQuestionChoices
            | TickQuestionChoices
            | WriteQuestionChoices
            | FITBQuestionChoices;
    };
    difficulty: QuestionDifficulty;
    chapter: string | number;
    type: QuestionType;
    image?: string;
    hint?: string;
    credits?: string;
    inline?: boolean;
}

export default IQuestionData;
