import dynamic from 'next/dynamic';
import React from 'react';

const CompaniesLinks = dynamic(() => import("@/components/companies/links"), {
  ssr: false,
  loading: () => <p></p>,
});

const Heading = React.memo(function Heading({ headingpart1, headingpart2 }) {
  return (
    <h2 className="font-bold text-center text-2xl lg:text-4xl">
      <span className="text-[#0F53FF]">{headingpart1} </span>{" "}
      <span className="ml-1">{headingpart2}</span>
    </h2>
  );
});

export default function OurClients({ headingText, paragraphText, headingpart1, headingpart2 }) {
  return (
    <div className="w-full bg-[#ffffff] xl:px-[100px] px-[24px] md:py-[30px] py-[10px]" id="grad-4">
      <div className="flex flex-col justify-center items-center gap-[10px] md:gap-4 h-auto w-[100%] shadow-lg rounded-xl lg:py-[10px] lg:bg-[#fbfbff]">
        <div className="child-text max-w-[1280px] flex flex-col gap-4">
          <Heading headingpart1={headingpart1} headingpart2={headingpart2} />
        </div>
        <CompaniesLinks />
      </div>
    </div>
  );
}
