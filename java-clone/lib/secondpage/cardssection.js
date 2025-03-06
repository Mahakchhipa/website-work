"use client";
import Image from "next/image";
import Card from "./cards";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function CardSection({
  paragraph,
  bgColor,

  color,
  height,
  headingPart1,
  headingPart2,

  cardItems,
  isVisible,
  id,
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Ensure the code only runs on the client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1024);
      };

      // Check screen size on initial render
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div
        id={id}
        className={`flex flex-col h-auto lg:py-[40px] py-[20px] gap-4 xl:px-[100px] px-[20px] bg-[#${bgColor}]`} // Add "relative" class to make sure the child elements position relative to this div
      >
        <div className=" flex flex-col justify-center items-center gap-8">
          <div className=" mx-auto lg:max-w-[1280px] w-full ">
            <div className="child-text flex flex-col gap-[10px] lg:gap-4 text-center">
              <h2
                className="font-bold 
          "
              >
                {headingPart1}{" "}
                <span className="text-[#0F53FF]">{headingPart2}</span>
              </h2>

              <p
                className="text-[#000000] font-normal 
            "
              >
                {paragraph}
              </p>
            </div>
          </div>
          <Card
            cardItems={cardItems}
            showLink={false}
            bColor={color}
            hoverback={color}
            heightcard={height}
            isMainPage={true}
            fillIcon="#e8f4f8"
          />
          {isVisible && (
            <div className="responsive-link flex items-center justify-center">
              <button className="bg-[#4E4E4E] text-white p-2 lg:p-3 rounded-[5px] transition-transform duration-300 transform hover:scale-110">
                <Link href={isLargeScreen ? "#formfields" : "#formfields1"}>
                  Get A Clone App
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
