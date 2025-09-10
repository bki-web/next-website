"use client";

import {motion, useAnimation} from "framer-motion";
import {useEffect} from "react";

export function IphoneLockBar() {
    const controls = useAnimation();

    useEffect(() => {
        let mounted = true;

        const run = async () => {
            // 1) Fade-in sekali
            await controls.start({
                opacity: 1,
                transition: {duration: 0.4, ease: "easeOut"},
                translateY: -20,
            });

            // 2) Delay 250ms sebelum mulai bounce
            await new Promise((r) => setTimeout(r, 250));

            if (!mounted) return;

            // 3) Bounce infinite (bolak-balik)
            controls.start({
                y: [0, -20, 0, -20, 0], // dua kali naik-turun
                transition: {
                    duration: 2.5,        // total durasi untuk 2 bounce
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 1.5,     // jeda antar “set 2 bounce”
                },
            });
        };

        run();
        return () => {
            mounted = false;
        };
    }, [controls]);

    return (
        <div
            className="absolute bottom-0 will-change-transform"
            style={{left: "calc(50% - 4rem)", translate: "0 0"}}
        >
            <motion.div
                initial={{opacity: 0, y: 0}}
                animate={controls}
            >
                <div className="w-32 h-1 rounded-full bg-white"/>
            </motion.div>
        </div>
    );
}
