"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageComponent from "@/lib/ImageComponent";

export default function Feature({
  heading,
  paragraph,
  li1,
  li2,
  li3,
  li4,
  p1,
  p2,
  bgColor,
  hoverBgColor,
  userPanelCards,
  borderColor,
  adminPanelCards,
  advancePanelCards,
  managenentPanelCards,
  headingBG,
  Image1,
  Image2,
  Image3,
  Image4,
  showLi4,
  textColor,
  backColor
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const [activeItem, setActiveItem] = useState(li1); // Initially set the active item to li1
  const [userPanelVisible, setUserPanelVisible] = useState(true);
  const [adminPanelVisible, setAdminPanelVisible] = useState(false);
  const [advancePanelVisible, setAdvancePanelVisible] = useState(false);
  const [managementPanelVisible, setManagementPanelVisible] = useState(false);
  const [advanceContentVisible, setAdvanceContentVisible] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemLeave = () => {
    setHoveredItem(null);
  };
  const handleItemHover = (item) => {
    setActiveItem(item);
    if (item === li1) {
      setUserPanelVisible(true);
      setAdminPanelVisible(false);
      setAdvancePanelVisible(false);
      setAdvanceContentVisible(false);
      setManagementPanelVisible(false);
    } else if (item === li2) {
      setAdminPanelVisible(true);
      setUserPanelVisible(false);
      setAdvancePanelVisible(false);
      setAdvanceContentVisible(false);
      setManagementPanelVisible(false);
    } else if (item === li3) {
      setUserPanelVisible(false);
      setAdminPanelVisible(false);
      setAdvancePanelVisible(true);
      setAdvanceContentVisible(true);
      setManagementPanelVisible(false);
    } else if (item === li4) {
      setUserPanelVisible(false);
      setAdminPanelVisible(false);
      setAdvancePanelVisible(false);
      setAdvanceContentVisible(true);
      setManagementPanelVisible(true);
    }
  };

  const inactiveItemClass = "text-black";

  const [activeIndex, setActiveIndex] = useState(0);
  const images = [];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); //

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`flex flex-col justify-between w-full h-auto gap-8   py-[48px] px-[20px] lg:px-[40px]`}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <div className="flex flex-col max-w-[1280px] text-center mx-auto gap-[16px]">
          <h3
            className={`text-${textColor}  text-[24px]  lg:text-5xl 2xl:text-[56px] 2xl:leading-[61.6px] font-bold`}
          >
            {heading}
          </h3>
          <p
            className={`text-${textColor}  font-normal text-[16px] xl:text-xl lg:leading-8`}
          >
            {paragraph}
          </p>
        </div>
        <div className="flex flex-col justify-evenly w-full lg:max-w-[1420px]  gap-4 xl:gap-10 mx-auto">
          <ul className="grid grid-cols-2 lg:flex lg:flex-row w-full lg:max-w-[1420px]  mx-auto gap-4 md:gap-10">
            <li
              className={`flex justify-center items-center  text-center w-full  md:px-[10px] md:py-[20px] px-[6px] py-[12px] h-[80px] font-bold  bg-[#282828] border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
              style={{
                backgroundColor:
                  activeItem === li1 ? `${hoverBgColor}` : "#282828",
                borderColor:
                  activeItem === li1 && hoveredItem === li1
                    ? `#${borderColor}`
                    : "#EEEEEE",
                borderWidth:
                  activeItem === li1 && hoveredItem === li1 ? "2px" : "2px",
              }}
              onMouseEnter={() => handleItemHover(li1)}
              onMouseLeave={handleItemLeave}
            >
              <p
                className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}
              >
                {li1}
              </p>
            </li>
            <li
              className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px] px-[6px] py-[12px] font-bold gap-[12px] bg-[#282828]  border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
              style={{
                backgroundColor:
                  activeItem === li2 ? `${hoverBgColor}` : "#282828",
                borderColor:
                  activeItem === li2 && hoveredItem === li2
                    ? `#${borderColor}`
                    : "#EEEEEE",
                borderWidth:
                  activeItem === li2 && hoveredItem === li2 ? "2px" : "2px",
              }}
              onMouseEnter={() => handleItemHover(li2)}
              onMouseLeave={handleItemLeave}
            >
              <p
                className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}
              >
                {li2}
              </p>
            </li>
            {showLi4 && (
              <li
                className={`flex flex-col items-center justify-center text-center w-full h-[80px]  md:px-[10px]  px-[6px] py-[12px] md:py-[20px] font-bold gap-[12px] bg-[#282828]  border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
                style={{
                  backgroundColor:
                    activeItem === li3 ? `${hoverBgColor}` : "#282828",
                  borderColor:
                    activeItem === li3 && hoveredItem === li3
                      ? `#${borderColor}`
                      : "#EEEEEE",
                  borderWidth:
                    activeItem === li3 && hoveredItem === li3 ? "2px" : "2px",
                }}
                onMouseEnter={() => handleItemHover(li3)}
                onMouseLeave={handleItemLeave}
              >
                <p
                  className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}
                >
                  {li3}
                </p>
              </li>
            )}
            <li
              className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px] px-[6px] py-[12px] font-bold gap-[12px] bg-[#282828]  border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
              style={{
                backgroundColor:
                  activeItem === li4 ? `${hoverBgColor}` : "#282828",
                borderColor:
                  activeItem === li4 && hoveredItem === li4
                    ? `#${borderColor}`
                    : "#EEEEEE",
                borderWidth:
                  activeItem === li4 && hoveredItem === li4 ? "2px" : "2px",
              }}
              onMouseEnter={() => handleItemHover(li4)}
              onMouseLeave={handleItemLeave}
            >
              <p
                className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}
              >
                {li4}
              </p>
            </li>
          </ul>

          <div className="flex justify-center w-full lg:max-w-[1420px] mx-auto">
            {activeItem !== li3 && (
              <div
                className={`grid lg:grid-cols-3 w-full lg:max-w-[1420px] gap-4 mx-auto`}
              >
                <div className="order-2 lg:order-1 grid md:gap-4 mx-auto w-full">
                  {activeItem === li1 &&
                    userPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-8 items-center bg-transparent w-full h-auto lg:h-[240px]   border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h1}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p1}
                        </p>
                      </div>
                    ))}
                  {activeItem === li2 &&
                    adminPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-8 items-center bg-transparent w-full h-auto lg:h-[240px]  border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h1}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p1}
                        </p>
                      </div>
                    ))}
                  {activeItem === li4 &&
                    managenentPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-8 items-center bg-transparent w-full h-auto lg:h-[240px]  border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h1}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p1}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="order-1 lg:order-2 flex items-center justify-center w-[220px] sm:w-[350px] lg:w-[320px]  mx-auto">
                  <div className="flex items-center justify-center w-full h-auto mx-auto">
                    {activeItem === li1 && (
                      <ImageComponent
                        src={Image1}
                        alt="Image1"
                        width={300}
                        height={500}
                        className="h-full w-full object-cover"
                      />
                    )}
                    <div className="w-[450px]">
                      {activeItem === li2 && (
                        <ImageComponent
                          src={Image2}
                          alt="Image2"
                          width={350}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    {activeItem === li4 && (
                      <ImageComponent
                        src={Image4}
                        width={330}
                        height={500}
                        alt="Image4"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="order-3 grid md:gap-4 mx-auto w-full">
                  {activeItem === li1 &&
                    userPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-8 bg-transparent w-full h-auto lg:h-[240px]  text-start border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h2}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p2}
                        </p>
                      </div>
                    ))}
                  {activeItem === li2 &&
                    adminPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-8 bg-transparent w-full h-auto lg:h-[240px]   text-start border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h2}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p2}
                        </p>
                      </div>
                    ))}
                  {activeItem === li4 &&
                    managenentPanelCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-8 bg-transparent w-full h-auto lg:h-[240px]  text-start border-white border-b-2 lg:border-2 lg:rounded-md"
                      >
                        <h3
                          className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full`}
                          style={{
                            backgroundColor:
                              windowWidth >= 1024 ? headingBG : "",
                          }}
                        >
                          {card.h2}
                        </h3>
                        <p
                          className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                        >
                          {card.p2}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {activeItem === li3 && (
              <div
                className={`grid lg:grid-cols-3 gap-8 w-full lg:max-w-[1420px] ${
                  advanceContentVisible ? "grid" : "hidden"
                }`}
              >
                <div className="grid gap-4 w-full mx-auto">
                  {advancePanelCards.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-8 items-center bg-transparent w-full h-auto lg:h-[240px]  border-white border-b-2 lg:border-2 lg:rounded-md"
                    >
                      <h3
                        className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
                        style={{
                          backgroundColor:
                            window.innerWidth >= 1024 ? headingBG : "",
                        }}
                      >
                        {card.h1}
                      </h3>
                      <p
                        className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                      >
                        {card.p1}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-[220px] sm:w-[350px]  mx-auto flex items-center justify-center">
                  <ImageComponent
                    src={Image3}
                    width={350}
                    height={500}
                    alt="Image3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid md:gap-4 mx-auto w-full">
                  {advancePanelCards.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-8 bg-transparent w-full h-auto lg:h-[240px]  text-start border-white border-b-2 lg:border-2 lg:rounded-md"
                    >
                      <h3
                        className={`text-${textColor} px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
                        style={{
                          backgroundColor:
                            window.innerWidth >= 1024 ? headingBG : "",
                        }}
                      >
                        {card.h2}
                      </h3>
                      <p
                        className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}
                      >
                        {card.p2}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import gearImg from "../assets/secondpageimages/gear.svg";
// import settingsImg from "../assets/secondpageimages/settings.svg";
// import puzzleImg from "../assets/secondpageimages/puzzle.svg";
// import object1Img from "../assets/foodIMg.png";
// import object2Img from "../assets/Object2.svg";
// import admin from "@/assets/Dashboard.png";
// import food1 from "@/assets/image1.png";
// import food2 from "@/assets/image 2.png";

// export default function Feature({
//   heading,
//   paragraph,
//   li1,
//   li2,
//   li3,
//   li4,
//   p1,
//   p2,
//   bgColor,
//   hoverBgColor,
//   userPanelCards,
//   borderColor,
//   adminPanelCards,
//   advancePanelCards,
//   managenentPanelCards,
//   headingBG,
//   Image1,
//   Image2,
//   Image3,
//   Image4,
//   showLi4,
// }) {
//   const [windowWidth, setWindowWidth] = useState(0);

// useEffect(() => {
//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   setWindowWidth(window.innerWidth);

//   window.addEventListener("resize", handleResize);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

//   const [activeItem, setActiveItem] = useState(li1); // Initially set the active item to li1
//   const [userPanelVisible, setUserPanelVisible] = useState(true);
//   const [adminPanelVisible, setAdminPanelVisible] = useState(false);
//   const [advancePanelVisible, setAdvancePanelVisible] = useState(false);
//   const [managementPanelVisible, setManagementPanelVisible] = useState(false);
//   const [advanceContentVisible, setAdvanceContentVisible] = useState(false);

//   const [hoveredItem, setHoveredItem] = useState(null);

//   const handleItemLeave = () => {
//     setHoveredItem(null);
//   };
//   const handleItemHover = (item) => {
//     setActiveItem(item);
//     if (item === li1) {
//       setUserPanelVisible(true);
//       setAdminPanelVisible(false);
//       setAdvancePanelVisible(false);
//       setAdvanceContentVisible(false);
//       setManagementPanelVisible(false);
//     } else if (item === li2) {
//       setAdminPanelVisible(true);
//       setUserPanelVisible(false);
//       setAdvancePanelVisible(false);
//       setAdvanceContentVisible(false);
//       setManagementPanelVisible(false);
//     } else if (item === li3) {
//       setUserPanelVisible(false);
//       setAdminPanelVisible(false);
//       setAdvancePanelVisible(true);
//       setAdvanceContentVisible(true);
//       setManagementPanelVisible(false);
//     } else if (item === li4) {
//       setUserPanelVisible(false);
//       setAdminPanelVisible(false);
//       setAdvancePanelVisible(false);
//       setAdvanceContentVisible(true);
//       setManagementPanelVisible(true);
//     }
//   };

//   const inactiveItemClass = "text-black";

//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [food1, food2];
//   // console.log(hoverBgColor)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); //

//     return () => clearInterval(interval);
//   }, []);
//   // console.log(borderColor,hoverBgColor)
//   return (
//     <>
//       <div
//         className={`flex flex-col justify-between w-full h-auto gap-8   py-[48px] px-[20px] lg:px-[40px]`}
//         style={{ backgroundColor: `#${bgColor}` }}
//       >
//         <div className="flex flex-col max-w-[1280px] text-center mx-auto gap-[16px]">
//           <h2 className=" text-[24px]  lg:text-5xl 2xl:text-[56px] 2xl:leading-[61.6px] font-bold">
//             {heading}
//           </h2>
//           <p className=" font-normal text-[16px] xl:text-xl lg:leading-8">
//             {paragraph}
//           </p>
//         </div>
//         <div className="flex flex-col justify-evenly w-full lg:max-w-[1420px]  gap-4 xl:gap-10 mx-auto">
//           <ul className="grid grid-cols-2 lg:flex lg:flex-row w-full lg:max-w-[1420px]  mx-auto gap-4 md:gap-10">
//             <li
//               className={`flex justify-center items-center  text-center w-full  md:px-[10px] md:py-[20px] px-[6px] py-[12px] h-[80px] font-bold  bg-transparent border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
//               style={{
//                 backgroundColor:
//                   activeItem === li1 ? `#${hoverBgColor}` : "transparent",
//                 borderColor:
//                   activeItem === li1 && hoveredItem === li1
//                     ? `#${borderColor}`
//                     : "#EEEEEE",
//                 borderWidth:
//                   activeItem === li1 && hoveredItem === li1 ? "2px" : "2px",
//               }}
//               onMouseEnter={() => handleItemHover(li1)}
//               onMouseLeave={handleItemLeave}
//             >
//               <p
//                 className=" mx-auto text-base md:text-lg 2xl:text-xl
// "
//               >
//                 {li1}
//               </p>
//             </li>
//             <li
//               className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px] px-[6px] py-[12px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
//               style={{
//                 backgroundColor:
//                   activeItem === li2 ? `#${hoverBgColor}` : "transparent",
//                 borderColor:
//                   activeItem === li2 && hoveredItem === li2
//                     ? `#${borderColor}`
//                     : "#EEEEEE",
//                 borderWidth:
//                   activeItem === li2 && hoveredItem === li2 ? "2px" : "2px",
//               }}
//               onMouseEnter={() => handleItemHover(li2)}
//               onMouseLeave={handleItemLeave}
//             >
//               <p className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}>
//                 {li2}
//               </p>
//             </li>
//             {showLi4 && (
//               <li
//                 className={`flex flex-col items-center justify-center text-center w-full h-[80px]  md:px-[10px]  px-[6px] py-[12px] md:py-[20px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
//                 style={{
//                   backgroundColor:
//                     activeItem === li3 ? `#${hoverBgColor}` : "transparent",
//                   borderColor:
//                     activeItem === li3 && hoveredItem === li3
//                       ? `#${borderColor}`
//                       : "#EEEEEE",
//                   borderWidth:
//                     activeItem === li3 && hoveredItem === li3 ? "2px" : "2px",
//                 }}
//                 onMouseEnter={() => handleItemHover(li3)}
//                 onMouseLeave={handleItemLeave}
//               >
//                 <p className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}>
//                   {li3}
//                 </p>
//               </li>
//             )}
//             <li
//               className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px] px-[6px] py-[12px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-lg ${inactiveItemClass}`}
//               style={{
//                 backgroundColor:
//                   activeItem === li4 ? `#${hoverBgColor}` : "transparent",
//                 borderColor:
//                   activeItem === li4 && hoveredItem === li4
//                     ? `#${borderColor}`
//                     : "#EEEEEE",
//                 borderWidth:
//                   activeItem === li4 && hoveredItem === li4 ? "2px" : "2px",
//               }}
//               onMouseEnter={() => handleItemHover(li4)}
//               onMouseLeave={handleItemLeave}
//             >
//               <p className={`text-${textColor}  mx-auto text-base md:text-lg 2xl:text-xl`}>
//                 {li4}
//               </p>
//             </li>
//           </ul>

//           <div className="flex justify-center w-full lg:max-w-[1420px] mx-auto">
//             {activeItem !== li3 && (
//               <div
//                 className={`grid lg:grid-cols-3 w-full lg:max-w-[1420px] gap-4  mx-auto`}
//               >
//                 <div className="order-2 lg:order-1 grid  md:gap-4 mx-auto w-full">
//                   {activeItem === li1 &&
//                     userPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full lg:max-w-[350px]  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p1}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li2 &&
//                     adminPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full  lg:max-w-[350px]  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p1}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li4 &&
//                     managenentPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full  lg:max-w-[350px]  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p1}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                 </div>
//                 <div className="order-2 lg:order-1 flex items-center justify-center  w-full ">
//                   {activeItem === li1 && (
//                     <Image
//                       src={Image1}
//                       className="h-[500px] w-[260px] lg:w-[450px] xl:w-[350px] lg:h-[700px]"
//                       objectFit="cover"
//                     />
//                   )}

//                   {activeItem === li2 && (
//                     <Image
//                       src={Image2}
//                       className="w-full h-[550px] lg:w-[600px] rounded-[40px]"
//                       objectFit="cover"
//                     />
//                   )}
//                   {activeItem === li4 && (
//                     <Image
//                       src={Image4}
//                       className="w-auto h-[500px] lg:w-[350px] xl:h-[750px] rounded-[40px]"
//                       objectFit="cover"
//                     />
//                   )}
//                 </div>
//                 <div className="order-1 lg:order-2 grid md:gap-4 mx-auto w-full">
//                   {activeItem === li1 &&
//                     userPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent  w-full  lg:max-w-[350px] text-start  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p2}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li2 &&
//                     adminPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent w-full  lg:max-w-[350px] text-start  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start md:border-b-2 md:border-white w-full h-[80px] md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p2}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li4 &&
//                     managenentPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent  w-full  lg:max-w-[350px] text-start  border-white border-b-2 lg:border-2 lg:rounded-md">
//                           <h3
//                             className={`px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-base xl:text-lg py-3 px-3 hidden lg:flex`}>
//                             {card.p2}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                 </div>
//               </div>
//             )}

//             {activeItem === li3 && (
//               <div
//                 className={`grid lg:grid-cols-3 gap-8 ${
//                   advanceContentVisible ? "grid" : "hidden"
//                 }`}
//               >
//                 <div className="order-1 lg:order-2 grid  gap-4  w-full mx-auto">
//                   {advancePanelCards.map((card, index) => (
//                     <>
//                       <div className="flex flex-col gap-8 items-center bg-transparent w-full h-auto lg:h-[240px]   lg:max-w-[350px]  border-white border-b-2 lg:border-2 lg:rounded-md">
//                         <h3
//                           className={`px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
//                           style={{
//                             backgroundColor:
//                               window.innerWidth >= 1024 ? headingBG : "",
//                           }}
//                         >
//                           {card.h1}
//                         </h3>
//                         <p className="text-start text-base xl:text-lg py-3 px-3 hidden lg:flex">
//                           {card.p1}
//                         </p>
//                       </div>
//                     </>
//                   ))}
//                 </div>
//                 <div className="order-1 lg:order-2 w-full h-full flex items-center justify-center">
//                   <Image
//                     src={Image3}
//                     className="lg:w-[600px] h-[300px] lg:h-auto  rounded-[20px]"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="order-1 lg:order-2 grid md:gap-4 mx-auto w-full">
//                   {advancePanelCards.map((card, index) => (
//                     <>
//                       <div className="flex flex-col items-center gap-8 bg-transparent w-full  lg:max-w-[350px] text-start  border-white border-b-2 lg:border-2 lg:rounded-md">
//                         <h3
//                           className={`px-3 py-3 text-lg xl:text-xl font-bold text-start h-[80px] md:border-b-2 md:border-white w-full md:bg-[${headingBG}]`}
//                           style={{
//                             backgroundColor:
//                               window.innerWidth >= 1024 ? headingBG : "",
//                           }}
//                         >
//                           {card.h2}
//                         </h3>
//                         <p className="text-start text-base xl:text-lg py-3 px-3 hidden lg:flex">
//                           {card.p2}
//                         </p>
//                       </div>
//                     </>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
