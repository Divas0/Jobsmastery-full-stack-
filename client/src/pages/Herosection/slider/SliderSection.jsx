import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SliderSection = () => {
  return (
    <div className="w-full h-screen  py-[30px] ">
      <div>
        <p className="text-[#212529] text-center font-semibold text-[16px]">
          {" "}
          216,000+ customers in over 135 countries grow their businesses with
          Jobs Mastery
        </p>
      </div>
      <div>
        <Carousel
          className="pt-[50px] px-[30px] w-full"
         
        >
          <CarouselContent className="flex justify-center items-center">
            <CarouselItem className="flex justify-center items-center">
              
              <img className="object-cover" src="../src/imgs/platform.png" />
              
              
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img className="object-cover" src="../src/imgs/platform.png" />
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <img className="object-cover" src="../src/imgs/support.png" />
            </CarouselItem>
            
          </CarouselContent>
          <CarouselPrevious  />
          <CarouselNext />
          
        </Carousel>
      </div>
    </div>
  );
};

export default SliderSection;
