"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
// import "./slider.css";

const images = [
    "/assets/room1.webp",
    "/assets/room2.webp",
    "/assets/room3.webp",
    "/assets/room4.webp",
    "/assets/room5.webp",
    "/assets/room6.jpg",
    "/assets/room7.webp",
    "/assets/room9.webp",
    "/assets/room10.webp",
    "/assets/room11.webp",
];

export default function Slider() {
    return (
        <div className="slider relative">
            <Swiper
                loop={true}
                grabCursor={true}
                slidesPerView={5}
                spaceBetween={20}
                speed={800}
                autoplay={{ delay: 1500 }}
                centeredSlides={true}
                modules={[Autoplay, EffectCoverflow]}
                className="swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <Image
                            src={img}
                            alt={`Room ${index + 1}`}
                            width={500}
                            height={300}
                            className="snapper h-full w-full rounded-3xl object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
