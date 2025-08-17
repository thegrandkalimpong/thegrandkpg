"use client"
import { ChevronUpIcon } from 'lucide-react'
import React from 'react'

const ScrollToTop = () => {

    const onButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  return (
    <button onClick={onButtonClick} className='flex items-center justify-center fixed bottom-28 right-8 z-30 rounded-full bg-white overflow-hidden shadow-md p-1 size-[60px] hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out'>
        <ChevronUpIcon className='h-[36px] w-[36px] text-moss-light' />
    </button>
  )
}

export default ScrollToTop