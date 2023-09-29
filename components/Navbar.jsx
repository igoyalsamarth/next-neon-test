'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Suspense } from 'react'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='flex sticky top-0 justify-center border-b-2 border-[#e9e9e9] bg-[#ffffff] drop-shadow-md z-[100]'>
      <Suspense fallback={
        <div className='flex py-8 justify-center items-center w-[900px] md:w-[700px] sm:w-[95vw] sm:flex-col sm:gap-[15px] sm:py-4'>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-zinc-900" />
          </div>
        </div>
      }>
        <div className='flex py-8 justify-between items-center w-[900px] md:w-[700px] sm:w-[95vw] sm:flex-col sm:gap-[15px] sm:py-4'>
          <Image src='/next.svg' alt='' height={70} width={80} />
          <div className='flex gap-12 items-center text-sm font-extrabold sm:gap-[40px]'>
            <ul className='flex gap-6 tracking-[3px] list-none pl-0 sm:gap-3 sm:tracking-[0px]'>
              <Link href='/' className={`${pathname === '/' ? 'text-gray-400' : 'text-black'}`}>HOME</Link>
              <Link href='/blog' className={`${pathname.indexOf('/blog') > -1 ? 'text-gray-400' : 'text-black'}`}>BLOG</Link>
              <Link href='/about' className={`${pathname.indexOf('/about') > -1 ? 'text-gray-400' : 'text-black'}`}>ABOUT</Link>
            </ul>
            <Link href='/contact' className='py-3 px-5 rounded-full bg-[#2325bf] text-white'>LET'S TALK</Link>
          </div>
        </div>
      </Suspense>
    </header>
  )
}
