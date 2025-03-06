import Link from "next/link";
import Image from "next/image";
import videoLinkGenerator from "@/utils/videoLinkGenerator";

const datingAppStats = [
  {
    stat: "370 Million Users By 2027",
    description:
      "Global dating app users are projected to reach 370 million by 2027, showcasing a rapidly expanding market.",
  },
  {
    stat: "3.241 Billion Dollar in 2024",
    description:
      "The online dating segment revenue is expected to show an annual growth rate (CAGR 2021-2024) of 9.3%, resulting in a market volume of US$3.241 billion by 2024.",
  },
  {
    stat: "Engagement Spike",
    description:
      "Average daily usage of top dating apps has surged by 20% in recent years, indicating higher user engagement and retention.",
  },
  {
    stat: "Diverse Audience",
    description:
      "Over 40% of online daters are now over the age of 34, highlighting the broadening appeal and diversification of the dating app user base.",
  },
];

export default function Datepage() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  relative">
        <div className="flex flex-col gap-4  w-full m-auto">
          <h3
            className="font-bold text-xl
          lg:text-3xl lg:text-start text-center "
          >
            Ready To Get Started?
          </h3>
          <div className=" w-full  flex flex-col gap-4">
            {datingAppStats.map((item, index) => (
              <>
                <li className=" text-lg lg:text-xl font-bold" key={index}>
                  {item.stat}
                  <p className="font-medium text-base lg:text-lg ml-6">
                    {item.description}
                  </p>
                </li>
              </>
            ))}
          </div>

          <div className="mx-auto lg:mx-0 font-medium xl:text-xl lg:text-lg text-sm px-1 py-1 tracking-[0.5px] rounded-full  text-white  bg-pink-400 gap-[16px] w-fit h-auto hidden lg:flex ">
            <Link
              href="#formfields"
              className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 py-2 px-2 rounded-full border-2 border-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="mx-auto lg:mx-0 font-medium xl:text-xl lg:text-lg text-sm px-1 py-3 tracking-[0.5px] rounded-full  text-white  bg-pink-400 gap-[16px] w-fit h-auto lg:hidden">
            <Link
              href="#formfields1"
              className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-600 py-2 px-2 rounded-full border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="relative col-span-1 h-[900px] lg:h-[600px]">
          <video autoPlay loop muted playsInline>
            <source
              src={videoLinkGenerator("contentImages/dating-video-2.mp4")}
              type="video/mp4"
            />
          </video>
          {/* <Image
            src={left1}
            className="w-[100%] h-[100%] lg:w-auto lg:h-auto overflow-hidden"
          /> */}
          <div className="absolute bottom-[48%] md:bottom-[30%] lg:bottom-[13%] left-0 xl:bottom-[10%] 2xl:bottom-0 w-full grid grid-cols-2 2xl:grid-cols-4 gap-4 ">
            <div className="rounded-lg p-8 gap-1 bg-white  text-center  w-auto h-auto shadow-lg">
              <h3 className="font-bold tracking-[-2.5%] text-xl lg:text-2xl xl:text-4xl">
                370 Million
              </h3>
              <p className=" font-medium text-[16px] leading-[19.36px] tracking-[-2.5%]">
                Monthly Active Users
              </p>
            </div>
            <div className="rounded-lg p-8 gap-1 bg-[#FFFFFF] text-center   w-auto h-auto shadow-lg">
              <h3 className="font-bold  tracking-[-2.5%] text-xl lg:text-2xl xl:text-4xl">
                3.241 Billion
              </h3>
              <p className="font-medium text-[16px] leading-[19.36px] tracking-[-2.5%]">
                Countries Covered
              </p>
            </div>
            <div className="rounded-lg p-8 gap-1 bg-[#FFFFFF] text-center w-auto h-auto shadow-lg">
              <h3 className="font-bold  tracking-[-2.5%] text-xl lg:text-2xl xl:text-4xl">
                6.4 Million
              </h3>
              <p className=" font-medium text-[16px] leading-[19.36px] tracking-[-2.5%]">
                Annual Subscribers
              </p>
            </div>
            <div className="rounded-lg p-8 gap-1 bg-[#FFFFFF] text-center  w-auto h-auto shadow-lg">
              <h3 className="font-bold  tracking-[-2.5%] text-xl lg:text-2xl xl:text-4xl">
                $1.5 Billion
              </h3>
              <p className=" font-medium text-[16px] leading-[19.36px] tracking-[-2.5%]">
                Revenue Generated
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
