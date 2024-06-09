import {  ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ExploreSection = () => {
  return (
    <div className='w-full h-[400px] bg-[#FFFFFF]'>
        <div className='flex flex-col text-center '> <h1 className='font-semibold p-[30px] text-[26px]'>  Explore more Topics  </h1> <p> Ready to brush up on something new? We've got more to read right this way.</p></div>
   <div className='flex gap-[20px] pt-[20px] pb-[20px]'>
   <ExploreCard link={"instagram marketing"} route="/instagram"/>
   <ExploreCard link={"customer retention"} route="/customer" />
   <ExploreCard link={"email marketing"} route="/email"/>
     </div>

    </div>
  )
}

export default ExploreSection

const ExploreCard=({link, route})=>{
    return (
        <div className='h-[200px] w-[356px] pb-[70px]  '>
        <img src='../src/imgs/service.png'  />
        <Link to={`${route}`} className='flex justify-center underline text-blue-500'> {link} <span> <ChevronRight/></span></Link>

        </div>
    )
}