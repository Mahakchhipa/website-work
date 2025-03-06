'use client'
import { useInView } from "react-intersection-observer";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import React from "react";

const ThemeCards = ({ headingpart1,headingpart2, paragraph, cards }) => {
  return (
    <div className="grid gap-[10px]  md:gap-6 p-[20px] lg:py-[40px] xl:px-[100px]">
      {" "}
      <div className="child-text text-center max-w-[1280px] mx-auto flex flex-col gap-[10px] md:gap-4">
        <h2>{headingpart1}
          <span className="text-[#0F53FF]">{headingpart2}</span>
        </h2>
        <p>{paragraph}</p>
      </div>{" "}
      <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 lg:gap-[64px]">
        {cards.map((card, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });
            
           
              const animateClass = inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10";
          return(
          <div ref={ref} key={index} className={`${card.cardbg} shadow-md  rounded-lg transform transition-all duration-700 ease-out ${animateClass}`}>
            <div className="flex flex-col gap-[10px] items-start w-full">
              <div className="flex justify-between w-full">
                {/* Dynamic icon */}
                <div className={`${card.iconbg} shadow-md  rounded-full p-4 ml-[33px] mt-6`}>
                  <CustomImage publicImage={card.icon} width="50px" />
                </div>
                <CustomImage
                  publicImage="/assets/icons/triangle-shape-icon.png"
                  width="140px"
                />
              </div>
              <div className="flex flex-col gap-[15px] page-text px-[33px] py-6">
                <h3 className="font-bold">{card.title}</h3>
                <p className="">{card.description}</p>
              </div>
            </div>
          </div>
          )
})}
      </div>
    </div>
  );
};

export default ThemeCards;
