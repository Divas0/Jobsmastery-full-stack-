import React from "react";

const WhatSection = () => {
  return (
    <div className="h-[440px] w-full bg-light-bg flex gap-[10px] pt-[50px] pl-[50px] ">
      <div className="w-full ">
        <video height={150} width={300} controls>
          <source
            src="https://videos.pexels.com/video-files/20770858/20770858-hd_1080_1920_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="flex flex-col gap-[10px]">
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
