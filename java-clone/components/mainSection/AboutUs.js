// 'use client'
import Link from "next/link";
import ImageCollage from "./collage";
import CustomImage from "../BlogComponents/CustomeImage";
// import { useInView } from "react-intersection-observer";
export default function AboutUs() {
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  // const direction = "left"
  return (
    <div className=" px-6 xl:px-[100px] lg:py-[40px] py-[20px] ">
      <div
        className="flex lg:flex-row flex-col gap-7  justify-between bg-[#ffffff]
   h-auto mx-auto md:flex hidden"
      >
        <div
          // ref={ref}
          style={{
            transition: "opacity 800ms ease-out, transform 800ms ease-out",
          }}
          className={`child-text my-auto flex flex-col lg:w-[600px] justify-evenly lg:items-start items-center  gap-[20px]    
      h-auto  

    
      `}
        >
          <h2 className=" text-black font-bold lg:text-start text-center">
            About Us
          </h2>
          <div className="lg:border-0 border-l-2 border-blue-800 text-justify">
            <p className="text-lg text-justify font-normal px-3 lg:px-0 ">
              Techanic InfoTech stands as a beacon of digital innovation, a Web
              and App Development Company propelled by the aspiration of
              delivering cutting-edge digital products across the globe. Our
              mission is to craft digital solutions that not only meet the
              current demands of the market but also anticipate future trends,
              setting new industry standards.
            </p>

            <p className="text-lg text-justify font-normal px-3 lg:px-0">
              {" "}
              We are a collective of visionary developers, creative designers,
              and strategic thinkers dedicated to transforming your ideas into
              digital realities that captivate and inspire.
            </p>
          </div>

          <div className="repsonsive-link">
            <button
              className="flex items-center px-[32px] py-[13px] rounded-md  bg-[#0F53FF]  text-white     transition-transform duration-300 transform hover:scale-110 mt-2"
              // style={{
              //   background: "linear-gradient(270deg, #2929DE 0%, #08083A 100%)",
              // }}
            >
              <Link href="/about-us" className=" font-normal">
                Explore{" "}
                {/* <FontAwesomeIcon icon={faArrowRight} height={20} width={20} /> */}
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center max-w-[700px] h-auto   mx-auto">
          {" "}
          {/* Adjusted width to take half the screen on tablet */}
          <ImageCollage />
        </div>
      </div>
      <div
        className="flex lg:flex-row flex-col gap-7  justify-between bg-[#ffffff]
   h-auto mx-auto md:hidden"
      >
        <div
          className="child-text my-auto flex flex-col lg:w-[600px] justify-evenly lg:items-start items-center  gap-[10px]    
      h-auto"
        >
          <h2 className="text-lg  text-black font-bold lg:text-start text-center">
            About Us
          </h2>
          <div className="flex flex-col gap-[10px]">
            <div className="w-full h-fit">
              <CustomImage
                publicImage="/assets/about-us-mobile-image.png"
                height="300px"
                rounded="rounded-none"
                lazyLoading={true}
              />
            </div>
            <div className="child-text flex flex-col gap-3 text-justify">
              <p className="text-justify font-normal  text-[#363636]">
                Techanic InfoTech stands as a beacon of digital innovation, a
                Web and App Development Company propelled by the aspiration of
                delivering cutting-edge digital products across the globe. Our
                mission is to craft digital solutions that not only meet the
                current demands of the market but also anticipate future trends,
                setting new industry standards.
              </p>

              <p className="text-justify font-normal  text-[#363636]">
                {" "}
                We are a collective of visionary developers, creative designers,
                and strategic thinkers dedicated to transforming your ideas into
                digital realities that captivate and inspire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
