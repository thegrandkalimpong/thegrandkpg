import Heading from "@/components/Heading";
import MapSection from "@/components/MapSection";
import Waterfall from "@/components/Waterfall";
import WelcomeSection from "@/components/WelcomeSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const metadata = {
    title: "Home",
    description:
        "Welcome to The Grand Kalimpong, your serene escape in the hills.",
    keywords:
        "hotel, Kalimpong, accommodation, cheap stay, family-friendly, BBQ, bonfire, budget, affordable, resort, sightseeing, local cuisine",
};

export default function Home() {
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
            <Waterfall />

            <MapSection />
        </div>
    );
}
