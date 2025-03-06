// import WebPages from "@/lib/webFields/webpages";
// import LanguagesUsed from "./allTechLAnguages/languages";
// import Portfolio from "./portfolio/portfolio";
"use client";
// import Apps from "./Apps";

export default function TechStack({ heading, paragraph }) {
  return (
    <>
      <div
        className="flex flex-col justify-between gap-[48px]
       py-[32px] lg:px-[80px] h-auto w-[100%] bg-[#F8F8F8] md:px-[40px] px-[20px]"
      >
        <div className="mx-auto text-center 2xl:w-[1280px] 2xl:h-[142px] xl:w-[1080px] xl:h-[130px] lg:w-[881px] lg:h-[142px] gap-[16px]">
          <h2 className="text-[#0F172A] font-bold 2xl:text-[56px]
            xl:text-[48px] lg:text-[42px] md:text-[32px] text-[26px] lg:leading-[61.6px]  ">
            {heading}
          </h2>
          <br />
          <p
            className="text-[#0F172A] font-normal 2xl:text-[20px]
           xl:text-[19px] lg:text-[18px] text-[16px] lg:leading-[32px]"
         
          >{paragraph}</p>
        </div>
        <Apps/>
      </div>
    </>
  );
}
