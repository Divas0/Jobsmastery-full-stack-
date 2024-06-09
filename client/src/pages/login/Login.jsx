import React from "react";

import { Button } from "@/components/ui/button";
import axios from "axios";
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
import { loginApi } from "@/queries/api";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import { toast } from "sonner";
import Loader from "../Loader/Loader";

const Login = ({ sendData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const postData = async (values) => {
    return await fetch("http://localhost:3000/api/user/login", {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const {
    data: LoginData,
    mutate,
    isLoading,
    error
  } = useMutation({
    mutationFn: (values) => postData(values),
    onSuccess: (data) => {
      
      const userData={ 
        email:data?.user?.email,
        password:data?.user?.password,
        username:data?.user?.username
      }
      if (data.jwtToken) {
        dispatch(login(userData));
        navigate("/")
        toast.success('login successful')
      } else {
        toast.error(data?.message)
      }
     
    

    
    },
  });

  if (isLoading) {
    return <Loader/>
  }
  if (error){
    return toast.error(error?.message)
  }

  function onSubmit(values) {
    mutate(values);
  }
  return (
    <div className="flex flex-col w-full h-screen items-center ">
      <h1 className="text-2xl font-bold pb-[20px] pt-[20px]"> Login </h1>
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
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div>
        <div className="pt-[5px]">
          <p>
            {" "}
            Not registered yet ...{" "}
            <span>
              {" "}
              <Link className="underline text-red-400" to="/register">
                {" "}
                register here{" "}
              </Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
