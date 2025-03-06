"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import PopupForm from "../formSection/PopupForm";


export default function CTAButtonDevelopment({
  heading,
  paragraph,
  childheading1,
  childheading2,
  image,
  bgColor,
  btntext,
  useBackgroundImage,
  textColor,
  buttonColor,
  hovercolor,
  hovertext,
  showBorder,
  backimage,
  childHeadingShow,
  color1,
  color2,
  degree,
  percent1,
  percent2,
  initialcolor,
  border,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Popup state

  const handleOpen = () => setIsOpen(true); // Open popup
  const handleClose = () => setIsOpen(false); // Close popup

  const buttonStyle = {
    backgroundColor: isHovered ? hovercolor : "transparent",
    color: isHovered ? hovertext : initialcolor,
    border: `1px solid ${border || "#000"}`,
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  let gradient = `linear-gradient(${degree}, ${color1} ${percent1}, ${color2} ${percent2})`;

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
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, text]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      className="relative flex items-center justify-center w-full h-auto"
      style={
        useBackgroundImage
          ? {
              backgroundImage: `url(${backimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {
              background: gradient,
            }
      }
    >
      <div
        className={`w-full relative z-10 inset-0 gap-4 bg-[${bgColor}] flex justify-center items-center `}
        ref={ref}
      >
        <div className="grid grid-cols-2 items-center justify-center gap-[10px] md:gap-4 w-full mx-auto px-3 md:px-0">
          <div className="child-text flex flex-col gap-[10px] md:gap-4 items-start justify-center text-start md:w-auto rounded-xl lg:py-[40px] md:pl-[10px] xl:pl-[100px] ">
            <h2
              className={`text-start text-${textColor} font-bold text-base md:text-xl lg:text-4xl ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {displayText}
            </h2>
            {childHeadingShow ? (
              <h3
                className={`md:text-xl text-${textColor} lg:text-2xl font-semibold lg:block hidden`}
              >
                {childheading1}
              </h3>
            ) : (
              ""
            )}
            <p className={`lg:block hidden text-${textColor}`}>{paragraph}</p>
            {childHeadingShow ? (
              <h3
                className={`md:text-xl lg:text-2xl font-semibold lg:block hidden text-${textColor}`}
              >
                {childheading2}
              </h3>
            ) : (
              ""
            )}
            {showBorder ? (
              <div className="w-full h-full buttonText py-2 ">
                <button
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleOpen} // Trigger popup on click
                  className="lg:flex hidden px-4 py-2"
                >
                  Contact Us
                </button>

                {/* Popup component */}
                <button
                  className={`px-4 py-2 bg-white rounded-[5px] w-fit transition-transform duration-300 transform hover:scale-110 lg:hidden`}
                  onClick={handleOpen}
                >
                  <span className={` font-semibold`}>Contact Us</span>
                </button>
              </div>
            ) : (
              <div className="buttonText py-2">
                <button
                  className={`bg-[${buttonColor}]  px-4 py-2 w-fit transition-transform duration-300 transform hover:scale-110  rounded-[5px]`}
                  onClick={handleOpen}
                  style={{ color: `${btntext}` }}
                >
                  Contact Us
                </button>
              </div>
            )}
          </div>
          <PopupForm isOpen={isOpen} onClose={handleClose} />{" "}
          <div className="flex justify-end w-full h-full">
            <div className="mx-auto w-auto h-full flex justify-end items-end lg:flex hidden">
              <img src={image} className="h-[400px]" />
            </div>
            <div className="mx-auto flex justify-end items-end lg:hidden">
              <img src={image} className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
