"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

export default function StartWithUS({ bgC, heading, paragraph, btntext }) {
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

  return (
    <>
      <div ref={ref}>
        {/* Desktop View */}
        <div
          className="relative flex items-center w-full h-[300px] lg:h-[393px] hidden sm:flex"
          style={{
            backgroundImage: `url('/assets/CTA-button-image.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content Container */}
          <div className="child-text max-w-[1236px] p-2 sm:p-0 relative z-10 inset-0 flex flex-col items-center justify-center gap-4 lg:gap-4 text-center mx-auto">
            <h2
              className={` font-bold text-white ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {displayText}
            </h2>
            <p className=" text-white">{paragraph}</p>
            <Button btntext={btntext} />
          </div>
        </div>

        {/* Mobile View */}
        <div
          className="relative flex items-center w-full h-[190px] sm:hidden"
          style={{
            backgroundImage: `url('/assets/CTA-mobile-image.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Content Container */}
          <div className="child-text w-full p-2 sm:p-0 relative z-10 flex flex-col items-center justify-center gap-[10px] text-center mx-auto h-[190px]">
            <h2
              className={`font-bold text-white ${
                isVisible ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {displayText}
            </h2>
            <p className=" text-white">{paragraph}</p>
            <Button btntext={btntext} />
          </div>
        </div>
      </div>
    </>
  );
}

