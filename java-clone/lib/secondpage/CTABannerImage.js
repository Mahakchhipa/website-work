"use client";
import Link from "next/link";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import { useState, useEffect } from "react";
import PopupForm from "@/components/formSection/PopupForm";
export default function CTABannerImage({
  heading,
  paragraph,
  text,
  textColor,
  TextColor,
  image, // Background image prop
  btntext,
  justify = "start", // Default to start for left alignment
  backColor,
  useGif,
  gifSrc,
  btnbg,
  mobileImage,
}) {
  const [backgroundImage, setBackgroundImage] = useState(image);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBackgroundImage(window.innerWidth < 768 ? mobileImage : image);
    }
  }, [image, mobileImage]);
  return (
    <div
      className="relative h-auto"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`relative w-full m-auto  items-center justify-${justify} border-b-1 overflow-hidden pl-[20px] xl:px-[100px] py-[20px] md::py-[40px] lg:py-[80px]`}
        style={{ zIndex: 2 }} // Ensure the text content stays on top of the background image
      >
        <div className="child-text md:gap-4 gap-2 flex flex-col justify-start items-start text-start w-[270px] md:w-[600px] lg:w-[800px]">
          <h2
            className={`text-${textColor} font-bold  text-start  text-${TextColor}`}
          >
            {heading}
          </h2>
          <p
            className={`text-${textColor} font-normal text-start h-auto overflow-hidden text-${TextColor} md:flex hidden`}
          >
            {paragraph}
          </p>
          <div className="w-full buttonText ">
            <button
            onClick={handleOpen}
              style={{ color: `${btntext}` }}
              className={`bg-[${btnbg}] px-4 py-2 text-[${btntext}]  rounded-[5px] transition-transform duration-300 transform hover:scale-110`}
            >
              {text}
            </button>
          </div>
        </div>
      </div>

      {useGif ? (
        <div className="lg:max-w-[700px]">
          <div className="w-auto 2xl:w-[500px] 2xl:h-[500px]">
            <CustomImage
              publicImage={gifSrc} // Render GIF
              height="500px"
            />
          </div>
        </div>
      ) : null}
         <PopupForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
