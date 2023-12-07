"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"


const hotelData =  [
  {
    image: '/find/hotel-1.png',
    name: 'Hotel De Luna',
    location: 'Singapore'
  },
  {
    image: '/find/hotel-2.png',
    name: 'Ina Tretes Hotel',
    location: 'Singapore'
  },
  {
    image: '/find/hotel-3.png',
    name: 'Delight Hotel',
    location: 'Singapore'
  },
  {
    image: '/find/hotel-4.png',
    name: 'Mercusuar Hotel',
    location: 'Singapore'
  },
]

const Find = () => {
  return (
    <section className="py-12 xl:py-36">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2 className="h2 mb-6">Find your best hotel</h2>
          <p className="max-w-[638px] mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <div>
            <Button
              variant='accent'
              className='px-12 mb-14 xl:mb-28'
            >
              View All
            </Button>
          </div>
        </div>
        {/* hotel grid */}
        <div className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]">
          {hotelData.map((hotel, index) =>  {
            return (
              <div 
                key={index} 
                className="border-2 border-outline w-[270px] h-[390px] rounded-xl overflow-hidden hover:cursor-pointer
                group hover:bg-soft_green transition-all duration-700 mx-auto xl:mx-0"
              >
                <Image 
                  src={hotel.image}
                  width={270}
                  height={270}
                  alt=""
                />
                <div className="p-6">
                  <h4>{hotel.name}</h4>
                  <p>{hotel.location}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Find