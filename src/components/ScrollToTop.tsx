"use client"
import { ChevronUpIcon } from 'lucide-react'
import React from 'react'

const ScrollToTop = () => {

    const onButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  return (
    <button onClick={onButtonClick} className='flex items-center justify-center fixed bottom-40 right-8 z-30 rounded-full bg-cream overflow-hidden shadow-md p-1 size-[48px] hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out'>
        <ChevronUpIcon className='size-[32px] text-moss-light' strokeWidth={3} />
    </button>
  )
}

export default ScrollToTop