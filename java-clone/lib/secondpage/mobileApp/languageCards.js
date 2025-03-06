import Image from "next/image";


import StartWithUS from "@/components/getStarted/startWithus";

import Card from "../cards";

export default function LanguagesCards({ height,heading, paragraph, techcard, color, bgcolor, showStartWithUS }) {
  return (
    <div>
      <div className={`flex flex-col w-full px-[24px] lg:py-[40px] py-[20px] xl:px-[100px] gap-4`} style={{ backgroundColor: `${bgcolor }`}}>
        <div className="max-w-[1420px] mx-auto text-center flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl  font-bold text-[#000000]">
            {heading}
          </h2>
          <p className="text-lg  font-normal text-[#000000] ">
            {paragraph}
          </p>
        </div>
        <div>
          <Card cardItems={techcard} bColor={color} hoverback={color} heightcard={height} isMainPage={false} fillIcon="#e8f4f8" />
          {/* {techcard.map((card, index) => (
            <div key={index} className="flex flex-col bg-[#f8f8f8] rounded-lg p-6 gap-[24px] w-auto  h-auto">
              <div className="w-[48px] h-[48px] ">
                <Image src={card.image} alt="img"    />
              </div>
              <div>
                <h4 className="text-[22px] font-bold leading-[26.4px] text-[#000000]">
                  {card.title}
                </h4>
              </div>
              <div>
                <p className="text-[18px]  font-normal leading-[21.8px] text-[#909090]">
                  {card.description}
                </p>
              </div>
              {showLink && card.href && (
                  <Link href={card.href} passHref className="flex items-center gap-4 lg:text-xl font-medium">
                    <span>Read More</span>
                    <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
                  </Link>
                )}
            </div>
          ))} */}
        </div>
      </div>
      {showStartWithUS && (
        <StartWithUS
          heading="Custom Mobile App Development"
          paragraph="Start your journey with tailor-made mobile applications. Our dedicated mobile app developers bring precision, innovation, and performance to every project."
          btntext="  Get Started"
        />
      )}
    </div>
  );
}
