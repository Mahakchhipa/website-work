"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import CustomImage from "../BlogComponents/CustomeImage";
import ParticleJs from "../../components/mainSection/particles";
import CustomBackgroundImage from "../BlogComponents/CustomeBackgroundImage";
import "./Home.css";
import PopupForm from "../formSection/PopupForm";
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePara, setIsVisiblePara] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisiblePara(true);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);
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
      <div
        id="start-section"
        className="relative w-full h-[600px] lg:h-screen bg-[#2c2c2c] "
      >
        <div className="absolute inset-0 z-10 w-full h-full">
          <ParticleJs />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center h-full">
          {/* <ParticleJs/> */}
          <div
            ref={ref}
            className="flex flex-col items-center justify-center gap-3 md:gap-8 lg:h-[386px] text-center px-4 py-12 lg:p-12"
          >
            {/* Desktop View */}
            {isDesktop ? (
              <h1
                className={`text-white text-start flex flex-col gap-2 lg:flex hidden ${
                  inView ? "zoom-in" : "opacity-100"
                }`}
              >
                <span className="font-normal text-3xl xl:text-4xl text-start">
                  Techanic InfoTech
                </span>

                <span className="font-bold text-4xl xl:text-6xl 2xl:text-7xl">
                  Delivering Quality,{" "}
                  <span className="text-transparent bg-clip-text bg-[#0F53FF]">
                    Innovation
                  </span>
                  , and
                </span>

                <span className="font-normal text-3xl xl:text-4xl text-start flex justify-end">
                  Tech Success
                </span>
              </h1>
            ) : (
              <h1
                className={`font-[900] max-w-[900px] text-3xl text-white zoom-in lg:hidden ${
                  inView ? "zoom-in" : "opacity-100"
                }`}
              >
                Techanic InfoTech{" "}
                <span className="bg-clip-text text-transparent bg-[#0F53FF]">
                  Delivering
                </span>
                <br /> Quality, Innovation, And Tech Success.
              </h1>
            )}

            <div className="responsive-link flex flex-col md:flex-row justify-center gap-2 md:gap-5 items-center">
              <button
                style={{ userSelect: "none" }}
                className="flex items-center text-center rounded-full justify-center font-normal w-[169px] h-[54px] px-[7px] py-[13px] text-white text-[16px] lg:text-[20px] transition-transform duration-300 transform hover:scale-110 bg-[#0F53FF] lg:flex hidden"
              >
                <Link href="/contact-us">Schedule A Call</Link>
              </button>
              {/* <PopupForm isOpen={isOpen} onClose={handleClose} /> */}
              <button
                style={{ userSelect: "none" }}
                className="flex items-center text-center rounded-full justify-center font-normal w-[169px] h-[54px] px-[7px] py-[13px] bg-[#0F53FF] text-white lg:hidden"
              >
                <Link href="/contact-us">Schedule A Call</Link>
              </button>
              <button className="font-normal w-[169px] h-[54px] px-[30px] py-[13px] rounded-full bg-inherit md:border-[1px] md:border-white underline md:no-underline text-white text-[16px] lg:text-[20px] transition-transform duration-300 transform hover:scale-110">
                <Link href="/about-us">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
