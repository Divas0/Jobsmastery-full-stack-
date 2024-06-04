import React from 'react'
 
import { Button } from "@/components/ui/button";
import axios from 'axios';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loginApi} from '@/queries/api'
import { useMutation } from 'react-query'

const Login = () => {
  const navigate=useNavigate()
 
  const form = useForm({
    defaultValues: {
      username: "",
      password:""
    },})
//   })
 
//   const {mutate, data}=useMutation({
//     mutationFn: async(values)=> {
//  return await axios.post("http://localhost:3000/api/user/login", {
// username:values.username,

// password:values.password
//  }).then((res)=>console.log(res))
//     }
//   })
 
  
  function onSubmit(values) {
   console.log(values)
    
    
  }
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center '>
      <h1 className='text-2xl font-bold pb-[20px]'> Login </h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="" placeholder="username" {...field} />
              </FormControl>
              
           
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password"  placeholder="password" {...field} />
              </FormControl>
              
           
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>

        
      </form>
    </Form>
    <div> 
    <div className='pt-[5px]'> 
          <p> Not registered yet ... <span> <Link className='underline text-red-400'  to="/register"> register here </Link> </span></p>
        </div>
    </div>
    </div>
  )
}

export default Login