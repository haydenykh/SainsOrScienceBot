type ObjectiveQuestionChoices = {
    objective_choice: string;
    is_objective_answer: boolean;
}[];
type TickQuestionChoices = {
    tick_choice: string;
    is_tick_answer: boolean;
}[];
type WriteQuestionChoices = {
    write_answer: string;
}[];
type FITBQuestionChoices = {
    fitb_answer: string;
}[];

export {
    ObjectiveQuestionChoices,
    TickQuestionChoices,
    WriteQuestionChoices,
    FITBQuestionChoices,
};
