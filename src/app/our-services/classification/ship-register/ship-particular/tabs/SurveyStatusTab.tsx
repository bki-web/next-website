import SurveyStatusOfClass, {
    SurveySection
} from "@/app/our-services/classification/ship-register/ship-particular/components/SurveyStatusOfClass";

const sections: SurveySection[] = [
    {
        title: "Survey Status of Class",
        rows: [
            {no: 1, kind: "Special Survey", dueDate: "12-Mar-2030", lastDate: "10-Mar-2025"},
            {no: 2, kind: "Annual Survey", rangeDate: "12-Dec-2025 to 12-Jun-2026"},
            {no: 3, kind: "Docking Survey", dueDate: "10-Mar-2028", lastDate: "10-Mar-2025"},
            {no: 4, kind: "Intermediate Survey", rangeDate: "12-Dec-2026 to 12-Jun-2028"},
            {no: 5, kind: "Propeller Shaft (starboard-aft), Method 4", dueDate: "10-Mar-2030", lastDate: "10-Mar-2025"},
            {no: 6, kind: "Propeller Shaft (portside-aft), Method 4", dueDate: "10-Mar-2030", lastDate: "10-Mar-2025"},
        ],
    },
    {
        title: "Survey Status of Class",
        rows: [
            {
                no: 1,
                kind: "LOAD LINE ANNUAL",
                dueDate: "12 Jun 2026",
                rangeDate: "12 Dec 2025 to 12 Jun 2026",
                lastDate: "10-Mar-2025"
            },
            {
                no: 2,
                kind: "LOAD LINE RENEWAL ILLC 88",
                dueDate: "12 Mar 2026",
                rangeDate: "- to 12 Mar 2030",
                lastDate: "10 Mar 2025"
            },
        ],
    },
];

export default function SurvetStatusTab() {
    return (
        <SurveyStatusOfClass sections={sections}/>
    );
}