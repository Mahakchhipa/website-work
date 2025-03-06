"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageComponent from "@/lib/ImageComponent";
import CustomImage from "@/components/BlogComponents/CustomeImage";

const Card = ({
  cardItems,
  showLink,
  heightcard,
  hoverback,
  bColor,
  fillIcon,
  isMainPage,
  cardlink,
}) => {
 

  return (
    <>
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-2 lg:gap-4 mt-6 ">
        {cardItems.map((card, index) => (
          <div
            key={index}
            className={`bg-[#ffffff] relative grid items-center text-center justify-between rounded-[21px]  gap-4 shadow-2xl  h-auto  border-l-4 border-[#${bColor}]  transition-all duration-500  overflow-hidden `}
            style={{ backgroundPosition: "0%", borderColor: `#${bColor}` }}
          >
            <div
              style={{
                background: `linear-gradient(${card.gradient})`,
                backgroundSize: "cover", // Adjust background size to cover the entire element
                backgroundPosition: "center", // Center the background image/gradient within the element
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                // background: linear-gradient(0.73deg, rgba(255, 233, 233, 0.33) -14.18%, rgba(15, 83, 255, 0.33) 222%);

                // background: linear-gradient(87.3deg, rgba(173, 210, 255, 0.44) -0.39%, rgba(255, 101, 15, 0.44) 91.12%);
              }}
            >
              <div
                className={` w-[80px] h-[80px] flex items-center justify-center mx-auto`}
                // style={{ backgroundColor: `${fillIcon}` }}
              >
                {isMainPage ? (
                  <CustomImage
                    publicImage={card.image}
                    alt="icons"
                    width="80px"
                    height="80px"
                  />
                ) : (
                  <ImageComponent
                    src={card.image}
                    alt="icons"
                    width={80}
                    height={80}
                  />
                )}
                {/* Other content */}
              </div>
            </div>
            <h3 className="text-2xl font-bold  ">{card.title}</h3>
            <p className="font-normal text-base ">{card.description}</p>

            {showLink && card.href && (
              <Link
                href={card.href}
                passHref
                className="flex items-center justify-center gap-4 text-xl font-medium"
              >
                <span className="hover:text-white">Read More</span>
                <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* <div className="grid  gap-[10px] md:hidden">
        {cardItems.map((card, index) =>
          cardlink && card.link ? (
            <Link
              href={card.link}
              passHref
              key={index}
              className="flex items-center"
            >
              <div
                className="relative z-10 w-full bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2   overflow-hidden rounded-[7px] shadow-lg transition-transform duration-300 transform hover:scale-110 min-h-[100px]"
                styles={{
                  backgroundPosition: "0%",
                  borderColor: `#${bColor}`,
                  height: `${heightcard}`,
                  borderRadius: "20px",
                }}
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  {isMainPage ? (
                    <CustomImage
                      publicImage={card.image}
                      alt="icons"
                      width="60pxpx"
                      height="60pxpx"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px]">
                      <ImageComponent
                        src={card.image}
                        alt="icons"
                        width={60}
                        height={60}
                      />
                    </div>
                  )}
                </div>
                <div className="page-text flex flex-col gap-2">
                  {" "}
                  <h3 className="font-bold text-sm">{card.title}</h3>
                  <p className="font-normal text-xs text-black ">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="relative z-10 bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2  w-full overflow-hidden rounded-[7px] shadow-lg min-h-[100px]"
              styles={{
                backgroundPosition: "0%",
                borderColor: `#${bColor}`,
                height: `${heightcard}`,
                borderRadius: "20px",
              }}
            >
              <div className="w-[60pxpx] h-[60pxpx]">
                {isMainPage ? (
                  <CustomImage
                    publicImage={card.image}
                    alt="icons"
                    width="60pxpx"
                    height="60pxpx"
                  />
                ) : (
                  <div className="w-[60px] h-[60px]">
                    <ImageComponent
                      src={card.image}
                      alt="icons"
                      width={60}
                      height={60}
                    />
                  </div>
                )}
              </div>
              <div className="page-text flex flex-col gap-2">
                {" "}
                <h3 className="font-bold text-sm">{card.title}</h3>
                <p className="font-normal text-xs text-black ">
                  {card.description}
                </p>
              </div>
            </div>
          )
        )}
      </div> */}
    </>
  );
};

export default Card;
