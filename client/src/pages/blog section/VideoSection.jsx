import { Clock } from 'lucide-react'
import React from 'react'

const VideoSection = () => {
  return (
    <div className='h-auto w-full bg-[#fef4ea] py-[50px]'>
        <div className='flex justify-center items-center '> 
            <h1 className='text-[32px] font-semibold'> from Job mastery video library</h1>

        </div>
        <Video/>
        <Video/>
        <Video/>
        <Video/>
        <Video/>

        
    </div>
  )
}

export default VideoSection

const Video=()=>{
    return ( <>
        <div className='pt-[20px] pb-[20px]'> 
            <img className='' src='../src/imgs/thumbnail.png'/> 
            <p> How to Start Affiliate Marketing With No Experience or Money (4 Free Tools!)</p>
        </div>
        <div className='flex justify-between items-center pt-[10px]'> 
            <p className='flex gap-[3px]'> <Clock/> <span> thirteen minutes watch </span></p>
            <p> 1/16/24</p>
        </div>
        </>


    )
}