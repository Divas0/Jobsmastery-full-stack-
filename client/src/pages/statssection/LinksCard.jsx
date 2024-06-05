import { Facebook, Instagram, Linkedin, Music2, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const LinksCard = () => {
  return (
    
    <div className='flex flex-col  pb-[10px]  text-white h-[150px] w-[200px] gap-[10px] justify-center items-center'> 
    <div className='flex gap-[10px] '> 
    <a> <Youtube /> </a>
    <a><Facebook/> </a>
    <a> <Linkedin /> </a>
    </div>
    <div className='flex gap-[10px]'> 
    <a> <Music2 /> </a>
    <a><Instagram /></a>
    <a> <Twitter/> </a>

    </div>
    <h1 className='font-semibold text-[40px] py-[20px]'> 3.1M +</h1>
    <p> social followers</p>

    </div>
    
  )
}

export default LinksCard