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

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { toast } from "sonner";
import Loader from "../Loader/Loader";

const Register = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  const postData = async (values) => {
    return await fetch("http://localhost:3000/api/user/register", {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  };

  const { data, mutate, isLoading, error } = useMutation({
    mutationFn: (values) => postData(values),
    onSuccess: (data) => {
      if (data?.user?.id) {
        navigate("/login", {
          replace: true,
        });
        toast.success("succesfully registered");
        if (!data?.user) {
          toast.error(data?.message);
        }
      }
    },
  });
  if (isLoading) {
    return <Loader />;
  }
 

  function onSubmit(values) {
    mutate(values);
  }

  return (
    <>
      <div className="flex flex-col  h-screen w-full  items-center ">
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
                    <Input
                      minlength="4"
                      required
                      pattern="[A-Za-z0-9]+"
                      type="text"
                      placeholder="username.."
                      {...field}
                    />
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
                    <Input
                      required
                      pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                      type="email"
                      placeholder="email.."
                      {...field}
                    />
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
                    <Input
                      required
                      type="password"
                      placeholder="password.."
                      {...field}
                      minlength="6"
                    />
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
