"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Heading = () => {
    const heading = React.useRef<HTMLHeadingElement>(null);
    useGSAP(() => {
        const splitHeading = SplitText.create(heading.current, {
            type: "chars",
        });

        gsap.from(splitHeading.chars, {
            duration: 1,
            delay: 0.75,
            y: -60,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.05,
        });
    });

    return (
        <div>
            <h1
                ref={heading}
                className="font-mageline px-4 text-center text-6xl font-bold tracking-wider text-white sm:text-8xl lg:text-9xl"
            >
                <span className="text-shadow-amber-500 text-shadow-sm">
                    The Grand
                </span>
                <br />

                <span className="text-shadow-red-400 text-shadow-sm">
                    Kalimpong
                </span>
            </h1>
            <h2 className="font-poppins text-lg md:text-xl xl:text-2xl mt-12 text-center font-light tracking-[15px] text-white/90 uppercase">
                Your Holiday destination
            </h2>
        </div>
    );
};

export default Heading;
