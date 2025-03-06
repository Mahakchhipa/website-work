import Image from "next/image";
import Link from "next/link";
import videoLinkGenerator from "@/utils/videoLinkGenerator";

export default function Experts({
  heading,
  paragraph,
  text,
  media,
  imageSrc,
  videoSrc,
  TextColor,
  divBtn,
  direction,
  color1,
  color2,
  btntext,
  justify,
}) {
  // const linkStyle = {
  //   background: `linear-gradient(to ${direction}, ${color1}, ${color2})`,
  //   /* Additional styles */
  // };
  return (
    <div className="px-[24px] lg:py-[40px] py-[20px] xl:px-[100px]">
      <div
        className={`relative w-full m-auto p-8 md:p-24 flex flex-col lg:flex-row items-start rounded-2xl justify-${justify} border-b-1 overflow-hidden`}
        style={{ position: "relative" }}
      >
        {media === "image" && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={imageSrc}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
               
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        )}

        {media === "video" && (
          <div className="absolute inset-0 w-full h-full  overflow-hidden">
            <video
              src={videoLinkGenerator(videoSrc)}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
        )}

        <div className="relative max-w-[600px] min-h-[250px] gap-[10px] flex flex-col justify-start items-start text-start ">
          <h2
            className={`text-[#000000] font-bold text-2xl  lg:text-4xl  text-start w-auto text-${TextColor}`}
          >
            {heading}
          </h2>
          <p
            className={`text-[#000000] font-normal text-lg text-start h-auto lg:w-[350px] xl:w-[500px] overflow-hidden text-${TextColor}`}
          >
            {paragraph}
          </p>
          <div>
            <button
              className="px-1 py-1 buttonGradient  w-fit transition-transform duration-300 transform hover:scale-110 hidden lg:flex"
            
            >
              <Link
                href="#formfields"
                className={`lg:text-lg xl:text-xl px-2  md:px-6 py-3    text-${btntext}`}
                // style={linkStyle}
              >
                {text}
              </Link>
            </button>
            <button
              className="px-1 py-4 buttonGradient   w-fit transition-transform duration-300 transform hover:scale-110 lg:hidden"
            
            >
              <Link
                href="#formfields1"
                className={`lg:text-lg xl:text-xl px-2  md:px-6 py-3   rounded-full text-${btntext}`}
                // style={linkStyle}
              >
                {text}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

