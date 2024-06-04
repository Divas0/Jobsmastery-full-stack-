import React from "react";
import WeeklyCard from "./cards/WeeklyCard";
import Chatbot from "./cards/Chatbot";
import Aibot from "./cards/Aibot";
import ContactCard from "./cards/ContactCard";

const HeroPlatform = () => {
  return (
    <>
      <div className="w-full h-full bg-[#FCEBD7]">
        <div className="flex justify-center items-center pt-[40px]">
          <img src="../src/imgs/homepage.png" className="" alt="" />
        </div>
        <div className="flex ">
          <div className="w-[50%] pl-[130px] pr-[30px]">
            <h3 className="text-[16px]">JOB MASTERY CUSTOMER PLATFORM</h3>
            <h1 className="text-[54px] flex flex-col ">
              Grow better with <span>Hubspot </span>{" "}
            </h1>
            <p className="flex flex-wrap flex-col text-[#212529] ">
              Software that's powerful, not overpowering. Seamlessly connect{" "}
              <span>
                your data, teams, and customers on one AI-powered customer
              </span>{" "}
              <span> platform that grows with your business. </span>{" "}
            </p>
            <div className="flex justify-between text-[20px] pt-[20px] pb-[20px] cursor-pointer">
              <div className="text-white ">
                <a href="#">Get a demo</a>
              </div>
              <div className="">
                <a href="#">Get started free</a>
              </div>
            </div>

            <p className="py-[20px]">
              Get a demo of our premium software, or get started with free
              tools.
            </p>
          </div>

          <div className=" flex flex-col justify-center ">
            <div className="flex justify-center gap-[5px] pl-[30px] ">
              <div className=" ">
                <WeeklyCard />
              </div>
              <div>
                <Chatbot />
              </div>
            </div>

            <div className=" flex justify-center gap-[5px] ">
              <div>
                <Aibot />
              </div>
              <div>
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPlatform;
