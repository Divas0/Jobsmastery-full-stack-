import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import { Hand, Bot } from 'lucide-react';

const Aibot = () => {
  return (
    <>
    <Card>
  <CardHeader>
    <CardTitle>
        <div className='flex  items-center'> 
            <div> 
            <Bot className='fill-white bg-blue-600 rounded-full h-[50px] w-[60px]' />
            </div>
  <h1 > AI chatbot </h1>
        </div>
        
    </CardTitle>
 
  </CardHeader>
  <CardContent>
   <div> 
    <span> <Hand /> </span> <h1 className='flex flex-col'>  Want to chat? I'm an AI chatbot  <span> here to help you find your way. </span></h1> 
   </div>
  </CardContent>
  
</Card>
</>
  )
}

export default Aibot