"use client";
import Image from "next/image";
import React from "react";

const Map = () => {
    return (
        <Image
            src={"/map.webp"}
            width={600}
            height={400}
            alt={"Map"}
            className="basis-1/2 cursor-pointer rounded-sm border-4 border-white shadow-2xl"
            priority
            onClick={() => {
                window.open(
                    "https://maps.app.goo.gl/F2u52nL8ANCnFB7h9",
                    "_blank",
                );
            }}
        />
    );
};

export default Map;
