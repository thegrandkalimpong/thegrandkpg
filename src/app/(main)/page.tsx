"use client";
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
                className="flex h-screen w-full items-center justify-center bg-black bg-cover bg-center bg-no-repeat"
            >
                <h1 className="font-mageline relative z-30 text-center text-7xl font-bold text-white lg:text-8xl">
                    The Grand <br /> 
                    <span className="text-amber-100">

                    Kalimpong
                    </span>
                </h1>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                >
                    <source src="/hero.webm" type="video/webm" />
                    {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 z-10 bg-black/60"></div>
            </section>

            <section
                id="box"
                className="relative z-10 h-screen bg-white text-black"
            >
                <h2 className="pt-40 text-center text-5xl">Welcome to Box</h2>
            </section>

            <section className="h-screen bg-green-400">hello</section>
            <section className="h-screen bg-blue-400">world</section>
            <section className="h-screen bg-red-400">bye</section>
        </div>
    );
}
