"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CustomImage from "../BlogComponents/CustomeImage";
import Link from "next/link";
import PopupForm from "../formSection/PopupForm";
export default function GradientButton({
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
  btntextColor,
  backimage,
  childHeadingShow,
  color1,
  color2,
  degree,
  percent1,
  percent2,
}) {
  let gradient = `linear-gradient(${degree}, ${color1} ${percent1}, ${color2} ${percent2})`;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <div
      className=" flex items-center justify-center w-full "
      style={{
        background: gradient,
      }}
    >
      <div
        className={`w-full  gap-4 bg-[${bgColor}] flex justify-center items-center `}
        ref={ref}
      >
        <div className="grid grid-cols-2 gap-[10px] md:gap-4 w-full  mx-auto  px-3 md:px-0">
          <div className="flex flex-col gap-[10px] md:gap-4 items-start justify-center text-start md:w-auto rounded-xl  pl-[10px] xl:pl-[100px] w-[200px]">
            <h2
              className={`text-start text-${textColor} font-bold text-base md:text-xl lg:text-4xl  ${
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

            <div className="w-full buttonText">
              <button
              onClick={handleOpen}
                style={{ color: `${btntextColor}` }}
                className={`px-4 py-2  rounded-[5px] bg-[${buttonColor}]  w-fit transition-transform duration-300 transform hover:scale-110 `}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex justify-end  w-auto lg:h-[500px] ">
            {" "}
            <CustomImage publicImage={image} rounded="rounded-none" />
          </div>
        </div>
      </div>
      <PopupForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
