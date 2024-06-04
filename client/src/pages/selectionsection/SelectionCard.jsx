import React from 'react'

const SelectionCard = () => {
  return (
    <div className='h-[588px] w-[356px] p-[50px] border border-gray-400  '>
        <div className=' pb-[30px] '> 
            <img  src=" ../src/imgs/platform.png" className='h-[200px] w-full object-cover'/>
        </div>
        <div> 
            <p className='text-wrap text-[24px] font-semibold'> Drive revenue with high-quality leads</p>
        </div>
        <div className='pt-[30px]'> 
            <p className='text-wrap text-dark-color '>Find out how companies like yours seamlessly attract qualified leads, convert them into customers, and drive revenue.

</p>
        </div>

    </div>
  )
}

export default SelectionCard