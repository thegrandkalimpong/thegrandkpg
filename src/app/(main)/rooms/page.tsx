import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section>
            <h1 className='font-mageline text-6xl font-bold text-moss flex justify-center'>Rooms</h1>
            <p className='text-center max-w-xl mx-auto mt-4'>We provides only the high-quality services.Pick a room and enjoy the best vacation of your life.</p>

            {/* Room 1 */}
            <div className='mt-12 max-w-5xl mx-auto'>
                <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                    <div className='relative col-span-2 row-span-2 bg-amber-300 h-104 ' >

                        <Image
                            src={'/assets/room1.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover '
                        />
                    </div>
                    <div className='relative col-span-1 row-span-1 bg-amber-300' >

                        <Image
                            src={'/assets/room5.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover mb-8   w-full'
                        />
                    </div>
                    <div className='relative col-span-1 row-span-1 bg-amber-300' >

                        <Image
                            src={'/assets/room5.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover mb-8   w-full'
                        />
                    </div>
                </div>
                {/* <div className='w-full h-96 bg-moss-light/80 mb-8'></div> */}
                <div className='mt-8'>
                    <h2 className='text-3xl font-bold text-moss-light'>Standard Room</h2>
                    <p className='text-lg opacity-90 mb-10'>Description of Room 1</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t-2 border-moss-light/40 border-b-2 '>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Rooms</p>
                        <p className='font-semibold'>6 Rooms</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Living area</p>
                        <p className='font-semibold'>140 m<sup>2</sup></p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Balcony view</p>
                        <p className='font-semibold'>Mountain view from Balcony</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Price per visitor per night</p>
                        <p className='font-semibold'>1200Rs</p>
                    </div>
                </div>
            </div>

            {/* Room 2 */}
            <div className='mt-12 max-w-5xl mx-auto'>
                <div className='grid grid-cols-3 grid-rows-2 gap-4'>
                    <div className='relative col-span-2 row-span-2 bg-amber-300 h-104 ' >

                        <Image
                            src={'/assets/room1.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover '
                        />
                    </div>
                    <div className='relative col-span-1 row-span-1 bg-amber-300' >

                        <Image
                            src={'/assets/room5.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover mb-8   w-full'
                        />
                    </div>
                    <div className='relative col-span-1 row-span-1 bg-amber-300' >

                        <Image
                            src={'/assets/room5.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            fill
                            className='object-cover mb-8   w-full'
                        />
                    </div>



                </div> 
                <div className='mt-8'>
                    <h2 className='text-3xl font-bold text-moss-light'>Deluxe Room</h2>
                    <p className='text-lg opacity-90 mb-10'>Description of Room 2</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t-2 border-moss-light/40 border-b-2 '>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Rooms</p>
                        <p className='font-semibold'>4 Rooms</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Living area</p>
                        <p className='font-semibold'>190 m<sup>2</sup></p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Balcony view</p>
                        <p className='font-semibold'>Mountain view from Balcony</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Price per visitor per night</p>
                        <p className='font-semibold'>2400Rs</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default page
