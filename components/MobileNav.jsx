'use client'

import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Nav from "./Nav"
import Image from "next/image"
import Link from "next/link"



const MobileNav = () => {
  
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white"/> 
      </SheetTrigger>
      <SheetContent side='left'>
        <div className='flex flex-col justify-between h-full p-12'>
          <Link href='/'>
            <Image 
              src='/footer/logo.svg'
              width={90}
              height={46}
              alt=''
              priority
            />
          </Link>
          <Nav 
            containerStyles='text-black'
            linkStyles='flex flex-col gap-y-6 text-xl'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav