"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
export default function AppDevelopment({
  heading,
  paragraph,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  align,
  backColor,
  colorCard,
  borderColor,
  textcolor,
  color,
}) {
  // State to track whether the component is visible
  const [isVisible, setIsVisible] = useState(false);

  // Reference to the element you want to observe
  const targetRef = useRef(null);

  useEffect(() => {
    // Callback function when the observed element intersects with the viewport
    const callback = (entries) => {
      entries.forEach((entry) => {
        // If the observed element is in viewport
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the state to true to trigger animation
          observer.unobserve(entry.target); // Stop observing once the element is in viewport
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);
  return (
    <div
      className={`flex flex-col w-full  h-auto xl:px-[100px]  
    px-[24px] lg:py-[40px] py-[20px] gap-4  `}
      style={{ backgroundColor: `#${backColor}` }}
    >
      <div
        className="child-text h-auto mx-auto flex flex-col gap-4  text-center"
      >
        <h2
          className={`font-bold text-center   text-${textcolor} `}
        >
          {heading}
        </h2>
        <p className={`font-normal  text-${textcolor}`}>
          {paragraph}
        </p>
      </div>
      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2   mx-auto gap-2 md:gap-10 py-[48px] 2xl:py-[48px] max-h-[1200px] ">
        <div
          className={`flex flex-col w-fit gap-[32px]`}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <div className="lg:flex hidden">
            <Image
              src={image1}
              alt="image1"
              className="mx-auto lg:static"
              width={80}
              height={80}
               
            />
          </div>

          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px] w-auto  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h1}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p1}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col w-fit  gap-[32px] `}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "-100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px]  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h2}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p2}
            </p>
          </div>

          <div className="lg:flex hidden">
            <Image
              src={image2}
              alt="image2"
              className="mx-auto lg:static"
              width={80}
              height={80}
               
            />
          </div>
        </div>
        <div
          className={`flex flex-col w-fit gap-[32px]`}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <Image src={image3}  alt="image3" className="mx-auto lg:flex hidden" width={80} height={80} />

          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px]  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h3}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p3}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col w-fit  gap-[32px] `}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "-100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px]  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h4}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p4}
            </p>
          </div>

          <div className="lg:flex hidden">
            <Image
              src={image4}
              alt="image4"
              className="mx-auto"
              width={80}
              height={80}
               
            />
          </div>
        </div>
        <div
          className={`flex flex-col w-fit gap-[32px]`}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <div className="lg:flex hidden">
            <Image
              src={image5}
              alt="image5"
              className="mx-auto"
              width={80}
              height={80}
               
            />
          </div>

          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px]  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h5}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p5}
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col w-fit  gap-[32px] `}
          ref={targetRef}
          style={{
            transform: `translateY(${isVisible ? "0" : "-100%"})`, // Initially set cards below the viewport
            opacity: isVisible ? 1 : 0, // Set opacity to 0 initially and gradually increase it when visible
            overflow: "hidden",
            transition: "transform 2s ease, opacity 1s ease", // Add opacity transition
          }}
        >
          <div
            className={`rounded-[20px] px-3 py-6 gap-[16px]  h-auto `}
            style={{
              backgroundColor: `#${colorCard}`,
              border: `2px solid #${borderColor}`,
            }}
          >
            <h3
              className={`font-bold text-sm md:text-base text-${color}  text-center`}
            >
              {h6}
            </h3>
            <br />
            <p
              className={`font-normal text-xs leading-[18px] text-${color} text-${align}`}
            >
              {p6}
            </p>
          </div>
          <div className="lg:flex hidden">
            <Image
              src={image6}
              alt="image6"
              className="mx-auto"
              width={80}
              height={80}
               
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";

// export default function EwalletImg({
//   heading,
//   paragraph,
//   gif,
//   justifyContent,
//   text,
//   textposition,
//   contentposition,
//   textColor1,
//   btntextcolor,
//   btnbg,
//   bgImage,
//   content,
// }) {
// const [isVisible, setIsVisible] = useState(false);

// useEffect(() => {
//   // Trigger animation after component mounts
//   setIsVisible(true);
// }, []);

//   return (
//     <div className="relative w-full min-h-[1000px] lg:h-screen overflow-hidden">
//       <Image src={bgImage} layout="fill" objectFit="cover" />
//       <div className="absolute inset-0 bg-black opacity-70"></div>

//       <div
//         className={`absolute inset-0 flex flex-col lg:flex-row lg:gap-0 gap-14  justify-${justifyContent} items-${contentposition} px-[20px] py-[80px] lg:px-[100px] 2xl:px-[130px] lg:pb-0`}
//       >
//         <div
//           className={`w-full lg:max-w-[700px] h-auto flex flex-col justify-center items-center gap-8`}
//         >
//           <div
//             className={`text-${textposition} w-full mx-auto`}
//             style={{
//               color: `${textColor1}`,
// transform: `translateX(${isVisible ? "0" : "-100vw"})`,
// transition: "transform 0.3s ease",
//             }}
//           >
//             <h1
//               className={`font-bold md:text-4xl w-auto lg:text-start text-center  text-2xl lg:text-[48px] lg:leading-[68px] 2xl:text-6xl 2xl:leading-[68px]`}
//             >
//               {heading}
//             </h1>
//           </div>
//           <div
//             className={`text-${textposition} w-full`}
//             style={{
//               color: `${textColor1}`,
//               // transform: `translateX(${isVisible ? "0" : "-100vw"})`,
//               // transition: "transform 0.05s ease",
//             }}
//           >
//             <p
//               className={`font-medium text-base md:text-lg lg:text-xl lg:text-start text-center`}
//               dangerouslySetInnerHTML={{ __html: paragraph }}
//             ></p>
//           </div>
//           <div
//             className={`flex justify-center lg:justify-start text-${textposition} w-full`}
//             style={{
//               transform: `translateY(${isVisible ? "0" : "50px"})`,
//               transition: "transform 0.5s ease",
//             }}
//           >
//             <button
//               className={`flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl md:w-[380px] h-[52px] px-7 py-2 text-[16px] md:text-lg lg:text-xl font-bold`}
//               style={{ backgroundColor: `#${btnbg}`, color: `${btntextcolor}` }}
//             >
//               <span className="lg:text-2xl">{text}</span>
//               <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 ml-2 animate-bounce-horizontal">
//                 <FontAwesomeIcon
//                   icon={faAngleRight}
//                   className="text-white text-xl "
//                 />
//               </div>
//             </button>

//           </div>
//         </div>
//         <div
//           className="flex items-end justify-center h-full w-full lg:overflow-hidden firstAnimate"
//           style={{
//             transform: `translateX(${isVisible ? "0" : "100vw"})`,
//             transition: "transform 0.5s ease",
//           }}
//         >
//           <Image src={gif} className="w-[400px] lg:w-[600px] h-auto animate-bounce-horizontal" />
//         </div>
//         <div
//           className="flex items-end justify-center h-full w-full lg:w-[600px] lg:overflow-hidden secondAnimate"
//           style={{
//             animation: `${
//               isVisible ? "moveLeft" : "moveRight"
//             } 5s linear infinite`,
//           }}
//         >
//           <Image src={gif} className="w-[400px] lg:w-[600px] h-auto " />
//         </div>
//       </div>
//     </div>
//   );
// }
