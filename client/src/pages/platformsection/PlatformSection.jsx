import React from 'react'

const PlatformSection = () => {
  return (
    <div className='h-screen w-full bg-[#FCEBD7]  px-[100px] pt-[50px] '>
        <div className='flex justify-center items-center'> 
            <img src='../src/imgs/platform.png'/>
        </div>
        <div> 
        <p className='text-center  text-[32px] font-semibold pb-[30px] pt-[40px] '> Your whole front office. One customer platform. </p>
       
        </div>
        <div> 
            <p className='text-wrap text-[16px] text-dark-color'> HubSpot brings your marketing, sales, and service teams together on the same AI-powered customer platform. It's easy to use, provides value fast, and gives all teams a unified view of the customer at every stage in their journey. 
                Each product in the platform is powerful on its own, but the real magic happens when you use them together.</p>
        </div>
        <div className="flex justify-between text-[20px] pt-[20px] pb-[20px] cursor-pointer">
              <div className="text-white ">
                <a href="#">Get a demo</a>
              </div>
              <div className="">
                <a href="#">Get started free</a>
              </div>
            </div>


    </div>
  )
}

export default PlatformSection