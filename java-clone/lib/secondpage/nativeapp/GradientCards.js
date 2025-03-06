import CustomImage from "@/components/BlogComponents/CustomeImage";
import React from "react";

const cards = [
  {
    icon: "fas fa-laptop-code",
    title: "Card Title 1",
    description: "This is a short description for card 1.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Card Title 2",
    description: "This is a short description for card 2.",
  },
  {
    icon: "fas fa-cloud",
    title: "Card Title 3",
    description: "This is a short description for card 3.",
  },
  {
    icon: "fas fa-database",
    title: "Card Title 4",
    description: "This is a short description for card 4.",
  },
  {
    icon: "fas fa-cogs",
    title: "Card Title 5",
    description: "This is a short description for card 5.",
  },
  {
    icon: "fas fa-rocket",
    title: "Card Title 6",
    description: "This is a short description for card 6.",
  },
];

const GradientCards = ({
  headingpart1,
  headingpart2,
  paragraph,
  cards1,
  cards2,
  cards3,
  cards
}) => {
  return (
    <div className="grid gap-[10px]  md:gap-6 p-[20px] lg:py-[40px] xl:px-[100px]">
      {" "}
      <div className="child-text text-center max-w-[1280px] mx-auto flex flex-col gap-[10px] md:gap-4">
        <h2>
          {headingpart1}
          <span className="text-[#0F53FF]">{headingpart2}</span>
        </h2>
        <p>{paragraph}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-[63px] h-[1040px] 2xl:h-[1000px] lg:grid hidden">
        <div className="grid h-[850px] gap-12 2xl:gap-[63px] ">
          {cards1.map((card1, index) => (
            <div
              className="shadow-md p-[16px] xl:p-[24px] 2xl:py-[41px] 2xl:px-[59px] rounded-xl border-[1px] border-black"
              style={{ background: `linear-gradient(${card1.gradient})` }}
            >
              <div className="flex flex-col items-center">
                <div className=" ">
                  {/* Dynamic icon */}
                  <CustomImage
                    publicImage={card1.icon}
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="fle flex-col gap-[10px] text-center p-6 page-text">
                  <h3 className="text-xl font-semibold mb-2">{card1.title}</h3>
                  <p className="">{card1.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid h-[800px] gap-12 2xl:gap-[63px] mt-32">
          {cards2.map((card2, index) => (
            <div
              className="shadow-md p-[16px] xl:p-[24px] 2xl:py-[41px] 2xl:px-[59px] rounded-xl border-[1px] border-black"
              style={{ background: `linear-gradient(${card2.gradient})` }}
            >
              <div className="flex flex-col items-center">
                <div className=" ">
                  {/* Dynamic icon */}
                  <CustomImage
                    publicImage={card2.icon}
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="fle flex-col gap-[10px] text-center p-6 page-text">
                  <h3 className="text-xl font-semibold mb-2">{card2.title}</h3>
                  <p className="">{card2.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid h-[850px] gap-12 2xl:gap-[63px]">
          {cards3.map((card3, index) => (
            <div
              className="shadow-md p-[16px] xl:p-[24px] 2xl:py-[41px] 2xl:px-[59px] rounded-xl border-[1px] border-black"
              style={{ background: `linear-gradient(${card3.gradient})` }}
            >
              <div className="flex flex-col items-center">
                <div className=" ">
                  {/* Dynamic icon */}
                  <CustomImage
                    publicImage={card3.icon}
                    width="60px"
                    height="60px"
                  />
                </div>
                <div className="fle flex-col gap-[10px] text-center p-6 page-text">
                  <h3 className="text-xl font-semibold mb-2">{card3.title}</h3>
                  <p className="">{card3.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:hidden">
        {cards.map((card, index) => (
          <div key={index} className="shadow-md p-8 rounded-xl border-[1px] border-black" style={{background: `linear-gradient(${card.gradient})`}}>
            <div className="flex flex-col items-center">
              <div className=" ">
          
               <CustomImage publicImage={card.icon} width="60px" height="60px"/>
              </div>
              <div className="fle flex-col gap-[10px] text-center p-6 page-text">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;
