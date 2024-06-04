import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { ChevronDown, ChevronUp } from 'lucide-react'
  
const WeeklyCard = () => {
  return (
   <>
         <Card className=" text-dark-color">
  <CardHeader>
    <CardTitle className="underline text-[#18px] text-center font-semibold  divide-solid divide-x-2  ">Your Weekly Activity </CardTitle>
   
  </CardHeader>
  <CardContent>
    <div className='flex gap-[8px]'> 
    <div className='flex flex-col gap-[5px]'> 
    <h1> EMAILS</h1>
    <h1 className='text-3xl text-[#427bd6]'> 17</h1>
    <p className='flex '> <ChevronUp/> <span> 4</span> </p>

    </div>
    <div className='flex flex-col gap-[5px]'> 
    <h1> CALLS</h1>
    <h1 className='text-3xl text-[#427bd6]'> 17</h1>
    <p className='flex'> <ChevronUp/> <span> 4</span></p>

    </div>
    <div className='flex flex-col gap-[5px]'> 
    <h1> MEETING</h1>
    <h1 className='text-3xl text-[#427bd6]'> 17</h1>
    <p className='flex '> <ChevronUp/>  <span> 2 </span> </p>

    </div>

    </div>
  </CardContent>
  
</Card>
   </>
  )
}

export default WeeklyCard