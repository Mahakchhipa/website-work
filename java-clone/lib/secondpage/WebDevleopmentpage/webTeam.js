"use client";
import CustomImage from "@/components/BlogComponents/CustomeImage";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function WebTeam({
  headingPart1,
  headingPart2,
  paragraph,
  teamList,
  heading3,
}) {
  return (
    <div className="flex flex-col gap-4 w-full xl:px-[100px] px-[24px] lg:py-[40px] py-[20px] bg-[#eeeeee]">
      <div className="w-full max-w-screen-xl mx-auto text-center flex flex-col gap-4 child-text">
        <h2 className="font-bold">
          {headingPart1}
          <span className="text-[#0F53FF]">{headingPart2}</span>
        </h2>

        <p>{paragraph}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="w-full flex items-center justify-center">
          <CustomImage
            publicImage="/assets/web-developer-vector-image.webp"
            width="100%"
            height="100%"
            alt="Group Image"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <p className="text-lg font-bold">Our team includes:</p>
          {teamList.map((item, index) => (
            <ListItem key={index} text={item.text} paragraph={item.paragraph} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ListItem({ text, paragraph }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animateClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";
  return (
    <div
    ref={ref}
      style={{
        border: "1px solid transparent",
        borderImage: "linear-gradient(90deg, #0F53FF 0%, #EC0505 100%)",
        borderImageSlice: 1,
      }}
      className={`relative rounded-md p-3 hover:bg-[#0F53FF] hover:text-white text-black transform transition-all duration-700 ease-out ${animateClass}`}
    >
      <div
        className="flex justify-between items-center py-4 px-6 w-full  cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="w-full">
          <h3 className="flex justify-between text-lg leading-normal font-medium">
            {text}{" "}
            <span className="text-lg md:text-xl">{isOpen ? "-" : "+"}</span>
          </h3>
          {isOpen && <p className="px-6">{paragraph}</p>}
        </div>
      </div>
    </div>
  );
}
