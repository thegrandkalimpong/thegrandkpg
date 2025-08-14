import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { contact } from '@/data/data';

const WhatsApp = () => {
  return (
    <Link href={`https://wa.me/${contact.whatsapp}`}
      prefetch={false}
      target='_blank'
      className='flex items-center justify-center fixed bottom-8 right-8 z-30 rounded-full bg-white overflow-hidden shadow-md p-1 size-[60px] hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out'>
      <Image unoptimized height={50} width={50} className='h-[48px] w-[48px]' src="/whatsapp.gif" alt="" />
    </Link>
  )
}

export default WhatsApp