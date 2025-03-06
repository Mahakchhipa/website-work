"use client";
import NavBar from "@/components/mainSection/navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ViewFirstSection({
  text,
  image,
  pargraph,
  heading,
  mainparagraph1,
  mainparagraph2,
}) {
  return (
    <div className="relative w-full h-[600px] lg:h-screen">
      <div className="absolute inset-0 ">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt="Background Image"
          width={5000}
          height={5000}
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* <div className="relative w-full" >
      <NavBar color="white" color1="white" />
      </div> */}
      <div className="absolute inset-0 pt-20 lg:pt-0 flex flex-col  lg:justify-center lg:items-center w-full max-w-[1280px] mx-auto  px-4 lg:px-8">
        <div className="flex flex-col gap-2 lg:gap-3 w-full max-w-[769px] text-center text-white">
          <p className="uppercase md:text-xl lg:text-2xl  leading-[20px] tracking-[3px]">
            {pargraph}
          </p>
          <h1 className="text-2xl lg:text-4xl font-bold">
            {heading}
          </h1>
          <div className="">
            <p className="text-lg  font-normal leading-[27px]">
              {mainparagraph1}
            </p>
            <p className=" text-lg  font-normal leading-[27px]">
              {mainparagraph2}
            </p>
          </div>
          <Link
            href="#formfields"
            className="flex text-lg items-center justify-between gap-4 border-white border-2 rounded-lg p-3 w-fit mx-auto hidden lg:flex"
          >
            {text}
            <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
          </Link>
          <Link
            href="#formfields1"
            className="flex text-lg items-center justify-between gap-4 border-white border-2 rounded-lg p-3 w-fit mx-auto lg:hidden"
          >
            {text}
            <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// 'use client'
// import Image from "next/image";
// import Link from "next/link";

// export default function ViewFirstSection({ image, heading, pargraph, mainparagraph1, mainparagraph2, text }) {
//   return (
//     <div className="bg-black flex flex-col gap-10 pt-[300px] pb-[40px] relative">
//       <div className="sticky top-0 max-w-[769px] text-white text-center mx-auto z-10  pt-[200px] pb-[40px]">
//         <p className="uppercase md:text-xl lg:text-2xl font-bold leading-[20px] tracking-[3px]">
//           {pargraph}
//         </p>

//         <h1 className="md:text-4xl lg:text-5xl 2xl:text-[56px] 2xl:leading-[58px] font-bold">
//           {heading}
//         </h1>

//         <div className="mt-6 lg:mt-8">
//           <p className="lg:text-2xl text-lg font-normal leading-[27px]">
//             {mainparagraph1}
//           </p>
//           <p className="lg:text-2xl text-lg font-normal leading-[27px]">
//             {mainparagraph2}
//           </p>
//         </div>

//         <button className="mt-6 lg:mt-8 text-white w-auto h-[48px] rounded-lg px-[17px] border-[2px] text-center transform hover:scale-110 hover:bg-[#ffffff] hover:text-black transition-colors duration-300">
//           <div>
//             <Link href="/" className="flex lg:text-xl text-lg items-center justify-between gap-4">
//               {text}
//             </Link>
//           </div>
//         </button>
//       </div>

//       {/* <div className="relative w-full">
//         <div className="absolute top-0 left-0 w-full h-full ">

//         </div>
//       </div> */}

//       <div className="relative  bg-black">
//         <div className="h-[900px] max-w-[1380px] mx-auto">
//         <Image
//             src={image}
//             alt="Background Image"
//             layout="fill"
//             // objectFit="cover"

//             className="rounded-2xl h-[900px] max-w-[1380px] mx-auto"
//           /></div>
//       </div>
//     </div>
//   );
// }

// 'use client'
// 'use client'
// import NavBar from "@/components/mainSection/navbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import Image from "next/image";

// export default function ViewFirstSection({
//   text,
//   pargraph,
//   heading,
//   mainparagraph1,
//   mainparagraph2,
//   image
// }) {
//   return (
//     <div className="w-full flex flex-col gap-10 h-auto pt-[170px] pb-7 bg-gradient-to-b from-black to-transparent">
//       <div className="flex flex-col justify-center items-center h-[500px]">
// <div className="sticky top-0 w-full max-w-[769px] text-white text-center">
//   <p className="uppercase md:text-xl lg:text-2xl font-bold leading-[20px] tracking-[3px]">
//     {pargraph}
//   </p>
//   <h1 className="md:text-4xl lg:text-5xl 2xl:text-[56px] 2xl:leading-[58px] font-bold">
//     {heading}
//   </h1>
//   <div className="mt-6 lg:mt-8">
//     <p className="lg:text-2xl text-lg font-normal leading-[27px]">
//       {mainparagraph1}
//     </p>
//     <p className="lg:text-2xl text-lg font-normal leading-[27px]">
//       {mainparagraph2}
//     </p>
//   </div>
//   <button className="mt-6 lg:mt-8 text-white w-auto h-[48px] rounded-lg px-[17px] border-[2px] text-center transform hover:scale-110 hover:bg-[#ffffff] hover:text-black transition-colors duration-300">
//     <div>
//       <Link href="/" className="flex lg:text-xl text-lg items-center justify-between gap-4">
//         {text}
//         <FontAwesomeIcon icon={faArrowRight} height={20} width={20} />
//       </Link>
//     </div>
//   </button>
//         </div>
//       </div>
//       <div className="max-w-[1280px] mx-auto overflow-y-auto max-h-screen">
//     <Image
//  src={image}
//  alt="Background Image"
//  layout="responsive"
//  width={1280}
//  height={1400}
//       objectFit="cover"
//       className="rounded-2xl"
//     />
//       </div>
//     </div>
//   );
// }
