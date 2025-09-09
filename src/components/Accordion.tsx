import {ChevronDown, ChevronUp} from "lucide-react";
import React from "react";
import {classes} from "@/utils/string";

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
    isOpen: boolean;
    onToggle: () => void;
    titleClass?: string;
    iconClass?: string;
    descriptionClass?: string;
}

export default function Accordion({
                                      icon,
                                      title,
                                      description,
                                      isOpen,
                                      onToggle,
                                      titleClass,
                                      iconClass,
                                      descriptionClass
                                  }: Props) {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={onToggle}
            >
                <div className={
                    classes(
                        "flex items-center text-lg font-bold text-bki-orange",
                        titleClass ? titleClass : "",
                    )
                }>
                    <span className={classes(
                        "mr-4 text-bki-orange",
                        iconClass ? iconClass : "",
                    )}>
                      {icon}
                    </span>
                    {title}
                </div>
                <span className="text-gray-500 transition-transform duration-300">
                    {isOpen ? (
                        <ChevronUp size={20}/>
                    ) : (
                        <ChevronDown size={20}/>
                    )}
                  </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
                }`}
            >
                <p className={classes(
                    "text-base text-black pl-8",
                    descriptionClass ? descriptionClass : "",
                )}>{description}</p>
            </div>
        </div>
    );
}