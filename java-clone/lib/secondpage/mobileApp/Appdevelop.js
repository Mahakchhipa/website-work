"use client";
import CustomImage from "@/components/BlogComponents/CustomeImage";

export default function AppDevelop({
  headingPart1,
  headingPart2,
  paragraph,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  align,
  backColor,

  textcolor,
  color,
  cards,
}) {
  return (
    <div
      className={`flex flex-col w-full  h-auto xl:px-[30px]  
    p-[20px] lg:py-[40px] gap-6  `}
      style={{ backgroundColor: `#${backColor}` }}
    >
      <div className="child-text h-auto mx-auto flex flex-col gap-4  text-center">
        <h2 className={`font-bold text-${textcolor}`}>
          {headingPart1}
          <span className="text-[#0F53FF]">{headingPart2}</span>{" "}
        </h2>
        <p className={`font-normal max-w-[1300px]  text-${textcolor}`}>
          {paragraph}
        </p>
      </div>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 xl:gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col text-center  border-[1px]  border-black"
          >
            <div className="grid grid-cols-3 items-start w-full">
              {/* Number on the left side */}
              <div className="w-full h-full flex items-start">
                <span
                  className={`text-${color} text-xl font-bold py-3 px-4 2xl:px-6 bg-[#E5EDFF] w-fit h-fit`}
                >
                  {index + 1}
                </span>
              </div>
              {/* Icon */}
              <div className="flex items-center justify-center w-full h-full">
                <div className=" flex items-center justify-center">
                  <CustomImage
                    publicImage={card.image}
                    alt={`image${index + 1}`}
                    width="40px"
                    height="40px"
                  />
                </div>
              </div>
              <div></div>
            </div>
            <div className="  w-full h-auto text-center flex flex-col justify-between gap-3 xl:gap-0  px-2 py-4">
              <div className="xl:min-h-[60px]">
              <h3 className={`text-xl font-bold text-${color} `}>{card.title}</h3>
              </div>
              <div>
              <p className={`text-base text-${color} text-${align}`}>
                {card.description}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
