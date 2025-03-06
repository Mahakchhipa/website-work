"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import CustomImage from "./BlogComponents/CustomeImage";
import PopupForm from "./formSection/PopupForm";
const VectorBanner = ({
  paragraph,
  paragraph1,
  btntext,
  gif,
  headingPart1,
  headingPart2,
  image,
  showGif,
  isGradient,
  textcolor,
  percentHeight,
  percentWidth,
  spanColor,
  showBorder,
  justifyimage,
  imagewidth,
  border,
  hovercolor,
  hovertext,
  paracolor,
  btnContent,
  vectorImage,
  itemsposition,
  btncolor,
  solidColor,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  const buttonStyle = {
    backgroundColor: isHovered ? hovercolor : "transparent",
    color: isHovered ? hovertext : btntext,
    border: `1px solid ${border || "#000"}`,
    padding: "8px 16px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };
  return (
    <div
      style={{
        width: "100%",

        backgroundImage: `url(${vectorImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        boxSizing: "border-box",
      }}
      className="h-auto  pt-[77px]"
    >
      <div className="h-[100%] grid lg:grid-cols-2 md:gap-4">
        <div
          className={`responsive-text pl-[20px] xl:pl-[100px] py-6  flex flex-col justify-center items-center lg:text-start text-center lg:items-start  gap-4 text-${textcolor}`}
        >
          <h1 className=" font-bold  ">
            {headingPart1}

            <span style={{ color: `${spanColor}` }} className={`font-bold`}>
              {headingPart2}
            </span>
          </h1>
          <p className={`font-normal text-${paracolor}`}>{paragraph}</p>
          {/* <p className={`font-normal text-${paracolor}`}>{paragraph1}</p> */}
          {showBorder ? (
            <div
              // style={{
              //   background: `linear-gradient(93.29deg, #0F53FF -48.03%, #4C4C4C 160.39%)`,
              // }}
              className="buttonText w-full flex items-center justify-center lg:justify-start gap-3"
            >
              <button
                style={buttonStyle}
                onClick={handleOpen}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {btnContent}
              </button>
              {/* <Link
                href="https://api.whatsapp.com/send?phone=7222001000"
                className="border-[#858585] border-[1px] px-[13px] py-[13px] rounded-[5px]"
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.96967 15.5303C0.703403 15.2641 0.679197 14.8474 0.897052 14.5538L0.96967 14.4697L7.439 8L0.96967 1.53033C0.703403 1.26406 0.679197 0.8474 0.897052 0.553788L0.96967 0.46967C1.23594 0.203403 1.6526 0.179197 1.94621 0.397052L2.03033 0.46967L9.03033 7.46967C9.2966 7.73594 9.3208 8.1526 9.10295 8.44621L9.03033 8.53033L2.03033 15.5303C1.73744 15.8232 1.26256 15.8232 0.96967 15.5303Z"
                    fill={`${fillcolor}`}
                  />
                </svg>
              </Link> */}
            </div>
          ) : (
            <div className="buttonText w-full flex items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleOpen}
                style={{
                  background: isGradient
                    ? `linear-gradient(${btncolor})`
                    : solidColor,
                }}
                className={`text-${btntext} py-2 px-4   rounded-[5px] font-bold transition-transform duration-300 transform hover:scale-110`}
              >
                {btnContent}
              </button>
            </div>
          )}
        </div>
        <div
          className={`w-full flex items-${itemsposition} justify-${justifyimage} relative overflow-hidden`}
        >
          {/* Vector Image */}
          <div
            className={`flex justify-center items-end w-auto lg:w-[${imagewidth}]`}
          >
            <CustomImage
              publicImage={image}
              rounded="rounded-none"
              width={percentWidth}
              height={percentHeight}
            />
          </div>

          {/* Overlay GIF 1 */}
          {showGif && (
            <>
              {" "}
              <div
                className="absolute z-20 flex items-center justify-center h-full w-full lg:overflow-hidden firstAnimate"
                style={{
                  transform: `translateX(${isVisible ? "0" : "100vw"})`,
                  transition: "transform 0.5s ease",
                }}
              >
                <Image
                  src={gif}
                  width={400}
                  height={400}
                  alt="gif"
                  className="w-[400px]  h-auto animate-bounce-horizontal"
                />
              </div>
              {/* Overlay GIF 2 */}
              <div
                className="absolute z-20 flex items-center justify-center h-full w-full lg:w-[600px] lg:overflow-hidden secondAnimate"
                style={{
                  animation: `${
                    isVisible ? "moveLeft" : "moveRight"
                  } 5s linear infinite`,
                }}
              >
                <Image
                  src={gif}
                  width={400}
                  height={400}
                  alt="gif"
                  className="w-[400px] lg:w-[600px] h-auto"
                />
              </div>
            </>
          )}
        </div>

        <PopupForm isOpen={isOpen} onClose={handleClose} />
      </div>
    </div>
  );
};

export default VectorBanner;
