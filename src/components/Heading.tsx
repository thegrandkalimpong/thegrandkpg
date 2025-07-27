"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const Heading = () => {
    const heading = React.useRef<HTMLHeadingElement>(null);
    useGSAP(() => {

        const splitHeading = SplitText.create(heading.current, {
            type: 'chars',
        });

        gsap.from(splitHeading.chars, {
            duration: 1,
            delay: 0.75,
            y: -60,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.05,
        })
    })

    return (
        <div>
            <h1
                ref={heading}
                className="text-white text-7xl md:text-9xl font-mageline font-bold tracking-wider ">
                <span className='text-shadow-sm text-shadow-amber-500'>
                    The Grand
                </span>
                <br /> 

                <span className='text-shadow-sm text-shadow-red-400'>
                    Kalimpong
                </span>
            </h1>
            <h2 className='text-white/70 uppercase font-roboto tracking-[15px] text-center mt-12'>Your Holiday destination</h2>

        </div>

    )
}

export default Heading
