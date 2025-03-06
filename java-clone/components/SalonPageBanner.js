"use client";

import { useState, useEffect } from "react";
import CustomImage from "./BlogComponents/CustomeImage";
import Link from "next/link";
import PopupForm from "./formSection/PopupForm";

export default function SalonPageBanner({
  headingPart1,
  headingPart2,
  showVideo,
  paragraph,
  image,
  mobileBackground,
  bgcolor,
  btnContent,
  showCircles,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay (e.g., 1000 milliseconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Desktop if width is >= 1024px
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <PopupForm isOpen={isOpen} onClose={handleClose} />
      
      <div className={`w-full h-auto ${isDesktop ? '2xl:h-[740px] lg:flex hidden pt-[60px] xl:pt-[120px]' : 'flex flex-col gap-4 lg:hidden'} `} style={{ backgroundColor: bgcolor }}>
        
        {/* Desktop Banner Section */}
        {isDesktop && (
          <div className="h-[100%] grid lg:grid-cols-2 gap-4">
            <div className="lg:pl-[10px] xl:pl-[90px] lg:py-[40px]">
              {showCircles && (
                <div className="w-[79px]">
                  <CustomImage publicImage="/assets/circles-image.png" rounded="rounded-none" />
                </div>
              )}
              <div className="responsive-text flex flex-col justify-center items-start gap-4 pl-[10px]">
                <h1 className="font-bold text-lg md:text-2xl lg:text-[3.125rem] lg:leading-[55px]">
                  {headingPart1}
                  <br />
                  <span className="text-[#0F4FFF] font-bold">{headingPart2}</span>
                </h1>
                <p className="font-normal text-base md:text-lg lg:text-[1.4375rem] text-start">
                  {paragraph}
                </p>
                <div className="w-full flex gap-3 buttonText">
                  <button onClick={handleOpen} className="buttonGradient py-2 px-6 text-white text-[1.3125rem] rounded-[5px] font-bold transition-transform duration-300 transform hover:scale-110">
                    {btnContent}
                  </button>
                  <Link href="https://api.whatsapp.com/send?phone=7222001000" className="border-[#858585] border-[1px] px-[13px] py-[13px] rounded-[5px]">
                    <CustomImage publicImage="/assets/icons/Arrow - Right.svg" width="10px" rounded="rounded-none" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end">
              {showVideo ? (
                <video controls className="w-full h-auto" autoPlay loop muted playsInline>
                  <source src="/assets/videos/Banner-Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <CustomImage publicImage={image} />
              )}
            </div>
          </div>
        )}

        {/* Mobile Banner Section */}
        {!isDesktop && (
          <div className="grid justify-center items-center mt-20">
            <div className="responsive-text px-6 py-6 flex flex-col gap-4 text-center rounded-lg w-full">
              <h1 className="font-normal text-lg md:text-2xl lg:text-[3.125rem] lg:leading-[55px]">
                {headingPart1}
                <br />
                <span className="text-[#0F4FFF] font-bold">{headingPart2}</span>
              </h1>
              <p className="font-normal text-center text-base md:text-lg">
                {paragraph}
              </p>
              <div className="buttonText">
                <button onClick={handleOpen} className="buttonGradient py-2 px-6 text-white text-xs md:text-sm rounded-[5px]">
                  {btnContent}
                </button>
              </div>
            </div>
            <div className="h-fit">
              <CustomImage publicImage={mobileBackground} rounded="rounded-none" height="400px"/>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
