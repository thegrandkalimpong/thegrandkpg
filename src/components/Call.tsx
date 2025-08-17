import { contact } from '@/data/data'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Call = () => {
  return (
    <Link href={`tel:${contact.whatsapp}`}
      prefetch={false}
      target='_blank'
      className='flex items-center justify-center fixed bottom-40 right-8 z-30 rounded-full bg-cream overflow-hidden shadow-md p-1 size-[48px] hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out'>
    <Phone className='h-6 w-6 text-moss' />
    </Link>
  )
}

export default Call