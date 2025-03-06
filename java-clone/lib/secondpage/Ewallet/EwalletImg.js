"use client";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function EwalletImg({
  heading,
  paragraph,
  gif,
  justifyContent,
  text,
  textposition,
  contentposition,
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
    <div className="relative w-full h-[1000px] lg:h-[900px] xl:h-screen  overflow-hidden">
      <Image src={bgImage} alt="background" layout="fill" objectFit="cover"  />
      <div className="absolute inset-0 z-10 bg-black opacity-80"></div>

      <div
        className={`absolute inset-0 flex flex-col lg:flex-row lg:gap-0 gap-14  justify-${justifyContent} items-${contentposition} px-[20px] py-[60px] lg:py-[70px] lg:px-[100px] 2xl:px-[130px] lg:pb-0`}
      >
        <div
          className={`w-full lg:max-w-[700px] h-auto flex flex-col justify-center items-center gap-8 `}
        >
          <div
            className={`text-${textposition} w-full mx-auto `}
            style={{
              color: `${textColor1}`,
              // transform: `translateX(${isVisible ? "0" : "-100vw"})`,
              // transition: "transform 0.3s ease",
            }}
          >
            <h1
              className={`relative z-10 font-bold md:text-4xl w-auto lg:text-start text-center  text-2xl lg:text-5xl 2xl:text-6xl 2xl:leading-[68px]`}
            >
              {heading}
            </h1>
          </div>
          <div
            className={`text-${textposition} w-full`}
            style={{
              color: `${textColor1}`,
              // transform: `translateX(${isVisible ? "0" : "-100vw"})`,
              // transition: "transform 0.05s ease",
            }}
          >
            <p
              className={`relative z-10 font-medium text-base md:text-lg lg:text-xl lg:text-start text-center`}
          
            >{paragraph}</p>
          </div>
          <div
            className={`relative z-10 flex justify-center lg:justify-start text-${textposition} w-full hidden lg:flex`}
            style={{
              transform: `translateY(${isVisible ? "0" : "50px"})`,
              transition: "transform 0.5s ease",
            }}
          >
            <Link href="#formfields">
            <button
              className={`flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl md:w-[380px] h-[52px] px-7 py-2 text-[16px] md:text-lg lg:text-xl font-bold`}
              style={{ backgroundColor: `#${btnbg}`, color: `${btntextcolor}` }}
            >
              <span className="lg:text-2xl">{text}</span>
              <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 ml-2 animate-bounce-horizontal">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-white text-xl "
                />
              </div>
            </button>
            </Link>
          </div>
          <div
            className={`relative z-10 flex justify-center lg:justify-start text-${textposition} w-full lg:hidden`}
            style={{
              transform: `translateY(${isVisible ? "0" : "50px"})`,
              transition: "transform 0.5s ease",
            }}
          >
            <Link href="#formfields1">
            <button
              className={`flex items-center justify-between transition-transform duration-300 transform hover:scale-105 rounded-full shadow-2xl md:w-[380px] h-[52px] px-7 py-2 text-[16px] md:text-lg lg:text-xl font-bold`}
              style={{ backgroundColor: `#${btnbg}`, color: `${btntextcolor}` }}
            >
              <span className="lg:text-2xl">{text}</span>
              <div className="flex items-center justify-center bg-black rounded-full w-10 h-10 ml-2 animate-bounce-horizontal">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-white text-xl "
                />
              </div>
            </button>
            </Link>
          </div>
        </div>
        <div
          className="relative z-10 flex items-end justify-center h-full w-full lg:overflow-hidden firstAnimate"
          style={{
            transform: `translateX(${isVisible ? "0" : "100vw"})`,
            transition: "transform 0.5s ease",
          }}
        >
          <Image src={gif} width={400} height={400} alt="gif" className="w-[400px] 2xl:w-[600px]  h-auto animate-bounce-horizontal"  />
        </div>
        <div
          className="relative z-10 flex items-end justify-center h-full w-full lg:w-[600px] lg:overflow-hidden secondAnimate"
          style={{
            animation: `${
              isVisible ? "moveLeft" : "moveRight"
            } 5s linear infinite`,
          }}
        >
          <Image src={gif} width={400} height={400} alt="gif" className="w-[400px] lg:w-[600px] h-auto "  />
        </div>
      </div>
    </div>
  );
}

// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// export default function EwalletImg({
//   heading,
//   paragraph,
//   text,
//   textposition,
//   contentposition,
//   textColor1,
//   btntextcolor,
//   btnbg,
//   background,
//   content,
// }) {
//   return (
//     <div className="relative w-full h-screen">
//       {background.type === 'image' ? (
//         <Image
//           src={background.src}
//           layout="fill"
//           objectFit="cover"
//           alt="Background Image"
//         />
//       ) : (
//         <video autoPlay muted loop className="absolute inset-0 z-[-1] object-cover">
//           <source src={background.src} type="video/mp4" />
//         </video>
//       )}

//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div
//         className={`absolute inset-0 flex flex-col justify-center items-${contentposition} p-[20px] lg:p-[40px] 2xl:px-[100px]`}
//       >
//         <div
//           className={`w-full lg:max-w-[900px] h-auto flex flex-col justify-center items-center gap-4`}
//         >
//           <div className={`text-${textposition} w-full mx-auto`}>
//             <h1
//               className={`font-extrabold md:text-4xl text-[28px] lg:text-5xl 2xl:text-6xl`}
//               style={{ color: `${textColor1}` }}
//             >
//               {heading}
//             </h1>
//           </div>
//           <div className={`text-${textposition} w-full`}>
//             <p
//               className={`font-normal text-lg lg:text-xl `}
//               style={{ color: `${textColor1}` }}
//               dangerouslySetInnerHTML={{ __html: paragraph }}
//             ></p>
//           </div>
//           <div className={`text-${textposition} w-full`}>
//             <button
//               className={` transition-transform duration-300 transform hover:scale-110 rounded-2xl shadow-2xl  w-auto h-[52px] px-7 py-2  text-[16px] md:text-lg lg:text-xl  font-medium `}
//               style={{ backgroundColor: `#${btnbg}` }}
//             >
//               <Link
//                 href="/"
//                 className={`flex items-center justify-between gap-4 `}
//                 style={{ color: `${btntextcolor}` }}
//               >
//                 {text}
//                 <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
