"use client";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import { useState } from "react";
import PopupForm from "@/components/formSection/PopupForm";
export default function ExpertsDev({
  heading,
  paragraph,
  text,
  textColor,
  TextColor,
  image,
  btntext,
  justify,
  backColor,
  useGif,
  gifSrc,
  btnbg,
  degree,
  hovercolor,
  gradient,
  showBorder,
  hovertext,
  border,
  initialcolor,
  justifyImage,
  isGradientPage, // Add this prop to control background style
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hovercolor : "transparent", // Change background on hover
    color: isHovered ? hovertext : initialcolor, // Change text color on hover
    border: `1px solid ${border || "#000"}`, // Set border color
    // padding: '8px 16px',
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  return (
    <div
      className="grid grid-cols-2"
      style={
        isGradientPage
          ? {
              background: `linear-gradient(${gradient})`,
              backgroundSize: "cover", // Adjust background size to cover the entire element
              backgroundPosition: "center", // Center the background image/gradient within the element
              backgroundRepeat: "no-repeat",
              // background: linear-gradient(0.73deg, rgba(255, 233, 233, 0.33) -14.18%, rgba(15, 83, 255, 0.33) 222%);

              // background: linear-gradient(87.3deg, rgba(173, 210, 255, 0.44) -0.39%, rgba(255, 101, 15, 0.44) 91.12%);
            }
          : { backgroundColor: `${backColor}` }
      }
    >
      <div
        className={`w-full m-auto grid items-center justify-center justify-${justify} border-b-1 overflow-hidden pl-[20px] xl:px-[100px] md:py-0 py-6`}
      >
        <div className="child-text lg:gap-4 gap-2 flex flex-col justify-start items-start text-start max-w-[600px]">
          <h2
            className={`text-${textColor} font-bold  text-start w-auto text-${TextColor}`}
          >
            {heading}
          </h2>
          <p
            className={`text-${textColor} font-normal text-start h-auto overflow-hidden text-${TextColor} md:flex hidden`}
          >
            {paragraph}
          </p>
          {showBorder ? (
            <div className="w-full h-full buttonText py-2 ">
              <button
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleOpen}
                className=" px-4 py-2"
              >
                {text}
              </button>
            </div>
          ) : (
            <div className="buttonText py-2">
             
              <button
                style={{ color: `${btntext}` }}
                onClick={handleOpen}
                className={`bg-[${btnbg}] text-[${btntext}] px-4 py-2  w-fit transition-transform duration-300 transform hover:scale-110 rounded-[5px]`}
              >
                {text}
              </button>
            </div>
          )}
          <PopupForm isOpen={isOpen} onClose={handleClose} />
        </div>
      </div>
      {useGif ? (
        <div className="lg:max-w-[700px] flex justify-end items-end">
          <div className="w-auto lg:h-[300px] flex justify-end items-end">
            <img
              src={gifSrc} // Render GIF
              className="lg:h-[300px]"
            />
          </div>
        </div>
      ) : (
        <div className="max-h-[400px] flex items-center justify-center w-full">
          <div className={`max-h-[400px] w-full flex justify-${justifyImage}`}>
            <img
              src={image}
              className={`lg:h-[400px] h-full`}
              // Render Static Image
              // height="500px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
