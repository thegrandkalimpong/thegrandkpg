import React from "react";
import ImageFrame from "./ImageFrame";
import Link from "next/link";

const WelcomeSection = () => {
    return (
        <>
            <h1 className="font-mageline text-moss-light mb-24 text-center text-6xl font-bold">
                About Us
            </h1>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
                <div className="order-1 md:order-0">
                    <h2 className="font-mageline text-moss mb-6 text-4xl font-semibold">
                        Greetings
                    </h2>
                    <p className="max-w-lg">
                        At The Grand Kalimpong, we believe every guest deserves
                        more than just a stay they deserve an experience to
                        remember. Nestled in the heart of Kalimpong, our
                        property blends timeless charm with modern comfort,
                        offering you a peaceful retreat surrounded by
                        breathtaking views. Whether you&apos;re here to unwind,
                        celebrate, or explore, our team is dedicated to
                        providing warm hospitality, personalized service, and
                        thoughtful touches that make you feel right at home.
                        From elegant rooms to locally inspired cuisine, every
                        detail has been crafted with care – so your time with us
                        is as relaxing as it is memorable.
                    </p>
                    <div className="mt-16">
                        <Link
                            href="/contact"
                            className="text-cream bg-moss-light hover:bg-moss px-6 py-4 text-lg font-bold transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="order-0 w-full md:order-1">
                    <ImageFrame
                        src={"/assets/room1.webp"}
                        alt="Welcome to The Grand Kalimpong"
                        className="h-96 w-full object-fill"
                    />
                </div>
            </div>
        </>
    );
};

export default WelcomeSection;
