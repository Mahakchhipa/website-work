"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomImage from "./BlogComponents/CustomeImage";
import PopupForm from "./formSection/PopupForm";
import { useInView } from "react-intersection-observer";
export default function FoodDeliveryBanner({
  paragraph,
  paragraph1,
  btnContent,
  btntext,
  gif,
  headingPart1,
  headingPart2,
  image,
  showGif,
  gradient,
  textcolor,
  width,
  spanColor,
  showBorder,
  hovercolor,
  hovertext,
  border,
  condition,
  paracolor,
  paddingBottom,
  fillcolor,
  itemsposition,
  colorBg,
  btnbg,
}) {
  // Ensure hooks are always called at the top level
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isHovered, setIsHovered] = useState(false);
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
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
      className={`w-full md:pl-[20px] pb-[${paddingBottom}] pt-[40px] lg:pt-[40px] xl:pl-[100px] lg:h-[600px] 2xl:h-[760px] ${
        condition ? "sm:bg-none" : ""
      }`}
      style={{
        background: condition ? `${colorBg}` : `linear-gradient(${gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-[100%] grid lg:grid-cols-2 md:gap-4">
        <div
          className={`responsive-text px-3 flex flex-col justify-center items-center lg:text-start text-center lg:items-start gap-4 text-${textcolor} py-8`}
        >
          <h1
            ref={headingRef}
            className={` font-bold  opacity-0 translate-x-[-50px] transition-all duration-500   ${
              headingInView ? "opacity-100 translate-x-0" : ""
            }`}
          >
            {headingPart1}
            <br />
            <span className={`font-bold text-[${spanColor}] `}>
              {headingPart2}
            </span>
          </h1>
          <p
            ref={paragraphRef}
            className={`font-normal text-${paracolor}  opacity-0 translate-x-[-50px] transition-all duration-500 delay-200 ${
              paragraphInView ? "opacity-100 translate-x-0" : ""
            }`}
          >
            {paragraph}
          </p>

          {showBorder ? (
            <div
              ref={buttonRef}
              className={`buttonText w-full flex items-center justify-center lg:justify-start gap-3  opacity-0 translate-x-[-50px] transition-all duration-500 delay-400 ${
                buttonInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              <button
                onClick={handleOpen}
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {btnContent}
              </button>
              <Link
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
                    fill={fillcolor}
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <div
              ref={buttonRef}
              className={`w-full flex items-center justify-center lg:justify-start gap-3  opacity-0 translate-x-[-50px] transition-all duration-500 delay-400 ${
                buttonInView ? "opacity-100 translate-x-0" : ""
              }`}
            >
              <button
                onClick={handleOpen}
                style={{ background: `linear-gradient(${btnbg}` }}
                className={`py-2 px-6 text-[1.3125rem] text-${btntext} rounded-[5px] font-bold transition-transform duration-300 transform hover:scale-110`}
              >
                {btnContent}
              </button>
              <Link
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
                    fill={fillcolor}
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>

        <div
          className={`w-full flex items-${itemsposition} justify-center relative overflow-hidden`}
        >
          <div className={`flex justify-center items-center max-w-[${width}]`}>
            <CustomImage publicImage={image} rounded="rounded-none" />
          </div>

          {/* Overlay GIF */}
          {showGif && (
            <>
              <div
                className="absolute z-20 flex items-center justify-center h-full w-full lg:overflow-hidden firstAnimate"
                style={{
                  transform: `translateX(${isVisible ? "0" : "100vw"})`,
                  transition: "transform 0.5s ease",
                }}
              >
                <img
                  src={gif}
                  alt="gif"
                  className="w-[400px] h-auto animate-bounce-horizontal"
                />
              </div>
              <div
                className="absolute z-20 flex items-center justify-center h-full w-full lg:w-[600px] lg:overflow-hidden secondAnimate"
                style={{
                  animation: `${
                    isVisible ? "moveLeft" : "moveRight"
                  } 5s linear infinite`,
                }}
              >
                <img
                  src={gif}
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
}
