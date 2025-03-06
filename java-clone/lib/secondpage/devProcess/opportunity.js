"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Opportunity({
  heading,
  paragraph,
  data,
  backImgCards,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
    function handleResize() {
      setIsMobile(window.innerWidth < 1023);
    }
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); 
  }
  }, []);


  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

    prevArrow: <></>, // Hide the previous arrow
    nextArrow: <></>, // Hide the next arrow
  });

  return (
    <div className="relative">
      <Image
        src={backImgCards}
        alt="Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="top-0 left-0 w-full h-full px-[24px] lg:py-[40px] py-[20px] xl:px-[100px] flex flex-col justify-between">
        <div className="w-full  bg-[#F1F5F9] grid grid-cols-1 ">
          <div className="relative z-10 w-full 2xl:max-w-[1280px] text-center mx-auto">
            <h2 className="relative z-10 font-bold text-2xl lg:text-4xl text-white">
              {heading}
            </h2>
            <br />
            <p className="font-normal text-lg  text-white">
              {paragraph}
            </p>
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8  mx-auto hidden lg:grid">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF99] p-10 rounded-lg shadow-md flex flex-col items-center text-center  mx-auto"
                style={{
                  boxShadow: "34.85px 29.63px 48.34px 0px #3366FF0D inset",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                />
                <h4 className="text-xl font-semibold mt-2">{item.title}</h4>
                <p className="mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: "90%", margin: "auto" }}>
            {isMobile && (
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div key={index} className="flex gap-8 mx-auto">
                    <div
                      className="bg-[#FFFFFF99] p-4 md:p-10 rounded-lg shadow-md flex flex-col items-center text-center  min-h-[300px] mx-auto"
                      style={{
                        boxShadow:
                          "34.85px 29.63px 48.34px 0px #3366FF0D inset",
                        margin: "0 10px",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={70}
                        height={70}
                         
                      />
                      <h3 className="text-xl font-semibold mt-2">
                        {item.title}
                      </h3>
                      <p className="mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


