"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import PopupForm from "@/components/formSection/PopupForm";

export default function OnDemandAppsCTA({
  bgColor, // Only keep the background color prop
  heading,
  paragraph,
  btntext,
  textColor,
  text,
  imageSrc, // New prop for image source
  btnbg,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("Opening Popup"); // Check if this is logged
    setIsOpen(true);
  };
  
  const handleClose = () => {
    console.log("Closing Popup"); // Check if this is logged
    setIsOpen(false);
  };
  
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");


  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (isVisible && currentIndex <= heading.length) {
        setDisplayText(heading.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, heading]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Background style using only solid color
  const backgroundStyle = {
    backgroundColor: bgColor, // Use the background color prop
  };

  return (
    <div
      ref={ref}
      style={backgroundStyle}
      className="w-full px-[20px]  xl:px-[100px] md:h-[350px]"
    >
      {/* Flex container for layout */}
      <div className="flex items-center justify-between w-full h-full">
        {/* Text Container */}
        <div className="child-text flex flex-col items-start justify-center gap-2 lg:gap-4 text-left  py-[20px] lg:py-[40px] w-[250px] sm:w-[350px] md:w-[500px] xl:w-[680px]">
          <h2
            className={`${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          >
            {displayText}
          </h2>
          <p className={`font-normal text-${textColor} lg:flex hidden`}>
            {paragraph}
          </p>
          <div className="buttonText">
            <button
              onClick={handleOpen}
              className={`px-4 py-2 rounded-[7px] md:px-6 md:py-3 text-${text}`}
              style={{ backgroundColor: `${btnbg}` }}
            >
              {btntext}
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="flex justify-end w-fit absolute right-[8%] pb-10">
          <img
            src={imageSrc}
            alt="Descriptive alt text"
            className="h-[200px] md:h-[430px]" // Ensure the image is responsive
          />
        </div>
      </div>
      <PopupForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
