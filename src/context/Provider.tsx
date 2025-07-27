"use client";
// useContext
import React, { createContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText, Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, Draggable);

const GsapContext = createContext<{
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
}>({
    gsap,
    ScrollTrigger,
});
export const GsapProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    useGSAP(() => {
        const lenis = new Lenis({
            duration: 1.1, // slower, smoother scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });
        gsap.ticker.lagSmoothing(0);
    }, []);
    return (
        <GsapContext.Provider value={{ gsap, ScrollTrigger }}>
            {children}
        </GsapContext.Provider>
    );
};
