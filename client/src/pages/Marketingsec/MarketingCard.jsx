import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Check } from 'lucide-react'
  

const MarketingCard = () => {
  return (
    <Card  className="w-[356px] h-[526px] bg-white hover:bg-[#cbd6dc] px-[50px]  transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 duration-300">
    <CardHeader>
      <CardTitle className="pb-[30px]"><h1> Marketing Hub</h1></CardTitle>
      <CardDescription className="pb-[50px] ">
          <p> AI-powered marketing software that helps you generate leads and automate marketing.</p>
      </CardDescription>
    </CardHeader>
    <CardContent >
      <div className='w-full bg-hover-color h-[2px]'> </div>
      <p className='py-[10px]'> popular features </p>
      
          <ul className='flex gap-[4px]'> 
         <span><Check  className='text-green-800'/> </span> <p> AI-powered lead generation </p>
          </ul>
          <ul className='flex gap-[4px]'> 
         <span><Check  className='text-green-800' /> </span> <p> Marketing automation </p>
          </ul>
          <ul className='flex gap-[4px]'> 
         <span><Check   className='text-green-800'/> </span> <p> Analytics</p>
          </ul>
      
    </CardContent>
    <CardFooter className="p-[12px] flex  justify-center items-center text-white">
      <a className='text-center'> Learn more </a>
    </CardFooter>
  </Card>
  )
}

export default MarketingCard