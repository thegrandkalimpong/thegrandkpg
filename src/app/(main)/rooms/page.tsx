import ImageFrame from "@/components/ImageFrame";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "Rooms",
};

const RoomsPage = () => {
    return (
        <section className="relative">
            <h1 className="font-mageline text-moss flex justify-center text-6xl font-bold">
                Rooms
            </h1>
            {/* cute stuff */}
            {/* <div className="text-moss-light absolute left-1/19 hidden rotate-24 md:top-1/4 md:block">
                <p className="font-handwriting">happy holidays</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4 w-18"
                />
            </div> */}
            {/* <div className="text-moss-light absolute top-160 right-1/13 -rotate-26 md:top-179">
                <p className="font-handwriting">It&apos;s Delightful</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4"
                />
            </div>
            <div className="text-moss-light absolute top-3/4 left-1/12 hidden -rotate-12 md:block">
                <p className="font-handwriting">some text</p>
                <Image
                    unoptimized
                    src="/arrow.svg"
                    alt=""
                    height={50}
                    width={50}
                    className="relative bottom-2 mx-auto mt-4"
                />
            </div> */}
            <p className="mx-auto mt-6 max-w-xl text-center">
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
        <div className="relative mx-auto mt-24 max-w-5xl">
            <div className="border-moss-light/50 my-8 border-y-4 py-4">
                <h3 className="my-8 text-4xl">Deluxe Room</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="relative max-h-[28rem] md:col-span-2">
                    {/* <p className="font-handwriting absolute top-3/4 right-12 z-10 size-12 w-48 -rotate-12 text-center text-lg font-medium tracking-widest text-white">
                        warm & comfy
                        <img
                            src="/wave.svg"
                            alt="Wave"
                            className="ml-2 inline-block stroke-white"
                        />
                    </p> */}
                    <ImageFrame
                        src={"/assets/room7.webp"}
                        alt="Standard Room at The Grand Kalimpong"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="room-features-container h-full">
                    <div className="room-features">
                        <p className="title">Rooms</p>
                        <p className="description">4 Rooms</p>
                    </div>
                    <div className="room-features">
                        <p className="title">Living area</p>
                        <p className="description">
                            220 m<sup>2</sup>
                        </p>
                    </div>
                    <div className="room-features">
                        <p className="title">Balcony view</p>
                        <p className="description">
                            Mountain view from Balcony
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-8">
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
        </div>
    );
};

export default RoomsPage;
