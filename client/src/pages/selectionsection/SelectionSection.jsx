import React from 'react'
import SelectionCard from './SelectionCard'

const SelectionSection = () => {
  return (
    <div className='w-full h-auto px-[100px] py-[50px] '>
        <div className=''> 
            <p className='text-[24px] font-semibold'> Solutions for every business</p>
        </div>
        <div className='text-wrap text-dark-color pb-[10px] pt-[10px]'> 
            <p>Growing a business isn’t easy, but we’ve got your back. Explore some of our customers’ top business challenges and learn how HubSpot’s integrated software and solutions can help you leave these problems in the past. </p>
        </div>
        <div className='flex gap-[20px] pt-[10px]'> 
        <SelectionCard/>
        <SelectionCard/>
        <SelectionCard/>

            
        </div>

    </div>
  )
}

export default SelectionSection
