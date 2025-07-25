"use client";
import ImageFrame from "@/components/ImageFrame";
import { roomImages } from "@/data/room";
import React, { useEffect, useState } from "react";

const filters = ["all", "food", "room", "bbq", "view", "garden", "hotel"];

const GalleryImage = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>("all");
    const [filteredImages, setFilteredImages] = useState(roomImages);

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredImages(roomImages);
        } else {
            setFilteredImages(
                roomImages.filter((item) => item.category === selectedFilter),
            );
        }
    }, [selectedFilter]);
    return (
        <section>
            <h1 className="font-mageline text-greenish mb-4 text-center text-5xl font-bold">
                Gallery
            </h1>
            <p className="mx-auto mb-16 max-w-2xl text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                itaque laboriosam aliquam voluptatem mollitia dolore quidem
                nesciunt molestias laudantium totam fugit quis ipsa velit.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={`mb-2 px-4 py-2 align-middle text-sm tracking-wide uppercase transition-colors ${
                            selectedFilter === filter
                                ? "bg-greenish text-white"
                                : "hover:bg-greenish bg-cream text-black hover:text-white"
                        }`}
                        onClick={() => setSelectedFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredImages.map((item) => {
                    return (
                        <div key={Math.random()} className="gallery-image">
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
        </section>
    );
};

export default GalleryImage;
