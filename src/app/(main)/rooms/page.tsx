import ImageFrame from "@/components/ImageFrame";
import { roomData } from "@/data/data";
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

            <p className="mx-auto mt-6 max-w-xl text-center">
                We provides only the high-quality services.Pick a room and enjoy
                the best vacation of your life.
            </p>
        {
            roomData.map((room, idx) =>{
                return <RoomCard key={idx} src={room.src} alt={room.title} title={room.title} description={room.description} amenities={room.amenities} />
            })
        }
        </section>
    );
};

const RoomCard = ({
    src,
    alt,
    title,
    description,
    amenities
}: {
    src: string;
    alt: string;
    title: string;
    description: string;
    amenities: string[];
}) => {
    return (
        <div className="relative mx-auto mt-24 max-w-5xl">
            <div className="border-moss-light/50 my-8 border-y-4 py-4">
                <h3 className="my-8 text-4xl">{title}</h3>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="relative max-h-[28rem] md:col-span-2">
                    <ImageFrame
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="room-features-container h-full">
                    {
                        amenities.map((amenity, idx) => (
                            <div className="room-features" key={idx}>
                                <p className="title">{amenity}</p>
                            </div>
                        ))
                    }
                    {/* <div className="room-features">
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
                    </div> */}
                </div>
            </div>
            <div className="my-8">
                <p className="mb-10 text-lg opacity-90">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default RoomsPage;
