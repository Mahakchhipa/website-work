"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import CustomImage from "@/components/BlogComponents/CustomeImage";
export default function TechSuccess({
  headingPart1,
  headingPart2,
  paragraph,
  n1,
  n2,
  n3,
  n4,
  p1,
  p2,
  p3,
  p4,
  bgColor,
}) {
  const { ref, inView } = useInView();
  const [startCounting, setStartCounting] = useState(false);
  const [countN1, setCountN1] = useState(false);
  const [countN2, setCountN2] = useState(false);
  const [countN3, setCountN3] = useState(false);
  const [countN4, setCountN4] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const text = heading;
  const [displayText, setDisplayText] = useState("");

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const interval = setInterval(() => {
  //     if (isVisible && currentIndex <= text.length) {
  //       setDisplayText(text.substring(0, currentIndex));
  //       currentIndex++;
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100); // Adjust the delay between characters (in milliseconds)

  //   return () => clearInterval(interval);
  // }, [isVisible, text]);

  useEffect(() => {
    if (inView && !startCounting) {
      setStartCounting(true);
    }
  }, [inView, startCounting]);

  useEffect(() => {
    if (startCounting) {
      setCountN1(true);
      setCountN2(true);
      setCountN3(true);
      setCountN4(true);
    }
  }, [startCounting]);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
    style={{backgroundColor:`${bgColor}`}}
      className={`w-full lg:py-[40px] py-[20px]  px-[20px] xl:px-[100px] gap-[20px]`}
      ref={ref}
    >
      <div className="flex flex-col gap-[10px] md:gap-6 w-full mx-auto  items-center justify-between ">
        <div className="child-text flex flex-col  gap-[10px] md:gap-4 items-center justify-between text-center  w-auto   rounded-xl mx-auto">
          <h2
            className={`text-lg md:text-2xl lg:text-4xl text-center   text-black font-bold 
       `}
          >
            {headingPart1}
            <span className="text-[#1052FE]"> {headingPart2}</span>
          </h2>
          <p className="">
            {paragraph}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto w-full lg:max-w-[1000px] ">
          <div className="flex flex-col items-center  justify-center rounded-lg w-full bg-[#D1BEFD] mx-auto min-h-[150px] lg:h-auto">
            <div className="flex flex-col  justify-between gap-[10px] items-center text-center">
              <div className=" lg:h-auto lg:w-auto">
          <CustomImage publicImage="/assets/icons/trophy-icon.svg"/>
              </div>

              <div className="">
                <p className="lg:text-4xl  text-xl font-semibold text-[#1F2937]">
                  {countN1 && <CountUp start={0} end={parseInt(n1)} />}
                  {!countN1 && n1}+
                </p>
                <p className="text-sm uppercase text-[#4B5563]">{p1}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg  w-full bg-[#FFECC9] mx-auto min-h-[150px] lg:h-auto">
            <div className="flex flex-col justify-between gap-[10px] items-center  text-center ">
              <div className=" lg:h-auto lg:w-auto">
              <CustomImage publicImage="/assets/icons/smiley-icon.svg"/>
              </div>
              <div className="">
                <p className="lg:text-4xl  text-xl font-semibold text-[#1F2937]">
                  {countN2 && <CountUp start={0} end={parseInt(n2)} />}
                  {!countN2 && n2}%
                </p>
                <p className="text-sm uppercase text-[#4B5563]">{p2}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-lg w-full bg-[#C5FFC9] mx-auto min-h-[150px] lg:h-auto">
            <div className="flex flex-col justify-between gap-[10px] items-center text-center ">
              <div className=" lg:h-auto lg:w-auto">
              <CustomImage publicImage="/assets/icons/user-icons.svg"/>
              </div>
              <div>
                <p className="lg:text-4xl  text-xl font-semibold text-[#1F2937]">
                  {countN3 && <CountUp start={0} end={parseInt(n3)} />}
                  {!countN3 && n3}+
                </p>
                <p className="text-sm uppercase text-[#4B5563]">{p3}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg  w-full bg-[#FFC3F1] mx-auto min-h-[150px] lg:h-auto">
            <div className="flex flex-col  justify-between gap-[10px] items-center text-center">
              <div className="  lg:h-auto lg:w-auto">
              <CustomImage publicImage="/assets/icons/bag-icon.svg"/>
              </div>
              <div className="">
                <p className="lg:text-4xl  text-xl font-semibold text-[#1F2937]">
                  {countN4 && <CountUp start={0} end={parseInt(n4)} />}
                  {!countN4 && n4}+
                </p>
                <p className="text-sm uppercase text-[#4B5563]">{p4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="bg-gray-200 py-16 lg:py-20 h-[500px]">
//   <div className="container mx-auto px-4 lg:px-5">
//     <div className="flex justify-between gap-8 items-center">
//       <div className="text-center lg:text-left w-[608px] 2xl:h-[344px] ">
//         <h1 className="xl:text-5xl lg:text-4xl font-bold text-[#1F2937] mb-6 lg:mb-8">
//           Ready For Tech Success?
//         </h1>
//         <p className="2xl:text-lg lg:text-[16px] text-gray-700 mb-8 lg:mb-10">
//           Are you ready to experience the level of success that others can
//           only dream of? We enable explosive market success with streamlined
//           business operations while keeping end users happy. Techanic
//           InfoTech with renowned web and mobile app development services is
//           here to help you.
//         </p>
//         <button className="border-[#4F46E5] border-2 text-[rgb(79,70,229)] hover:bg-[#4F46E5] hover:text-white px-6 py-3 rounded-lg text-lg font-medium ">
//           Contact Us ➔
//         </button>
//       </div>
//       <div className="flex flex-col gap-[40px] lg:gap-8 xl:w-[592px] h-[210px] ">
//         <div className="flex xl:w-[592px]  h-[85px] gap-[32px]">
//         <div className="flex items-center rounded-lg w-[280px] h-[85px]">
//           <Image src={portfolio} width={40} height={40} alt="Portfolio" />
//          <div className="">
//             <p className="text-4xl font-semibold text-[#1F2937]">18+</p>
//             <p className="text-sm text-[#4B5563]">Years Experience</p>
//           </div>
//         </div>
//         <div className="flex items-center rounded-lg w-[280px] h-[85px]">
//           <Image src={leadImg} width={40} height={40} alt="Lead Generation" />
//          <div className="">
//             <p className="text-4xl font-semibold text-[#1F2937]">97%+</p>
//             <p className="text-sm text-[#4B5563]">Client Retention</p>
//           </div>
//         </div>
//         </div>
//         <div className="flex  gap-[32px] ">
//         <div className="flex items-center rounded-lg p-4 w-[280px] h-[85px]">
//           <Image src={ratingImg} width={40} height={40} alt="Rating"/>
//          <div className="">
//             <p className="text-4xl font-semibold text-[#1F2937]">2,500+</p>
//             <p className="text-sm text-[#4B5563]">Satisfied Customers</p>
//           </div>
//         </div>
//         <div className="flex items-center rounded-lg p-4 w-[280px] h-[85px] ">
//           <Image src={reviewsImg} width={40} height={40} alt="Reviews" />
//          <div className="">
//             <p className="text-4xl font-semibold text-[#1F2937]">5,400+</p>
//             <p className="text-sm text-[#4B5563]">Happy Clients</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
