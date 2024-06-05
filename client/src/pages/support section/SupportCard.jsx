import React from 'react'
import { Link } from 'react-router-dom'

const SupportCard = () => {
  return (
    <div className='w-[300px] h-[300px] border border-gray-100  bg-white text-center rounded-md shadow-md' >
        <img  className="w-full h-[150px] py-[10px]" src='../src/imgs/platform.png'/> 
        <Link className='underline text-blue-600 text-wrap font-semibold ' to={`/customersupport`}> 24/7 customer support </Link>
        <h1 className='text-dark-color text-[14px] text- pt-[20px]'> Get help by calling, chatting with, or emailing our customer support team.</h1>
    </div>
  )
}

export default SupportCard