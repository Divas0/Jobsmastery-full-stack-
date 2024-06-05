import React from 'react'
import JobmasteryCard from './JobmasteryCard'
import LinksCard from './LinksCard'

const StatSection = () => {
  return (
    <div className='h-screen  px-[100px] pb-[100px] w-full bg-[#192733]'>
        <div className='flex pt-[50px]'> 
        <div className='w-[50%] pt-[100px]'> 
            <p className='text-wrap text-white text-[52px] '> Powerful solutions that users adopt easily, use powerfully, and love deeply</p>

        </div>
        <div className='flex justify-around  flex-wrap'>
            <div className='flex gap-[100px]'> 
            <div> <JobmasteryCard first={"Blog"} second={"10M +"} third="monthly visits"/></div>
            
            <div> <JobmasteryCard first={"Academy"} second={"459K +"} third="certified professionals"/> </div> 

            </div>
            <div className='flex gap-[100px]'>  <div className='pt-[60px]'> <LinksCard/> </div>
            
            <div> <JobmasteryCard first={"2023 event"} second={"11K +"} third="registered attendees"/> </div> 
</div>
        
            
        </div>
        </div>

    </div>
  )
}

export default StatSection