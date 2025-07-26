import { amenities } from '@/data/amenities'
import React from 'react'

const page = () => {
  return (
    <section>
      <h1 className='font-mageline text-6xl font-bold text-moss flex justify-center'>Our Hotel</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-24  max-w-6xl mx-auto'>
        <h2 className='font-mageline text-5xl text-moss-light text-left w-full'>Amenities</h2>
        <p className='place-self-end'>
          Nestled in the peaceful hills of Kalimpong, The Grand Kalimpong is your home away from home. Whether you&apos;re here to unwind in nature or explore the charming town, our cosy 5-room hotel promises a relaxing and memorable stay.
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

    </section>
  )
}

export default page
