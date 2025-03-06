"use client";

import { useState, useEffect } from "react";
import CustomImage from "./BlogComponents/CustomeImage";
import Link from "next/link";
import PopupForm from "./formSection/PopupForm";
export default function SolutionPagesBanner({
  headingPart1,
  headingPart2,
  showVideo,
  paragraph,
  image,
  mobileBackground,
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
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <PopupForm isOpen={isOpen} onClose={handleClose} />{" "}
      {isDesktop && (
        <div className="w-full h-auto lg:h-screen lg:flex hidden">
          <div id="grad" className="h-[100%] grid lg:grid-cols-2 gap-4">
            <div className="flex justify-center items-center lg:py-[40px]">
              {showVideo ? (
                <video
                  controls
                  className="w-full h-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/videos/Banner-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <CustomImage publicImage={image} rounded="rounded-none" />
              )}
            </div>
            <div className="flex">
              <div className="responsive-text flex flex-col justify-center items-start gap-4 px-[20px] lg:pr-[20px] xl:pr-[100px] lg:py-[40px] lg:pl-[20px]">
                <h1 className="font-bold text-lg md:text-2xl lg:text-[3.125rem] lg:leading-[55px]">
                  {headingPart1}
                  <br />
                  <span className="text-[#0F4FFF] font-bold">{headingPart2}</span>
                </h1>
                <p className="font-normal text-base md:text-lg lg:text-[1.4375rem] text-start">
                  {paragraph}
                </p>
                <div className="w-full flex gap-3">
                  <button
                    onClick={handleOpen}
                    className="buttonGradient py-2 px-6 text-white text-[1.3125rem] rounded-[5px] font-bold transition-transform duration-300 transform hover:scale-110"
                  >
                    Let’s Get Started
                  </button>
                  <Link
                    href="https://api.whatsapp.com/send?phone=7222001000"
                    className="border-[#858585] border-[1px] px-[13px] py-[13px] rounded-[5px]"
                  >
                    <CustomImage publicImage="/assets/icons/Arrow - Right.svg" width="10px" rounded="rounded-none" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-end items-end w-[150px] xl:w-auto">
                <CustomImage publicImage="/assets/vector-circle-image.png" rounded="rounded-none" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Section */}
      {!isDesktop && (
        <div id="grad-2" className="flex flex-col gap-4 lg:hidden">
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="flex flex-col">
              <div className="responsive-text px-6 py-6 flex flex-col gap-4 text-center rounded-lg w-full">
                <h1 className="font-normal text-lg md:text-2xl lg:text-[3.125rem] lg:leading-[55px]">
                  {headingPart1}
                  <br />
                  <span className="text-[#0F4FFF] font-bold">{headingPart2}</span>
                </h1>
                <p className="font-normal text-center text-base md:text-lg">{paragraph}</p>
                <div className="responsive-link">
                  <button
                    onClick={handleOpen}
                    className="buttonGradient py-2 px-6 text-white text-xs md:text-sm rounded-[5px] transition-transform duration-300 transform hover:scale-110"
                  >
                    Let’s Get Started
                  </button>
                </div>
              </div>
            </div>

            <div>
              <CustomImage publicImage={mobileBackground} rounded="rounded-none" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
