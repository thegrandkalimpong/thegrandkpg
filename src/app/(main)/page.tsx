"use client";
import Carousel3D from "@/components/Carousel";
import Fashionslider from "@/components/FashionSlider";
import Heading from "@/components/Heading";
import ImageFrame from "@/components/ImageFrame";
import MapSection from "@/components/MapSection";
import WelcomeSection from "@/components/WelcomeSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    // useGSAP(() => {
    //     ScrollTrigger.create({
    //         trigger: "#home",
    //         start: "top top",
    //         end: "bottom top",
    //         pin: true,
    //         pinSpacing: false,
    //     });
    // });

    return (
        <div className="relative">
            {/* <Fashionslider /> */}
            <section id="home" className="relative -top-24 px-0 flex items-center justify-center left-0 z-50 min-h-screen w-full">
                <Heading />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 -z-10 h-full w-full object-cover"
                >
                    <source src="/hero.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 -z-10 mx-auto h-full w-full bg-black/60"></div>
            </section>
            {/* <section></section> */}
            <section

            >
                <WelcomeSection />
                {/* <h2 className="pt-40 text-center text-5xl">Welcome to Box</h2> */}
            </section>
            {/* 
            <section className="h-screen">
                <ImageFrame src="/assets/bbq1.webp" />
            </section> */}
            {/* <section className="h-screen bg-blue-400">world</section> */}

            <MapSection />

        </div>
    );
}
