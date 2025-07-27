"use client";
import Carousel3D from "@/components/Carousel";
import Fashionslider from "@/components/FashionSlider";
import ImageFrame from "@/components/ImageFrame";
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
        <div className="">
            <Fashionslider />
            <section id="home" className="absolute top-0 min-h-screen w-full">
                {/* <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 -z-10 h-[85vh] w-[90%] object-cover"
                >
                    <source src="/hero.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 z-10 mx-auto h-[85vh] w-[90%] bg-black/60"></div> */}
            </section>
            <section></section>
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
