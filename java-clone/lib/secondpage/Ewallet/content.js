"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import StartWithUS from "@/components/getStarted/startWithus";

export default function Content({
  heading,
  paragraph,
  titles,
  texts,
  images,
  textcolor,
  bg,
  remainWordColor,
  changeHeading,
  changeParagraph,
  colorpara,
  btntext,
  height,
  arrowback,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };


  useEffect(() => {
    // Ensure this only runs in the client (browser)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
      };

      // Check screen size on initial render
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      startAutoScroll();
    }

    return () => stopAutoScroll();
  }, [isSmallScreen, titles.length]);

  const handleTouchStart = () => {
    stopAutoScroll();
  };

  const handleTouchEnd = () => {
    startAutoScroll();
  };

  const words = heading.split(" ");
  const words1 = titles[currentIndex].split(" ");
  const firstTwoWords = words.slice(0, 1).join(" ");
  const lastTwoWords = words.slice(-1).join(" ");
  const firstTwoWords1 = words1.slice(0, 1).join(" ");
  const lastTwoWords1 = words1.slice(-1).join(" ");
  const remainingWords1 = words.slice(1, -1).join(" ");
  const remainingWords = words1.slice(1, -1).join(" ");

  return (
    <div
      className={`flex flex-col w-full h-[350px]  md:h-auto px-[24px] lg:py-[40px] py-[20px] lg:p-[40px]`}
      style={{ backgroundColor: `#${bg}` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative flex flex-col w-full lg:h-auto px-[20px] md:h-auto lg:px-[40px] lg:gap-[40px]">
        <div className="max-w-[1420px]">
          {/* Left arrow */}
          <div
            onClick={() => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
            }}
            className={`absolute left-8 top-[50%] m-[-30px] md:top-[35%] lg:top-[45%] transform -translate-y-1/2 flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 rounded-full cursor-pointer hidden md:flex`}
            style={{ backgroundColor: `${arrowback}` }}
          >
            <span className="text-white text-[10px] lg:text-sm">❮</span>
          </div>

          {/* Right arrow */}
          <div
            onClick={() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
            }}
            className={`absolute m-[-30px] right-8 top-[50%] md:top-[35%] lg:top-[45%] transform -translate-y-1/2 flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 rounded-full cursor-pointer hidden md:flex`}
            style={{ backgroundColor: `${arrowback}` }}
          >
            <span className="text-white text-[10px] lg:text-sm">❯</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-[1280px] text-white h-auto mx-auto text-center">
          <h2
            className={`font-bold text-base md:text-2xl lg:text-4xl`}
            style={{ color: `${remainWordColor}` }}
          >
            <span style={{ color: `${textcolor}` }}>{firstTwoWords}</span>{" "}
            {remainingWords1}{" "}
            <span style={{ color: `${textcolor}` }}>{lastTwoWords}</span>
          </h2>
          <p className={`lg:flex hidden font-normal text-base md:text-lg  text-${colorpara}`}>
            {paragraph}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:gap-10 mx-auto text-white mt-10 max-w-[1320px] h-auto  lg:h-[500px] xl:h-[460px] 2xl:h-[400px] md:gap-8">
          <div className="w-full lg:h-auto flex flex-col gap-4 ">
            <h3
              className={`font-bold text-sm md:text-xl lg:text-2xl text-start`}
              style={{ color: `${remainWordColor}` }}
            >
              <span style={{ color: `${textcolor}` }}>{firstTwoWords1}</span>{" "}
              {remainingWords}{" "}
              <span style={{ color: `${textcolor}` }}>{lastTwoWords1}</span>
            </h3>
            <p className={`font-normal text-[0.625rem] md:text-base  text-${colorpara}`}>
              {texts[currentIndex]}
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-[70%] h-[300px] relative md:flex hidden">
            <Image
              src={images[currentIndex]}
              width={400}
              height={300}
              alt="contentImages"
              objectFit="cover"
              className="w-[400px] h-[300px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
