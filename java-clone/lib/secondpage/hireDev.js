'use client'
import CustomImage from "@/components/BlogComponents/CustomeImage";
import { useState } from "react";
import "@/components/companies/links.css";
import PopupForm from "@/components/formSection/PopupForm";

const textArray = [
  "App Development Company",
  "Web Development Company",
  "React JS Development Company",
  "IOS Development Company",
  "E-Commerce Development Company",
  "React Native App Development Company",
  "Android App Development Company",
  "Mobile App Development Company",
];
export default function HiringDevs({
  heading,
  textcolor,
  paragraph1,
  paragraph2,
  p1,
  p2,
  p3,
  p4,
  bgColor,
  btntxt,
  textcolor1,
  direction,
  color1,
  color2,
  divBtn,
  listData,
}) {
  const linkStyle = {
    background: `linear-gradient(to ${direction}, ${color1}, ${color2})`,
    /* Additional styles */
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const textLoop = [...textArray, ...textArray];
  return (
    <>
        <PopupForm isOpen={isOpen} onClose={handleClose} />
      <div
        className={`flex items-center justify-between 
    w-full h-auto   px-[10px] xl:px-[100px]  gap-4 md:flex hidden `}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <div className="grid grid-cols-2    mx-auto  ">
          <div className="flex justify-end items-end">
            {" "}
            <div className={`flex justify-end  `}>
              <CustomImage
                publicImage="/assets/hiring-developers-image.webp"
                // width="300px"
                height="400px"
              />
            </div>
          </div>

          <div className="mx-auto gap-[16px] flex flex-col justify-center text-start max-w-[800px] lg:py-[40px] py-[20px] child-text">
            <h2 className="font-bold  text-black">
              {heading}
              {/* <span style={{ color: `black` }}>{firstTwoWords}</span>{" "}
            <span style={{ color: `${textcolor}` }}>{middleTwoWords}</span>{" "}
            {remainingWords}{" "}
            <span style={{ color: `black` }}>{lastTwoWords}</span>{" "} */}
            </h2>

            <p className=" font-normal lg:flex hidden">{paragraph1}</p>
            <p className="font-normal lg:flex hidden">{paragraph2}</p>
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="md:flex flex-col hidden"
            >
              {Array.isArray(listData) && listData.length > 0 ? (
                listData.map((data, index) => <li key={index}>{data}</li>)
              ) : (
                <li className="list-none"></li> // Optionally, you can show a placeholder if listData is empty or undefined
              )}
            </ul>

            <div className="buttonText">
            <button
            onClick={handleOpen}
              className={` px-4 py-2  buttonGradient  w-fit transition-transform duration-300 transform hover:scale-110 hidden lg:flex rounded-[5px] text-${btntxt}`}
              // style={{ backgroundColor: `${divBtn}` }}
            >
              Hire Now
            </button>
          </div>
          </div>
          {/* <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-[48px] w-full  transition-opacity duration-100 ease-in-out ${
            inView ? "zoom-in" : "opacity-0 pointer-events-none"
          }`}
        > */}
        </div>
      </div>
      <div
        className={`flex items-center justify-between 
    w-full h-auto   px-[10px] xl:px-[100px] lg:py-[40px] py-[20px]  gap-4  md:hidden`}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <div className="grid gap-3     mx-auto ">
          {" "}
          <div className="mx-auto gap-4 flex flex-col justify-center items-center text-center max-w-[800px] child-text">
            <h2 className="font-bold  text-black">
              {heading}
              {/* <span style={{ color: `black` }}>{firstTwoWords}</span>{" "}
            <span style={{ color: `${textcolor}` }}>{middleTwoWords}</span>{" "}
            {remainingWords}{" "}
            <span style={{ color: `black` }}>{lastTwoWords}</span>{" "} */}
            </h2>
            <div className={`flex justify-end  `}>
              <CustomImage
                publicImage="/assets/hiring-developers-image.webp"
                // width="300px"
                height="400px"
              />
            </div>
          </div>
          <p className=" font-normal  ">{paragraph1}</p>
          <p className="font-normal  ">{paragraph2}</p>
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="flex flex-col gap-2 "
          >
            {Array.isArray(listData) && listData.length > 0 ? (
              listData.map((data, index) => (
                <li key={index} className="text-xs">
                  {data}
                </li>
              ))
            ) : (
              <li className="list-none"></li> // Optionally, you can show a placeholder if listData is empty or undefined
            )}
          </ul>
          <div className="buttonText">
            <button
            onClick={handleOpen}
              className={`px-4 py-2  buttonGradient  w-fit transition-transform duration-300 transform hover:scale-110 rounded-[5px] text-${btntxt}`}
              // style={{ backgroundColor: `${divBtn}` }}
            >
              Hire Now
            </button>
          </div>
        </div>
        {/* <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-[48px] w-full  transition-opacity duration-100 ease-in-out ${
            inView ? "zoom-in" : "opacity-0 pointer-events-none"
          }`}
        > */}
    
      </div>
      {/* <div className="xl:px-[100px]  lg:py-[40px] p-[20px]">
        <div className="h-auto w-full overflow-hidden py-[40px] px-5 flex flex-col justify-center items-center bg-white rounded-lg md:rounded-xl">
          <section id="marquee__container" className="p-0 ">
      
            <ol className="marquee__content gap-[6rem] ">
          
              {textLoop.map((textloop, index) => (
                <li key={index} className=" px-8 flex flex-col ">
                  <h2 className="text-xl md:text-3xl">{textloop}</h2>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div> */}
    </>
  );
}
