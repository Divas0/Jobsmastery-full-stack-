import React from 'react'

const ToolsCard = () => {
  return (
    <div className='h-[600px] w-[430px] bg-white  border border-gray-300 shadow-lg rounded-md'>
        <div className='flex flex-wrap gap-[40px] p-[80px]'> 
        <img className='w-[50px] hx]-[37px]' src='../src/imgs/gmail.png'/>
        <img className='w-[50px] h-[37px]' src='../src/imgs/shopify.png'/>
        <img className='w-[50px] h-[37px]' src='../src/imgs/mailchimp.png'/>
        <img className='w-[50px] h-[37px]' src='../src/imgs/zapier.png'/>
        <img className='w-[50px] h-[37px]' src='../src/imgs/google-ads.png'/>
        <img className='w-[50px] h-[37px]' src='../src/imgs/gmail.png'/>
      
            </div>
            <div className='px-[80px] text-center'> 
                <h1 className='text-[24px] font-semibold'> 1,500+ ways to connect your tools</h1>
            </div>
            <div className='pt-[30px] text-center'> 
                <a className='underline text-blue-700 font-semibold '> View All Apps </a>
            </div>

    </div>

  )
}

export default ToolsCard