"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const ImageFrame = ({
    src,
    alt = "Image",
    width,
    height,
    className = "",
    imageClassName = "",
}: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    imageClassName?: string;
}) => {
    const frameRef = React.useRef<HTMLSpanElement>(null);
    const imageRef = React.useRef<HTMLImageElement>(null);
    useGSAP(() => {
        // GSAP animations can be added here if needed
    }, []);
    const onMouseEnter = () => {
        if (!frameRef.current) return;
        gsap.to(frameRef.current, {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            duration: 0.5,
            ease: "power2.out",
        });
        gsap.to(imageRef.current, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
        });
    };
    const onMouseLeave = () => {
        if (!frameRef.current) return;
        gsap.to(frameRef.current, {
            top: "1.25rem",
            left: "1.25rem",
            right: "1.25rem",
            bottom: "1.25rem",
            duration: 0.5,
            ease: "power2.out",
        });
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
        });
    };
    return (
        <div
            className={`${!height && !width && "aspect-square w-80"} relative overflow-hidden ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {width && height ? (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    ref={imageRef}
                    className={imageClassName}
                    loading="lazy"
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    ref={imageRef}
                    fill
                    className="object-cover shadow-lg"
                />
            )}
            {/* <Image
                src={src}
                alt={alt}
                ref={imageRef}
                
                fill
                className="object-cover shadow-lg"
            /> */}
            <span
                ref={frameRef}
                className="border-cream/30 absolute inset-5 border-2"
            ></span>
        </div>
    );
};

export default ImageFrame;
