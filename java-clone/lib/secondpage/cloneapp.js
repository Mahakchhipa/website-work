"use client";

import CustomImage from "@/components/BlogComponents/CustomeImage";
import PopupForm from "@/components/formSection/PopupForm";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function CloneApp({
  headingPart1,
  headingPart2,
  paragraph,
  id,
  cloneData,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <div
      id={id}
      className="w-full h-auto bg-[#ffffff] flex flex-col gap-4 px-[20px] lg:py-[40px] py-[20px] xl:px-[100px]"
    >
      <div className="mx-auto  flex lg:flex-row flex-col justify-between gap-4">
        <div className="child-text text-center flex flex-col gap-6">
          <h2 className=" font-bold text-[#0F172A]">
            {headingPart1}{" "}
            <span className="text-[#0F53FF] ">{headingPart2}</span>
          </h2>
          <p className="text-lg md:flex hidden">{paragraph}</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[20px] xl:gap-[40px] lg:grid hidden">
        {cloneData.map((data) => {
             const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
          return (
            <div   ref={ref} key={data.id} className={`grid gap-4 transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}>
              <div
                className="grid items-center justify-center bg-white shadow-2xl rounded-3xl "
                style={{ boxShadow: "0px 4px 22px 0px #0000001C" }}
              >
                <div className="w-full h-full flex justify-start items-start">
                  <CustomImage
                    publicImage={data.image}
                    width="100%"
                    rounded="rounded-t-[24px]"
                  />
                </div>
                <div className="page-text flex flex-col gap-3 px-8 py-8 border-[#000000] border-1 text-start">
                  <h3>{data.label}</h3>
                  <p className="">{data.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-[10px] md:gap-[20px] lg:hidden">
        {cloneData.map((mobiledata) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
          return (
            <div
            ref={ref}
              key={mobiledata.id}
              className={`border-black border-[1px] rounded-[17px] p-4 flex flex-col gap-3 transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}
            >
              <div className="">
                <CustomImage
                  publicImage={mobiledata.image}
                  rounded="rounded-md"
                  width="100%"
                />
              </div>
              <div className="page-text flex flex-col items-center justify-center h-fit p-2 md:py-4 px-2 ">
                <h3 className="font-bold text-center">{mobiledata.label}</h3>
                <p className=" text-center">{mobiledata.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="buttonText flex items-center justify-center  md:mt-8">
        <button onClick={handleOpen} className="bg-[#4E4E4E] text-white p-2 lg:p-3 rounded-[5px] transition-transform duration-300 transform hover:scale-105 hover:bg-[#0F53FF] ">
          Get A Clone App
        </button>
      </div>
      <PopupForm isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
