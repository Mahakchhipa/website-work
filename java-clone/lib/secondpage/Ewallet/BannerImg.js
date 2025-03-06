"use client";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function BannerImg({
  heading,
  paragraph,
  gif,
  justifyContent,
  text,
  textposition,
  contentposition,
  textColor1,
  btntextcolor,
  btnbg,
  bgImage,
  arrowBg,
  textcolor,
  imageHeight,
  imageWidth,
  justifyContent1,
  alignImage,
  textcolor2,
  height,
}) {
  const [isVisible, setIsVisible] = useState(false);
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

  const words = heading.split(" ");
  const firstTwoWords = words.slice(0, 2).join(" ");
  const lastWord = words.slice(-1).join(" ");
  const remainingWords = words.slice(2, -1).join(" ");

  return (
    <div className="relative w-full h-[970px] lg:h-screen">
      <Image src={bgImage} alt="background" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div
        className={`absolute inset-0 pt-[80px] pb-4 lg:pt-[50px] px-[20px] lg:px-[80px] 2xl:px-[40px] 2xl:pt-[40px] flex flex-col lg:flex-row gap-4 lg:justify-${justifyContent1} items-${contentposition} max-w-[1680px] mx-auto`}
      >
        <div className="w-full xl:w-[700px] h-auto flex flex-col justify-center items-center gap-3 xl:gap-8">
          <div
            className={`text-${textposition} w-full mx-auto`}
            style={{ color: textColor1 }}
          >
            <h1 className="font-bold lg:text-4xl w-auto lg:text-start text-center text-2xl">
              <span style={{ color: textcolor }}>{firstTwoWords} </span>
              {remainingWords}{" "}
              <span style={{ color: textcolor }}>{lastWord}</span>
            </h1>
          </div>
          <div
            className={`text-${textposition} w-full`}
            style={{ color: textColor1 }}
          >
            <p className="font-medium text-lg lg:text-start text-center">
              {paragraph}
            </p>
          </div>
          <div
            className={`flex justify-center lg:justify-start text-${textposition} w-full`}
          >
            <Link href={isLargeScreen ? "#formfields" : "#formfields1"}>
              <button
                className="flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl w-full max-w-[380px] px-7 py-2 text-base md:text-lg lg:text-xl font-bold"
                style={{ backgroundColor: `#${btnbg}`, color: btntextcolor }}
              >
                <span className="lg:text-xl">{text}</span>
                <div
                  className={`flex items-center justify-center bg-[${arrowBg}] rounded-full w-10 h-10 ml-2 animate-bounce-horizontal`}
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`text-${textcolor2} text-xl`}
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div
          className={`relative z-10 flex items-${alignImage} lg:h-full max-w-[600px]`}
          style={{ justifyContent: justifyContent }}
        >
          <Image
            src={gif}
            width={300}
            height={300}
            alt="banner-image"
            className="w-[350px] h-auto  lg:h-auto xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
