import { roomImages } from "@/data/room";
import React from "react";

const GalleryImage = () => {
    return (
        <section>
            {roomImages.map((item) => {
                return (
                    <div key={Math.random()} className="gallery-image">
                        <img
                            src={item.src}
                            alt={item.id}
                            className="h-auto w-full"
                        />
                    </div>
                );
            })}
        </section>
    );
};

export default GalleryImage;
