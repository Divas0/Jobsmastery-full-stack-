import React from 'react'

const Footer = () => {
  return (
    <div className='h-[446px] w-full bg-white flex  '>
        <div className=' w-[50%] flex flex-col items-center justify-center '> 
        <h1> Grow better with Job Mastery today</h1>
        <div className='flex justify-center items-center pt-[30px]'> 
            <a className='text-white font-semibold'> Get demo</a>
            <a className='font-semibold'> Get started free</a>
        </div>


        </div>
        <div className='w-[50%]'> 
            <img  className="w-[300px] h-[300px] flex justify-center items-center " src='../src/imgs/cta.png'/>

        </div>

    </div>
  )
}

export default Footer