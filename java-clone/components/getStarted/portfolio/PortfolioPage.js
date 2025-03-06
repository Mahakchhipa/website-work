"use client";
import Slider from "react-slick";
import Portfolio_data from "../../../utils/portfolio_data.json";

import { useState, useEffect, useMemo } from "react";
import styles from "../portfolio/Portfolio.module.css";

import Link from "next/link";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import Tooltip from "@mui/material/Tooltip";

const Portfolio_category = [
  { key: "all", title: "All" },
  { key: "food_delivery", title: "Food Delivery" },
  { key: "taxi", title: "Taxi" },
  { key: "courier", title: "Courier" },
  { key: "dating", title: "Dating" },
  { key: "matrimony", title: "Matrimony" },
  { key: "on_demand", title: "Dr. On Demand" },
  { key: "salon", title: "Salon" },
  { key: "hotel", title: "Hotel Booking" },
  { key: "marketing", title: "Digital Marketing" },
  { key: "education", title: "School & NGO" },
  { key: "jobportal", title: "Job Portal" },
  { key: "ecommerce", title: "E-Commerce" },
  { key: "e-wallet", title: "E-Wallet" },
  { key: "classified", title: "Classified" },
  { key: "homeservice", title: "Home Service" },
  { key: "elearning", title: "E-Learning" },  
  { key: "videostreaming", title: "Video Streaming" },
  { key: "socialmedia", title: "Social Media" },
  { key: "ondemand", title: "On Demand" },
  { key: "fitness", title: "Fitness" },
  { key: "sports", title: "Sports" },
  { key: "realestate", title: "Reale State" },
];

const PortfolioPage = () => {
  const [activeItem, setActiveItem] = useState(Portfolio_category[0]?.key);
  const [itemsToShow, setItemsToShow] = useState(5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  console.log("Portfolio Data:", Portfolio_data);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        // Adjust items per page based on screen size
        if (window.innerWidth >= 1024) {
          setItemsPerPage(3); // Show 3 cards above 1024px
        } else if (window.innerWidth >= 768) {
          setItemsPerPage(2); // Show 2 cards between 768px and 1024px
        } else {
          setItemsPerPage(1); // Show 1 card below 768px
        }
      };

      // Initial check on mount
      handleResize();

      // Add event listener to handle screen resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Missing this closing array

  // Calculate total pages
  const totalPages = Math.ceil(Portfolio_data.length / itemsPerPage);
  const startIndex = activeIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShowSlide = Portfolio_data.portfolio.slice(startIndex, endIndex);

  const loadMore = () => {
    setItemsToShow((prev) => prev + 5);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  useEffect(() => {
    // Clear previous data first, then update
    setFilteredPortfolio([]);

    setTimeout(() => {
      setFilteredPortfolio(
        Portfolio_data.portfolio.filter(
          (item) => String(item.key) === String(activeItem)
        )
      );
    }, 0); // Small delay to trigger re-render
  }, [activeItem]);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleClick = (key) => {
    setIsMenuOpen(false); // Close menu after clicking on a link
  };

  return (
    <>
      <div className="xl:px-[100px] pt-[120px] p-[20px] ">
        <div className="responsive-text flex flex-col gap-3 md:gap-6 lg:text-start text-center">
          <h1>Featured Projects</h1>
          <div className="flex items-center justify-center gap-3 hidden  lg:flex">
            <div>
              {" "}
              <button
                onClick={() => handleDotClick(Math.max(activeIndex - 1, 0))} // Previous button
                disabled={activeIndex === 0}
              >
                ❮
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[24px] ">
              {itemsToShowSlide.map((item, index) => (
                <div
                  key={item.id}
                  style={{ background: `linear-gradient(${item.gradient})` }}
                  className="grid grid-cols-2 rounded-xl p-8 items-center"
                >
                  <div className="flex flex-col justify-between gap-3">
                    <div className="lg:w-[60px]">
                      <CustomImage publicImage={item.icon} />
                    </div>
                    <div className="flex flex-col justify-between gap-3 ">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      {/* <p>{item.description}</p> */}
                      <div className="flex gap-2 mt-4 w-fit">
                        {item.playstoreLink && (
                          <Link
                            href={item.playstoreLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/playstore-icon.png"
                                alt="playstore"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                        {item.appleLink && (
                          <Link
                            href={item.appleLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/ios-icon.png"
                                alt="applelink"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                        {item.webLink && (
                          <Link
                            href={item.webLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/website-icon.png"
                                alt="weblink"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <figure className="max-w-[500px]">
                      <CustomImage
                        className="lazyload"
                        objectFit="cover"
                        publicImage={item.largeImage}
                        alt="Techanic Infotech"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>

            <div>
              {" "}
              <button
                onClick={() =>
                  handleDotClick(Math.min(activeIndex + 1, totalPages - 1))
                } // Next button
                disabled={activeIndex === totalPages - 1}
              >
                ❯
              </button>
            </div>
          </div>
          {/* Dots for Navigation */}
          <div className="flex justify-center mt-8  lg:flex hidden">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full mx-[2px] sm:mx-2 ${
                  activeIndex === index ? "bg-black" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          {/* Buttons for previous and next */}
          {/* <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg mr-4"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={handleNext}
          >
            Next
          </button>
        </div> */}
        </div>
      </div>
      <div className="xl:px-[100px] lg:py-[40px] px-[20px] grid lg:grid-cols-[340px_1fr] gap-6 2xl:gap-[39px]">
        {/* Sticky Sidebar */}
        <div className="flex flex-col bg-[#ebe9e9] opicity-[44%]  lg:sticky top-24 h-[85vh] overflow-auto child-text scrollbar-thin lg:flex hidden">
          <ul className="flex flex-col gap-3 font-semibold  ">
            {Portfolio_category.map((item, index) => (
              <li
                key={index}
                className={`list-none px-8 py-3 cursor-pointer ${
                  activeItem === item.key
                    ? "bg-[#0153c3] text-white"
                    : "hover:bg-[#0153c3] hover:text-white"
                }`}
                onClick={() => setActiveItem(item.key)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        {isMenuOpen ? (
          <div className="flex flex-col bg-[#ebe9e9] opicity-[44%]  lg:sticky top-24 h-[400px] overflow-auto child-text scrollbar-thin lg:hidden">
            <ul className="flex flex-col gap-3 font-semibold  ">
              {Portfolio_category.map((item, index) => (
                <li
                  key={index}
                  className={`list-none px-8 py-3 cursor-pointer ${
                    activeItem === item.key
                      ? "bg-[#0153c3] text-white"
                      : "hover:bg-[#0153c3] hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveItem(item.key);
                    handleClick(item.key);
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // <button onClick={toggleMenu}>
          <div className="bg-[#eeeded] w-full px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              onClick={() => setIsMenuOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        )}

        {/* Portfolio Grid */}
        {activeItem === Portfolio_category[0]?.key && (
          <div className="grid gap-4  xl:gap-[39px] flex-grow">
            {Portfolio_data.portfolio
              .slice(0, itemsToShow)
              .map((item, index) => (
                <div
                  key={`all-${index}`}
                  // id={`portfolio-${item.id}`}
                  style={{ background: `linear-gradient(${item.gradient})` }}
                  className="grid grid-cols-2 gap-3 md:gap-6 rounded-xl p-4 md:p-8 items-center"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-[60px] md:w-[150px]">
                      <CustomImage publicImage={item.icon} />
                    </div>
                    <div
                      className={`flex flex-col gap-3 `}
                      style={{ color: `${item.text}` }}
                    >
                      <h2 className="text-xl lg:text-3xl font-semibold">
                        {item.title}
                      </h2>
                      {typeof window !== "undefined" &&
                      window.innerWidth <= 1024 ? (
                        <Tooltip title={item.description}>
                          <p className="line-clamp-2 lg:line-clamp-none text-sm font-normal lg:text-base">
                            {item.description}
                          </p>
                        </Tooltip>
                      ) : (
                        <p className="line-clamp-2 lg:line-clamp-none">
                          {item.description}
                        </p>
                      )}
                      <div className="flex gap-2 mt-4 w-fit">
                        {item.playstoreLink && (
                          <Link
                            href={item.playstoreLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/playstore-icon.png"
                                alt="playstore"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                        {item.appleLink && (
                          <Link
                            href={item.appleLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/ios-icon.png"
                                alt="applelink"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                        {item.webLink && (
                          <Link
                            href={item.webLink}
                            className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                          >
                            <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                              <CustomImage
                                publicImage="/assets/icons/website-icon.png"
                                alt="weblink"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <figure className="max-w-[300px] md:max-w-[350px]">
                      <CustomImage
                        // className={styles["lazyload"]}
                        objectFit="cover"
                        publicImage={item.largeImage}
                        alt="Techanic Infotech"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            {itemsToShow < Portfolio_data.portfolio.length && (
              <button onClick={loadMore} className={styles["load-more-button"]}>
                Load More
              </button>
            )}
          </div>
        )}
        <div className="grid gap-4  xl:gap-[39px] flex-grow">
          {activeItem !== Portfolio_category[0]?.key &&
            filteredPortfolio.length > 0 &&
            filteredPortfolio.map((item, index) => (
              <div
                key={`portfolio-${index}`}
                // id={`portfolio-${item.id}`}
                style={{ background: `linear-gradient(${item.gradient})` }}
                className="grid grid-cols-2 gap-3 md:gap-6 rounded-xl p-4 md:p-8 items-center"
              >
                <div
                  className={`flex flex-col gap-3 `}
                  style={{ color: `${item.text}` }}
                >
                  <div className="w-[60px] md:w-[150px]">
                    <CustomImage publicImage={item.icon} />
                  </div>
                  <h2 className="text-xl lg:text-3xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="line-clamp-2 lg:line-clamp-none text-sm font-normal xl:text-base">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-4 w-fit">
                    {item.playstoreLink && (
                      <Link
                        href={item.playstoreLink}
                        className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                      >
                        <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                          <CustomImage
                            publicImage="/assets/icons/playstore-icon.png"
                            alt="playstore"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </Link>
                    )}
                    {item.appleLink && (
                      <Link
                        href={item.appleLink}
                        className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                      >
                        <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                          <CustomImage
                            publicImage="/assets/icons/ios-icon.png"
                            alt="applelink"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </Link>
                    )}
                    {item.webLink && (
                      <Link
                        href={item.webLink}
                        className="md:px-3 md:py-2 p-2 border-2 border-green-950 rounded-lg flex justify-center items-center w-fit"
                      >
                        <div className="md:w-6 md:h-6 w-6 h-6 flex justify-center items-center">
                          <CustomImage
                            publicImage="/assets/icons/website-icon.png"
                            alt="weblink"
                            width="100%"
                            height="100%"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  <figure className="max-w-[300px] md:max-w-[350px]">
                    <CustomImage
                      objectFit="cover"
                      publicImage={item.largeImage}
                      alt="Techanic Infotech"
                    />
                  </figure>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
