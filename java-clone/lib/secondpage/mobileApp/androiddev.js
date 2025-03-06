"use client";
import React from "react";
import { useState } from "react";
import "./AndroidDev.css";
import CustomImage from "@/components/BlogComponents/CustomeImage";

// Define your icons
const icons = [
  {
    id: 1,
    svg: (
      <svg
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1070_1595)">
          <path
            d="M9 11C10.4918 11 11.9226 10.4732 12.9775 9.53553C14.0324 8.59785 14.625 7.32608 14.625 6C14.625 4.67392 14.0324 3.40215 12.9775 2.46447C11.9226 1.52678 10.4918 1 9 1C7.50816 1 6.07742 1.52678 5.02252 2.46447C3.96763 3.40215 3.375 4.67392 3.375 6C3.375 7.32608 3.96763 8.59785 5.02252 9.53553C6.07742 10.4732 7.50816 11 9 11ZM9 11C11.2646 11 13.2435 11.76 14.6509 13.023C15.4853 13.775 16.1095 14.6905 16.4734 15.696M9 11C4.5 11 1.125 14 1.125 18V23H12.375M13.5 18.824L18.2138 22L25.875 13"
            stroke="#0F53FF"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1070_1595">
            <rect width="27" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.60156 11.2008L8.80156 18.4008L22.4016 4.80078"
          stroke="#0F53FF"
          strokeWidth="2"
          stroke-linecap="square"
        />
      </svg>
    ),
  },
  {
    id: 3,
    svg: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.89004 7.52032L7.52032 9.89004C7.30719 10.1037 7.1875 10.3932 7.1875 10.695C7.1875 10.9969 7.30719 11.2863 7.52032 11.5L16.1482 20.125H20.125V16.1482L11.5 7.52032C11.2863 7.30719 10.9969 7.1875 10.695 7.1875C10.3932 7.1875 10.1037 7.30719 9.89004 7.52032ZM18.6875 16.744V18.6875H16.744L11.3958 13.34L13.3393 11.3958L18.6875 16.744ZM12.323 10.3795L10.3795 12.323L8.7501 10.6936L10.6936 8.7501L12.323 10.3795Z"
          fill="#0F53FF"
        />
        <path
          d="M20.125 1.4375V7.1875H14.375V5.75H17.9112C16.2941 3.93156 13.9869 2.875 11.5 2.875C6.74906 2.875 2.875 6.74188 2.875 11.5C2.875 16.2509 6.74906 20.125 11.5 20.125H12.2188V21.5625H11.5C5.95125 21.5625 1.4375 17.0487 1.4375 11.5C1.4375 5.95125 5.95125 1.4375 11.5 1.4375C14.2528 1.4375 16.8188 2.55156 18.6875 4.47781V1.4375H20.125Z"
          fill="#0F53FF"
        />
      </svg>
    ),
  },
  {
    id: 4,
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1070_1602)">
          <path
            d="M15.2338 5.75061e-05C11.4854 5.75061e-05 8.46462 3.02082 8.46462 6.76927C8.46462 6.96812 8.49593 7.23719 8.51793 7.48342L1.27233 14.7282C0.876555 15.1214 0.562457 15.589 0.34812 16.1041C0.133782 16.6192 0.0234375 17.1716 0.0234375 17.7295C0.0234375 18.2874 0.133782 18.8398 0.34812 19.3549C0.562457 19.8699 0.876555 20.3376 1.27233 20.7308C1.66555 21.1265 2.13316 21.4406 2.64824 21.655C3.16333 21.8693 3.71573 21.9797 4.27363 21.9797C4.83154 21.9797 5.38393 21.8693 5.89902 21.655C6.41411 21.4406 6.88172 21.1265 7.27493 20.7308L14.5197 13.4852C14.7651 13.5072 15.0358 13.5385 15.2338 13.5385C18.9823 13.5385 22.0031 10.5177 22.0031 6.76927C22.0074 5.67859 21.7343 4.60473 21.2094 3.64866L20.6805 2.67051L19.8877 3.4642L16.2382 7.08573L14.9165 5.76404L18.5381 2.11544L19.3334 1.32175L18.3544 0.792902C17.3983 0.268279 16.3244 -0.00455417 15.2338 5.75061e-05ZM15.2338 1.69236C15.6451 1.69236 15.9514 1.87005 16.3169 1.95721L13.1185 5.15566L12.5092 5.76489L13.1185 6.34619L15.6569 8.88465L16.2391 9.49388L16.8466 8.88465L20.0467 5.6862C20.1339 6.05173 20.3107 6.35804 20.3107 6.76927C20.3107 9.6208 18.0854 11.8462 15.2338 11.8462C14.8954 11.8462 14.6246 11.8462 14.4131 11.7929L13.9646 11.6609L13.6211 12.0053L6.0844 19.5419C5.04363 20.5827 3.50363 20.5827 2.46287 19.5419L2.43579 19.5149C1.42041 18.4741 1.42887 16.951 2.46118 15.9187L9.99785 8.38288L10.3422 8.03934L10.2085 7.59088C10.1578 7.37934 10.1561 7.10858 10.1561 6.77012C10.1561 3.91859 12.3815 1.69321 15.233 1.69321L15.2338 1.69236Z"
            fill="#0F53FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_1070_1602">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 5,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9974 12.0004C21.9973 11.8416 21.9929 11.6829 21.9844 11.5244C21.9791 11.4151 21.9714 11.3061 21.9614 11.1974C21.9601 11.1554 21.9567 11.1131 21.9514 11.0704C21.9381 10.9311 21.9221 10.7924 21.9034 10.6544V10.6314C21.883 10.4853 21.8597 10.3396 21.8334 10.1944C20.8344 4.76239 15.6234 1.16839 10.1924 2.16639C4.7624 3.16439 1.1684 8.37639 2.1664 13.8064C2.51239 15.6933 3.394 17.4408 4.706 18.8404C6.018 20.24 7.70499 21.2325 9.56565 21.6995C11.4263 22.1666 13.382 22.0884 15.1995 21.4743C17.0169 20.8603 18.6193 19.7362 19.8154 18.2364L16.7464 16.0514C15.4864 17.5244 13.8004 18.2504 12.0034 18.2504C11.1816 18.2536 10.3672 18.0941 9.60727 17.7812C8.84733 17.4683 8.15682 17.0081 7.5755 16.4271C6.99418 15.8462 6.53355 15.156 6.22015 14.3962C5.90674 13.6365 5.74675 12.8222 5.7494 12.0004C5.74649 11.179 5.90615 10.3652 6.21919 9.60587C6.53222 8.84651 6.99244 8.1566 7.57332 7.5759C8.1542 6.99521 8.84426 6.53521 9.60372 6.22242C10.3632 5.90963 11.177 5.75022 11.9984 5.75339C13.3292 5.75 14.626 6.17282 15.6991 6.95993C16.7721 7.74703 17.5649 8.85705 17.9614 10.1274H12.0034L10.4064 13.8774H21.8314C21.9172 13.3825 21.969 12.8823 21.9864 12.3804C21.9944 12.2804 21.9964 12.1574 21.9964 12.0024"
          fill="#0F53FF"
        />
      </svg>
    ),
  },
  {
    id: 6,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12.5C11.0717 12.5 10.1815 12.8687 9.52513 13.5251C8.86875 14.1815 8.5 15.0717 8.5 16C8.5 16.9283 8.86875 17.8185 9.52513 18.4749C10.1815 19.1313 11.0717 19.5 12 19.5C12.9283 19.5 13.8185 19.1313 14.4749 18.4749C15.1313 17.8185 15.5 16.9283 15.5 16C15.5 15.0717 15.1313 14.1815 14.4749 13.5251C13.8185 12.8687 12.9283 12.5 12 12.5ZM10.5 16C10.5 15.6022 10.658 15.2206 10.9393 14.9393C11.2206 14.658 11.6022 14.5 12 14.5C12.3978 14.5 12.7794 14.658 13.0607 14.9393C13.342 15.2206 13.5 15.6022 13.5 16C13.5 16.3978 13.342 16.7794 13.0607 17.0607C12.7794 17.342 12.3978 17.5 12 17.5C11.6022 17.5 11.2206 17.342 10.9393 17.0607C10.658 16.7794 10.5 16.3978 10.5 16Z"
          fill="#0F53FF"
        />
        <path
          d="M17.526 5.1152L14.347 0.658203L2.658 9.9962L2.01 9.9892V9.9992H1.5V21.9992H22.5V9.9992H21.538L19.624 4.4002L17.526 5.1152ZM19.425 9.9992H9.397L16.866 7.4532L18.388 6.9662L19.425 9.9992ZM15.55 5.7892L7.84 8.4172L13.946 3.5392L15.55 5.7892ZM3.5 18.1682V13.8282C3.92218 13.6792 4.30565 13.4376 4.62231 13.1211C4.93896 12.8046 5.18077 12.4213 5.33 11.9992H18.67C18.8191 12.4215 19.0609 12.805 19.3775 13.1217C19.6942 13.4383 20.0777 13.6801 20.5 13.8292V18.1692C20.0777 18.3183 19.6942 18.5601 19.3775 18.8767C19.0609 19.1934 18.8191 19.5769 18.67 19.9992H5.332C5.18218 19.5769 4.93996 19.1933 4.62302 18.8766C4.30607 18.5598 3.9224 18.3178 3.5 18.1682Z"
          fill="#0F53FF"
        />
      </svg>
    ),
  },
];

const contentData = [
  {
    title: "Profound Expertise",
    content:
      "Our developers are seasoned experts, bringing a wealth of knowledge and specialized skills in mobile app development to ensure your project's success.",
    icon: icons[0].svg,
  },
  {
    title: "Custom Solutions",
    content:
      "Tailored to your unique requirements, our developers craft custom solutions that are not only innovative but also perfectly aligned with your business goals.",
    icon: icons[1].svg,
  },
  {
    title: "Agile Methodology",
    content:
      "Adopting an agile approach, our developers ensure timely delivery with iterative testing, resulting in a market-ready app that exceeds expectations.",
    icon: icons[2].svg,
  },
  {
    title: "Technical Support",
    content:
      "Beyond development, our team provides comprehensive support and maintenance, guaranteeing the longevity and performance of your mobile application.",
    icon: icons[3].svg,
  },
  {
    title: "Competitive Edge",
    content:
      "By hiring our developers, you gain a competitive edge with apps that feature the latest functionalities and offer an exceptional user experience.",
    icon: icons[4].svg,
  },
  {
    title: "Cost-Effective",
    content:
      "Techanic InfoTech ensures cost-effective development without compromising on quality, providing you with a superior product that delivers value.",
    icon: icons[5].svg,
  },
];

export default function AndroidDev() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto lg:py-[40px] py-[20px] px-[24px] xl:px-[100px] gap-4 bg-[#F3F3FA]">
      <div className="grid md:grid-cols-2 h-auto gap-4 mx-auto">
        <div className="w-full h-full">
          <CustomImage
            publicImage="/assets/mobile-app-developer-vector-image.webp"
            width="100%"
            height="100%"
          />
        </div>

        <div className="w-full flex flex-col gap-4 h-auto">
          <div className="w-full flex flex-col gap-[12px] child-text">
            <p className="uppercase">Expert Craftsmanship</p>
            <h2>
              Hire Dedicated Developers With{" "}
              <span className="text-[#0F53FF]">Techanic Infotech</span>
            </h2>
          </div>

          <div className="flex flex-col w-full gap-2 h-[500px] 2xl:h-[740px] overflow-y-scroll scrollbar-thin">
            {contentData.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-col h-auto gap-3 font-bold p-4 rounded-lg border-[1px] border-[#0F53FF] page-text"
              >
                <div
                  className="page-text flex justify-between items-center cursor-pointer lg:cursor-auto"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <span className="block lg:hidden">
                    {expandedIndex === index ? "-" : "+"}
                  </span>
                </div>
                <p
                  className={`text-base font-normal text-[#000000] lg:block ${
                    expandedIndex === index ? "block" : "hidden"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
