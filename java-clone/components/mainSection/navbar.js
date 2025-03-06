"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState, useRef } from "react";

import "./navbar.css";
import CustomImage from "../BlogComponents/CustomeImage";
// import companyImg from '/Company.jpeg'
import React from "react";

import { useParams } from "next/navigation";

export default function NavBar({ color, color1, strokecolor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSolutions, setExpandedSolutions] = useState(false);
  const [expandedServices, setExpandedServices] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpandSolutions = () => {
    setExpandedSolutions(!expandedSolutions);
  };

  const toggleExpandServices = () => {
    setExpandedServices(!expandedServices);
  };

  const handleClick = () => {
    setIsMenuOpen(false); // Close menu after clicking on a link
  };

  const appSolutions = [
    {
      href: "/solutions/dating-app-development-company",
      publicImage: "/assets/icons/dating-app-icon.png",
      alt: "tinder",
      text: "Dating App Development",
    },
    {
      href: "/solutions/taxi-app-development-company",
      publicImage: "/assets/icons/taxi-app-icon.png",
      alt: "taxi",
      text: "Taxi App Development",
    },
    {
      href: "/solutions/salon-app-development-company",
      publicImage: "/assets/icons/salon-icon.png",
      alt: "salon",
      text: "Salon App Development",
    },
    {
      href: "/solutions/matrimonial-app-development-company",
      publicImage: "/assets/icons/matrimony-icon.png",
      alt: "matrimonial",
      text: "Matrimonial App Development",
    },
    {
      href: "/solutions/doctor-on-demand-app-development-company",
      publicImage: "/assets/icons/doctor-on-demand-icon.png",
      alt: "doctor-on-demand",
      text: "Doctor On Demand App Development",
    },
    {
      href: "/solutions/classified-app-development-company",
      publicImage: "/assets/icons/classified-icon.png",
      alt: "classified",
      text: "Classified App Development",
    },
    {
      href: "/solutions/courier-delivery-app-development-company",
      publicImage: "/assets/icons/courier-delivery-icon.png",
      alt: "courier",
      text: "Courier Delivery App Development",
    },
    {
      href: "/solutions/food-delivery-app-development-company",
      publicImage: "/assets/icons/food-delivery-icon.png",
      alt: "food delivery",
      text: "Food Delivery App Development",
    },
    {
      href: "/solutions/ewallet-app-development-company",
      publicImage: "/assets/icons/custom-ewallet-app-icon.png",
      alt: "ewallet",
      text: "E-Wallet App Development",
    },
    {
      href: "/solutions/education-app-development-company",
      publicImage: "/assets/icons/tutor-app-icon.png",
      alt: "elearning",
      text: "Education App Development",
    },
    {
      href: "/solutions/job-portal-development-company",
      publicImage: "/assets/icons/custom-job-portal-app-development-icon.png",
      alt: "jobPortal",
      text: "Job Portal Development",
    },
    {
      href: "/solutions/on-demand-app-development-company",
      publicImage: "/assets/icons/agile-app-development-icon.png",
      alt: "onDemand",
      text: "On Demand App Development",
    },
    {
      href: "/solutions/video-streaming-app-development-company",
      publicImage: "/assets/icons/video-sharing-app-development-icon.png",
      alt: "video stream",
      text: "Video Streaming App Development",
    },
    {
      href: "/solutions/social-media-app-development-company",
      publicImage: "/assets/icons/social-platforms-icon.png",
      alt: "social media",
      text: "Social Media App Development",
    },
    {
      href: "/solutions/home-service-app-development-company",
      publicImage: "/assets/icons/custom-home-service-app-development-icon.png",
      alt: "handyman",
      text: "Home Service App Development",
    },
    // {
    //   href: "/solutions/video-streaming-app-development-company",
    //   publicImage: "/assets/icons/servicesIcons/custom-video-streaming-app-icon.png",
    //   alt: "ewallet",
    //   text: "Video Streaming App Development",
    // },
  ];
  const services = [
    {
      href: "/services/mobile-app-development-company",
      icon: "/assets/icons/mobile-app-icon.png",
      label: "Mobile App Development",
      alt: "app",
    },
    {
      href: "/services/ecommerce-development-company",
      icon: "/assets/icons/ecomerce-icon.png",
      label: "E-Commerce Development",
      alt: "ecommerce",
    },
    {
      href: "/services/web-development-company",
      icon: "/assets/icons/web-development-icon.png",
      label: "Web Development",
      alt: "website",
    },
    {
      href: "/services/react-native-app-development-company",
      icon: "/assets/icons/react-icon.png",
      label: "React Native App Development ",
      alt: "react",
    },
    {
      href: "/services/ios-app-development-company",
      icon: "/assets/icons/ios-icon.png",
      label: "IOS App Development",
      alt: "ios",
    },
    {
      href: "/services/flutter-app-development-company",
      icon: "/assets/icons/flutter-icon.png",
      label: "Flutter App Development",
      alt: "flutter",
    },
    {
      href: "/services/php-development-company",
      icon: "/assets/icons/php-header-icon.png",
      label: "PHP Development",
      alt: "php",
    },
    {
      href: "/services/wordpress-development-company",
      icon: "/assets/icons/wordpress-icon.png",
      label: "WordPress Development ",
      alt: "wordpress",
    },
    {
      href: "/services/reactjs-development-company",
      icon: "/assets/icons/react-icon.png",
      label: "React JS Development",
      alt: "reactjs",
    },
    {
      href: "/services/python-development-company",
      icon: "/assets/icons/python-icon.png",
      label: "Python Development",
      alt: "python",
    },
    {
      href: "/services/android-app-development-company",
      icon: "/assets/icons/android-header-icon.png",
      label: "Android App Development",
      alt: "android",
    },
    {
      href: "/services/nodejs-development-company",
      icon: "/assets/icons/node-js-icon.png",
      label: "NodeJS Development",
      alt: "nodejs",
    },
    {
      href: "/services/digital-marketing-company",
      icon: "/assets/icons/servicesIcons/local-seo-icon.png",
      label: "Digital Marketing",
      alt: "nodejs",
    },
  ];
  const pathname = usePathname();
  const [isBlogPage, setIsBlogPage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { slug } = useParams();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [expandedSolutions, setExpandedSolutions] = useState(false);
  // const [expandedAbout, setExpandedAbout] = useState(false);
  // const [expandedServices, setExpandedServices] = useState(false);
  const [expandedConfigure, setExpandedConfigure] = useState(false);
  const handleDropdownScroll = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    // if (router.asPath) {
    //   setIsBlogPage(router.asPath.startsWith("/blogs"));
    // }
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  const [showArrow, setShowArrow] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const handleClick = () => {
  //   if (isMenuOpen) {
  //     toggleMenu();
  //   }
  // };

  // const toggleExpandSolutions = () => {
  //   setExpandedSolutions(!expandedSolutions);
  // };
  // const toggleExpandAbout = () => {
  //   setExpandedAbout(!expandedAbout);
  // };

  // const toggleExpandServices = () => {
  //   setExpandedServices(!expandedServices);
  // };
  const bgColor = isScrolled
      ? "bg-[#36363687] backdrop-blur-md"
    : !isScrolled &&
      (pathname === "/" ||
        pathname === "/solutions/food-delivery-app-development-company")
    ? "bg-transparent"
    : "bg-transparent";

  const textColor =
    isScrolled ||
    pathname === "/" ||
    pathname === "/solutions/food-delivery-app-development-company"
      ? "text-white"
      : (!isScrolled &&
          (pathname === "/" ||
            pathname === "/solutions/food-delivery-app-development-company")) ||
        pathname === "/solutions/dating-app-development-company" ||
        pathname === "/solutions/ewallet-app-development-company" ||
        pathname === "/solutions/taxi-app-development-company" ||
        pathname === "/solutions/salon-app-development-company" ||
        pathname === "/solutions/doctor-on-demand-app-development-company" ||
        pathname === "/solutions/home-service-app-development-company" ||
        pathname === "/solutions/classified-app-development-company" ||
        pathname === "/solutions/on-demand-app-development-company" ||
        pathname === "/solutions/social-media-app-development-company" ||
        pathname === "/services/ecommerce-development-company" ||
        pathname === "/services/web-development-company" ||
        pathname === "/services/react-native-app-development-company" ||
        pathname === "/services/ios-app-development-company" ||
        pathname === "/services/flutter-app-development-company" ||
        pathname === "/services/php-development-company" ||
        pathname === "/services/wordpress-development-company" ||
        pathname === "/blogs/category" ||
        pathname === "/blogs" ||
        pathname === "/case-study" ||
        pathname === "/services/digital-marketing-company" ||
        pathname === "/portfolio" ||
        pathname === `/blogs/${slug}`
      ? "text-black"
      : "text-white";
  return (
    <>
      <nav
        className={`w-full ${bgColor} ${textColor} flex justify-between px-[100px] py-[4px] fixed top-0 z-50 transition-colors duration-300 headerLarge`}
      >
        {" "}
        <div
          className="flex flex-col lg:flex-row justify-between
       items-center"
        >
          <div className="w-[230px] 2xl:w-[200px] ">
            {isScrolled ? (
              <Link href="/">
                <CustomImage
                  publicImage="/assets/icons/techanic-infotech-logo.png"
                  alt="logo"
                  width="160px"
                  height="30px"
                  rounded="rounded-none"
                  // width={350}
                  // height={300}
                />
              </Link>
            ) : (
              <Link href="/">
                <CustomImage
                  rounded="rounded-none"
                  publicImage={
                    (isScrolled && pathname === "/") ||
                    (!isScrolled &&
                      pathname ===
                        "/solutions/food-delivery-app-development-company") ||
                    (!isScrolled &&
                      pathname ===
                        "/solutions/salon-app-development-company") ||
                    (!isScrolled &&
                      pathname === "/solutions/taxi-app-development-company") ||
                    pathname === "/services/web-development-company" ||
                    pathname === "/blogs" ||
                    pathname === "/portfolio" ||
                    pathname === "/blogs/category" ||
                    pathname ===
                      "/solutions/social-media-app-development-company" ||
                    pathname ===
                      "/solutions/home-service-app-development-company" ||
                    pathname === "/services/ecommerce-development-company" ||
                    pathname === "/solutions/dating-app-development-company" ||
                    pathname ===
                      "/solutions/on-demand-app-development-company" ||
                    pathname ===
                      "/solutions/doctor-on-demand-app-development-company" ||
                    pathname ===
                      "/solutions/classified-app-development-company" ||
                    pathname ===
                      "/services/react-native-app-development-company" ||
                    pathname === "/services/ios-app-development-company" ||
                    pathname === "/services/flutter-app-development-company" ||
                    pathname === "/services/php-development-company" ||
                    pathname === "/services/wordpress-development-company" ||
                    pathname === `/blogs/${slug}` ||
                    pathname === "/services/digital-marketing-company" ||
                    pathname === "/case-study" ||
                    pathname === "/solutions/ewallet-app-development-company"
                      ? "/assets/icons/techanic-infotech-dark-logo.png"
                      : "/assets/icons/techanic-infotech-logo.png"
                  }
                  alt="logo"
                  width="160px"
                  height="30px" // width={350}
                  // height={300}
                />
              </Link>
            )}
          </div>
          {/* <Link href={"/"}>
            <h1 className="font-normal text-xl lg:text-3xl">Logo</h1>
          </Link> */}
        </div>
        <div className="flex items-center gap-2  lg:pr-[60px] xl:pr-20">
          <ul className="flex items-center gap-8 2xl:gap-10">
            <li className="text-base 2xl:text-lg  font-normal leading-[24px] tracking-[0.5px]  transition-colors duration-300  hover:underline">
              <Link href="/">Home</Link>
            </li>
            <div className="dropdown">
              <li className="text-base 2xl:text-lg  font-normal leading-[24px] tracking-[0.5px]  transition-colors duration-300  hover:underline">
                <Link href="/about-us">About Us</Link>
              </li>
            </div>

            <div className="dropdown">
              <li className="text-base 2xl:text-lg  font-normal leading-[24px] tracking-[0.5px]  transition-colors duration-300  hover:underline">
                <Link href="/solutions">Solutions</Link>
              </li>

              <div
                className="dropdown-content p-10 max-h-[600px] left-[-630px] 2xl:left-[-690px]"
                style={{ overflowY: "auto" }}
                onScroll={handleDropdownScroll}
              >
                <div className="gridnavbar grid-cols-3 gap-2">
                  {appSolutions.map((solution, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-3 w-full"
                    >
                      <Link
                        href={solution.href}
                        passHref
                        className="flex items-center gap-3"
                      >
                        <div className="w-12">
                          <CustomImage
                            publicImage={solution.publicImage}
                            width="60px"
                            height="60px"
                            rounded="rounded-none"
                            alt={solution.alt}
                            // className="bg-slate-300"
                          />
                        </div>
                        <p
                          className="text-base xl:text-lg"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {solution.text}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dropdown">
              <li className="text-base 2xl:text-lg font-normal leading-[24px] tracking-[0.5px] transition-colors duration-300 hover:underline">
                <Link href="/services">Services</Link>
              </li>

              <div
                className="dropdown-content p-10"
                style={{
                  maxHeight: "500px",
                  overflowY: "auto",
                  left: "-700px",
                }}
              >
                <div className="gridnavbar grid-cols-3 gap-2 xl:gap-3">
                  {services.map((service, index) => (
                    <div
                      className="flex items-center justify-between gap-3 w-full"
                      key={index}
                    >
                      <Link
                        href={service.href}
                        passHref
                        className="flex items-center gap-3"
                      >
                        <div className="w-12">
                          <CustomImage
                            publicImage={service.icon}
                            width="60px"
                            height="60px"
                            rounded="rounded-none"
                            alt={service.alt}
                            // className="bg-slate-300"
                          />
                        </div>
                        <p
                          className="text-base xl:text-lg"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {service.label}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <li className="text-base 2xl:text-lg  font-normal leading-[24px] tracking-[0.5px]  transition-colors duration-300  hover:underline">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-base 2xl:text-lg  font-normal leading-[24px] tracking-[0.5px]  transition-colors duration-300  hover:underline">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <button className="fancy flex items-center gap-1 rounded-md bg-[#8282827D] w-fit h-[50px] px-3 py-2 transition-transform duration-300 transform hover:bg-[#0F53FF] animated-border">
                <Link href="/contact-us" className="">
                  Contact Us
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <nav
        className={`w-full ${
          isScrolled   ? "bg-[#36363687] " : "bg-transparent"
        } flex justify-between py-[10px] px-[24px] fixed top-0 z-50 transition-colors duration-0 headerSmall`}
      >
        <div className="flex justify-between items-center w-full">
          <li className="list-none">
            <div className={`w-[130px]`}>
              {isScrolled ? (
                <Link href="/">
                  <CustomImage
                    publicImage={
                      isScrolled &&
                      // (isScrolled && pathname === "/") ||
                      // (isScrolled &&
                      //   pathname ===
                      "/solutions/food-delivery-app-development-company"
                        ? "/assets/icons/techanic-infotech-logo.png"
                        : "/assets/icons/techanic-infotech-logo.png"
                    }
                    alt="logo"
                    width="230px"
                    height="30px"
                    // width={350}
                    // height={300}
                  />
                </Link>
              ) : (
                <Link href="/">
                  <CustomImage
                    publicImage={
                      (!isScrolled && pathname === "/") ||
                      (!isScrolled &&
                        pathname ===
                          "/solutions/food-delivery-app-development-company") ||
                      pathname === "/services/ecommerce-development-company" ||
                      // pathname === "/services/mobile-app-development-company" ||

                      pathname === "/about-us"||
                          pathname === "/contact-us"
                        ? "/assets/icons/techanic-infotech-logo.png"
                        : "/assets/icons/techanic-infotech-dark-logo.png"
                    }
                    alt="logo"
                    width="230px"
                    height="30px"
                    // width={350}
                    // height={300}
                  />
                </Link>
              )}
            </div>
          </li>
          <div className="2xl:hidden">
            {/* Conditionally render the button based on `isScrolled` */}
            {isScrolled ? (
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            ) : (
              <button onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={
                    (!isScrolled && pathname === "/") ||
                    (!isScrolled &&
                      (pathname ===
                        "/solutions/food-delivery-app-development-company" ||
                        pathname ===
                          "/services/mobile-app-development-company" ||
                        pathname === "/about-us" ||
                          pathname === "/contact-us"
                     ))
                      ? "white"
                      : "black"
                  }
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        <div
          className={`xl:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 overflow-y-auto no-scrollbar ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-y-0 left-0 w-full bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto h-fit">
            <div className="flex justify-between items-start p-5">
              <div className="w-[130px]">
                <Link href="/">
                  <CustomImage
                    publicImage="/assets/icons/techanic-infotech-dark-logo.png"
                    alt="logo"
                    width="230px"
                    height="30px"
                  />
                </Link>
              </div>
              <button onClick={toggleMenu}>
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-start pl-6 gap-3 mt-3 overflow-y-auto ">
              <Link
                href="/"
                className="lg:text-4xl text-lg py-2 pr-4 w-full leading-[24px] tracking-[0.5px] border-b-2 border-gray-300 block"
                onClick={handleClick}
              >
                <li className="w-full">Home</li>
              </Link>
              <li className="w-full">
                <div className="flex items-center justify-between w-full border-b-2 border-gray-300">
                  <Link
                    href="/about-us"
                    className="w-full lg:text-4xl text-lg py-2 pr-4 leading-[24px] tracking-[0.5px]  block"
                    onClick={handleClick}
                  >
                    About Us
                  </Link>
                  {/* <span
                    onClick={toggleExpandAbout}
                    className="cursor-pointer text-2xl lg:text-3xl font-normal pr-4"
                  >
                    {expandedAbout ? "-" : "+"}
                  </span> */}
                </div>
                {/* {expandedAbout && (
                  <div
                    className="flex flex-col justify-between gap-3 w-full p-4"
                    onClick={handleClick}
                  >
                    <Link href="/awards" className="flex items-center gap-3">
       
                      <Image
                        src="icons/awards-icon.png"
                      width="60px"
                      height="60px"
                             rounded="rounded-none"
                        alt="award"
                        className=" bg-slate-300"
                      />
                     <p style={{ whiteSpace: "nowrap" ,color: 'black' }}>
                        Awards And Recognition
                      </p>
                     
                    </Link>
                    <Link href="/career" className="flex items-center gap-3">
                    
                      <Image
                        src="icons/career-icon.png"
                      width="60px"
                      height="60px"
                             rounded="rounded-none"
                        className=" bg-slate-300"
                      />
                     <p style={{ whiteSpace: "nowrap" ,color: 'black' }}>Careers</p>
              
                    </Link>
                  </div>
                )} */}
              </li>
              <li className="w-full">
                <div className="flex items-center justify-between w-full border-b-2 border-gray-300">
                  <Link
                    href="/solutions"
                    className="w-full lg:text-4xl text-lg py-2 pr-4 leading-[24px] tracking-[0.5px] block"
                    onClick={handleClick}
                  >
                    Solutions
                  </Link>
                  <span
                    onClick={toggleExpandSolutions}
                    className="cursor-pointer text-2xl lg:text-3xl font-normal pr-4"
                  >
                    {expandedSolutions ? "-" : "+"}
                  </span>
                </div>

                {/* Sliding Solutions Section */}
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    expandedSolutions ? "max-h-full" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 mr-6 p-4 overflow-y-auto">
                    {appSolutions.map((solution, index) => (
                      <div
                        className="flex items-center justify-between gap-3 w-full"
                        key={index}
                      >
                        <Link
                          href={solution.href}
                          onClick={handleClick}
                          passHref
                          className="flex items-center gap-3"
                        >
                          <CustomImage
                            publicImage={solution.publicImage}
                            width="30px"
                            height="30px"
                            rounded="rounded-none"
                            alt={solution.alt}
                            // className="bg-slate-300"
                          />
                          <p
                            className="text-base"
                            style={{ whiteSpace: "nowrap", color: "black" }}
                          >
                            {solution.text}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              {/* Services Section */}
              <li className="w-full">
                <div className="flex items-center justify-between w-full border-b-2 border-gray-300">
                  <Link
                    href="/services"
                    className="w-full lg:text-4xl text-lg py-2 pr-4 leading-[24px] tracking-[0.5px] block"
                    onClick={handleClick}
                  >
                    Services
                  </Link>
                  <span
                    onClick={toggleExpandServices}
                    className="cursor-pointer text-2xl lg:text-3xl font-normal pr-4"
                  >
                    {expandedServices ? "-" : "+"}
                  </span>
                </div>

                {/* Sliding Services Section */}
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden  ${
                    expandedServices ? "max-h-full" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-2 overflow-x-auto overflow-y-auto mr-6 p-4">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-3 w-full"
                      >
                        <Link
                          href={service.href}
                          passHref
                          className="flex items-center gap-3"
                          onClick={handleClick}
                        >
                          <CustomImage
                            publicImage={service.icon}
                            width="30px"
                            height="30px"
                            rounded="rounded-none"
                            alt={service.label}
                            // className="bg-slate-300"
                          />
                          <p
                            className="text-base"
                            style={{ whiteSpace: "nowrap", color: "black" }}
                          >
                            {service.label}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <Link
                href="/portfolio"
                className="w-full lg:text-4xl text-lg py-2 pr-4 leading-[24px] tracking-[0.5px] border-b-2 border-gray-300 block"
                onClick={handleClick}
              >
                <li className="w-full">
                  <div className="flex items-center justify-between w-full">
                    Portfolio
                  </div>
                </li>
              </Link>
              <Link
                href="/blogs"
                onClick={handleClick}
                className="w-full lg:text-4xl text-lg py-2 pr-4 leading-[24px] tracking-[0.5px] border-b-2 border-gray-300 block"
              >
                <li className="w-full">
                  <div className="flex items-center justify-between w-full">
                    Blogs
                  </div>
                </li>
              </Link>
            </ul>
            <div className="mx-auto my-6 w-fit">
              <button className="rounded-md bg-[#323232C7] w-[160px] h-[50px] transition-transform duration-300 transform hover:bg-[#0F53FF]">
                <Link
                  onClick={handleClick}
                  href="/contact-us"
                  className="quote-shadow text-base 2xl:text-lg text-white"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}
