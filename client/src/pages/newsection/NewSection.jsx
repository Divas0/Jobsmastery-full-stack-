import React from "react";

const NewSection = () => {
  return (
    <div className="w-full h-auto bg-[#f6f9fc] px-[100px]">
      <div className="pt-[30px] pb-[50px]">
        <h1 className="text-[32px] text-center font-semibold">
          {" "}
          What’s new at Jobs Mastery
        </h1>
      </div>
      <div className="flex flex-col"> 
      <div className="flex w-full px-[50px] pt-[30px] gap-[10px]">
        <div className="w-[50%]">
          <video height={300} width={500} controls>
            <source src="https://assets.mixkit.co/videos/51947/51947-720.mp4" />
          </video>
        </div>
        <div className="w-[50%] ">
          <p className="text-wrap text-[32px] font-semibold pb-[50px]">
            {" "}
            Mastery Growing a business is hard. Your software shouldn't make it
            harder.
          </p>
          <p className="text-wrap text-dark-color text-[16px] pb-[30px]">
            {" "}
            With HubSpot's customer platform, your marketing, sales, and service
            teams can finally join forces. Increase quality leads, scale your
            customer service, and close more deals, all in one place.
          </p>
          <div className="flex justify-between">
            <a className="text-white "> Get demo</a>
            <a className="  font-semibold"> Learn more </a>
          </div>
        </div>
      </div>
      <div className="  pt-[50px] px-[50px] "> 
        <div className="flex  gap-[20px]"> 
        <img src="../src/imgs/slider.png"/>
        <div className="flex flex-col pt-[30px]">
          <p className="text-[32px] font-semibold pb-[50px]"> HubSpot welcomes Clearbit</p>
          <p className="text-wrap text-dark-color text-[16px] pb-[20px] "> There’s a new member of the HubSpot family — say hello to Clearbit.</p>
          <p className="text-wrap text-dark-color text-[16px]"> Identify your target market, gauge intent of your website visitors, and easily enrich contact and company data directly within HubSpot.

</p>
        </div>
     
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewSection;
