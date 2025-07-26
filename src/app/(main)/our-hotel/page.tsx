"use client";

import { amenities } from "@/data/amenities";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <section>
            <h1 className="font-mageline text-moss flex justify-center text-6xl font-bold">
                Our Hotel
            </h1>
            <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2">
                <h2 className="font-mageline text-moss-light w-full text-left text-5xl font-semibold">
                    Amenities
                </h2>
                <p className="place-self-end">
                    Nestled in the peaceful hills of Kalimpong, The Grand
                    Kalimpong is your home away from home. Whether you&apos;re
                    here to unwind in nature or explore the charming town, our
                    cosy 5-room hotel promises a relaxing and memorable stay.
                </p>
            </div>

            <div className="text-cream mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
                {amenities.map((amenity, idx) => (
                    <div key={idx} className="bg-moss-light gap-4 p-8 sm:p-6">
                        <amenity.Icon className="mx-auto mb-4 h-8 w-8 sm:mx-0" />
                        <h4 className="text-center text-lg font-medium sm:text-left">
                            {amenity.title}
                        </h4>
                        <p className="text-cream/70 text-center text-sm font-semibold capitalize sm:text-left">
                            {amenity.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2">
                <p className="place-self-end">
                    At The Grand Kalimpong, evenings are made extra special with
                    our outdoor BBQ experience. Whether you&apos;re traveling
                    with friends, family, or your special someone, you can enjoy
                    freshly grilled delights surrounded by mountain air and
                    starlit skies.
                </p>
                <h2 className="font-mageline text-moss-light w-full text-right text-5xl font-semibold">
                    BBQ & Bonfire
                </h2>
            </div>

            {/* Curved Image Gallery - BrandLyft Style */}
            <div className="relative mx-auto mt-16 mb-20 max-w-7xl px-4">
                <div className="relative flex min-h-[400px] items-center justify-center">
                    {/* Left Image */}
                    <div className="absolute top-8 left-0 z-10 rotate-[-8deg] transform transition-transform duration-300 hover:rotate-[-2deg]">
                        <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                            <Image
                                src="/assets/bbq1.jpg"
                                alt="BBQ Experience at The Grand Kalimpong"
                                width={320}
                                height={600}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Center Image (Main) */}
                    <div className="relative z-20 transform transition-transform duration-300 hover:scale-105">
                        <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                            <Image
                                src="/assets/bbq2.webp"
                                alt="Bonfire Night at The Grand Kalimpong"
                                width={300}
                                height={250}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="absolute top-8 right-0 z-10 rotate-[8deg] transform transition-transform duration-300 hover:rotate-[2deg]">
                        <div className="relative overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                            <Image
                                src="/assets/bbq3.webp"
                                alt="Mountain BBQ Setting"
                                width={280}
                                height={380}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-1/4 rotate-12 transform opacity-0 lg:opacity-100">
                    <div className="text-moss-light font-handwriting text-2xl">
                        Perfect for
                        <br />
                        <span className="text-moss font-bold">families!</span>
                    </div>
                    <svg
                        className="text-moss-light ml-8 h-12 w-16"
                        viewBox="0 0 64 48"
                        fill="currentColor"
                    >
                        <path
                            d="M2 46c20-30 40-30 60 0"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M58 42l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-4 left-1/4 -rotate-6 transform">
                    <div className="text-moss font-handwriting text-lg">
                        It&apos;s delicious!
                    </div>
                    <svg
                        className="text-moss -mt-2 -ml-2 h-8 w-12"
                        viewBox="0 0 48 32"
                        fill="currentColor"
                    >
                        <path
                            d="M2 2c15 20 25 20 40 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                        <path
                            d="M38 1l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                .font-handwriting {
                    font-family: "Caveat", cursive;
                }
            `}</style>
        </section>
    );
};

export default page;
