import { QuestionType, QuestionDifficulty } from "../Enums/QuestionEnums.js";
import {
    FITBQuestionChoices,
    ObjectiveQuestionChoices,
    TickQuestionChoices,
    WriteQuestionChoices,
} from "../Types/QuestionTypes.js";

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
    deprecated?: {
        bool: boolean;
        yearEnd: number;
    };
}

export default IQuestionData;
