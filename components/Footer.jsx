"use client"

import Image from "next/image"
import Link from "next/link"
import Socials from "./Socials"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"




const Footer = () => {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <div>
          <div>
            
            {/* logo & text */}
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image 
                  src="/footer/logo.svg" 
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                />
              </Link>
              <p className="text-lg leading-9">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* navigation & contact */}
            <div className="flex xl:gap-x-16 xl:ml-32">
              {/* navigation */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Find Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+ 62 123 123981</li>
                  <li>info@hotely.com</li>
                  <li>hotely.com</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer