"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CustomImage from "@/components/BlogComponents/CustomeImage";
const PanelCard = ({ icon1, icon2, h1, h2, p1, p2, textColor, headingBG, windowWidth }) => (
  <>
    <div className="flex flex-col gap-4 items-center bg-transparent w-full h-auto border-[#0F53FF] border-[1px] rounded-md p-4">
      <div className="flex gap-2 md:gap-4 h-fit items-center justify-center w-full">
        <CustomImage publicImage={icon1} width="30px" />
        <h4
          className={`text-${textColor} text-base md:text-lg xl:text-xl font-bold text-start w-full h-auto md:bg-[${headingBG}]`}
          style={{ backgroundColor: windowWidth >= 1024 ? headingBG : "" }}
        >
          {h1}
        </h4>
      </div>
      <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lg`}>{p1}</p>
    </div>
    <div className="flex flex-col gap-4 items-center bg-transparent w-full h-auto border-[#0F53FF] border-[1px] rounded-md p-4">
      <div className="flex gap-2 md:gap-4 h-fit items-center justify-center w-full">
        <CustomImage publicImage={icon2} width="30px" />
        <h4
          className={`text-${textColor} text-base md:text-lg xl:text-xl font-bold text-start w-full h-auto md:bg-[${headingBG}]`}
          style={{ backgroundColor: windowWidth >= 1024 ? headingBG : "" }}
        >
          {h2}
        </h4>
      </div>
      <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lg`}>{p2}</p>
    </div>
  </>
);

export default function Panels({
  headingPart1,
  headingPart2,
  paragraph,
  li1,
  li2,
  li3,
  li4,
  li1Small1,
  li1Small2,
  li1Small3,
  li1Small4,
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

  showLi4,
  textColor,
  textColor1,
  textColor2,
  textColor3,
  textColor4,
  panelImage,
  showLi3,
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [clicked, setClicked] = useState(false);
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
  const [clickedItems, setClickedItems] = useState(new Set()); // Track clicked items
  // const [isZoomed, setIsZoomed] = useState(false);

  const handleItemClick = (item) => {
    // e.currentTarget.style.transform = 'scale(1.1)';
    setActiveItem(item);
    setClicked(true);
    setClickedItems((prev) => new Set(prev).add(item));
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });


  const animateClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";
  return (
    <>
      <div
        className={`flex flex-col justify-between w-full h-auto gap-8   lg:py-[40px] p-[20px] xl:px-[100px]`}
        style={{ backgroundColor: `#${bgColor}` }}
      >
        <div className="child-text flex flex-col max-w-[1280px] text-center mx-auto gap-[16px]">
          <h2 className={`text-${textColor}  font-bold`}>
            {/* {heading} */}
            {headingPart1}
            <span className="text-[#0F53FF]"> {headingPart2}</span>
          </h2>
          <p className={`text-${textColor}  font-normal md:flex hidden`}>
            {paragraph}
          </p>
        </div>
        <div ref={ref} className={`flex flex-col justify-evenly w-full  gap-4 xl:gap-10 mx-auto transform transition-all duration-700 ease-out ${animateClass}`}>
          <div className="">
            <ul className="flex w-full mx-auto gap-1 md:gap-2 lg:gap-4">
              <li
                className={`flex justify-center items-center text-center w-full  md:px-[12px] md:py-[4px] lg:py-6 py-[3px]  font-bold bg-[#3A6DECBF] rounded-[6px] mx-auto ${
                  clicked && activeItem === li1 ? "scale-105" : ""
                }`}
                style={{
                  background: activeItem === li1 ? "#3A6DECBF" : "#3A6DECBF",
                }}
                onClick={() => handleItemClick(li1)}
              >
                <div className="flex lg:flex-row flex-col gap-1 md:gap-4 items-center justify-between">
                  <div className="w-[20px] md:w-[40px]">
                    {" "}
                    <CustomImage
                      publicImage="/assets/icons/user-panel-icon.png"
                      width="100%"
                    />
                  </div>

                  <h3
                    className={`w-fit text-${textColor1} mx-auto text-base md:text-lg 2xl:text-xl lg:flex hidden`}
                  >
                    {li1}
                  </h3>
                  <h3
                    className={`w-fit text-${textColor1} mx-auto text-base md:text-lg 2xl:text-xl lg:hidden`}
                  >
                    {li1Small1}
                  </h3>
                </div>
              </li>
              <li
                className={`flex flex-col items-center justify-center text-center w-full  md:px-[12px] md:py-[4px] lg:py-6 py-[3px]  font-bold gap-[12px] bg-[#FFCF98] rounded-[6px] ${
                  clicked && activeItem === li2 ? "scale-105" : ""
                }`}
                style={{
                  background: activeItem === li2 ? "#FFCF98" : "#FFCF98",
                }}
                onClick={() => handleItemClick(li2)}
              >
                <div className="flex lg:flex-row flex-col gap-1 md:gap-4  items-center justify-between">
                  <div className="w-[20px] md:w-[40px]">
                    {" "}
                    <CustomImage
                      publicImage="/assets/icons/admin-panel-icon.png"
                      width="100%"
                    />
                  </div>

                  <h3
                    className={`text-${textColor2} mx-auto text-base md:text-lg 2xl:text-xl lg:flex hidden`}
                  >
                    {li2}
                  </h3>
                  <h3
                    className={`w-fit text-${textColor2} mx-auto text-base md:text-lg 2xl:text-xl lg:hidden`}
                  >
                    {li1Small2}
                  </h3>
                </div>
              </li>
              {showLi3 && (
                <li
                  className={`flex flex-col items-center justify-center text-center w-full  md:px-[12px] md:py-[4px] lg:py-6 py-[3px]  font-bold gap-[12px] bg-[#E7ABAD] rounded-[6px] ${
                    clicked && activeItem === li3 ? "scale-105" : ""
                  }`}
                  style={{
                    background: activeItem === li3 ? "#E7ABAD" : "#E7ABAD",
                  }}
                  onClick={() => handleItemClick(li3)}
                >
                  <div className="flex lg:flex-row flex-col gap-1 md:gap-4  items-center justify-between">
                    <div className="w-[20px] md:w-[40px]">
                      {" "}
                      <CustomImage
                        publicImage="/assets/icons/advance-panel-icon.png"
                        width="100%"
                      />
                    </div>

                    <h3
                      className={`text-${textColor3} mx-auto text-base md:text-lg 2xl:text-xl lg:flex hidden` }
                    >
                      {li3}
                    </h3>
                    <h3
                    className={`w-fit text-${textColor3}  mx-auto text-base md:text-lg 2xl:text-xl lg:hidden`}
                  >
                    {li1Small3}
                  </h3>
                  </div>
                </li>
              )}
              {showLi4 && (
                <li
                  className={`flex flex-col items-center justify-center text-center w-full  md:px-[12px] md:py-[4px] lg:py-6 py-[3px]  font-bold gap-[12px]  bg-[#91D596] rounded-[6px] transform transition-transform duration-300 ${
                    clicked && activeItem === li4 ? "scale-105" : ""
                  }`}
                  style={{
                    background: activeItem === li4 ? "#91D596" : "#91D596",
                  }}
                  onClick={() => handleItemClick(li4)}
                >
                  <div className="flex lg:flex-row flex-col gap-1 md:gap-4  items-center justify-between">
                    <div className="w-[20px] md:w-[40px]">
                      {" "}
                      <CustomImage publicImage={panelImage} width="100%" />
                    </div>

                    <h3
                      className={`text-${textColor4} mx-auto text-base md:text-lg 2xl:text-xl lg:flex hidden`}
                    >
                      {li4}
                    </h3>
                    <h3
                    className={`w-fit text-${textColor4} mx-auto text-base md:text-lg 2xl:text-xl lg:hidden`}
                  >
                    {li1Small4}
                  </h3>
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="flex justify-center w-full mx-auto">
  {activeItem !== li3 && (
    <div className={`grid sm:grid-cols-3 w-full gap-3 md:gap-4 mx-auto`}>
      {activeItem === li1 && userPanelCards.map((card, index) => (
        <PanelCard
          key={index}
          icon1={card.icon1}
          icon2={card.icon2}
          h1={card.h1}
          h2={card.h2}
          p1={card.p1}
          p2={card.p2}
          textColor={textColor}
          headingBG={headingBG}
          windowWidth={windowWidth}
        />
      ))}

      {activeItem === li2 && adminPanelCards.map((card, index) => (
        <PanelCard
          key={index}
          icon1={card.icon1}
          icon2={card.icon2}
          h1={card.h1}
          h2={card.h2}
          p1={card.p1}
          p2={card.p2}
          textColor={textColor}
          headingBG={headingBG}
          windowWidth={windowWidth}
        />
      ))}

      {activeItem === li4 && managenentPanelCards.map((card, index) => (
        <PanelCard
          key={index}
          icon1={card.icon1}
          icon2={card.icon2}
          h1={card.h1}
          h2={card.h2}
          p1={card.p1}
          p2={card.p2}
          textColor={textColor}
          headingBG={headingBG}
          windowWidth={windowWidth}
        />
      ))}
    </div>
  )}

  {activeItem === li3 && (
    <div className={`grid lg:grid-cols-3 gap-3 md:gap-10 w-full ${advanceContentVisible ? "grid" : "hidden"}`}>
      {advancePanelCards.map((card, index) => (
        <PanelCard
          key={index}
          icon1={card.icon1}
          icon2={card.icon2}
          h1={card.h1}
          h2={card.h2}
          p1={card.p1}
          p2={card.p2}
          textColor={textColor}
          headingBG={headingBG}
          windowWidth={windowWidth}
        />
      ))}
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

// export default function Panel({
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
//         className={`flex flex-col justify-between w-full h-auto gap-4   py-[48px] px-[20px] lg:px-[40px]`}
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
//               className={`flex justify-center items-center  text-center w-full  md:px-[10px] md:py-[20px]  py-[12px] h-[80px] font-bold  bg-transparent border-[1px] border-[#0F53FF] rounded-[6px]`}
//               style={{
//                 backgroundColor:
//                   activeItem === li1 ? `#linear-gradient(to right, #ff7e5f, #feb47b)` : "transparent",
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
//                 className=" mx-auto mx-auto text-base md:text-lg 2xl:text-xl
// "
//               >
//                 {li1}
//               </p>
//             </li>
//             <li
//               className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px]  py-[12px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-[6px]`}
//               style={{
//                 backgroundColor:
//                   activeItem === li2 ? `#linear-gradient(to right, #ff7e5f, #feb47b)` : "transparent",
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
//               <p className={`text-${textColor}  mx-auto mx-auto text-base md:text-lg 2xl:text-xl`}>
//                 {li2}
//               </p>
//             </li>
//             {showLi4 && (
//               <li
//                 className={`flex flex-col items-center justify-center text-center w-full h-auto  md:px-[10px]   py-[12px] md:py-[20px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-[6px]`}
//                 style={{
//                   backgroundColor:
//                     activeItem === li3 ? `#linear-gradient(to right, #ff7e5f, #feb47b)` : "transparent",
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
//                 <p className={`text-${textColor}  mx-auto mx-auto text-base md:text-lg 2xl:text-xl`}>
//                   {li3}
//                 </p>
//               </li>
//             )}
//             <li
//               className={`flex flex-col items-center justify-center text-center w-full  md:px-[10px] h-[80px] md:py-[20px]  py-[12px] font-bold gap-[12px] bg-transparent border-2 border-[#EEEEEE] rounded-lg`}
//               style={{
//                 backgroundColor:
//                   activeItem === li4 ? `#linear-gradient(to right, #ff7e5f, #feb47b)` : "transparent",
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
//               <p className={`text-${textColor}  mx-auto mx-auto text-base md:text-lg 2xl:text-xl`}>
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
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full lg:max-w-[350px]  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h4
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center   w-full h-auto md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
//                             {card.p1}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li2 &&
//                     adminPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full  lg:max-w-[350px]  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h3
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center   w-full h-auto md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
//                             {card.p1}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li4 &&
//                     managenentPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col gap-8 items-center bg-transparent  w-full  lg:max-w-[350px]  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h3
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center  h-[80px]  w-full md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h1}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
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
//                 <div className=" grid md:gap-4 mx-auto w-full">
//                   {activeItem === li1 &&
//                     userPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent  w-full  lg:max-w-[350px] text-start  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h3
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center   w-full h-auto md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
//                             {card.p2}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li2 &&
//                     adminPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent w-full  lg:max-w-[350px] text-start  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h3
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center   w-full h-auto md:bg-[${headingBG}]`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
//                             {card.p2}
//                           </p>
//                         </div>
//                       </>
//                     ))}
//                   {activeItem === li4 &&
//                     managenentPanelCards.map((card, index) => (
//                       <>
//                         <div className="flex flex-col items-center gap-8 bg-transparent  w-full  lg:max-w-[350px] text-start  border-[#0F53FF] border-[1px] rounded-md px-4">
//                           <h3
//                             className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center  h-[80px]  w-full`}
//                             style={{
//                               backgroundColor:
//                                 window.innerWidth >= 1024 ? headingBG : "",
//                             }}
//                           >
//                             {card.h2}
//                           </h3>
//                           <p className={`text-${textColor} text-start text-sm md:text-base xl:text-lghidden lg:flex`}>
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
//                 <div className=" grid  gap-4  w-full mx-auto">
//                   {advancePanelCards.map((card, index) => (
//                     <>
//                       <div className="flex flex-col gap-8 items-center bg-transparent w-full h-auto    lg:max-w-[350px]  border-[#0F53FF] border-[1px] rounded-md px-4">
//                         <h3
//                           className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center  h-[80px]  w-full md:bg-[${headingBG}]`}
//                           style={{
//                             backgroundColor:
//                               window.innerWidth >= 1024 ? headingBG : "",
//                           }}
//                         >
//                           {card.h1}
//                         </h3>
//                         <p className="text-start text-sm md:text-base xl:text-lghidden lg:flex">
//                           {card.p1}
//                         </p>
//                       </div>
//                     </>
//                   ))}
//                 </div>
//                 <div className=" w-full h-full flex items-center justify-center">
//                   <Image
//                     src={Image3}
//                     className="lg:w-[600px] h-[300px] lg:h-auto  rounded-[20px]"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className=" grid md:gap-4 mx-auto w-full">
//                   {advancePanelCards.map((card, index) => (
//                     <>
//                       <div className="flex flex-col items-center gap-8 bg-transparent w-full  lg:max-w-[350px] text-start  border-[#0F53FF] border-[1px] rounded-md px-4">
//                         <h3
//                           className={`px-3  text-base  md:text-lg  xl:text-xl font-bold text-start flex items-center  h-[80px]  w-full md:bg-[${headingBG}]`}
//                           style={{
//                             backgroundColor:
//                               window.innerWidth >= 1024 ? headingBG : "",
//                           }}
//                         >
//                           {card.h2}
//                         </h3>
//                         <p className="text-start text-sm md:text-base xl:text-lghidden lg:flex">
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
