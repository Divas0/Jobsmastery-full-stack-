import React from 'react'

const AwardCard = () => {
  return (
    <div className='h-[600px] w-[430px] bg-white  border border-gray-300 rounded-md shadow-lg'>
    <div className='flex flex-wrap gap-[40px] p-[80px]'> 
    <img className='w-[50px] hx]-[37px]' src='../src/imgs/badge-leader.png'/>
    <img className='w-[50px] h-[37px]' src='../src/imgs/badge-leader.png'/>
    <img className='w-[50px] h-[37px]' src='../src/imgs/badge-leader.png'/>
    <img className='w-[50px] h-[37px]' src='../src/imgs/badge-leader.png'/>
    <img className='w-[50px] h-[37px]' src='../src/imgs/badge-leader.png'/>
    <img className='w-[50px] h-[37px]' src='../src/imgs/badge-leader.png'/>
  
        </div>
        <div className='px-[80px] text-center'> 
            <h1 className='text-[24px] font-semibold'> Voted #1 in 318 Categories</h1>
        </div>
        <div className='pt-[30px] text-center'> 
            <a className='underline text-blue-700 font-semibold '> Learn More </a>
        </div>

</div>

  )
}

export default AwardCard