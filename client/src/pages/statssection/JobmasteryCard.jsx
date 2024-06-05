import React from 'react'

const JobmasteryCard = ({first, second, third}) => {
  return (
   <div className='pb-[10px] border-b-[3px]'>
   <img  className='w-[180px] text-center h-[120px]' src='../src/imgs/logo.png'/>
   <div className='flex  flex-col justify-center items-center gap-[10px]  text-white '>
    <h6 className=''> {first}</h6>
    <h1 className='font-semibold text-[40px]'> {second}</h1>
    <p className=''> {third}</p>
    

   </div>

   </div>
  )
}

export default JobmasteryCard