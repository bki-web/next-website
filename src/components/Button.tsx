import {classes} from "@/utils/string";

interface Props {
    text: string;
    onClick?: () => void;
    style?: 'primary' | 'white';
}

export default function Button({text, onClick, style = 'primary'}: Props) {
    const buttonStyle = style === 'primary' ? 'border-[#0A436A]/20 bg-[#0A436A] text-white hover:text-[#0A436A] hover:bg-slate-50' : 'border-slate-200 bg-white text-[#0A436A] hover:text-white hover:bg-[#0A436A]';
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