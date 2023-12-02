"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import { Button } from "./ui/button";
import Image from "next/image";

const recommendationData = [
  {
    name: 'Shanghai Hotel',
    image: '/recommendation/hotel-1.png'
  },
]


const Recommendation = () => {
  return (
    <div>Recommendation</div>
  )
}

export default Recommendation