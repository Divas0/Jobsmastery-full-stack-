import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate()
    const form = useForm({
      defaultValues: {
        username: "",
        password:"",
        email:""
      },
    })
   
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <>
      <div className="flex flex-col  h-screen w-full justify-center items-center ">
        <h1 className="text-2xl font-bold pb-[10px]"> Register </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="" placeholder="username.." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
              <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input  placeholder="email.." {...field} />
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
                    <Input type="password" placeholder="password.." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

          
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Register;
