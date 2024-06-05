import React from 'react'
import ToolsCard from './ToolsCard'
import AwardCard from './AwardCard'

const AwardsSection = () => {
  return (
    <div className='h-screen flex justify-between  w-full bg-[#f6f9fc]  px-[150px] py-[50px]'>
        <ToolsCard/>
        <AwardCard/>


    </div>
  )
}

export default AwardsSection