"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";



const recommendationData = [
  {
    name: 'Shanghai Hotel',
    image: '/recommendation/hotel-1.png',
    location: 'Shanghai, China',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    price: 40,
    testimonial: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
      personName: 'Robert Rene',
    }
  },
  {
    name: 'Peaks Lodge',
    image: '/recommendation/hotel-2.png',
    location: 'Aspen, USA',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    price: 50,
    testimonial: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
      personName: 'John Doe',
    }
  },
  {
    name: 'Tropical Oasis Resort',
    image: '/recommendation/hotel-3.png',
    location: 'Cancun, Mexico',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    price: 80,
    testimonial: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
      personName: 'Emily Jhonson',
    }
  },
  {
    name: 'Qbit Hotel',
    image: '/recommendation/hotel-1.png',
    location: 'Hong Kong, China',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    price: 120,
    testimonial: {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u',
      personName: 'Alice Smidcht',
    }
  },
]


const Recommendation = () => {
  return (
    <section>
      {/* slider */}
      <div>
        <Swiper>
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  {/* text */}
                  <div>
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-soft_green text-sm mb-6">{hotel.location}</p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <Button
                      variant='accent'
                      className='px-[44px]'
                    >
                      Book Now
                    </Button>
                    <div className="text-black">
                      <span>{hotel.price}</span>
                      <span>/Night</span>
                    </div>
                  </div>
                  {/* image & testimonial */}
                  <div>image & testimonial text</div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Recommendation