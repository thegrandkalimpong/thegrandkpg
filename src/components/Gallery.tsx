"use client";
import ImageFrame from "@/components/ImageFrame";
import { roomImages } from "@/data/room";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const filters = ["all", "food", "room", "bbq", "view", "garden", "hotel"];

const GalleryImage = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [filteredImages, setFilteredImages] = useState(roomImages);
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredImages(roomImages);
        } else {
            setFilteredImages(
                roomImages.filter((item) => item.category === selectedFilter),
            );
        }
    }, [selectedFilter]);

    const openLightbox = (image: any, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setCurrentIndex(0);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(filteredImages[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex =
            currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedImage(filteredImages[prevIndex]);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!selectedImage) return;

            if (e.key === "Escape") {
                closeLightbox();
            } else if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                prevImage();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedImage, currentIndex, filteredImages]);

    return (
        <section className="max-w-7xl">
            <h1 className="">Gallery</h1>
            <p className="mx-auto mb-16 max-w-2xl text-center">
                Step inside and explore the beauty of{" "}
                <strong>The Grand Kalimpong</strong>. From cozy rooms and lush
                gardens to breathtaking views and mouthwatering cuisine, every
                image captures a moment worth remembering.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`mb-2 px-4 py-2 align-middle text-sm font-semibold tracking-widest uppercase transition-colors ${
                            selectedFilter === filter
                                ? "bg-moss-light text-cream"
                                : "hover:bg-greenish bg-cream hover:text-white"
                        }`}
                        onClick={() => setSelectedFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                {filteredImages.map((item, index) => {
                    return (
                        <div
                            key={item.id || Math.random()}
                            className="gallery-image cursor-pointer transition-transform"
                            onClick={() => openLightbox(item, index)}
                        >
                            <ImageFrame
                                src={item.src}
                                alt={item.id}
                                height={400}
                                width={400}
                                imageClassName="w-full aspect-square object-cover"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-60 text-white transition-colors hover:text-gray-300"
                        aria-label="Close lightbox"
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Previous button */}
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 z-60 -translate-y-1/2 text-white transition-colors hover:text-gray-300"
                        aria-label="Previous image"
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    {/* Next button */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 z-60 -translate-y-1/2 text-white transition-colors hover:text-gray-300"
                        aria-label="Next image"
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Main image */}
                    <div className="relative max-h-[90vh] max-w-[90vw]">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.id || "Gallery image"}
                            width={700}
                            height={700}
                            className="max-h-full max-w-full object-contain"
                            priority
                        />

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                            {currentIndex + 1} / {filteredImages.length}
                        </div>
                    </div>

                    {/* Click outside to close */}
                    <div
                        className="absolute inset-0 -z-10"
                        onClick={closeLightbox}
                    ></div>
                </div>
            )}
        </section>
    );
};

export default GalleryImage;
