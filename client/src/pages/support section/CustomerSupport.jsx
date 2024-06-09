import React from 'react'
import SupportCard from './SupportCard'

const CustomerSupport = () => {
  return (
    <div className='h-auto w-full bg-[#F6F9FC] px-[100px] pb-[50px]'>
        <div className='p-[20px]'> 
        <p className='text-[32px] font-semibold text-center '> Job Mastery is already easy to use. But we’re still here for you.</p>
<p className='text-[16px] text-dark-color text-center py-[10px]'> We’re here to help your whole team stay ahead of the curve as you grow.</p>
        </div>

        <div className='flex flex-wrap gap-[30px] px-[50px] '> 
        <SupportCard/>
        <SupportCard/>
        <SupportCard/>
        <SupportCard/>
        <SupportCard/>
        <SupportCard/>

        </div>

    </div>
  )
}

export default CustomerSupport