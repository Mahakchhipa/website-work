"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import CustomImage from "./BlogComponents/CustomeImage";
import PopupForm from "./formSection/PopupForm";

export default function BannerImg({
  heading,
  paragraph,
  bgImage,
  headingPart1,
  headingPart2,
  mobileBackground,
  textColor1,
  btnContent,
  spancolor,
  hovercolor,
  gradient,
  btntext,
  btnbg,
  showBorder,
  hovertext,
  border,
  initialcolor,
  isOpaque,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const bgColor = isOpaque ? "rgba(23, 22, 22, 0.44)" : "bg-inherit";
  const opacity = isOpaque ? "backdrop-blur-md" : "backdrop-blur-none"; // Change opacity based on the prop
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
      <PopupForm isOpen={isOpen} onClose={handleClose} />
      {isDesktop && (
        <div
          className="relative w-full h-[300px] lg:h-[450px] lg:flex hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black overlay
            backgroundBlendMode: "overlay", // Blends the color and image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10 "></div>
          <div className="flex items-center justify-center h-full w-full">
            <div className="absolute inset-0 flex flex-col justify-center items-center px-[20px] gap-4 w-fit mx-auto h-full">
              <div
                className={`responsive-text max-w-[1000px] h-fit flex flex-col justify-center items-center gap-3 text-center mx-auto p-6 rounded-lg ${btnbg}`}
              >
                <h1 className={`text-${textColor1} font-bold`}>
                  {headingPart1}
                  <span className={`text-[${spancolor}] font-bold`}>
                    {headingPart2}
                  </span>
                </h1>
                <p className={`text-${textColor1}`}>{paragraph}</p>

                {showBorder ? (
                  <div className="w-fit h-full buttonText mx-auto">
                    <button
                      style={buttonStyle}
                      onClick={handleOpen}
                      className="lg:flex hidden py-2 px-6"
                    >
                      {btnContent}
                    </button>
                    <button className="py-2 px-6 bg-white rounded-[5px] w-fit transition-transform duration-300 transform hover:scale-110 lg:hidden">
                      {btnContent}
                    </button>
                  </div>
                ) : (
                  <div className="buttonText">
                    <button
                      onClick={handleOpen}
                      className={`py-2 px-6 text-[${btntext}] w-fit transition-transform duration-300 transform hover:scale-110 hidden lg:flex rounded-[5px]`}
                      style={{
                        backgroundColor: `${btnbg}`,
                        color: `${btntext}`,
                      }}
                    >
                      {btnContent}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Version */}
      {!isDesktop && (
        <div id="grad-2" className="flex flex-col gap-4 lg:hidden">
          <div className="grid justify-center items-center mt-20">
            <div
              id="grad-2"
              className="responsive-text px-6 py-6 flex flex-col gap-4 text-center rounded-lg w-full "
            >
              <h1 className="font-bold">
                {headingPart1}
                <br />
                <span className={`text-[${spancolor}] font-bold`}>
                  {headingPart2}
                </span>
              </h1>
              <p className="font-normal">{paragraph}</p>
              <div className="buttonText">
                <button
                  onClick={handleOpen}
                  className="buttonGradient py-2 px-6 text-white text-xs md:text-sm rounded-[5px]"
                >
                  {btnContent}
                </button>
              </div>
            </div>
            <div>
              <CustomImage
                publicImage={mobileBackground}
                rounded="rounded-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
