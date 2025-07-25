"use client";
import ImageFrame from "@/components/ImageFrame";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
        });
    });

    return (
        <div className="relative">
            <section
                id="home"
                className="flex h-screen w-full items-center justify-center bg-white bg-cover bg-center bg-no-repeat pt-0"
            >
                <h1 className="font-mageline relative z-30 text-center text-7xl font-bold text-white lg:text-8xl">
                    The Grand <br />
                    <span className="text-amber-100">Kalimpong</span>
                </h1>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 -z-10 h-[85vh] w-[90%] object-cover"
                >
                    <source src="/hero.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 z-10 mx-auto h-[85vh] w-[90%] bg-black/60"></div>
            </section>

            <section
                id="box"
                className="relative z-10 h-screen bg-white text-black"
            >
                <h2 className="pt-40 text-center text-5xl">Welcome to Box</h2>
            </section>

            <section className="h-screen">
                <ImageFrame src="/assets/bbq1.webp" />
            </section>
            <section className="h-screen bg-blue-400">world</section>
            <section className="h-screen bg-red-400">bye</section>
        </div>
    );
}
