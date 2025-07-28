"use client";
import Heading from "@/components/Heading";
import ImageFrame from "@/components/ImageFrame";
import MapSection from "@/components/MapSection";
import WelcomeSection from "@/components/WelcomeSection";
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
            <section
                id="home"
                className="relative -top-24 left-0 z-50 flex min-h-screen w-full items-center justify-center px-0"
            >
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
            <section>
                <WelcomeSection />
            </section>
            <h2 className="font-mageline text-moss-light mt-20 mb-10 text-center text-5xl font-bold">
                Your Comfort, Our Priority
            </h2>
            <section className="text-cream grid max-w-6xl grid-cols-1 grid-rows-4 gap-4 md:grid-cols-3">
                <div className="bg-moss-light row-span-3 aspect-square w-full">
                    <ImageFrame
                        src="/assets/food1.webp"
                        className="h-full w-full"
                    />
                </div>
                <div className="bg-moss-light font-handwriting flex w-full items-center justify-center p-4 md:flex">
                    some text
                </div>
                <div className="bg-moss-light row-span-3 aspect-square w-full">
                    <ImageFrame
                        src="/assets/balcony2.webp"
                        className="h-full w-full"
                    />
                </div>
                {/* <div className="w-full bg-moss-light">k</div> */}
                <div className="bg-moss-light row-span-3 aspect-square w-full">
                    <ImageFrame
                        src="/assets/view9.webp"
                        className="h-full w-full"
                    />
                </div>
                <div className="bg-moss-light font-handwriting flex w-full items-center justify-center p-4 md:flex">
                    some text
                </div>
                <div className="bg-moss-light font-handwriting flex w-full items-center justify-center p-4 md:flex">
                    some text
                </div>
            </section>
            <section className="bg-moss-light text-cream mx-auto mt-44 min-h-[70vh] max-w-6xl">
                hi
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
