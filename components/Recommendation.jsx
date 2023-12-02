"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import { Button } from "./ui/button";
import Image from "next/image";

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
    <div>Recommendation</div>
  )
}

export default Recommendation