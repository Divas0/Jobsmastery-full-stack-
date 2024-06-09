import React from "react";

const WhatSection = () => {
  return (
    <div className="h-[440px] w-full bg-light-bg flex pt-[80px] px-[100px] ">
      <div className="w-full ">
      <div className="">
          <video height={400} width={600} controls>
            <source src="https://assets.mixkit.co/videos/51947/51947-720.mp4" />
          </video>
          </div>
      </div>

      <div className="flex flex-col gap-[10px] w-[50%] ml-[0px]">
        <h1 className="font-bold text-[32px]">What is Job Mastery?</h1>
        <p className="text-balance">
          {" "}
          Mastery is an AI-powered customer platform with all the software,
          integrations, and resources you need to connect your marketing, sales,
          and customer service. HubSpot's connected platform enables you to grow
          your business faster by focusing on what matters most: your customers.
          Get a demo to learn about our premium software, or get started with
          our full suite of free tools and upgrade as you grow.
        </p>
        <div className="pt-[10px] text-center">get started free</div>
      </div>
    </div>
  );
};

export default WhatSection;
