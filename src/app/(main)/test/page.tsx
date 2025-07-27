"use client";
import Slider from "@/components/Carousel";
import React from "react";

const TestPage = () => {
    return (
        <div className="min-h-[200vh]">
            {" "}
            <main className="mx-auto max-w-[90rem] px-6 py-12 text-center">
                <Slider />
            </main>
        </div>
    );
};

const GridChild = ({ className }: { className?: string }) => {
    return (
        <div className={`bg-red-500 ${className}`}>
            <main className="mx-auto max-w-[75rem] px-6 py-12 text-center">
                <h1 className="mb-8 text-4xl font-semibold text-[#ececff]">
                    Image Slider using GSAP
                </h1>
                <Slider />
            </main>
        </div>
    );
};

export default TestPage;
