import ImageFrame from '@/components/ImageFrame'
import React from 'react'

const page = () => {
    return (
        <section>
            <h1 className='font-mageline text-6xl font-bold text-moss flex justify-center'>Rooms</h1>
            <p className='text-center max-w-xl mx-auto mt-4'>We provides only the high-quality services.Pick a room and enjoy the best vacation of your life.</p>

            {/* Room 1 */}
            <div className='mt-12 max-w-4xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4'>
                    <div className='relative  sm:col-span-2  sm:row-span-2 ' >
                        <ImageFrame
                            src={'/assets/room4.webp'}
                            alt='Standard Room at The Grand Kalimpong'

                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='relative sm:col-span-1 row-span-1 hidden sm:block' >

                        <ImageFrame
                            src={'/assets/room5.webp'}
                            alt='Standard Room at The Grand Kalimpong'

                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='relative  sm:col-span-1  sm:row-span-1 hidden sm:block' >

                        <ImageFrame
                            src={'/assets/room6.jpg'}
                            alt='Standard Room at The Grand Kalimpong'
                            className='object-cover h-full w-full '
                        />
                    </div>
                </div>
                {/* <div className='w-full h-96 bg-moss-light/80 mb-8'></div> */}
                <div className='mt-8'>
                    <h2 className='text-3xl font-bold text-moss-light mb-8'>Standard Room</h2>
                    <p className='text-lg opacity-90 mb-10'>Our Standard Rooms offer a cozy retreat, perfect for solo travelers or couples looking to unwind after a day of exploring Kalimpong. Each room is thoughtfully designed with warm colors and comfortable furnishings to create a welcoming atmosphere along with balcony. Size: Approximately 200 sq. ft. Equipped with King size bed, dressed in high-quality linens for a restful night&apos;s sleep.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t-2 border-moss-light/40 border-b-2 '>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Rooms</p>
                        <p className='font-semibold'>6 Rooms</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Living area</p>
                        <p className='font-semibold'>200 m<sup>2</sup></p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Balcony view</p>
                        <p className='font-semibold'>Mountain view from Balcony</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Price per visitor per night</p>
                        <p className='font-semibold'>2000 Rs</p>
                    </div>
                </div>
            </div>

            {/* Room 2 */}
            <div className='mt-18 max-w-4xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4'>
                    <div className='relative  sm:col-span-2  sm:row-span-2' >

                        <ImageFrame
                            src={'/assets/room7.webp'}
                            alt='Standard Room at The Grand Kalimpong'

                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='relative sm:col-span-1 row-span-1 hidden sm:block' >

                        <ImageFrame
                            src={'/assets/room9.webp'}
                            alt='Standard Room at The Grand Kalimpong'

                            className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='relative sm:col-span-1 row-span-1 hidden sm:block' >

                        <ImageFrame
                            src={'/assets/room10.webp'}
                            alt='Standard Room at The Grand Kalimpong'
                            className='object-cover w-full h-full'
                        />
                    </div>



                </div>
                <div className='mt-8'>
                    <h2 className='text-3xl font-bold text-moss-light mb-8'>Deluxe Room</h2>
                    <p className='text-lg opacity-90 mb-10'>Our Deluxe Rooms offer a cozy retreat, perfect for solo travelers or couples looking to unwind after a day of exploring Kalimpong. Each room is thoughtfully designed with warm colors and comfortable furnishings to create a welcoming atmosphere along with balcony. Size: Approximately 220 sq. ft. Equipped with King size bed, dressed in high-quality linens for a restful night&apos;s sleep along with amenities.</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t-2 border-moss-light/40 border-b-2 '>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Rooms</p>
                        <p className='font-semibold'>4 Rooms</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Living area</p>
                        <p className='font-semibold'>220 m<sup>2</sup></p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Balcony view</p>
                        <p className='font-semibold'>Mountain view from Balcony</p>
                    </div>
                    <div className='py-6'>
                        <p className='text-moss-light text-sm'>Price per visitor per night</p>
                        <p className='font-semibold'>2500 Rs</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default page
