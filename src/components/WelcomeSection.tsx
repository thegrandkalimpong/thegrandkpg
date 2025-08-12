import React from 'react'
import ImageFrame from './ImageFrame'
import Link from 'next/link'

const WelcomeSection = () => {
    return (
        <>
            <h1 className='text-center text-6xl font-mageline text-moss-light font-bold mb-24'>About Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-black max-w-6xl mx-auto">
                <div className='order-1 md:order-0  '>
                    <h2 className='text-4xl font-mageline text-moss-dark mb-6'>Greetings</h2>
                    <p className='max-w-lg '> At The Grand Kalimpong, we believe every guest deserves more than just a stay they deserve an experience to remember. Nestled in the heart of Kalimpong, our
                        property blends timeless charm with modern comfort, offering you a peaceful retreat
                        surrounded by breathtaking views.
                        Whether you&apos;re here to unwind, celebrate, or explore, our team is dedicated to
                        providing warm hospitality, personalized service, and thoughtful touches that make
                        you feel right at home.
                        From elegant rooms to locally inspired cuisine, every detail has been crafted with
                        care – so your time with us is as relaxing as it is memorable.

                    </p>
                    <div className='mt-16'>
                        <Link
                            href='/contact'
                            className='text-lg font-bold text-cream bg-moss-light px-6 py-4 hover:bg-moss-dark transition-colors duration-300'
                        >
                            Contact Us
                        </Link>
                    </div>

                </div>
                <div className='order-0 md:order-1 w-full'>
                    <ImageFrame
                        src={'/assets/room1.webp'}
                        alt='Welcome to The Grand Kalimpong'
                        className='object-fill w-full h-96'
                    />
                </div>
            </div>
        </>
    )
}

export default WelcomeSection
