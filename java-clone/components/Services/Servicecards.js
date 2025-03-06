"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useInView } from "react-intersection-observer";
import CustomImage from "../BlogComponents/CustomeImage";
export default function ServicesCards({ heading, paragraph, services }) {
  return (
    <div className="container flex flex-col gap-8 mx-auto p-[20px] lg:p-[40px]">
      <div className="flex flex-col gap-4 max-w-[1280px] mx-auto text-center child-text">
        <h2 className=" ">{heading}</h2>
        <p className="text-lg lg:text-xl font-normal">{paragraph}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1520px] mx-auto">
        {services.map((service) => {
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
              key={service.id}
              className={`bg-white rounded-lg shadow-2xl hover:shadow-lg  flex flex-col gap-2 transform transition-all duration-700 ease-out ${animateClass}`}
            >
              <div className="rounded-tl-[60px] h-[300px] overflow-hidden">
                <CustomImage
                  publicImage={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover rounded-br-[60px] transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 ">
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {service.title}
                </h3>
                <p className="text-black lg:text-lg text-[16px] leading-[21.09px]">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  passHref
                  className="text-blue-500 font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
