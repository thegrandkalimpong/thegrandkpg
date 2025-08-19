import React from "react";
import ImageFrame from "./ImageFrame";
import Link from "next/link";

const WelcomeSection = () => {
    return (
        <>
            <div className="mb-20 text-center">
                <p className="eyebrow mb-6">Discover Your Haven</p>
                <h1 className="heading-xl mb-8">About Us</h1>
                <div className="bg-moss mx-auto h-0.5 w-24"></div>
            </div>

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
                <div className="order-1 space-y-8 lg:order-0">
                    <div>
                        <h2 className="font-md mb-8 text-left">
                            Greetings from the Hills
                        </h2>
                        <div className="bg-moss-light mb-8 h-0.5 w-16"></div>
                    </div>

                    <div className="space-y-6">
                        <p className="lede">
                            At The Grand Kalimpong, we believe every guest
                            deserves more than just a stay — they deserve an
                            experience to remember.
                        </p>
                        <p className="copy max-w-2xl">
                            Nestled in the heart of Kalimpong, our property
                            blends timeless charm with modern comfort, offering
                            you a peaceful retreat surrounded by breathtaking
                            views. Whether you&apos;re here to unwind,
                            celebrate, or explore, our team is dedicated to
                            providing warm hospitality, personalized service,
                            and thoughtful touches that make you feel right at
                            home.
                        </p>
                    </div>

                    <div className="">
                        <Link
                            href="/contact"
                            className="btn-primary group inline-flex items-center text-xl"
                        >
                            Contact Us
                            <svg
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="order-0 w-full lg:order-1">
                    <ImageFrame
                        src={"/aboutUs.jpg"}
                        alt="Welcome to The Grand Kalimpong"
                        className="h-96 w-full object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default WelcomeSection;
