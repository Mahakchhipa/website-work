"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import CustomImage from "@/components/BlogComponents/CustomeImage";
export default function ListFooter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const contentRef = useRef(null);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  // Toggle function to open/close menu

  // Dynamically adjust the height of each section
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    if (contentRef1.current) {
      contentRef1.current.style.maxHeight = isOpen1
        ? `${contentRef1.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen1]);

  useEffect(() => {
    if (contentRef2.current) {
      contentRef2.current.style.maxHeight = isOpen2
        ? `${contentRef2.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen2]);

  return (
    <>
      <footer className="bg-[#000000] flex flex-col justify-between px-[20px] lg:py-[40px] py-[20px] xl:px-[100px] lg:flex hidden">
        {/* First Column */}
        <div className="flex flex-col 2xl:gap-4 justify-start ">
          <div className="flex lg:flex-row flex-col 2xl:gap-4  w-full">
            {" "}
            <div className="w-full flex flex-col gap-3 justify-start  items-start ">
              <div className=" w-[220px]">
                <CustomImage
                  publicImage="/assets/icons/techanic-infotech-logo.png"
                  alt="techanicImg"
                />
              </div>
              <p className="text-white lg:text-lg text-base">
                Your trusted partner in innovative app and software development.
              </p>
              <p className="text-white lg:text-xl text-base font-bold"> U62020RJ2023PTC090795</p>
            </div>
            {/* Second Column */}
            {/* <div className="flex flex-col lg:flex-row gap-4 xl:gap-8  w-auto"> */}
            <div className="w-full flex flex-col gap-2  lg:items-center">
              <h3 className="lg:text-lg text-base font-semibold  text-white lg:ml-4">
                Company
              </h3>
              <ol className="flex flex-col gap-2 md:gap-4 py-4">
                <li>
                  <Link
                    className="text-white hover:text-blue-600 text-sm  hover:underline"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="text-white  hover:text-blue-600  text-sm  hover:underline">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm   hover:underline">
                  <Link href="/awards">Awards</Link>
                </li>

                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/career">Career</Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ol>
            </div>
            {/* third Column */}
            <div className="w-full flex flex-col gap-2 items-start">
              <h3 className="lg:text-lg text-base font-semibold  text-white">
                Solutions
              </h3>
              <ol className="flex flex-col gap-2 md:gap-4 py-4">
                <li>
                  <Link
                    className="text-white hover:text-blue-600 text-sm  hover:underline"
                    href="/solutions/dating-app-development-company"
                  >
                    Dating App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/matrimonial-app-development-company">
                    Matrimonial App Development
                  </Link>
                </li>

                <li className="text-white  hover:text-blue-600 text-sm   hover:underline">
                  <Link href="/solutions/food-delivery-app-development-company">
                    Food Delivery App Development
                  </Link>
                </li>

                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/salon-app-development-company">
                    Salon App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/classified-app-development-company">
                    Classified App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/ewallet-app-development-company">
                    E-Wallet App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600  text-sm  hover:underline">
                  <Link href="/solutions/taxi-app-development-company">
                    Taxi App Development
                  </Link>
                </li>

                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/doctor-on-demand-app-development-company">
                    Doctor on Demand App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/solutions/courier-delivery-app-development-company">
                    Courier Delivery App Development
                  </Link>
                </li>
              </ol>
            </div>
            {/* fourth Column */}
            <div className="w-full flex flex-col gap-2 items-start">
              <h3 className="lg:text-lg text-base font-semibold  text-white">
                Services
              </h3>
              <ol className="flex flex-col gap-2 md:gap-4  py-4">
                <li>
                  <Link
                    className="text-white hover:text-blue-600 text-sm  hover:underline"
                    href="/services/mobile-app-development-company"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/web-development-company">
                    Web Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/react-native-app-development-company">
                    React Native App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/reactjs-development-company">
                    React JS Development
                  </Link>
                </li>
                {/* <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
              <Link href="/services/php-development-company">
                PHP Development
              </Link>
            </li> */}
                <li className="text-white  hover:text-blue-600  text-sm  hover:underline">
                  <Link href="/services/python-development-company">
                    Python Development{" "}
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/ecommerce-development-company">
                    E-Commerce Development
                  </Link>
                </li>
                {/* <li className="text-white  hover:text-blue-600 text-sm   hover:underline">
              <Link href="/services/ios-app-development-company">
                IOS App Development{" "}
              </Link>
            </li> */}

                {/* <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
              <Link href="/services/wordpress-development-company">
                Wordpress App Development
              </Link>
            </li> */}
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/android-app-development-company">
                    Android App Development{" "}
                  </Link>
                </li>

                {/* <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
              <Link href="/services/flutter-app-development-company">
                {" "}
                Flutter App Development{" "}
              </Link>
            </li> */}
                <li className="text-white  hover:text-blue-600 text-sm  hover:underline">
                  <Link href="/services/nodejs-development-company">
                    Node JS Development
                  </Link>
                </li>
              </ol>
            </div>
            {/* </div> */}
            {/* fifth Column */}
            <div className="w-full  mb-6 xl:flex flex-col gap-12 hidden">
              <div className="footer-contact-us flex flex-col gap-3">
                <h3 className="lg:text-lg text-base font-semibold  text-white">
                  Contact Us
                </h3>
                <div className="flex gap-3">
                  <svg
                    className="lg:flex hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="lg:hidden"
                    width="20"
                    height="20"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <p
                    // href="/"
                    className="link-contact-us-footer text-white hover:text-blue-600 text-base hover:underline"
                  >
                    Balaji Blessing – 01, D-125, Narayan Vihar, Jaipur,
                    Rajasthan
                  </p>
                </div>
                <Link href="tel:+917222001000" className="flex  gap-2">
                  {" "}
                  <div className="flex">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                      Sales - +91 7222 001 000
                    </p>
                  </div>
                </Link>

                <Link href="tel:+91 81122 73924" className="flex   gap-2">
                  <div className="flex ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                    HR - +91 81122 73924
                  </p>
                </Link>

                <Link href="mailto:info@techanicinfotech.com">
                  <div className="flex items-center gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#1F2937" />
                      <path
                        d="M3 4C1.34375 4 0 5.34375 0 7C0 7.94375 0.44375 8.83125 1.2 9.4L14.8 19.6C15.5125 20.1313 16.4875 20.1313 17.2 19.6L30.8 9.4C31.5562 8.83125 32 7.94375 32 7C32 5.34375 30.6562 4 29 4H3ZM0 11V24C0 26.2062 1.79375 28 4 28H28C30.2062 28 32 26.2062 32 24V11L18.4 21.2C16.975 22.2688 15.025 22.2688 13.6 21.2L0 11Z"
                        fill="white"
                      />
                    </svg>

                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                      info@techanicinfotech.com
                    </p>
                  </div>
                </Link>
              </div>
              <div className="w-full flex flex-col gap-3 items-start  justify-between py-3">
                <div className="flex lg:justify-center items-center">
                  <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                    <Link href="https://www.instagram.com/techanic_infotech_/?locale=English">
                      <FaInstagram size={20} className="text-white  " />
                    </Link>
                  </li>
                  <li className="mx-2 list-none bg-gray-800 py-[6px] px-[10px] rounded-lg  hover:bg-blue-600 ">
                    <Link href="https://x.com/techanicinfo">
                      <FaTwitter size={20} className="text-white" />
                    </Link>
                  </li>
                  <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                    <Link href="https://www.facebook.com/techanicinfotech/">
                      <FaFacebook size={20} className="text-white  " />
                    </Link>
                  </li>
                  <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                    <Link href="https://www.linkedin.com/company/techanic-infotech/">
                      <FaLinkedin size={20} className="text-white  " />
                    </Link>
                  </li>
                </div>
                <div className="flex gap-4 items-center lg:justify-end">
                  <div>
                    {" "}
                    <CustomImage
                      publicImage="/assets/icons/copyscape-icon.webp"
                      width="120px"
                      height="40px"
                    />
                  </div>
                  <div>
                    {" "}
                    <CustomImage
                      publicImage="/assets/icons/dmca-icon.webp"
                      width="120px"
                      height="40px"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth Column */}
          </div>
          <div className="flex justify-between">
            {" "}
            <div className="w-full  mb-6 xl:hidden">
              <div className="footer-contact-us flex flex-col gap-3">
                <h3 className="lg:text-lg text-base font-semibold  text-white">
                  Contact Us
                </h3>
                <div className="flex gap-3">
                  <svg
                    className="lg:flex hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="lg:hidden"
                    width="20"
                    height="20"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <p
                    // href="/"
                    className="link-contact-us-footer text-white hover:text-blue-600 text-base hover:underline"
                  >
                    Balaji Blessing – 01, D-125, Narayan Vihar, Jaipur,
                    Rajasthan
                  </p>
                </div>

                <Link href="tel:+917222001000" className="flex  gap-2">
                  {" "}
                  <div className="flex">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                      Sales - +91 7222 001 000
                    </p>
                  </div>
                </Link>

                <Link href="tel:+91 81122 73924" className="flex   gap-2">
                  <div className="flex ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                    HR - +91 81122 73924
                  </p>
                </Link>
                <Link href="mailto:info@techanicinfotech.com">
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#1F2937" />
                      <path
                        d="M3 4C1.34375 4 0 5.34375 0 7C0 7.94375 0.44375 8.83125 1.2 9.4L14.8 19.6C15.5125 20.1313 16.4875 20.1313 17.2 19.6L30.8 9.4C31.5562 8.83125 32 7.94375 32 7C32 5.34375 30.6562 4 29 4H3ZM0 11V24C0 26.2062 1.79375 28 4 28H28C30.2062 28 32 26.2062 32 24V11L18.4 21.2C16.975 22.2688 15.025 22.2688 13.6 21.2L0 11Z"
                        fill="white"
                      />
                    </svg>

                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                      info@techanicinfotech.com
                    </p>
                  </div>
                </Link>
              </div>
            </div>{" "}
            <div className="w-full flex flex-col gap-3 lg:items-end  justify-between py-3 xl:hidden">
              <div className="flex lg:justify-center items-center">
                {/* <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600">
            <FaYoutube size={20} className="text-white   hover:bg-blue-600" />
          </li> */}
                <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                  <Link href="https://www.instagram.com/techanic_infotech_/?locale=English">
                    <FaInstagram size={20} className="text-white  " />
                  </Link>
                </li>
                <li className="mx-2 list-none bg-gray-800 py-[6px] px-[10px] rounded-lg  hover:bg-blue-600 ">
                  <Link href="https://x.com/techanicinfo">
                    <FaTwitter size={20} className="text-white" />
                  </Link>
                </li>
                <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                  <Link href="https://www.facebook.com/techanicinfotech/">
                    <FaFacebook size={20} className="text-white  " />
                  </Link>
                </li>
                <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                  <Link href="https://www.linkedin.com/company/techanic-infotech/">
                    <FaLinkedin size={20} className="text-white  " />
                  </Link>
                </li>
              </div>
              <div className="flex gap-4 items-center lg:justify-end">
                <CustomImage
                  publicImage="/assets/icons/copyscape-icon.webp"
                  width="120px"
                  height="40px"
                />
                <CustomImage
                  publicImage="/assets/icons/dmca-icon.webp"
                  width="120px"
                  height="40px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full  border-t border-gray-800 pt-[40px] flex flex-col lg:flex-row justify-between items-center">
          <p className="text-white mb-2 lg:mb-0 lg:text-lg text-base">
            © 2024 Abhineh Infotech Pvt. Ltd
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-blue-600 text-sm hover:underline border-r-2 border-[#eeeeee] pr-3 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-white hover:text-blue-600 text-sm hover:underline text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>

      <footer className="bg-[#000000] flex flex-col justify-between px-[20px] lg:py-[40px] py-[20px] xl:px-[100px] lg:hidden ">
        {/* First Column */}
        <div className="flex flex-col gap-4 justify-start ">
          <div className="flex lg:flex-row flex-col gap-4  w-full">
            {" "}
            <div className="w-full flex flex-col gap-3 justify-start  items-start ">
              <div className=" w-[220px]">
                <CustomImage
                  publicImage="/assets/icons/techanic-infotech-logo.png"
                  alt="techanicImg"
                />
              </div>
              <p className="text-white lg:text-lg text-base">
                Your trusted partner in innovative app and software development.
              </p>
              <p className="text-white lg:text-lg text-base font-bold"> U62020RJ2023PTC090795</p>
            </div>
            {/* Second Column */}
            {/* <div className="flex flex-col lg:flex-row gap-4 xl:gap-8  w-auto"> */}
            <div className="w-full flex flex-col gap-2 lg:items-center">
              <div
                className="w-full flex  justify-between items-center gap-2  cursor-pointer bg-white lg:bg-inherit p-1 lg:p-0 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
              >
                <h3 className="lg:text-lg text-base font-semibold lg:text-white text-black lg:ml-4 ">
                  Company
                </h3>
                {!isOpen ? (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.7011 0.752762C0.966196 0.485329 1.38275 0.459295 1.67731 0.675859L1.76175 0.748108L8.25974 7.18899L14.701 0.691332C14.9661 0.423899 15.3826 0.397865 15.6772 0.614429L15.7616 0.686678C16.029 0.951773 16.0551 1.36833 15.8385 1.66289L15.7663 1.74733L8.79705 8.77797C8.53196 9.04541 8.1154 9.07144 7.82084 8.85488L7.7364 8.78263L0.705754 1.81341C0.411579 1.52181 0.409495 1.04694 0.7011 0.752762Z"
                      fill="#3C3679"
                    />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8136 8.71676C15.5496 8.98526 15.1332 9.01297 14.8377 8.7976L14.753 8.72569L8.22909 2.31109L1.81414 8.83469C1.55013 9.10319 1.13368 9.1309 0.838246 8.91553L0.753519 8.84362C0.485019 8.57961 0.457304 8.16316 0.672677 7.86773L0.744585 7.783L7.68537 0.724283C7.94939 0.455784 8.36583 0.428068 8.66127 0.643442L8.74599 0.715349L15.8047 7.65614C16.1001 7.94655 16.1041 8.42141 15.8136 8.71676Z"
                      fill="#3C3679"
                    />
                  </svg>
                )}
              </div>
              <ol
                ref={contentRef}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-0" : "hidden"
                } lg:flex lg:flex-col gap-2 md:gap-4 py-4`}
              >
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/awards">Awards</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/career">Career</Link>
                </li>
                <li className="text-white hover:text-blue-600 text-base hover:underline">
                  <Link href="/blogs">Blogs</Link>
                </li>
              </ol>
            </div>
            {/* third Column */}
            <div className="w-full flex flex-col gap-2 items-start">
              <div
                className="w-full flex  justify-between items-center gap-2  cursor-pointer bg-white lg:bg-inherit p-1 lg:p-0 rounded-md"
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <h3 className="lg:text-lg text-base font-semibold lg:text-white text-black lg:ml-4 ">
                  Solutions
                </h3>
                {!isOpen1 ? (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.7011 0.752762C0.966196 0.485329 1.38275 0.459295 1.67731 0.675859L1.76175 0.748108L8.25974 7.18899L14.701 0.691332C14.9661 0.423899 15.3826 0.397865 15.6772 0.614429L15.7616 0.686678C16.029 0.951773 16.0551 1.36833 15.8385 1.66289L15.7663 1.74733L8.79705 8.77797C8.53196 9.04541 8.1154 9.07144 7.82084 8.85488L7.7364 8.78263L0.705754 1.81341C0.411579 1.52181 0.409495 1.04694 0.7011 0.752762Z"
                      fill="#3C3679"
                    />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8136 8.71676C15.5496 8.98526 15.1332 9.01297 14.8377 8.7976L14.753 8.72569L8.22909 2.31109L1.81414 8.83469C1.55013 9.10319 1.13368 9.1309 0.838246 8.91553L0.753519 8.84362C0.485019 8.57961 0.457304 8.16316 0.672677 7.86773L0.744585 7.783L7.68537 0.724283C7.94939 0.455784 8.36583 0.428068 8.66127 0.643442L8.74599 0.715349L15.8047 7.65614C16.1001 7.94655 16.1041 8.42141 15.8136 8.71676Z"
                      fill="#3C3679"
                    />
                  </svg>
                )}
              </div>
              <ol
                ref={contentRef1}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen1 ? "max-h-0" : "hidden"
                } lg:flex lg:flex-col gap-2 md:gap-4 py-4`}
              >
                <li>
                  <Link
                    className="text-white hover:text-blue-600 text-base  hover:underline"
                    href="/solutions/dating-app-development-company"
                  >
                    Dating App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/matrimonial-app-development-company">
                    Matrimonial App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/courier-delivery-app-development-company">
                    Courier Delivery App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600  text-base  hover:underline">
                  <Link href="/solutions/taxi-app-development-company">
                    Taxi App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/doctor-on-demand-app-development-company">
                    Doctor on Demand App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base   hover:underline">
                  <Link href="/solutions/food-delivery-app-development-company">
                    Food Delivery App Development
                  </Link>
                </li>

                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/salon-app-development-company">
                    Salon App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/classified-app-development-company">
                    Classified App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/solutions/ewallet-app-development-company">
                    E-Wallet App Development
                  </Link>
                </li>
              </ol>
            </div>
            {/* fourth Column */}
            <div className="w-full flex flex-col gap-2 items-start">
              <div
                className="w-full flex  justify-between items-center gap-2  cursor-pointer bg-white lg:bg-inherit p-1 lg:p-0 rounded-md"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <h3 className="lg:text-lg text-base font-semibold lg:text-white text-black lg:ml-4 ">
                  Services
                </h3>
                {!isOpen2 ? (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.7011 0.752762C0.966196 0.485329 1.38275 0.459295 1.67731 0.675859L1.76175 0.748108L8.25974 7.18899L14.701 0.691332C14.9661 0.423899 15.3826 0.397865 15.6772 0.614429L15.7616 0.686678C16.029 0.951773 16.0551 1.36833 15.8385 1.66289L15.7663 1.74733L8.79705 8.77797C8.53196 9.04541 8.1154 9.07144 7.82084 8.85488L7.7364 8.78263L0.705754 1.81341C0.411579 1.52181 0.409495 1.04694 0.7011 0.752762Z"
                      fill="#3C3679"
                    />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8136 8.71676C15.5496 8.98526 15.1332 9.01297 14.8377 8.7976L14.753 8.72569L8.22909 2.31109L1.81414 8.83469C1.55013 9.10319 1.13368 9.1309 0.838246 8.91553L0.753519 8.84362C0.485019 8.57961 0.457304 8.16316 0.672677 7.86773L0.744585 7.783L7.68537 0.724283C7.94939 0.455784 8.36583 0.428068 8.66127 0.643442L8.74599 0.715349L15.8047 7.65614C16.1001 7.94655 16.1041 8.42141 15.8136 8.71676Z"
                      fill="#3C3679"
                    />
                  </svg>
                )}
              </div>
              <ol
                ref={contentRef2}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen2 ? "max-h-0" : "hidden"
                } lg:flex lg:flex-col gap-2 md:gap-4 py-4`}
              >
                <li>
                  <Link
                    className="text-white hover:text-blue-600 text-base  hover:underline"
                    href="/services/mobile-app-development-company"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/web-development-company">
                    Web Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/react-native-app-development-company">
                    React Native App Development
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/reactjs-development-company">
                    React JS Development
                  </Link>
                </li>

                <li className="text-white  hover:text-blue-600  text-base  hover:underline">
                  <Link href="/services/python-development-company">
                    Python Development{" "}
                  </Link>
                </li>
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/ecommerce-development-company">
                    E-Commerce Development
                  </Link>
                </li>
                {/* <li className="text-white  hover:text-blue-600 text-base   hover:underline">
                  <Link href="/services/ios-app-development-company">
                    IOS App Development{" "}
                  </Link>
                </li> */}

                {/* <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/wordpress-development-company">
                    Wordpress App Development
                  </Link>
                </li> */}
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/android-app-development-company">
                    Android App Development{" "}
                  </Link>
                </li>

                {/* <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/flutter-app-development-company">
                    {" "}
                    Flutter App Development{" "}
                  </Link>
                </li> */}
                <li className="text-white  hover:text-blue-600 text-base  hover:underline">
                  <Link href="/services/nodejs-development-company">
                    Node JS Development
                  </Link>
                </li>
              </ol>
            </div>
            {/* </div> */}
            <div className="w-full  mb-6">
              <div className="footer-contact-us flex flex-col gap-3">
                <h3 className="lg:text-lg text-base font-semibold text-white  lg:ml-4 ">
                  Contact Us
                </h3>
                <div className="flex gap-3">
                  <svg
                    className="lg:flex hidden"
                    width="32"
                    height="32"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    className="lg:hidden"
                    width="20"
                    height="20"
                    viewBox="0 0 28 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7281 31.2C19.4688 27.1875 28 17.4625 28 12C28 5.375 21.7292 0 14 0C6.27083 0 0 5.375 0 12C0 17.4625 8.53125 27.1875 12.2719 31.2C13.1687 32.1562 14.8312 32.1562 15.7281 31.2ZM14 8C15.2377 8 16.4247 8.42143 17.2998 9.17157C18.175 9.92172 18.6667 10.9391 18.6667 12C18.6667 13.0609 18.175 14.0783 17.2998 14.8284C16.4247 15.5786 15.2377 16 14 16C12.7623 16 11.5753 15.5786 10.7002 14.8284C9.825 14.0783 9.33333 13.0609 9.33333 12C9.33333 10.9391 9.825 9.92172 10.7002 9.17157C11.5753 8.42143 12.7623 8 14 8Z"
                      fill="white"
                    />
                  </svg>
                  <p
                    // href="/"
                    className="link-contact-us-footer text-white hover:text-blue-600 text-base hover:underline"
                  >
                    Balaji Blessing – 01, D-125, Narayan Vihar, Jaipur,
                    Rajasthan
                  </p>
                </div>

                <Link href="tel:+917222001000" className="flex  gap-2">
                  {" "}
                  <div className="flex">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                      Sales - +91 7222 001 000
                    </p>
                  </div>
                </Link>

                <Link href="tel:+91 81122 73924" className="flex   gap-2">
                  <div className="flex ">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" />
                      <path
                        d="M10.3062 1.53793C9.825 0.375433 8.55625 -0.243317 7.34375 0.0879327L1.84375 1.58793C0.75625 1.88793 0 2.87543 0 4.00043C0 19.4629 12.5375 32.0004 28 32.0004C29.125 32.0004 30.1125 31.2442 30.4125 30.1567L31.9125 24.6567C32.2438 23.4442 31.625 22.1754 30.4625 21.6942L24.4625 19.1942C23.4438 18.7692 22.2625 19.0629 21.5688 19.9192L19.0438 23.0004C14.6438 20.9192 11.0813 17.3567 9 12.9567L12.0813 10.4379C12.9375 9.73793 13.2312 8.56293 12.8062 7.54418L10.3062 1.54418V1.53793Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <p className="link-contact-us-footer text-white hover:text-blue-600 text-sm hover:underline">
                    HR - +91 81122 73924
                  </p>
                </Link>
                <Link href="mailto:info@techanicinfotech.com">
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="8" fill="#1F2937" />
                      <path
                        d="M3 4C1.34375 4 0 5.34375 0 7C0 7.94375 0.44375 8.83125 1.2 9.4L14.8 19.6C15.5125 20.1313 16.4875 20.1313 17.2 19.6L30.8 9.4C31.5562 8.83125 32 7.94375 32 7C32 5.34375 30.6562 4 29 4H3ZM0 11V24C0 26.2062 1.79375 28 4 28H28C30.2062 28 32 26.2062 32 24V11L18.4 21.2C16.975 22.2688 15.025 22.2688 13.6 21.2L0 11Z"
                        fill="white"
                      />
                    </svg>

                    <p className="link-contact-us-footer text-white hover:text-blue-600 text-base hover:underline">
                      info@techanicinfotech.com
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 lg:items-end  justify-between py-3">
            <div className="flex lg:justify-center items-center">
              <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                <Link href="https://www.instagram.com/techanic_infotech_/?locale=English">
                  <FaInstagram size={20} className="text-white  " />
                </Link>
              </li>
              <li className="mx-2 list-none bg-gray-800 py-[6px] px-[10px] rounded-lg  hover:bg-blue-600 ">
                <Link href="https://x.com/techanicinfo">
                  <FaTwitter size={20} className="text-white" />
                </Link>
              </li>
              <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                <Link href="https://www.facebook.com/techanicinfotech/">
                  <FaFacebook size={20} className="text-white  " />
                </Link>
              </li>
              <li className="mx-2 list-none bg-gray-800 p-2 rounded-lg  hover:bg-blue-600 ">
                <Link href="https://www.linkedin.com/company/techanic-infotech/">
                  <FaLinkedin size={20} className="text-white  " />
                </Link>
              </li>
            </div>
            <div className="flex gap-4 items-center lg:justify-end">
              <CustomImage
                publicImage="/assets/icons/copyscape-icon.webp"
                width="120px"
                height="40px"
              />
              <CustomImage
                publicImage="/assets/icons/dmca-icon.webp"
                width="120px"
                height="40px"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full  border-t border-gray-800 pt-[40px] flex flex-col lg:flex-row justify-between items-center">
          <p className="text-white mb-2 lg:mb-0 lg:text-lg text-base">
            © 2024 Abhineh Infotech Pvt. Ltd
          </p>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-white hover:text-blue-600 text-base hover:underline border-r-2 border-[#eeeeee] pr-3 text-base"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-white hover:text-blue-600 text-base hover:underline text-base"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
