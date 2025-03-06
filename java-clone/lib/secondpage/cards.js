"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageComponent from "@/lib/ImageComponent";
import CustomImage from "@/components/BlogComponents/CustomeImage";

const Card = ({
  cardItems,
  showLink,
  heightcard,
  hoverback,
  bColor,
  fillIcon,
  isMainPage,
  cardlink,
}) => {
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setIsMobile(window.innerWidth < 768);
      }
      handleResize(); // Call once to set initial state
      window.addEventListener("resize", handleResize); // Listen for window resize events
      return () => window.removeEventListener("resize", handleResize); // Clean up event listener
    }
  }, []);

  const handleTouchStart = (event) => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.slickPause();
      event.currentTarget.style.backgroundColor = `#${hoverback}`;
      event.currentTarget.style.color = `#ffffff`;
    }
  };

  const handleTouchEnd = (event) => {
    if (isMobile && sliderRef.current) {
      sliderRef.current.slickPlay();
      event.currentTarget.style.backgroundColor = `#ffffff`;
      event.currentTarget.style.color = "black";
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    gap: 20,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <>
      <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-2 lg:gap-6 mt-6 hidden md:grid">
        {cardItems.map((card, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <div
              ref={ref}
              key={index}
              className={`bg-[#ffffff] relative grid items-center text-center justify-between rounded-[21px] px-4 py-6 gap-4 shadow-2xl  h-auto  border-l-4 border-[#${bColor}]   overflow-hidden hover:text-white group transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}
              style={{
                backgroundPosition: "0%",
                borderColor: `#${bColor}`,
                transitionDelay: `${index * 100}ms`, // Apply delay to each product
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.backgroundColor = `#${hoverback}`;
                event.currentTarget.style.color = `#ffffff`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.backgroundColor = `#ffffff`;
                event.currentTarget.style.color = `#000000`;
              }}
            >
              <div
                className={` w-[80px] h-[80px] flex items-center justify-center mx-auto`}
                // style={{ backgroundColor: `${fillIcon}` }}
              >
                {isMainPage ? (
                  <CustomImage
                    publicImage={card.image}
                    alt="icons"
                    width="80px"
                    height="80px"
                  />
                ) : (
                  <ImageComponent
                    src={card.image}
                    alt="icons"
                    width={80}
                    height={80}
                  />
                )}
                {/* Other content */}
              </div>

              <h3 className="text-2xl font-bold  ">{card.title}</h3>
              <p className="font-normal text-base ">{card.description}</p>

              {showLink && card.href && (
                <Link
                  href={card.href}
                  passHref
                  className="flex items-center justify-center gap-4 text-xl font-medium"
                >
                  <span className="group-hover:text-white text-blue-800">
                    Read More
                  </span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    height={20}
                    width={20}
                    className="group-hover:text-white text-blue-800"
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <div className="grid  gap-[10px] md:hidden">
        {cardItems.map((card, index) =>{
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });
            return(
          cardlink && card.link ? (
            <Link
              href={card.link}
              passHref
              key={index}
              className={`flex items-center transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}
              ref={ref}
            >
              <div
                className="relative z-10 w-full bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2   overflow-hidden rounded-[7px] shadow-lg transition-transform duration-300 transform hover:scale-110 min-h-[100px]"
                styles={{
                  backgroundPosition: "0%",
                  borderColor: `#${bColor}`,
                  height: `${heightcard}`,
                  borderRadius: "20px",
                }}
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  {isMainPage ? (
                    <CustomImage
                      publicImage={card.image}
                      alt="icons"
                      width="60pxpx"
                      height="60pxpx"
                    />
                  ) : (
                    <div className="w-[60px] h-[60px]">
                      <ImageComponent
                        src={card.image}
                        alt="icons"
                        width={60}
                        height={60}
                      />
                    </div>
                  )}
                </div>
                <div className="page-text flex flex-col gap-2">
                  {" "}
                  <h3 className="font-bold text-sm">{card.title}</h3>
                  <p className="font-normal text-xs text-black ">
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="relative z-10 bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2  w-full overflow-hidden rounded-[7px] shadow-lg min-h-[100px]"
              styles={{
                backgroundPosition: "0%",
                borderColor: `#${bColor}`,
                height: `${heightcard}`,
                borderRadius: "20px",
              }}
            >
              <div className="w-[60px] h-[60px">
                {isMainPage ? (
                  <CustomImage
                    publicImage={card.image}
                    alt="icons"
                    width="60pxpx"
                    height="60pxpx"
                  />
                ) : (
                  <div className="w-[60px] h-[60px]">
                    <ImageComponent
                      src={card.image}
                      alt="icons"
                      width={60}
                      height={60}
                    />
                  </div>
                )}
              </div>
              <div className="page-text flex flex-col gap-2">
                {" "}
                <h3 className="font-bold text-sm">{card.title}</h3>
                <p className="font-normal text-xs text-black ">
                  {card.description}
                </p>
              </div>
            </div>
          )
        )
})}
      </div>
    </>
  );
};

export default Card;

{
  /* <div className="flex h-[600px] gap-3 md:hidden">
<div className="h-[600px] border-[1px] border-[#8b8a8a] p-1 rounded-t-full rounded-b-full sticky">
  <div className="bg-blue-600 rounded-t-full rounded-b-full h-9 w-2"></div>
</div>{" "}
<div className="h-[600px] overflow-scroll scrollbar-hide">
  {" "}
  <div className="grid  gap-[10px] ">
    {cardItems.map((card, index) =>
      cardlink && card.link ? (
        <Link
          href={card.link}
          passHref
          key={index}
          className="flex items-center"
        >
          <div
            className="relative z-10 w-full bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2   overflow-hidden rounded-[7px] shadow-lg transition-transform duration-300 transform hover:scale-110 min-h-[100px]"
            styles={{
              backgroundPosition: "0%",
              borderColor: `#${bColor}`,
              height: `${heightcard}`,
              borderRadius: "20px",
            }}
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              {isMainPage ? (
                <CustomImage
                  publicImage={card.image}
                  alt="icons"
                  width="60pxpx"
                  height="60pxpx"
                />
              ) : (
                <div className="w-[60px] h-[60px]">
                  <ImageComponent
                    src={card.image}
                    alt="icons"
                    width={60}
                    height={60}
                  />
                </div>
              )}
            </div>
            <div className="page-text flex flex-col gap-2">
              {" "}
              <h3 className="font-bold text-sm">{card.title}</h3>
              <p className="font-normal text-xs text-black ">
                {card.description}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div
          key={index}
          className="relative z-10 bg-[#ffffff] flex flex-col text-center items-center py-[7px] px-2 gap-2  w-full overflow-hidden rounded-[7px] shadow-lg min-h-[100px]"
          styles={{
            backgroundPosition: "0%",
            borderColor: `#${bColor}`,
            height: `${heightcard}`,
            borderRadius: "20px",
          }}
        >
          <div className="w-[60pxpx] h-[60pxpx]">
            {isMainPage ? (
              <CustomImage
                publicImage={card.image}
                alt="icons"
                width="60pxpx"
                height="60pxpx"
              />
            ) : (
              <div className="w-[60px] h-[60px]">
                <ImageComponent
                  src={card.image}
                  alt="icons"
                  width={60}
                  height={60}
                />
              </div>
            )}
          </div>
          <div className="page-text flex flex-col gap-2">
            {" "}
            <h3 className="font-bold text-sm">{card.title}</h3>
            <p className="font-normal text-xs text-black ">
              {card.description}
            </p>
          </div>
        </div>
      )
    )}
  </div>
</div>
</div> */
}
