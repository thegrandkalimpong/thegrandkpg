import React from "react";
import { Star } from "lucide-react";
import { ITestimonial, testimonials } from "@/data/testimonials";

// Card Component
const TestimonialCard = ({
    testimonial,
    className = "",
}: {
    testimonial: ITestimonial;
    className?: string;
}) => {
    return (
        <div
            className={`bg-cream/60 flex flex-col justify-between rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
        >
            <div>
                {/* Stars */}
                <div className="mb-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                    ))}
                </div>

                {/* Content */}
                <blockquote className="mb-6 leading-relaxed text-gray-700 text-sm">
                    {testimonial.content}
                </blockquote>
            </div>
            <div>
                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 aspect-square items-center justify-center rounded-full bg-gradient-to-br from-moss-light to-moss-dark font-semibold text-white">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">
                            {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {testimonial.via}{" "}
                            {testimonial.country
                                ? `• ${testimonial.country}`
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Bento Grid (hard-coded)
const BentoTestimonials = () => {
    return (
        <section className="via-moss-light/40 bg-gradient-to-br from-gray-50 to-gray-50 px-4 py-20">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold">
                        What Our Guests Are Saying
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-gray-600">
                        Discover why travelers from around the world choose us
                        for unforgettable experiences
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Big centerpiece testimonial */}
                    <TestimonialCard
                        testimonial={testimonials[2]} // Albert
                        className="lg:col-span-1 lg:row-span-3"
                    />

                    {/* Two medium cards */}
                    <TestimonialCard
                        testimonial={testimonials[0]} // Jonathan
                        className="lg:col-span-2"
                    />
                    <TestimonialCard
                        testimonial={testimonials[3]} // Priyanshu
                        className="lg:col-span-1 lg:row-span-3"
                    />
                    <TestimonialCard
                        testimonial={testimonials[5]} // Dhana
                        className="lg:col-span-2"
                    />

                    {/* Small cards */}
                    <TestimonialCard
                        testimonial={testimonials[1]} // Nupur
                        className="lg:col-span-2"
                    />

                    {/* Wide short testimonial */}

                    {/* Final large card */}
                    <TestimonialCard
                        testimonial={testimonials[6]} // Oishika
                        className="lg:col-span-2"
                    />
                    <TestimonialCard
                        testimonial={testimonials[4]} // Rajarshi
                        className="lg:col-span-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoTestimonials;
