"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React from "react";
import Link from "next/link";
import StartWithUS from "@/components/getStarted/startWithus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Ensure you're importing this icon
import CustomImage from "@/components/BlogComponents/CustomeImage";
export default function ServicePagesCards({
  height,
  headingPart1,
  headingPart2,
  paragraph,
  techcard,
  color,
  bgcolor,
  textcolor,
  gridStyles,
  cardType = "gradient",
}) {
  const gradients = [
    "90deg, rgba(249, 135, 13, 0.66) 0%, rgba(237, 186, 131, 0.66) 100%",
    "90deg, rgba(15, 83, 255, 0.66) -10.14%, rgba(226, 224, 222, 0.66) 120.2%",
    "90deg, rgba(86, 8, 73, 0.66) 0%, rgba(190, 73, 73, 0.66) 100%",
    "90deg, rgba(205, 20, 9, 0.66) 0%, rgba(244, 182, 115, 0.66) 100%",
    "90deg, rgba(225, 240, 44, 0.66) 0%, rgba(247, 217, 185, 0.66) 100%",
    "90deg, rgba(255, 153, 230, 0.66) 0%, rgba(244, 223, 200, 0.66) 100%",
    "90deg, rgba(205, 20, 9, 0.66) 0%, rgba(244, 182, 115, 0.66) 100%",
    "90deg, rgba(225, 240, 44, 0.66) 0%, rgba(247, 217, 185, 0.66) 100%",
    "90deg, rgba(255, 153, 230, 0.66) 0%, rgba(244, 223, 200, 0.66) 100%",
  ];

  return (
    <div>
      <div
        className={`flex flex-col w-full px-[20px] lg:py-[40px] py-[20px] xl:px-[100px] gap-4 lg:gap-6`}
        style={{ backgroundColor: `${bgcolor}` }}
      >
        {/* Heading and Paragraph */}
        <div className=" mx-auto text-center flex flex-col gap-6 child-text max-w-[1280px]">
          <h2 className="font-bold">
            {headingPart1}
            <span className={`text-[#0F53FF]`}> {headingPart2}</span>
          </h2>
          <p className=" ">{paragraph}</p>
        </div>

        {/* Cards */}
        <div className={gridStyles}>
          {cardType === "gradient"
            ? // First type of card - Gradient cards
              techcard.map((card, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });

                const animateClass = inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10";
                return (
                  <div
                    ref={ref}
                    key={index}
                    className={`flex flex-col bg-[#f8f8f8] rounded-[36px] gap-[24px] w-full h-full shadow-md hover:shadow-lg  transform transition-all duration-700 ease-out ${animateClass}`}
                  >
                    <div className="pb-4">
                      <div
                        className="rounded-t-[36px] h-[100px] relative"
                        style={{
                          background: `linear-gradient(${gradients[index]})`,
                        }}
                      >
                        {/* Card Image */}
                        <div className="rounded-full border-2 border-white w-[110px] h-[110px] p-2 mx-auto absolute z-10 inset-0 top-10">
                          <div
                            className="p-4 flex items-center justify-center rounded-full bg-white w-[90px] h-[90px] mx-auto"
                            style={{ backgroundColor: color }}
                          >
                            <CustomImage
                              publicImage={card.image}
                              alt={card.title}
                              width="80px"
                              height="80px"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card Title */}
                    <div className="p-4 flex items-center flex-col gap-3 text-center page-text">
                      <h3>{card.title}</h3>
                      {/* Card Description */}
                      <p>{card.description}</p>
                      {/* Read More Link */}
                      {card.href && (
                        <Link
                          href={card.href}
                          passHref
                          className="flex items-center gap-4 lg:text-xl font-medium text-blue-500"
                        >
                          <span>Read More</span>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            height={20}
                            width={20}
                            className="ml-2"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })
            : // Second type of card - Minimal border cards
              techcard.map((card, index) => {
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.5,
                });

                const animateClass = inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10";
                return (
                  <div
                    ref={ref}
                    key={index}
                    className={`border-[1px] border-[#0F53FF] flex flex-col items-center justify-center gap-3 rounded-sm text-center p-4 transform transition-all duration-700 ease-out ${animateClass}`}
                  >
                    <div className="bg-[#F0EFEF] w-24 h-24 md:w-[135px] md:h-[135px] flex items-center justify-center rounded-full  mx-auto">
                      <CustomImage
                        publicImage={card.image}
                        alt={card.title}
                        width="50%"
                        height="50%"
                      />
                    </div>
                    <div className=" mx-auto text-center flex flex-col gap-3 page-text">
                      <h3 className="font-bold">{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
