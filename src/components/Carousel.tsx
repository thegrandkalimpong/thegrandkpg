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
    return (
        <div className="relative w-full overflow-x-hidden">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="inline-block h-screen w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                ></div>
            ))}
        </div>
    );
}
