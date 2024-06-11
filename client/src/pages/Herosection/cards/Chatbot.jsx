import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Zap } from 'lucide-react';

const Chatbot = () => {
  return (
    <>
    <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex gap-[3px] justify-center items-center">
          <div> 
          <Zap className='bg-blue-700 fill-white w-[50px] h-[90px] rounded-full' />
          </div>
          <div className='font-semibold text-[18px] '> 
              <p className='flex  flex-col flex-wrap text-dark-color'> Repurpose yout content<span>  with   content remix </span></p>
          </div>
      </CardTitle>
     
    </CardHeader>
    <CardContent>
      <div> 
          <p className='bg-red-700 rounded-md text-white   text-center w-[120px]'> hubspot Ai</p>
      </div>
    </CardContent>
   
  </Card>
  
    </>
  )
}

export default Chatbot