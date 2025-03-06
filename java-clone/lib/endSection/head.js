"use client";
import { useState } from "react";
import CustomBackgroundImage from "@/components/BlogComponents/CustomeBackgroundImage";
import ListFooter from "./listfooter";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import Link from "next/link";
const headquartersData = [
  {
    imageSrc: "/assets/india-image.webp",
    location: "INDIA",
    contact: "+91 7222001000",
    description: "Balaji blessing – 01, D-125, Narayan Vihar",
    city: "Jaipur, Rajasthan",
  },
  {
    imageSrc: "/assets/italy-image.webp",
    location: "Italy",
    contact: "+39 3517578120",
    description: "Via Giuseppe mazzini nu. 6, flat nu 107",
    city: "Milano 20123 Italy",
  },
  {
    imageSrc: "/assets/uae-image.webp",
    location: "UAE",
    contact: "+971 52 598 1077",
    description: "404-F Aspin Commercial Tower",
    city: "Sheikh Zayed Road, Dubai",
  },
  {
    imageSrc: "/assets/uk-image.webp",
    location: "USA",
    contact: "+1 805 3364021",
    description: "224 W 35th St Ste 500 #2215",
    city: "New York, USA 10001",
  },
  {
    imageSrc: "/assets/usa-image.webp",
    location: "UK",
    contact: "+44 7825 509096",
    description: "Flat 6, 4 rainbow quays",
    city: "London, SE16 7UF",
  },
];

export default function Headquarters() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="bg-white  lg:py-[40px] py-[20px] px-[24px] xl:px-[100px]  flex flex-col gap-4">
        {/* <div className="child-text">
          <h2 className="font-bold text-center max-w-[1280px] mx-auto">
            Techanic Infotech, Trusted By Top Platforms
          </h2>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mx-auto w-full">
          {headquartersData.map((headquarter, index) => (
            <div
              key={index}
              className="relative z-10 p-4 h-[300px] 2xl:h-[380px] shadow-xl overflow-hidden flex flex-col justify-between transition-transform duration-300 transform hover:scale-110"
              style={{
                backgroundImage: `url(${headquarter.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 w-full h-[300px] 2xl:h-[380px] transition-transform duration-300 transform hover:scale-110">
                {/* <CustomImage
                  publicImage={headquarter.imageSrc}
                  width="100%"
                  height="100%"
                  className="w-full h-full sm:h-[380px] "
                  alt="headquarters"
                /> */}
                <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
              </div>
              <div className="page-text relative z-10 flex flex-col justify-between gap-1 p-2 max-h-[200px] top-[40%] xl:top-[41%] 2xl:top-[55%] lg:flex hidden">
                <h3 className="font-bold text-white">
                  {headquarter.location}
                </h3>

                <p className="text-white font-semibold">
                  {headquarter.description}
                </p>
                <p className="text-white font-semibold uppercase">
                  {headquarter.city}
                </p>
                <Link href="tel:+917222001000">
                  <p className="text-white font-semibold text-xs md:text-base">
                    {headquarter.contact}
                  </p>
                </Link>
              </div>
              <div className="page-text relative z-10 flex flex-col justify-end gap-1 p-2 h-full  lg:hidden">
                <h3 className="font-bold text-white">
                  {headquarter.location}
                </h3>

                <p className="text-white font-semibold">
                  {headquarter.description}
                </p>
                <p className="text-white font-semibold uppercase">
                  {headquarter.city}
                </p>
                <Link href="tel:+917222001000">
                  <p className="text-white font-semibold text-xs md:text-base">
                    {headquarter.contact}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ListFooter />
    </>
  );
}
