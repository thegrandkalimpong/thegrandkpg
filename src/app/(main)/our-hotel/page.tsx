'use client'

import { amenities } from '@/data/amenities'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section>
      <h1 className='font-mageline text-6xl font-bold text-moss flex justify-center'>Our Hotel</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-24  max-w-6xl mx-auto'>
        <h2 className='font-mageline text-5xl text-moss-light text-left w-full'>Amenities</h2>
        <p className='place-self-end'>
          Nestled in the peaceful hills of Kalimpong, The Grand Kalimpong is your home away from home. Whether you&apos;re here to unwind in nature or explore the charming town, our cosy 5-room hotel promises a relaxing and memorable stay.
        </p>
      </div>

      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-cream max-w-6xl mx-auto mt-24 '>
        {amenities.map((amenity, idx) => (
          <div key={idx} className='bg-moss-light gap-4 p-8 sm:p-6'>
            <amenity.Icon className='w-8 h-8 mb-4 mx-auto sm:mx-0' />
            <h4 className='text-lg font-medium text-center sm:text-left'>
              {amenity.title}
            </h4>
            <p className='text-sm font-semibold text-cream/70 capitalize text-center sm:text-left'>
              {amenity.description}
            </p>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-24 max-w-6xl mx-auto'>
        <p className='place-self-end'>
          At The Grand Kalimpong, evenings are made extra special with our outdoor BBQ experience. Whether you&apos;re traveling with friends, family, or your special someone, you can enjoy freshly grilled delights surrounded by mountain air and starlit skies.
        </p>
        <h2 className='font-mageline text-5xl text-moss-light text-right w-full'>BBQ & Bonfire</h2>
      </div>

      {/* Curved Image Gallery - BrandLyft Style */}
      <div className='relative max-w-7xl mx-auto px-4 mt-16 mb-20'>
        <div className='relative flex justify-center items-center min-h-[400px]'>
          {/* Left Image */}
          <div className='absolute left-0 top-8 transform rotate-[-8deg] hover:rotate-[-2deg] transition-transform duration-300 z-10'>
            <div className='relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white'>
              <Image
                src='/assets/bbq1.jpg'
                alt='BBQ Experience at The Grand Kalimpong'
                width={320}
                height={600}
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Center Image (Main) */}
          <div className='relative z-20 transform hover:scale-105 transition-transform duration-300'>
            <div className='relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white'>
              <Image
                src='/assets/bbq2.webp'
                alt='Bonfire Night at The Grand Kalimpong'
                width={300}
                height={250}
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Right Image */}
          <div className='absolute right-0 top-8 transform rotate-[8deg] hover:rotate-[2deg] transition-transform duration-300 z-10'>
            <div className='relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white'>
              <Image
                src='/assets/bbq3.webp'
                alt='Mountain BBQ Setting'
                width={280}
                height={380}
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute opacity-0 lg:opacity-100 top-0 right-1/4 transform rotate-12'>
          <div className='text-moss-light font-handwriting text-2xl'>
            Perfect for
            <br />
            <span className='text-moss font-bold'>families!</span>
          </div>
          <svg className='w-16 h-12 text-moss-light ml-8' viewBox="0 0 64 48" fill="currentColor">
            <path d="M2 46c20-30 40-30 60 0" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M58 42l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className='absolute bottom-4 left-1/4 transform -rotate-6'>
          <div className='text-moss font-handwriting text-lg'>
            It&apos;s delicious!
          </div>
          <svg className='w-12 h-8 text-moss -mt-2 -ml-2' viewBox="0 0 48 32" fill="currentColor">
            <path d="M2 2c15 20 25 20 40 5" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M38 1l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
      `}</style>
    </section>
  )
}

export default page