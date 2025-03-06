"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ImageComponent from "@/lib/ImageComponent";

export default function Banner({
  heading,
  paragraph,
  gif,
  justifyContent,
  text,
  arrowtext,
  arrowbg,
  textColor1,
  btntextcolor,
  btnbg,
  bgImage,
  content,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[600px] lg:h-screen overflow-hidden flex items-center">
    <Image src={bgImage} alt="background"  layout="fill" className="absolute inset-0 object-cover w-full h-full" />
    <div className="absolute z-10 inset-0 bg-black opacity-40"></div>

    <div className="absolute  inset-0 flex flex-col justify-center items-start px-5 lg:px-24 2xl:px-32">
      <div className="w-full max-w-4xl flex flex-col gap-3 lg:gap-8">
        <div className="w-full" style={{ color: textColor1 }}>
          <h1 className="relative z-10 font-bold text-2xl lg:text-4xl ">
            {heading}
          </h1>
        </div>
        <div className="w-full" style={{ color: textColor1 }}>
          <p className="relative z-10 font-medium text-lg" >{paragraph}</p>
        </div>
        <div
          className="relative z-10 flex justify-start w-full hidden  lg:flex"
          style={{
            transform: `translateY(${isVisible ? '0' : '50px'})`,
            transition: 'transform 0.5s ease',
          }}
        >
          <Link href="#formfields">
            <button
              className="flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl md:w-96 h-13 px-7 py-2 text-lg lg:text-xl font-bold"
              style={{ backgroundColor: `#${btnbg}`, color: btntextcolor }}
            >
              <span className="text-xl lg:text-2xl">{text}</span>
              <div
                className="flex items-center justify-center rounded-full w-10 h-10 ml-2 animate-bounce-horizontal"
                style={{ backgroundColor: arrowbg }}
              >
                <FontAwesomeIcon icon={faAngleRight} className="text-xl" style={{ color: arrowtext }} />
              </div>
            </button>
          </Link>
        </div>
        <div
          className="relative z-10 flex justify-start w-full flex lg:hidden"
          style={{
            transform: `translateY(${isVisible ? '0' : '50px'})`,
            transition: 'transform 0.5s ease',
          }}
        >
          <Link href="#formfields1">
            <button
              className="flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl md:w-96 h-13 px-7 py-2 text-base font-bold"
              style={{ backgroundColor: `#${btnbg}`, color: btntextcolor }}
            >
              <span className="text-lg">{text}</span>
              <div
                className="flex items-center justify-center rounded-full w-10 h-10 ml-2 animate-bounce-horizontal"
                style={{ backgroundColor: arrowbg }}
              >
                <FontAwesomeIcon icon={faAngleRight} className="text-xl" style={{ color: arrowtext }} />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
