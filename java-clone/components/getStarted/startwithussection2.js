"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import Button from "./Button";

export default function Startwithussection2({ btntext, heading, paragraph }) {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  const text = heading;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (isVisible && currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the delay between characters (in milliseconds)

    return () => clearInterval(interval);
  }, [isVisible, text]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); // Set the breakpoint according to your design
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }
  }, []);
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <div className="relative flex items-center justify-center w-full  h-[300px] lg:h-[390px]">
        <div className="flex md:flex-row flex-col lg:items-center 2xl:p-2 p-4 justify-center items-center">
          <div
            ref={ref}
            className="max-w-[1036px] p-2 sm:p-0 relative z-10 flex flex-col items-center justify-center gap-4 lg:gap-4 text-center mx-auto"
          >
            <h2
              className={`lg:text-4xl text-2xl font-bold text-white ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {displayText}
            </h2>
            <p className="text-lg  text-white">{paragraph}</p>
            <Button btntext={btntext} />
          </div>
        </div>
        <div className="absolute inset-0 z-0 h-[300px] lg:h-[390px]">
          <Image
            src="backgroundImages/service-start-with-us.webp"
            alt="CTA"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
