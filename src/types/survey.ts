export type SurveySection = {
    title: string;
    rows: SurveyRow[];
};

export type SurveyRow = {
    no: string | number;
    kind: string;
    dueDate?: string;
    rangeDate?: string;
    postponed?: string;
    lastDate?: string;
};
