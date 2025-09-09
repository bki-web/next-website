"use client";
import React, {useState} from "react";
import Accordion from "@/components/Accordion";

// Define the type for a single disclaimer item
interface DisclaimerItem {
    question: string;
    answer: string;
}

// Define the props for the DisclaimerSection component
interface DisclaimerSectionProps {
    sectionTitle: string;
    sectionSubtitle: string;
    disclaimers: DisclaimerItem[];
    icon: React.ReactNode;
}

const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({
                                                                 sectionTitle,
                                                                 sectionSubtitle,
                                                                 disclaimers,
                                                                 icon
                                                             }) => {
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleDisclaimer = (index: number) => {
        setOpenIndices((prevIndices) => {
            if (prevIndices.includes(index)) {
                // If the item is already open, remove it from the array
                return prevIndices.filter((i) => i !== index);
            } else {
                // If the item is closed, add it to the array
                return [...prevIndices, index];
            }
        });
    };
    return (
        <section className="py-12 px-6 sm:px-6 md:px-24 bg-gray-50 text-black">
            <div className=" mx-auto flex flex-col md:flex-row gap-12">
                {/* Left Column - Titles */}
                <div className="w-full md:w-1/3 flex flex-col justify-start">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {sectionSubtitle}
                    </h3>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bki-blue leading-tight">
                        {sectionTitle}
                    </h2>
                </div>

                {/* Right Column - Collapsible Items */}
                <div className="w-full md:w-2/3 space-y-4">
                    {disclaimers.map((item, index) => {
                        const isOpen = openIndices.includes(index);
                        return (
                            <Accordion
                                key={index}
                                icon={icon}
                                title={item.question}
                                description={item.answer}
                                isOpen={isOpen}
                                onToggle={() => toggleDisclaimer(index)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DisclaimerSection;
