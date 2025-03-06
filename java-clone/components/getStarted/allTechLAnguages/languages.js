"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CustomImage from "@/components/BlogComponents/CustomeImage";
export default function Languages({
  head,
  para,
  sections,
  languages,
  bgColor,
  iconheight,
  iconwidth,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSection, setActiveSection] = useState(sections[0].label);
  const [touchStartX, setTouchStartX] = useState(null);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSwipeStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleSwipeMove = (event) => {
    if (touchStartX === null) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const diffX = touchStartX - currentX;

    if (diffX > 50) {
      // Swipe left, move to next section
      handleArrowClick("next");
      setTouchStartX(null);
    } else if (diffX < -50) {
      // Swipe right, move to previous section
      handleArrowClick("previous");
      setTouchStartX(null);
    }
  };

  const handleArrowClick = (direction) => {
    if (direction === "previous") {
      setCurrentPage(currentPage === 0 ? sections.length - 1 : currentPage - 1);
    } else if (direction === "next") {
      setCurrentPage(currentPage === sections.length - 1 ? 0 : currentPage + 1);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isFrontend = activeSection === "Front-end";
  const isTextAutomation = activeSection === "Test-Automation";
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderSections1 = (data) => {
    return data.map((item, index) => (
      <li
        key={index}
        className={`flex flex-col items-center justify-between  h-full p-[16px] gap-[12px] opacity-[80%] ${
          activeSection === item.label
            ? "lg:border-b-2 lg:border-[#000000] lg:text-[#000000]"
            : ""
        }`}
        onClick={() => {
          // Update active section when clicked
          setActiveSection(item.label);
        }}
      >
        {/* Render section icon */}
        <CustomImage
          publicImage={activeSection === item.label ? item.image : item.image}
          width="40px"
          height="40px"
          alt="icons"
          className="md:w-[40px] md:h-[40px] transition-transform duration-300 transform hover:scale-110"
          style={{ cursor: "pointer" }}
          rounded="rounded-none"
        />
        <p className="text-center text-xs md:text-lg">{item.label}</p>
      </li>
    ));
  };

  const renderSections = (data) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const animateClass = inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";
    return data.map((item, index) => (
      <li
      ref={ref}
        key={index}
        className={`flex flex-col items-center justify-between  h-auto p-[24px] gap-[12px] opacity-[80%] transition-transform duration-700 transform ${animateClass} ${
          activeSection === item.label
            ? "lg:border-b-2 lg:border-[#000000] lg:text-[#000000]"
            : ""
        }`}
        onClick={() => {
          if (isLargeScreen) {
            setActiveSection(item.label);
          }
        }}
      >
        {activeSection === item.label ? (
          <CustomImage
            publicImage={item.image}
            width="40px"
            height="40px"
            alt="flipicon"
            className="w-[40px] h-[40px] transition-transform duration-300 transform hover:scale-110 "
            style={{ cursor: "pointer" }}
          />
        ) : (
          <CustomImage
            publicImage={item.image}
            width="40px"
            height="40px"
            alt="regular icon"
            rounded="rounded-none"
            className="w-[40px] h-[40px] transition-transform duration-300 transform hover:scale-110"
            style={{ cursor: "pointer" }}
          />
        )}

        <p className="text-center text-lg font-medium">{item.label}</p>
      </li>
    ));
  };

  const renderPaginationDots = () => {
    return sections.map((section, index) => (
      <span
        key={index}
        className={`pagination-dot ${index === currentPage ? "active" : ""}`}
        onClick={() => handlePageChange(index)}
      />
    ));
  };
  const renderLanguages = (sectionLabel) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
  
    const animateClass = inView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";
    const filteredLanguages = languages.filter(
      (lang) => lang.section === sectionLabel
    );
    return filteredLanguages.map((language, index) => (
      <div
      ref={ref}
        key={index}
        className={`mx-auto  flex flex-col items-center justify-between gap-4 text-center transition-transform duration-700 transform ${animateClass}`}
      >
        {/* Render language details here */}
        <div className="w-[80px] h-[80px] flex items-center justify-center">
          {" "}
          <CustomImage
            publicImage={language.image}
            alt={language.label}
            width={iconwidth}
            height={iconheight}
            rounded="rounded-none"
            className="transition-transform duration-300 transform hover:scale-110"
          />
        </div>

        <p className="text-base md:text-lg font-medium">{language.label}</p>
      </div>
    ));
  };

  return (
    <>
      <div

        style={{ backgroundColor: `${bgColor}` }}
        className={` flex flex-col gap-4 lg:gap-6 h-auto w-[100%] px-[20px] xl:px-[100px] lg:py-[40px] py-[20px] `}
      >
        <div className="child-text flex flex-col gap-4 lg:gap-6 mx-auto text-center h-auto ">
          <h2 className="animated-text">{head}</h2>

          <p className="animated-text font-normal md:flex hidden ">{para}</p>
        </div>
        <div className="largescreen flex justify-center h-auto w-full border-b border-gray-300 mx-auto">
          <ul className="flex justify-around items-center w-full h-auto font-medium 2xl:text-[18px] xl:text-[17px] lg:text-[15px] leading-[24.29px] ">
            {renderSections1(sections)}
          </ul>
        </div>
        <div className="largescreen flex justify-center w-full h-auto gap-x-12 mx-auto">
          <ul className="flex justify-around items-center w-full h-auto font-medium 2xl:text-[18px] xl:text-[17px] lg:text-[15px] leading-[20px]">
            {renderLanguages(activeSection)}
          </ul>
        </div>

        <div className="smallscreen flex flex-col gap-[32px] justify-between w-full">
          <div className="flex items-center justify-between w-full">
            {/* {isFrontend && currentPage !== 0 && ( */}
            <button
              onClick={() => handleArrowClick("previous")}
              className="arrow-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            {/* )} */}
            <div className="md:gap-12 gap-8 h-[140px] justify-between border-b-2 border-gray-500 ">
              {renderSections([sections[currentPage]])}
            </div>
            {/* {((isFrontend && currentPage !== sections.length - 1) ||
            (isTextAutomation && currentPage !== 0)) && ( */}
            <button
              onClick={() => handleArrowClick("next")}
              className="arrow-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {/* )} */}
          </div>

          <div
            className="w-full flex justify-center items-center"
            onTouchStart={handleSwipeStart}
            onTouchMove={handleSwipeMove}
            onTouchEnd={() => setTouchStartX(null)}
          >
            <div className="grid grid-cols-3 md:grid-cols-4 gap-10 h-auto w-full">
              {renderLanguages(sections[currentPage].label)}
            </div>
          </div>
          <div className="pagination-dots">{renderPaginationDots()}</div>
        </div>
      </div>
    </>
  );
}
