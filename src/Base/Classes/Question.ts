import {
    QuestionType,
    QuestionLanguage,
    QuestionDifficulty,
} from "../Enums/QuestionEnums.js";
import IQuestionData from "../Interfaces/IQuestionData.js";
import {
    FITBQuestionChoices,
    ObjectiveQuestionChoices,
    TickQuestionChoices,
    WriteQuestionChoices,
} from "../Types/QuestionTypes.js";

export default class Question implements IQuestionData {
    readonly BI: {
        question: string;
        choices:
            | ObjectiveQuestionChoices
            | TickQuestionChoices /* not used */
            | WriteQuestionChoices /* not used */
            | FITBQuestionChoices /* not used */;
    };
    readonly BM: {
        question: string;
        choices:
            | ObjectiveQuestionChoices
            | TickQuestionChoices /* not used */
            | WriteQuestionChoices /* not used */
            | FITBQuestionChoices /* not used */;
    };
    readonly difficulty: QuestionDifficulty;
    readonly chapter: string | number;
    readonly type: QuestionType;
    readonly image?: string;
    readonly hint?: string;
    readonly credits?: string;
    readonly inline?: boolean;
    readonly deprecated?: {
        bool: boolean;
        yearEnd: number;
    };

    constructor(data: IQuestionData) {
        this.BI = data.BI;
        this.BM = data.BM;
        this.difficulty = data.difficulty;
        this.chapter = data.chapter;
        this.type = data.type;
        this.image = data.image || undefined;
        this.hint = data.hint;
        this.credits = data.credits || "No credits mentioned.";
        this.inline = data.inline || false;
        this.deprecated = data.deprecated || { bool: false, yearEnd: 1970 };
    }
}
