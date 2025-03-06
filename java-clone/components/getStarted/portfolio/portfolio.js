"use client";
import { useState } from "react";
import useWindowSize from "@/lib/Window";
import Link from "next/link";
import CustomImage from "@/components/BlogComponents/CustomeImage";
   
export default function Portfolio({ bgColor, heading, paragraph, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowSize = useWindowSize(); // Custom hook to get window size

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Determine how many cards to display based on window size
  let cardsToRender;
  if (windowSize.width < 768) {
    // For mobile screens (below 768px), display 1 card at a time
    cardsToRender = [activeIndex];
  } else if (windowSize.width >= 768 && windowSize.width < 1024) {
    // For tablets (768px - 1023px), display 2 cards at a time
    cardsToRender = [
      (activeIndex + cards.length - 1) % cards.length, // Show previous card
      activeIndex, // Current card
    ];
  } else {
    // For large screens (1024px and above), display 3 cards at a time
    cardsToRender = [
      (activeIndex + cards.length - 1) % cards.length, // Show previous card
      activeIndex, // Current card
      (activeIndex + 1) % cards.length, // Next card
    ];
  }

  return (
    <div className="flex flex-col w-full px-[20px] py-[60px] lg:py-[80px] xl:px-[100px]">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-[10px] md:gap-4 text-center child-text">
        <h2 className="font-bold">{heading}</h2>
        <p>{paragraph}</p>
      </div>

      <div className="flex justify-between gap-6 items-center w-full mt-[80px] lg:mt-[128px]">
        {/* Left button for carousel navigation */}
        <div className="w-fit">
          <button
            className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12 bg-[#D9D9D9] rounded-full"
            onClick={handlePrev}
          >
            ❮
          </button>
        </div>

        {/* Display the cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between w-full mx-auto gap-8 lg:gap-12 xl:gap-[70px] 2xl:gap-[90px]">
          {cardsToRender.map((index) => {
            const card = cards[index];
            return (
              <div
                key={card[index]}
                className="flex flex-col justify-between items-center  mx-auto"
              >
                <div className="flex flex-col justify-between gap-4 items-center w-full">
                  <div className="flex flex-col justify-between gap-3">
                    <div className="md:w-full md:h-auto">
                      <CustomImage
                        publicImage={card.image}
                        rounded="rounded-none"
                      />
                    </div>
                    <div className="page-text text-center flex flex-col gap-1 md:gap-4">
                      <h3 className="text-[#000000] font-bold">
                        {card.heading}
                      </h3>
                      <p className="font-normal text-[#363636] md:text-[#000000]">
                        {card.para}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full px-4 gap-2 md:gap-3">
                    {card.playstoreLink && (
                      <Link
                        href={card.playstoreLink}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        passHref
                        className="flex items-center h-[36px] w-[36px]"
                      >
                        <CustomImage
                          publicImage="/assets/icons/playstore-icon.png"
                          alt="playstore"
                          rounded="rounded-none"
                        />
                      </Link>
                    )}
                    {card.appleLink && (
                      <Link
                        href={card.appleLink}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        passHref
                        className="flex items-center h-[36px] w-[36px]"
                      >
                        <CustomImage
                          publicImage="/assets/icons/ios-icon.png"
                          alt="applelink"
                          rounded="rounded-none"
                        />
                      </Link>
                    )}
                    {card.webLink && (
                      <Link
                        href={card.webLink}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        passHref
                        className="flex items-center h-[36px] w-[36px]"
                      >
                        <CustomImage
                          publicImage="/assets/icons/website-icon.png"
                          alt="weblink"
                          rounded="rounded-none"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right button for carousel navigation */}
        <div className="w-fit">
          <button
            className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12 bg-[#D9D9D9] rounded-full"
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

// import Slider from "react-slick"; // Import the react-slick library
// import { useState, useEffect, useRef } from "react";
// import { useWindowSize } from "@react-hook/window-size";
// import Link from "next/link";
// import CustomImage from "@/components/BlogComponents/CustomeImage";
// import "./portfolio.css";

// export default function Portfolio({
//   bgColor,
//   heading,
//   paragraph,
//   cards,
//   headingpart1,
//   headingpart2,
//   direction,
//   color1,
//   color2,
// }) {
//   const [width] = useWindowSize();
//   const [isTouching, setIsTouching] = useState(false);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let intervalId;
//     if (width < 1022 && !isTouching) {
//       intervalId = setInterval(() => {
//         if (sliderRef.current) {
//           sliderRef.current.slickNext(); // Move to the next slide automatically
//         }
//       }, 5000);
//     }

//     return () => clearInterval(intervalId);
//   }, [width, isTouching]);

//   const nextSlide = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickNext();
//     }
//   };

//   const prevSlide = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickPrev();
//     }
//   };

//   const handleTouchStart = () => {
//     setIsTouching(true);
//   };

//   const handleTouchEnd = () => {
//     setIsTouching(false);
//   };

  // const settings = {
  //   dots: false,
  //   // infinite: true,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   ref: sliderRef,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 763,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

//   return (
//     <div
//       className={`relative bg-[#${bgColor}] h-auto flex flex-col gap-[10px] md:gap-4 px-[20px] lg:pt-[40px] lg:pb-[40px] py-[20px] xl:px-[100px]`}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div className="child-text flex flex-col gap-[10px] md:gap-4">
//         <h2 className="font-bold text-center md:block hidden">
//           {heading}
//         </h2>
//         <h2 className=" font-bold text-center md:hidden">
//       {headingpart1} <span className="text-[#0F53FF]">{headingpart2}</span>
//         </h2>
//         <p className=" max-w-[900px] text-[#363636] md:text-[#000000] mx-auto text-center">
//           {paragraph}
//         </p>
//       </div>
//       <div className="flex justify-between items-start w-full ">
//         <div className="md:flex hidden mt-32">
//           <button
//             className=" text-black text-[0.625rem] 2xl:text-[12px] font-normal md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 sm:w-12 sm:h-12 bg-[#D9D9D9]  rounded-full"
//             onClick={prevSlide}
//           >
//             ❮
//           </button>
//         </div>
//         <div className="relative w-[290px] sm:w-[300px] md:w-[630px] lg:w-[920px] xl:w-[1000px] 2xl:w-[1100px]  mx-auto ">
//           <Slider {...settings} className="">
// {cards.map((card) => (
//   <div
//     key={card.id}
//     className="flex flex-col justify-between items-center w-[320px]  mx-auto"
//     onTouchStart={handleTouchStart}
//     onTouchEnd={handleTouchEnd}
//   >
//     <div className="flex flex-col justify-between gap-4  items-center w-[320px]">
//       <div className="flex flex-col gap-3">
//         <div className="md:max-w-[320px] md:h-auto">
//           <CustomImage publicImage={card.image}    rounded="rounded-none"/>
//         </div>
//         <div className="page-text text-center flex flex-col gap-1 md:gap-4">
//           <h3 className="text-[#000000]  font-bold">
//             {card.heading}
//           </h3>
//           <p className=" font-normal text-[#363636] md:text-[#000000]">
//             {card.para}
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center justify-center w-full px-4 gap-2 md:gap-3">
//         {card.playstoreLink && (
//           <Link
//             href={card.playstoreLink}
//             rel="noopener noreferrer nofollow" target="_blank"
//             passHref
//             className=" flex items-center h-[36px] w-[36px] "
//           >
//             <CustomImage
//               publicImage="/assets/icons/playstore-icon.png"
//               alt="playstore"
//                  rounded="rounded-none"
//             />
//           </Link>
//         )}

//         {card.appleLink && (
//           <Link
//             href={card.appleLink}
//             rel="noopener noreferrer nofollow" target="_blank"
//             passHref
//             className=" flex items-center h-[36px] w-[36px] "
//           >
//             <CustomImage
//               publicImage="/assets/icons/ios-icon.png"
//               alt="applelink"
//                  rounded="rounded-none"
//             />
//           </Link>
//         )}

//         {card.webLink && (
//           <Link
//             href={card.webLink}
//             rel="noopener noreferrer nofollow" target="_blank"
//             passHref
//             className=" flex items-center h-[36px] w-[36px] "
//           >
//             <CustomImage
//               publicImage="/assets/icons/website-icon.png"
//               alt="weblink"
//                  rounded="rounded-none"
//             />
//           </Link>
//         )}
//       </div>
//     </div>
//   </div>
// ))}
//           </Slider>
//         </div>
//      <div className="md:flex hidden mt-32">
//           <button
//             className=" text-black text-[0.625rem] 2xl:text-[12px] font-normal md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 sm:w-12 sm:h-12 bg-[#D9D9D9] rounded-full"
//             onClick={nextSlide}
//           >
//             ❯
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
