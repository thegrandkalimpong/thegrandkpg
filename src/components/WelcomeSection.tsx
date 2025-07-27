import React from 'react'
import ImageFrame from './ImageFrame'
import Link from 'next/link'

const WelcomeSection = () => {
    return (
        <>
            <h1 className='text-center text-6xl font-mageline text-moss-light font-bold mb-24'>The Grand Kalimpong</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-black max-w-6xl mx-auto"> 
                <div className='order-1 md:order-0  '>
                    <h2 className='text-4xl font-mageline text-moss-dark mb-6'>Hello Ji</h2>
                    <p className='max-w-lg '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate officiis mollitia iste! Eveniet nihil expedita iure quisquam dolorum suscipit sint consectetur, doloremque dolor perferendis adipisci minus cumque quae! Odit, fugit.
                        
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
                <div className='order-0 md:order-1'>
                    <ImageFrame
                        src={'/assets/room1.webp'}
                        alt='Welcome to The Grand Kalimpong'
                        height={400}
                        width={600}
                        className='object-fill'
                    />
                </div>
            </div>
        </>
    )
}

export default WelcomeSection
