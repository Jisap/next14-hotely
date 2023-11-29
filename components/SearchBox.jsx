'use client'

import { MapPin } from "lucide-react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import DatePicker from "./DatePicker"
import GuestSelect from "./GuestSelect"





const SearchBox = () => {
  return (
    <div>
      {/* input, calendar, date picker */}
      <div>
        {/* label */}
        <Label htmlFor='destination'>Where are you going ?</Label>
        {/* input & icon */}
        <div className="relative flex items-center mb-[20px]">
          <Input id='destination' placeholder='Try "Singapore"' />
          <MapPin size={24} className="absolute right-6 text-black" />
        </div>
        {/* date pickers */}
        <div>
          {/* check in */}
          <div>
            <Label>Check in</Label>
            <DatePicker />
          </div>
          {/* check out */}
          <div>
            <Label>Check out</Label>
            <DatePicker />
          </div>
        </div>
      </div>

      {/* select, checkbox, btn */}
        <div>
          {/* select */}
          <Label>Guests</Label>
          <GuestSelect />
        </div>
    </div>
  )
}

export default SearchBox