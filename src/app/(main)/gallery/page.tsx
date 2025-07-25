import ImageFrame from "@/components/ImageFrame";
import { roomImages } from "@/data/room";
import React, { useState } from "react";

const GalleryImage = () => {
    const [selectedFilter, setSelectedFilter] = useState();
    return (
        <section>
            <h1 className="font-mageline font-bold text-5xl text-center mb-4 text-greenish">Gallery</h1>
            <p className="mb-16 max-w-2xl mx-auto text-center  ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, itaque laboriosam aliquam voluptatem mollitia dolore quidem nesciunt molestias laudantium totam fugit quis ipsa velit ea nihil quibusdam ipsam inventore autem temporibus dicta vero rem libero. </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {roomImages.map((item) => {
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
