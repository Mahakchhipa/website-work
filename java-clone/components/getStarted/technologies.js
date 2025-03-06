import WebPages from "@/lib/webFields/webpages";
import LanguagesUsed from "./allTechLAnguages/languages";
import Portfolio from "./portfolio/portfolio";

export default function TechnologiesUsed({ head, para, bgColor ,visibleSection}) {
  return (
    <>
      <div
        className={`bg-[#F6FAFD] flex flex-col gap-[10px] md:gap-4
      h-auto w-[100%] px-[24px] xl:px-[100px] lg:py-[40px] py-[20px]`}
      >
        <div className="flex flex-col items-center justify-center gap-4 mx-auto text-center w-full h-auto ">
          <h2 className="text-[#0F172A] font-bold text-lg md:text-2xl lg:text-4xl ">
            {head}
          </h2>

          <p className="text-[#0F172A] font-normal text-lg max-w-[800px] md:flex hidden">
            {para}
          </p>
        </div>
        <LanguagesUsed visibleSection={visibleSection} />
      </div>
    </>
  );
}
