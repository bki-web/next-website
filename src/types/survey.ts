import { ShipRegisterSurvey } from "./shipRegisterResult";

export type SurveySection = {
    title: string;
    rows: ShipRegisterSurvey[];
};

export type SurveyRow = {
    no: string | number;
    kind: string;
    dueDate?: string;
    rangeDate?: string;
    postponed?: string;
    lastDate?: string;
};
