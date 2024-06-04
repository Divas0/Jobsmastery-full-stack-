import React from 'react'

const ProductSpotlightSection = () => {
  return (
    <div  className='w-full h-[220px] bg-[#B7ECEC] flex '>
     <div> 
     <div className='pl-[100px] pr-[80px] pt-[50px] pb-[30px] text-[24px] font-semibold'> 
            <p className=''> Product spotlight: Discover the new Service Hub</p>
        </div>
        <div className='pl-[100px] flex justify-between  gap-[40px]'> 
           
       <p className='flex flex-col text-[16px]'> Your most valuable customers are often the ones you already have. Introducing the all-new Service <span> Hub: Scale support, drive retention, and increase customer value — all in one place.</span></p>
       
       < div className='flex justify-center items-center'> 
            <a> Learn more </a>
        </div> 
         </div>

        
     </div>

    </div>
  )
}

export default ProductSpotlightSection