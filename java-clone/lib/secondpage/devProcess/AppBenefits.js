"use client";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomImage from "@/components/BlogComponents/CustomeImage";

export default function AppBenefits({
  heading,
  paragraph,
  data,
  backImgCards,
  bgColor,
}) {
  
  const animateClass = (inView) =>
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
  return (
    <div
      className="px-[24px] lg:py-[40px] py-[20px] xl:px-[100px] w-full h-full  flex flex-col justify-between "
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div className="w-full   grid gap-4 ">
        <div className="child-text w-full 2xl:max-w-[1280px] text-center mx-auto">
          <h2 className=" font-bold">{heading}</h2>
          <br />
          <p className="font-normal md:flex hidden">{paragraph}</p>
        </div>
        <div className=" grid grid-cols-3  gap-3 md:gap-4  mx-auto ">
          {data.map((item, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });
              return(
            <div
            ref={ref}
              key={index}
              className={` rounded-lg flex flex-col items-center text-center  mx-auto transform transition-all duration-700 ease-out ${animateClass(
                inView
              )}`}
              //   style={{
              //     boxShadow: "34.85px 29.63px 48.34px 0px #3366FF0D inset",
              //   }}
            >
              <div
                style={{ backgroundColor: `${item.cardbg}` }} // Make sure `item.cardbg` is a valid hex color without the `#`.
                className="rounded-full p-4 "

              >
                <CustomImage
                  publicImage={item.image}
                  alt={item.title}
                  width="60px"
                  height="60px"
                />
              </div>

              <h4 className="text-sm md:text-xl font-semibold mt-2">{item.title}</h4>
              <p className="mt-2 md:flex hidden">{item.description}</p>
            </div>
          )
})}
        </div>
      </div>
    </div>
  );
}
