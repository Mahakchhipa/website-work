import Card from "../cards";
import Image from "next/image";


export default function EwalletCards({
  heading,
  paragraph,
  cardItems,
  bgColor,
  foodcardback,
  paragraphColor,
  color,
  headingColor,
  height
}) {
  return (
    <div
      className=" w-full h-auto xl:px-[100px] lg:py-[40px] py-[20px] px-[24px] flex flex-col gap-4 items-center justify-center bg-[#F6FAFD]"
    >
      {/* <div className="absolute inset-0 z-[-1]">
        <Image src={foodcardback} alt="background" layout="fill" objectFit="cover"  />
      </div> */}
      <div className="flex flex-col justify-between container max-w-7xl text-center h-auto gap-[16px] ">
        <h2
          className="text-2xl lg:text-4xl font-bold"
        
        
        >{heading}</h2>

        <p className="text-lg font-normal max-w-[1280px] mx-auto text-gray-700 h-auto">
          {paragraph}
        </p>
      </div>
      <Card cardItems={cardItems} showLink={true} bColor={color} hoverback={color} heightcard={height} isMainPage={false}   fillIcon="#e8f4f8"/>
    </div>
  );
}
