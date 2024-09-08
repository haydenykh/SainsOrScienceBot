enum QuestionType {
    Objective = "objective",
    StructuralWrite = "structural_write",
    StructuralFillInTheBlanks = "structural_fitb",
    StructuralTick = "structural_tick",
}

enum QuestionLanguage {
    BM = "BM",
    BI = "BI",
}

enum QuestionDifficulty {
    Rendah = "R",
    Sederhana = "S",
    Tinggi = "T",
}

export { QuestionType, QuestionLanguage, QuestionDifficulty };
