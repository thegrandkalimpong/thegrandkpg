import React from "react";
import ImageFrame from "./ImageFrame";

const Waterfall = () => {
    return (
        <section className="text-cream grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-4">
            <div className="bg-moss-light order-2 aspect-square w-full md:order-none md:row-span-3">
                <ImageFrame
                    src="/assets/food1.webp"
                    className="h-full w-full"
                />
            </div>
            <div className="bg-moss-light font-handwriting relative order-1 flex w-full items-center justify-center p-4 md:order-none md:flex">
                Where every flavor tells a story
                <span className="border-cream absolute inset-3 border-2" />
            </div>
            <div className="bg-moss-light aspect-square w-full md:order-none md:row-span-3">
                <ImageFrame
                    src="/assets/balcony2.webp"
                    className="h-full w-full"
                />
            </div>
            {/* <div className="w-full bg-moss-light">k</div> */}
            <div className="bg-moss-light order-4 aspect-square h-full w-full md:order-none md:row-span-3">
                <ImageFrame
                    src="/assets/view9.webp"
                    className="h-full w-full"
                />
            </div>
            <div className="bg-moss-light/95 font-handwriting relative order-3 flex w-full items-center justify-center p-4 md:order-none md:flex">
                Wake up to views worth remembering
                <span className="border-cream absolute inset-3 border-2" />
            </div>
            <div className="bg-moss-light/95 font-handwriting relative order-4 flex w-full items-center justify-center p-4 md:order-none md:flex">
                Hospitality that feels like home
                <span className="border-cream absolute inset-3 border-2" />
            </div>
        </section>
    );
};

export default Waterfall;
