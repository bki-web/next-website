'use client';
import {classes} from "@/utils/string";
import {useMemo} from "react";

interface Props {
    text: string;
    onClick?: () => void;
    style?: 'primary' | 'white' | 'blur';
}

export default function Button({text, onClick, style = 'primary'}: Props) {
    const buttonStyle = useMemo(() => {
        if (style === 'primary') {
            return 'border-[#0A436A]/20 bg-[#0A436A] text-white hover:text-[#0A436A] hover:bg-slate-50';
        }
        if (style === 'white') {
            return 'border-slate-200 bg-white text-[#0A436A] hover:text-white hover:bg-[#0A436A]';
        }
        if (style === 'blur') {
            return 'border-white/20 hover:bg-white/20 text-white bg-white/10 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60';
        }
        return '';
    }, [style]);

    return (
        <button
            onClick={onClick}
            className={classes(
                "inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium shadow-sm cursor-pointer transition-colors duration-500 rounded-sm",
                buttonStyle,
            )}
        >
            {text} <span>→</span>
        </button>
    )
}