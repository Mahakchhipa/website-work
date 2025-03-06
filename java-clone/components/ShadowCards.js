"use client";
import CustomImage from "./BlogComponents/CustomeImage";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function ShadowCards() {
  const companyStats = [
    {
      label: "Satisfied Customers",
      value: "730",
      sign: "+",
      image: "/assets/satisfied-customers-icon.webp",
    },
    {
      label: "Expert Developers",
      value: "70",
      sign: "+",
      image: "/assets/expert-developers-icon.webp",
    },
    {
      label: "Years Experience",
      value: "5",
      sign: "+",
      image: "/assets/experience-icon.webp",
    },
    {
      label: "Client Retention",
      value: "99%",
      sign: "%+",
      image: "/assets/client-retention-icon.webp",
    },
  ];

  const { ref, inView } = useInView();
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView && !startCounting) {
      setStartCounting(true); // Start counting when in view
    }
  }, [inView, startCounting]);

  return (
    <>
      <div className="grid gap-4 lg:gap-6 p-[20px] xl:px-[100px] lg:py-[40px] bg-[#E4EDFF]">
        <div className="child-text flex flex-col gap-[10px] lg:gap-6 max-w-[1280px] mx-auto text-center ">
          <h2>About Us</h2>
          <p>
            Learn what makes Techanic InfoTech the mobile app/web development
            company it is today. Driven by mission, vision, and technical
            innovation.  
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-[98px] items-center">
          {companyStats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <CustomImage
                publicImage={stat.image}
                alt={stat.label}
                width="150px"
                height="150px"
              />
              <div
                ref={ref}
                className="page-text flex flex-col gap-3 items-center text-center bg-white py-3 px-4 border-[4px] border-black cardshadow h-[130px]"
              >
                <h3>
                  {startCounting && (
                    <CountUp start={0} end={parseInt(stat.value)} duration={2.5} />
                  )}
                  {stat.sign}
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
