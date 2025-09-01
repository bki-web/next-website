import {useRef} from "react";
import {useMotionValue, useTransform} from "framer-motion";

export default function useTilt(max = 6) {
    const ref = useRef<HTMLDivElement | null>(null);
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const transform = useTransform([rx, ry], ([x, y]) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg)`);

    const onMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   // 0..1
        const py = (e.clientY - rect.top) / rect.height;   // 0..1
        ry.set((px - 0.5) * max * 2);     // kiri(-) kanan(+)
        rx.set((0.5 - py) * max * 2);     // atas(+), bawah(-)
    };
    const onLeave = () => {
        rx.set(0);
        ry.set(0);
    };
    return {ref, transform, onMove, onLeave};
}