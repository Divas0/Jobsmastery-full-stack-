import { BriefcaseBusiness, ChevronLeft, Dot, Mail, Pencil, Phone, Printer } from 'lucide-react'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const ContactCard = () => {
  return (
    <>
    <Card>
  <CardHeader>
    <CardTitle className='flex justify-between '>
        <div className='flex text-blue-500  justify-between text-[14px]'> 
        <ChevronLeft/>
        <h3> Contacts</h3>
        </div>
        <div className='flex '> 
            <h1 className='flex  text-[14px]'> Actions <span> <Dot /></span></h1>
        </div>
    </CardTitle>
  
  </CardHeader>
  <CardContent className='flex gap-[10px]  '>
  
  <div className=''> 
    <img  className=' rounded-full w-[60px[ h-[50px]'src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600'/>
  </div>
  <div> 
<h1 className=''> Aisha shah</h1>
  </div>
  
  </CardContent>
  <CardFooter>
    <div> 
    <ul className='flex gap-[2px] pb-0'>
                                        <li><a href="#"> <Pencil className=" bg-blue-700 fill-white rounded-full w-[30px] h-[25px]" /></a></li>
                                        <li><a href="#"> <Mail  className=" bg-blue-700 fill-white rounded-fullw-[30px] h-[25px]" /></a></li>
                                        <li><a href="#"> <Phone  className=" bg-blue-700 fill-white rounded-full w-[30px] h-[25px]" /></a></li>
                                        <li><a href="#"> <Printer  className=" bg-blue-700 fill-white rounded-full w-[30px] h-[25px]" /></a></li>
                                        <li><a href="#"> <BriefcaseBusiness className=" bg-blue-700 fill-white rounded-full w-[30px] h-[25px]"  /></a></li>
                                        <li><a href="#">...</a></li>
                                        </ul>
    </div>
  </CardFooter>
</Card>

    </>
  )
}

export default ContactCard