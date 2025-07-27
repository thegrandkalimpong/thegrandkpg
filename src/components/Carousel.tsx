"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const images = [
    "/assets/room1.webp",
    "/assets/room2.webp",
    "/assets/room3.webp",
    "/assets/room4.webp",
    "/assets/room5.webp",
];

export default function Slider() {
    const containerRef = useRef();

    useLayoutEffect(() => {
        const cards = containerRef.current.querySelectorAll(".card");

        gsap.set(cards, {
            transformOrigin: "50% 100%",
            rotateY: (i) => -(i * 15 - ((cards.length - 1) * 15) / 2),
            xPercent: (i) => 10,
            z: -100,
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex items-center justify-center gap-10 perspective-[1000px]"
        >
            {images.map((src, i) => (
                <div
                    key={i}
                    className="card h-[300px] w-[800px] overflow-hidden bg-amber-300 shadow-lg transition-transform duration-300"
                >
                    <img
                        src={src}
                        alt={`img-${i}`}
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
