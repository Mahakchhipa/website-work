"use client";
// 'use client'
import { useState,useRef } from "react";
import useWindowSize from "../Window";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
// import starImg from '../../assets/starRating.svg';
import CustomImage from "@/components/BlogComponents/CustomeImage";
import Link from "next/link";
const StarRating = () => (
  <div className="flex justify-center">
    {Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-xl text-blue-500">
        <i className="fas fa-star"></i>
      </span>
    ))}
  </div>
);

const testimonialsData = [
  {
    image: "/assets/alex-johnson.webp",
    text: "Techanic Infotech transformed our vision into a seamless eWallet app that has significantly enhanced our customer experience. Their expertise and dedication to our project were unparalleled.",
    name: "Alex Johnson",
    profession: "CTO",
  },
  {
    image: "/assets/samantha-brown.webp",
    text: "Our partnership with Techanic Infotech for developing our food delivery app was a game-changer. The app's intuitive design and reliability have increased our orders tenfold.",
    name: "Samantha Brown",
    profession: "CEO",
  },
  {
    image: "/assets/michael-lee.png",
    text: "Thanks to Techanic Infotech, our taxi app has set new industry standards for convenience and efficiency. Their innovative approach has made us a leading player in the market.",
    name: "Michael Lee",
    profession: "Founder ",
  },
  {
    image: "/assets/emily-carter.webp",
    text: "The PHP solutions provided by Techanic Infotech have been pivotal for our web platforms. Their team's proficiency has resulted in robust and scalable applications.",
    name: "Emily Carter",
    profession: "Head of Web Development",
  },
  {
    image: "/assets/david-smith.webp",
    text: "Techanic Infotech's mastery in React Native app development has empowered our cross-platform mobile application, providing a seamless user experience across all devices.",
    name: "David Smith",
    profession: "Mobile Technology Lead",
  },
  {
    image: "/assets/sophia-martinez.webp",
    text: "Our eCommerce platform, developed by Techanic Infotech, has exceeded all expectations in terms of functionality and user engagement. Their team's commitment to excellence is evident in their work.",
    name: "Sophia Martinez",
    profession: "Director of eCommerce ",
  },
  {
   type: "video", src: "/assets/videos/testimonial-video-1.mp4",
   text: "Techanic Infotech transformed our real estate website, skyrocketing our visibility and ranking us at the top of Google for competitive keywords. The results—more traffic, leads, and sales—have been phenomenal. Highly recommend their expertise!",
    name: "Demmy",
    profession: "Director of Real Estate",
  },
  {
    type: "video", src: "/assets/videos/testimonial-video-2.mp4",
     text: "Techanic Infotech worked wonders for our luxury real estate business! They boosted our website visibility, attracted global buyers, and significantly improved our organic traffic. Their strategies are top-notch, and the results speak for themselves—highly recommend!",
     name: "Milani",
     profession: "Director of Real Estate",
   },
];
const marketingtestimonialsData = [
  {
    image: "/assets/john-haus.jpeg",
    text: "Their digital marketing strategies have further amplified our reach and visibility, enabling us to connect with a broader audience and generate high-quality leads. We are excited about the continued growth and success this partnership brings.",
    name: "John Haus",
    // profession: "CTO",
  },
  {
    image: "/assets/milani.jpeg",
    text: "Working with Techanic Infotech has been a game-changer for our real estate business. Their digital marketing strategies have dramatically improved our online visibility and lead generation. We've seen a remarkable increase in inquiries, thanks to their targeted campaigns and expert guidance. Highly recommended!",
    name: "Milani",
    // profession: "CEO",
  },
  {
    image: "/assets/demmy.png",
    text: "Techanic Infotech's digital marketing expertise has transformed our real estate platform. Their innovative approach and commitment to results have significantly boosted our user engagement and brand recognition. We appreciate their collaborative spirit and ability to deliver measurable results that drive our business forward.",
    name: "Demmy",
    // profession: "Founder ",
  },
];
export default function ClientTestimonials({
  heading,
  paragraph,
  cardBgColor,
  bgColor,
  showImages = "true",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
const videoRef = useRef([]);


const handlePlayPause = async (idx) => {
  const video = videoRef.current[idx]; // Get the video element at the given index

  if (video) {
    if (playingIndex !== idx) {
      // Pause all other videos
      videoRef.current.forEach((vid, i) => {
        if (vid && i !== idx) {
          vid.pause();
        }
      });

      // Request fullscreen
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        await video.webkitRequestFullscreen(); // Safari
      } else if (video.msRequestFullscreen) {
        await video.msRequestFullscreen(); // IE
      }

      await video.play();
      setPlayingIndex(idx);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  }
};
  const [activeIndex, setActiveIndex] = useState(0);
  const windowSize = useWindowSize(); // Custom hook to get window size

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev1 = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? marketingtestimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext1 = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === marketingtestimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevIndex =
    (activeIndex === 0 ? testimonialsData.length - 1 : activeIndex - 1) %
    testimonialsData.length;
  const nextIndex = (activeIndex + 1) % testimonialsData.length;

  // Determine how many cards to display based on window size

  const isMediumScreen = windowSize.width < 768;
  const isMediumScreenDigitalMarketing = windowSize.width < 1024;
  const cardsToRender = isMediumScreen
    ? [activeIndex]
    : [
        (activeIndex + testimonialsData.length - 1) % testimonialsData.length,
        activeIndex,
        (activeIndex + 1) % testimonialsData.length,
      ];
  const cardsToRender1 = isMediumScreenDigitalMarketing
    ? [activeIndex]
    : [
        (activeIndex + marketingtestimonialsData.length - 1) %
          marketingtestimonialsData.length,
        activeIndex,
        (activeIndex + 1) % marketingtestimonialsData.length,
      ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animateClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";
  return (
    <>
      <div className="flex flex-col  w-full  px-[20px] py-[60px] lg:py-[80px] xl:px-[100px]">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-[10px] md:gap-4 text-center child-text">
          <h2 className="font-bold">{heading}</h2>
          <p className="">{paragraph}</p>
        </div>
        {showImages ? (
          <div className="flex justify-between gap-6 items-center w-full mt-[80px] lg:mt-[128px]">
            <div className=" w-fit">
              <button
                className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12  bg-[#D9D9D9] rounded-full"
                onClick={handlePrev}
              >
                ❮
              </button>
            </div>

            <div className="grid  md:grid-cols-3 justify-between w-full mx-auto gap-8 lg:gap-12 xl:gap-[70px] 2xl:gap-[90px]">
              {cardsToRender.map((index, cardIdx) => {
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`relative w-full   bg-white shadow-2xl transform transition-all duration-700 ease-out ${animateClass} rounded-2xl mx-auto  ${
                      cardIdx === 1 ? "md:scale-125" : ""
                    }`} // Center card gets zoomed
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-16 lg:-mt-16 xl:-mt-34 z-10 border-[1px] rounded-full border-black p-4">
                      {testimonialsData[index].type === "video" ? (
                          <div className="relative w-[80px] h-[80px]">
                          {/* Video Element */}
                          <video
                       ref={(el) => {
                        if (el) videoRef.current[index] = el; // Ensure refs exist
                      }}
                            src={testimonialsData[index].src}
                            width="80"
                            height="80"
                            className="border-5 border-blue-500 rounded-full w-[80px] h-[80px]"
                            loop
                            muted
                            onClick={()=>handlePlayPause(index)}
                          />
                    
                          {/* Play Button Overlay */}
                          {!isPlaying && (
                            <button
                              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
                              onClick={()=>handlePlayPause(index)}
                            >
                              <svg
                                className="w-8 h-8 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ) : (
                        <img
                          src={testimonialsData[index].image}
                          width="80px"
                          height="80px"
                          className="border-5 border-blue-500 rounded-full"
                          alt="testimonial"
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-center rounded-lg px-3 py-6 lg:p-6 bg-inherit relative z-0 mt-8">
                      <div className="flex flex-col justify-center flex-grow gap-3">
                        <StarRating />
                        <p className="font-normal text-center">
                          {testimonialsData[index].text}
                        </p>
                        <div className="w-full text-center page-text">
                          <h3 className="font-bold">
                            {testimonialsData[index].name}
                          </h3>
                          <p className="font-normal whitespace-nowrap">
                            {testimonialsData[index].profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" w-fit">
              <button
                className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12  bg-[#D9D9D9] rounded-full"
                onClick={handleNext}
              >
                ❯
              </button>
            </div>
          </div>
        ) : (
          <div className="grid justify-between gap-24">
            <div className="flex justify-between gap-6 items-center w-full mt-[80px] lg:mt-[128px]">
              <div className=" w-fit flex lg:hidden">
                <button
                  className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12  bg-[#D9D9D9] rounded-full"
                  onClick={handlePrev1}
                >
                  ❮
                </button>
              </div>

              <div className="grid  lg:grid-cols-3 justify-between w-full mx-auto gap-8 lg:gap-12 xl:gap-[70px] 2xl:gap-[90px]">
                {cardsToRender1.map((index, cardIdx) => (
                  <div
                    ref={ref}
                    key={index}
                    className={`relative w-full   bg-white shadow-2xl transform transition-all duration-700 ease-out ${animateClass}  rounded-2xl mx-auto ${
                      cardIdx === 1 ? "md:scale-125" : ""
                    }`} // Center card gets zoomed
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-16 lg:-mt-16 xl:-mt-34 z-10 border-[1px] rounded-full border-black p-4">
                      <img
                        src={marketingtestimonialsData[index].image}
                        width="80px"
                        height="80px"
                        className="border-5 border-blue-500 rounded-full"
                      />
                    </div>
                    <div className="flex items-center justify-center rounded-lg px-3 py-6 lg:p-6 bg-inherit relative z-0 mt-8">
                      <div className="flex flex-col justify-center flex-grow gap-3">
                        <StarRating />
                        <p className="font-normal text-center">
                          {marketingtestimonialsData[index].text}
                        </p>
                        <div className="w-full text-center page-text">
                          <h3 className="font-bold">
                            {marketingtestimonialsData[index].name}
                          </h3>
                          <p className="font-normal whitespace-nowrap">
                            {marketingtestimonialsData[index].profession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" w-fit flex lg:hidden">
                <button
                  className="text-black text-[0.625rem] 2xl:text-[12px] font-normal w-8 h-8 xl:w-12 xl:h-12  bg-[#D9D9D9] rounded-full"
                  onClick={handleNext1}
                >
                  ❯
                </button>
              </div>
            </div>
            <div className="responsive-link w-fit mx-auto bg-[#0F53FF] text-white px-3 py-3">
              <button>
                <Link href="/case-study">View Case Studies</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
