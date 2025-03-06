"use client";

import { useState, useEffect } from "react";
import CustomImage from "./BlogComponents/CustomeImage";
import Link from "next/link";
import PopupForm from "./formSection/PopupForm";
export default function PageBanner({
  headingPart1,
  headingPart2,
  showVideo,
  paragraph,
  image,
  mobileBackground,
  btntext,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay (e.g., 1000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
  
    <>
      <PopupForm isOpen={isOpen} onClose={handleClose} />
  
      <div id="grad" className="w-full h-auto lg:h-screen">
        <div className="grid lg:grid-cols-2 gap-4 h-full px-[20px] py-[60px] xl:px-[100px] lg:py-[40px]">
          {/* Shared Text Section */}
          <div className="responsive-text flex flex-col justify-center lg:items-start gap-4  lg:text-start text-center px-6 py-6 lg:px-0">
            <h1 className="font-bold">
              {headingPart1}
              <br />
              <span className="text-[#0F4FFF] font-bold">{headingPart2}</span>
            </h1>
            <p className="font-normal text-base md:text-lg lg:text-[1.4375rem]">
              {paragraph}
            </p>
            <div className="buttonText flex gap-3 justify-center lg:justify-start">
              <button
                onClick={handleOpen}
                className="buttonGradient py-2 px-6 text-white text-xs lg:text-[1.3125rem] rounded-[5px] font-bold transition-transform duration-300 transform hover:scale-110"
              >
                {btntext}
              </button>
              <Link
                href="https://api.whatsapp.com/send?phone=7222001000"
                className="border-[#858585] border-[1px] px-[13px] py-[13px] rounded-[5px]"
              >
                <CustomImage
                  publicImage="/assets/icons/Arrow - Right.svg"
                  width="10px"
                  rounded="rounded-none"
                />
              </Link>
            </div>
          </div>
  
          {/* Conditional Media Section */}
          <div className="flex justify-center items-center px-[20px] lg:pr-[20px] xl:pr-[100px] lg:py-[40px] ">
            {showVideo ? (
              <video
                controls
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/assets/videos/Banner-Video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <CustomImage
                publicImage={image}
                rounded="rounded-none"
                width="100%"
              />
            )}
          </div>
        </div>
      </div>
  

    </>
  );
}
