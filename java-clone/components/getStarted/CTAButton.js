"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button"; // Assuming you still want to use Button for other functionalities
import Link from "next/link";
import PopupForm from "../formSection/PopupForm"; // Import your PopupForm component

export default function CTAButton({
  bgC,
  heading,
  paragraph,
  btntext,
  textColor,
  color1,
  color2,
  color,
  bgColor,
  text,
  backgroundImage,
}) {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

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

  // Determine the background style (gradient or image)
  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : color1 && color2
    ? {
        background: `linear-gradient(87.3deg, ${color1} 5%, ${color2} 91.12%)`,
      }
    : {
        backgroundColor: `${color}`,
      };

  return (
    <>
      <div ref={ref} className="">
        {/* Popup Form */}
        <PopupForm isOpen={isOpen} onClose={handleClose} />

        {/* Desktop View */}
        <div
          className="flex items-center w-full lg:py-[40px] lg:h-[300px]"
          style={backgroundStyle}
        >
          {/* Content Container */}
          <div
            className={`child-text max-w-[970px] text-${textColor} flex flex-col items-center justify-center gap-2 lg:gap-4 text-center mx-auto p-8`}
          >
            <h2
              className={`${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {displayText}
            </h2>
            <p className={`font-normal text-${textColor}`}>{paragraph}</p>
            <div className="buttonText">
              <button
                className={`px-4 py-2 rounded-[7px] md:px-6 md:py-3`}
                style={{ backgroundColor: `${bgColor}` ,color:`${text}` }}
                onClick={handleOpen} // Open the popup form on button click
              >
                {btntext}
              </button>
         
            </div>
          </div>
          {/* Button component */}
        </div>
      </div>
    </>
  );
}
