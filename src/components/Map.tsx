"use client";
import Image from "next/image";
import React from "react";

const Map = () => {
    return (
        <Image
            src={"/map.webp"}
            width={500}
            height={350}
            alt={"Map"}
            className="border-moss/30 mx-auto basis-1/2 cursor-pointer rounded border-4 object-cover object-center"
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
