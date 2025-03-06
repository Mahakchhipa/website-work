"use client";
import  { useState, useEffect } from "react";
import Image from "next/image";

export default function Weblanguages({ head, para, bgColor, sections, languages }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
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


  const handleArrowClick = (direction) => {
    if (direction === "previous") {
      const newIndex = currentPage === 0 ? sections.length - 1 : currentPage - 1;
      setCurrentPage(newIndex);
      setActiveSection(newIndex); // Update active section when clicking previous
    } else if (direction === "next") {
      const newIndex = currentPage === sections.length - 1 ? 0 : currentPage + 1;
      setCurrentPage(newIndex);
      setActiveSection(newIndex); // Update active section when clicking next
    }
  };

  const isFrontend = activeSection === 0;
  const isTextAutomation = activeSection === sections.length - 1;

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSections = (data) => {
    return data.map((item, index) => (
      <li
        key={index}
        className={`flex flex-col items-center lg:w-[217.33px] h-auto p-[24px] gap-[12px] opacity-[80%] ${
          activeSection === index ? "lg:border-b-2 lg:border-[#000000] lg:text-[#000000]" : ""
        }`}
        onClick={() => {
          // Update active section when clicked
          setActiveSection(index);
        }}
      >
        <Image
          src={activeSection === index ? item.flipIcon : item.image}
          width={60}
          height={60}
           
          className="transition-transform duration-300 transform hover:scale-110"
          style={{ cursor: "pointer" }}
          alt="flip-icon"
        />
        <p className="text-center">{item.label}</p>
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
    const filteredLanguages = languages.filter((lang) => lang.section === sectionLabel);
    return filteredLanguages.map((language, index) => (
      <div key={index} className="mx-auto flex flex-col items-center gap-4 text-center">
        <Image
          src={language.image}
          alt={language.label}
          width={60}
          height={60}
          className="w-[70px] h-[70px] transition-transform duration-300 transform hover:scale-110"
        />
        <p>{language.label}</p>
      </div>
    ));
  };

  return (
    <>
      <div className={`bg-[#F3F3FA] flex flex-col gap-4 h-auto w-[100%] px-[24px] xl:px-[100px] lg:py-[40px] py-[20px]`}>
        <div className="child-text flex- flex-col gap-2 mx-auto text-center h-auto ">
          <h2 className="text-[#0F172A]">
            {head}
          </h2>
          <br />
          <p className="text-[#0F172A] font-normal md:flex hidden ">{para}</p>
        </div>

        <div className="largescreen flex justify-center h-auto w-full border-b border-gray-300 mx-auto">
          <ul className="flex justify-around items-center w-full h-auto font-medium 2xl:text-[18px] xl:text-[17px] lg:text-[15px] leading-[24.29px]">
            {renderSections(sections)}
          </ul>
        </div>
        <div className="largescreen flex justify-center w-full h-auto gap-x-12 mx-auto">
          <ul className="flex justify-around items-center w-full h-auto font-medium 2xl:text-[18px] xl:text-[17px] lg:text-[15px] leading-[20px]">
            {renderLanguages(sections[activeSection].label)}
          </ul>
        </div>

        <div className="smallscreen flex flex-col gap-[32px] justify-between w-full">
          <div className="flex items-center justify-center w-full">
            {currentPage !== 0 && (
              <button onClick={() => handleArrowClick("previous")} className="arrow-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="md:gap-12 gap-8 h-[140px] justify-between border-b-2 border-gray-500">
              {renderSections([sections[currentPage]])}
            </div>
            {currentPage !== sections.length - 1 && (
              <button onClick={() => handleArrowClick("next")} className="arrow-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          <div className="w-full flex justify-center items-center" onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={() => setTouchStartX(null)}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 h-auto w-full">
              {renderLanguages(sections[currentPage].label)}
            </div>
          </div>
          <div className="pagination-dots">{renderPaginationDots()}</div>
        </div>
      </div>
    </>
  );
}
