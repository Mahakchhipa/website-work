'use client'
import { useState } from "react";
import Image from "next/image";
// import img from "../../assets/secondpageimages/image1.svg";
import CustomImage from "@/components/BlogComponents/CustomeImage";

export default function OnDemandApp() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const cards = [
    {
      title: "App for Users",
      description:
        "Our user-focused apps are designed with intuitive navigation and personalized features, ensuring a satisfying and seamless on-demand experience.",
    },
    {
      title: "Delivery Partner App",
      description:
        "Empower your delivery partners with an app that offers real-time logistics tracking, optimized routes, and essential communication features.",
    },
    {
      title: "Service Provider Panel",
      description:
        "Equip service providers with a powerful dashboard that simplifies appointment management, service offerings, and customer interactions.",
    },
    {
      title: "Admin Panel",
      description:
        "Gain complete control over your on-demand services with an admin panel that provides real-time insights, user management, and comprehensive analytics.",
    },
  ];

  return (
    <div className="flex flex-col w-full h-auto gap-[10px] p-[20px] lg:py-[40px] xl:px-[100px] ">
      <div className="flex flex-col gap-[10px] lg:gap-6 max-w-[1280px] h-auto mx-auto text-center child-text">
        <h2 className="font-bold ">
          Comprehensive On-Demand App Modules
        </h2>
        <p className="font-normal  ">
          Our on-demand app development services encompass a full range of
          interactive modules. Each is meticulously crafted to ensure seamless
          operation, robust management, and an exceptional user journey.
        </p>
      </div>

      <div className="grid  lg:grid-cols-2 w-full max-w-[1420px] h-auto gap-[24px] mx-auto">
        <div className=" w-full h-full ">
          <CustomImage
            publicImage='/assets/web-developer-vector-image.webp'
       width="100%"
       height="100%"
            alt="on-demand-app"
             
          />
        </div>

        <div className="flex flex-col  gap-[10px] lg:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
           
              style={{
                border: "1px solid transparent",
                borderImage: "linear-gradient(90deg, #0F53FF 0%, #EC0505 100%)",
                borderImageSlice: 1,
              }}
              className="flex flex-col  h-auto rounded-lg p-6 gap-[10px] lg:gap-6 bg-[#ffffff] cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div className="flex flex-col justify-between items-start page-text">
                <div className="flex  justify-between w-full items-center">
                <h3 className="font-bold ">
                  {card.title}
                </h3>
                <span className="font-bold lg:hidden">
                  {expandedCard === index ? "-" : "+"}
                </span>
            </div>
              <p
                className={`font-normal text-[16px] leading-[24px] text-[#909090] mt-2 ${
                  expandedCard === index ? "" : "hidden"
                } lg:block`}
              >
                {card.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
