import ImageFrame from "@/components/ImageFrame";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <section className="relative">
            <h1 className="font-mageline text-moss flex justify-center text-6xl font-bold">
                Rooms
            </h1>
            {/* cute stuff */}
            <div className="text-moss-light absolute top-1/4 left-1/12 -rotate-12">
                <p className="font-handwriting">happy holidays</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4"
                />
            </div>
            <div className="text-moss-light absolute top-2/4 right-1/12 -rotate-12">
                <p className="font-handwriting">some text</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4"
                />
            </div>
            <div className="text-moss-light absolute top-3/4 left-1/12 -rotate-12">
                <p className="font-handwriting">some text</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4"
                />
            </div>
            <p className="mx-auto mt-4 max-w-xl text-center">
                We provides only the high-quality services.Pick a room and enjoy
                the best vacation of your life.
            </p>

            <RoomCard />
            <RoomCard />
        </section>
    );
};

const RoomCard = ({
    src,
    alt,
    title,
    description,
}: {
    src?: string;
    alt?: string;
    title?: string;
    description?: string;
}) => {
    return (
        <div className="relative mx-auto mt-18 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
                <div className="relative max-h-[28rem] md:col-span-2 md:row-span-2">
                    <p className="font-handwriting absolute top-3/4 right-12 z-10 size-12 w-48 -rotate-12 text-center text-lg font-medium tracking-widest text-white">
                        warm & comfy
                        <img
                            src="/wave.svg"
                            alt="Wave"
                            className="ml-2 inline-block stroke-white"
                        />
                    </p>
                    <ImageFrame
                        src={"/assets/room7.webp"}
                        alt="Standard Room at The Grand Kalimpong"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative row-span-1 hidden max-h-[13.5rem] md:col-span-1 md:block">
                    <ImageFrame
                        src={"/assets/room9.webp"}
                        alt="Standard Room at The Grand Kalimpong"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative row-span-1 hidden max-h-[13.5rem] md:col-span-1 md:block">
                    <ImageFrame
                        src={"/assets/room10.webp"}
                        alt="Standard Room at The Grand Kalimpong"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-moss-light mb-8 text-3xl font-bold">
                    Deluxe Room
                </h2>
                <p className="mb-10 text-lg opacity-90">
                    Our Deluxe Rooms offer a cozy retreat, perfect for solo
                    travelers or couples looking to unwind after a day of
                    exploring Kalimpong. Each room is thoughtfully designed with
                    warm colors and comfortable furnishings to create a
                    welcoming atmosphere along with balcony. Size: Approximately
                    220 sq. ft. Equipped with King size bed, dressed in
                    high-quality linens for a restful night&apos;s sleep
                    along with amenities.
                </p>
            </div>

            <div className="border-moss-light/40 grid grid-cols-2 gap-4 border-t-2 border-b-2 text-center md:grid-cols-4">
                <div className="py-6">
                    <p className="text-moss-light text-sm">Rooms</p>
                    <p className="font-semibold">4 Rooms</p>
                </div>
                <div className="py-6">
                    <p className="text-moss-light text-sm">Living area</p>
                    <p className="font-semibold">
                        220 m<sup>2</sup>
                    </p>
                </div>
                <div className="py-6">
                    <p className="text-moss-light text-sm">Balcony view</p>
                    <p className="font-semibold">Mountain view from Balcony</p>
                </div>
                <div className="py-6">
                    <p className="text-moss-light text-sm">
                        Price per visitor per night
                    </p>
                    <p className="font-semibold">2500 Rs</p>
                </div>
            </div>
        </div>
    );
};

export default page;
