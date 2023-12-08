"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css'
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Testimonials = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true
        }}
        loop
        speed={2000}
      >
        <SwiperSlide>
          Slide
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials