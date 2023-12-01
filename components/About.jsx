'use client'

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Button } from "./ui/button"
import { useMediaQuery } from "react-responsive"
import Stats from "./Stats"



const About = () => {
  return (
    <section >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* img */}
          <div>
            <Image 
              src={'/about/img2.png'}
              width={559}
              height={721}
              alt=''
            />
          </div>
          {/* text */}
          <div>
            <h2 className="h2 mb-[38px]">About Hotely</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {/* stats */}
            <div className="bg-pink my-5 xl:my-10 min-h-[35px]">
              <Stats />
            </div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <Button
              variant='accent'
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About