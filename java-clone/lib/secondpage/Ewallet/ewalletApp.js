"use client";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function Ewallet({
  heading,
  paragraph,
  image,
  text,
  textColor1,
  btntextcolor,
  btnbg,
  color1,
  color2,
}) {
  return (
    <div
      className="w-full flex p-[20px] md:p-[40px] lg:h-screen"
      style={{
        background: `linear-gradient(to top right, ${color1} -40%, ${color2} 50%), linear-gradient(to bottom left, ${color1} 0%, ${color2} 50%)`,
      }}
    >
      <div className="w-full h-auto flex flex-col lg:flex-row lg:justify-between  items-center lg:gap-8 gap-16 px-[20px] lg:px-[80px] pt-20 ">
        <div className="lg:w-[40%] w-[60%] h-auto mt-8 lg:mt-0">
          <Image
            src={image}
            alt="EwalletImage"
            layout="responsive"
            objectFit="cover"
            className="w-full h-full"
             
          />
        </div>
        <div
          className={`w-full lg:max-w-[600px] h-auto flex flex-col justify-center items-center gap-4 ${
          
            "order-last lg:order-first" 
          }`}
        >
          <div className="text-center lg:text-left w-full">
            <h1
              className={`font-bold text-[24px] md:text-[30px] lg:text-4xl xl:text-[52px] xl:leading-[61.6px]`}
              style={{ color: `${textColor1}` }}
            >
              {heading}
            </h1>
          </div>
          <div className="text-center lg:text-left w-full">
            <p
              className={`font-normal text-base lg:text-xl 2xl:text-2xl leading-[24px] lg:leading-[36px] 2xl:leading-[38.4px] `}
              style={{ color: `${textColor1}` }}
         
            >{paragraph}</p>
          </div>
          <div className="text-center lg:text-left w-full lg:flex hidden">
            <button
              className={` transition-transform duration-300 transform hover:scale-110 rounded-2xl shadow-2xl  w-auto h-[52px] px-7 py-2  text-[16px] md:text-lg lg:text-xl  font-medium `}
              style={{ backgroundColor: `#${btnbg}` }}
            >
              <Link
                href="#formfields"
                className={`flex items-center justify-between gap-4 `}
                style={{ color: `${btntextcolor}` }}
              >
                {text}
                <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
              </Link>
            </button>
          </div>
          <div className="text-center lg:text-left w-full lg:hidden">
            <button
              className={` transition-transform duration-300 transform hover:scale-110 rounded-2xl shadow-2xl  w-auto h-[52px] px-7 py-2  text-[16px] md:text-lg lg:text-xl  font-medium `}
              style={{ backgroundColor: `#${btnbg}` }}
            >
              <Link
                href="#formfields1"
                className={`flex items-center justify-between gap-4 `}
                style={{ color: `${btntextcolor}` }}
              >
                {text}
                <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// 'use client'
// import Link from "next/link";
// import Image from "next/image";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

// import sectionImg from '@/assets/Sectione.svg'
// export default function Ewallet({ heading, paragraph, image, text, textColor1, btntextcolor, btnbg,color1,color2}) {
//   return (
//     <div
//     className="w-full flex p-[20px] md:p-[40px] h-screen"
//     style={{

//       background: `linear-gradient(to top right, ${color1} 0%, ${color2} 50%), linear-gradient(to bottom left, ${color1} 0%, ${color2} 50%)`
//     }}
//   >

//       <div className=" w-full h-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-[20px] lg:px-[80px] pt-20 ">
//         <div className={`w-full lg:max-w-[600px] h-auto flex flex-col justify-center items-start gap-4 `}>
//           <div className="text-center lg:text-left w-full">
//             <h1 className={`font-extrabold text-[24px] md:text-[30px] lg:text-4xl xl:text-[52px] xl:leading-[61.6px]`} style={{ color: `${textColor1}` }}

//             >
//               {heading}
//             </h1>
//           </div>
//           <div className="text-center lg:text-left w-full">
//             <p className={`font-normal text-base lg:text-xl 2xl:text-2xl leading-[24px] lg:leading-[36px] 2xl:leading-[38.4px] `} style={{ color: `${textColor1}` }}
//              dangerouslySetInnerHTML={{ __html: paragraph }}>

//             </p>
//           </div>
//           <div className="text-center lg:text-left w-full">
//             <button className={` transition-transform duration-300 transform hover:scale-110 rounded-2xl shadow-2xl  w-auto h-[52px] px-7 py-2  text-[16px] md:text-lg lg:text-xl  font-medium `} style={{backgroundColor: `#${btnbg}`}}>
//               <Link href="/" className={`flex items-center justify-between gap-4 `} style={{ color: `${btntextcolor}` }}>
//                 {text}
//                 <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
//               </Link>
//             </button>
//           </div>
//         </div>

//         <div className="lg:w-[40%] w-[60%] h-auto mt-8 lg:mt-0">
//           <Image src={image} layout="responsive" objectFit="cover" className="w-full h-full rounded-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// }
