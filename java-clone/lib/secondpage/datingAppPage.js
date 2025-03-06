"use client";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import Datepage from "@/lib/secondpage/dateapp";
import { useState } from "react";
import "./Datingapp.css";
const content = [
  {
    icon: "/assets/icons/users-icon.svg",
    head: "370 Million Users By 2027",
    bgColor: "bg-[#EF9396]",
    width: "30px",
    hoverParagraph:
      "Global dating app users are projected to reach 370 million by 2027, showcasing a rapidly expanding market.",
  },
  {
    icon: "/assets/icons/dollar-icon.svg",
    head: "3.241 Billion Dollar in 2024",
    bgColor: "bg-[#ECC16E]",
    width: "20px",
    hoverParagraph:
      "The online dating segment revenue is expected to show an annual growth rate (CAGR 2021-2024) of 9.3%, resulting in a market volume of US$3.241 billion by 2024.",
  },
  {
    icon: "/assets/icons/engagement-icon.svg",
    head: "Engagement Spike",
    bgColor: "bg-[#AEB4FA]",
    width: "30px",
    hoverParagraph:
      "Average daily usage of top dating apps has surged by 20% in recent years, indicating higher user engagement and retention.",
  },
  {
    icon: "/assets/icons/diverse-audience-icon.svg",
    head: "Diverse Audience",
    bgColor: "bg-[#FFCA8D]",
    width: "30px",
    hoverParagraph:
      "Over 40% of online daters are now over the age of 34, highlighting the broadening appeal and diversification of the dating app user base.",
  },
];

const IconUi = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-2 gap-4 w-full hidden md:grid mt-4">
        {content.map((text, index) => (
          <div     key={index}  className="page-text grid grid-cols-2 gap-4 items-center w-full">
            <div
          
              className="flex flex-col items-center lg:text-start text-center gap-4 p-4 bg-[#F3F3FA] shadow-2xl rounded-[5px] "
            >
              <div
                className={`p-3 w-12 h-12 rounded-[5px] ${text.bgColor} flex items-center justify-center`}
              >
                <CustomImage
                  publicImage={text.icon}
                  width="30px"
                  height="30px"
                />
              </div>
              <h3 className=" text-center font-normal">
                {text.head}
              </h3>
            </div>
            {/* Tooltip */}
            <div className="md:flex hidden">
              <p className="">
                {text.hoverParagraph}
                {/* Tooltip Arrow */}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 w-full md:hidden mt-4">
        {content.map((text, index) => (
          <div   key={index} className="page-text grid  gap-4 items-center w-full h-full">
            <div
            
              className="flex flex-col items-center lg:text-start text-center gap-3 p-2 bg-[#F3F3FA]  shadow-2xl rounded-[5px] w-full h-full"
            >
              <div
                className={`p-3 w-12 h-12 rounded-[5px] ${text.bgColor} flex items-center justify-center`}
              >
                <CustomImage
                  publicImage={text.icon}
                  width="30px"
                  height="30px"
                />
              </div>
              <h3 className="text-center font-semi-bold">
                {text.head}
              </h3>
              <p className=" ">
                {text.hoverParagraph}
                {/* Tooltip Arrow */}
              </p>
            </div>
            {/* Tooltip */}
          </div>
        ))}
      </div>
    </>
  );
};

export default function DatingApp() {
  return (
    <>
      <div
           id="grad-1"
        className="w-full grid grid-cols-2  lg:gap-12 h-full lg:flex hidden "
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="w-auto  py-[40px] xl:pl-[100px]  pl-[20px]  max-w-[50%]">
          <CustomImage publicImage="/assets/economy-dating-image.webp" />
        </div>

        <div
     
          className=" py-[40px] flex flex-col  gap-4 xl:pr-[100px]  pr-[20px] h-[100%] max-w-[60%]"
        >
          <div className="child-text mx-auto flex flex-col gap-4">
            <h2 className="font-bold">
              Navigating The Love Economy:{" "}
              <span className="text-[#0F4FFF]">
                The Lucrative World Of Dating Apps
              </span>
            </h2>
            <p className="">
              The digital dating landscape is not just about heartstrings; it's
              a booming sector within the app industry, offering immense
              potential for innovation and profit. With the increasing reliance
              on technology for social connections, investing in a dating app is
              more than just timely—it's forward-thinking.
            </p>
          </div>
          <IconUi />
        </div>
      </div>
      <div id="grad-6"  className="lg:hidden p-[20px]">
        {" "}
        <div className="child-text w-[100%] h-auto  grid  gap-[10px] ">
        <h2 className="font-bold text-center">
            <span className="text-[#0F4FFF]"> World Of</span> Dating
            Apps
          </h2>
          <div className="p-8 justify-center flex content-center">
            {" "}
            <CustomImage publicImage="/assets/economy-dating-mobile-image.png" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-xs font-normal">
              The digital dating landscape is not just about heartstrings; it's
              a booming sector within the app industry, offering immense
              potential for innovation and profit. With the increasing reliance
              on technology for social connections, investing in a dating app is
              more than just timely—it's forward-thinking. .
            </p>
          </div>
        </div>
        <IconUi />
      </div>
    </>
  );
}
