"use client";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import BlogCards from "@/components/BlogComponents/Blogcards";

export default function OurBlogs() {
  return (
    <>
      {" "}
      <BlogCards blogsbg="#ffffff" />
    </>
  );
}

// {
//   /* <main
//         id="Ourblogs"
//         className="bg-[#EFEEEE]  h-auto items-center px-[20px] md:px-[80px] py-[32px]"
//       >
//         <div className="flex flex-col max-w-[1320px] w-full mx-auto gap-[24px]">
//           <div className="text-center">
//             <h2
//               className="text-[28px] lg:text-4xl
//              xl:text-5xl 2xl:text-[56px]
//              text-[#0F172A] font-extrabold "
//             >
//               Latest blog
//             </h2>
//           </div>
//           <div>
//             <p className="text-[#42526B] font-normal text-lg lg:text-xl  text-center  mx-auto">
//               Sed nec pharetra felis, in ultrices neque. Phasellus varius semper
//               tellus, ac<br/> imperdiet erat commodo id. Aenean lobortis justo et
//               velit ornare malesuada.{" "}
//             </p>
//           </div>
//           <div className="blogcards grid grid-cols-1 lg:grid-cols-3 gap-10  mx-auto max-[1420px]">

//             <div
//               className=" max-w-[340px]bg-[#ffffff]"

//             >
//               <div >
//                 <Image
//                   src={rectangleImg1}
//                   alt="Rectangle Image"
//
//                   width={410}
//                   height={220}
//                   className="rounded-t-lg"
//                   objectFit="cover"
//                 />

//                   <div className="flex flex-col gap-4 content px-4 py-4">
//                     <div className="flex items-center gap-4">
//                     <div
//                       onClick={handleClick1}
//                       className="flex items-center gap-3"
//                     >
//                       <FontAwesomeIcon
//                         icon={faThumbsUp}
//                         className="w-6 h-6"
//                         style={{
//                           color: liked ? "#0073e6" : "#808080",
//                           cursor: "pointer",
//                         }}
//                       />
//                       <p className="text-[#061C3D] text-sm ">2,729 Like</p>
//                     </div>

//                     <div
//                       onClick={handleClick2}
//                       className="flex items-center gap-3"
//                     >
//                     <FontAwesomeIcon
//                       icon={faCommentDots}
//                       className="h-6 w-6"
//                       style={{
//                         color: comment ? "#0073e6" : "#808080",
//                         cursor: "pointer",
//                       }}
//                     />
//                     <p className="text-[#061C3D] text-sm ">273 Comments</p>
//                   </div>
//                   </div>
//                   <p className="text-[#0F172A] mb-5 text-sm lg:text-base leading-6">
//                     Mauris ullamcorper tortor sed purus interdum, fermentum
//                     efficitur est dictu.
//                   </p>
//               </div>
//                 <div className="author-info flex items-center justify-start px-4 py-2 mb-4">
//                   <Image
//                     src={ManImg1}
//                     alt="Avatar Image"
//                     width={48}
//                     height={48}
//
//                     className="rounded-full"
//                   />
//                   <p className="text-[#42526B] pl-4 text-base font-medium  ">
//                   Ralph Edwards<br/> <span className="text-[#42526B] text-sm font-normal">5 min read</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className=" max-w-[340px]bg-[#ffffff]"

//             >
//               <div >
//                 <Image
//                   src={rectangleImg2}
//                   alt="Women Image"
//                   width={410}
//                   height={220}
//
//                   className="rounded-t-lg"
//                   objectFit="cover"
//                 />
//                 <div className="flex flex-col gap-4 content px-4 py-4">
//                     <div className="flex items-center gap-4">
//                     <div
//                       onClick={handleClick1}
//                       className="flex items-center gap-3"
//                     >
//                       <FontAwesomeIcon
//                         icon={faThumbsUp}
//                         className="w-6 h-6"
//                         style={{
//                           color: liked ? "#0073e6" : "#808080",
//                           cursor: "pointer",
//                         }}
//                       />
//                       <p className="text-[#061C3D] text-sm ">2,729 Like</p>
//                     </div>

//                     <div
//                       onClick={handleClick2}
//                       className="flex items-center gap-3"
//                     >
//                     <FontAwesomeIcon
//                       icon={faCommentDots}
//                       className="h-6 w-6"
//                       style={{
//                         color: comment ? "#0073e6" : "#808080",
//                         cursor: "pointer",
//                       }}
//                     />
//                     <p className="text-[#061C3D] text-sm ">273 Comments</p>
//                   </div>
//                   </div>
//                   <p className="text-[#0F172A] mb-5 text-sm lg:text-base leading-6">
//                     Mauris ullamcorper tortor sed purus interdum, fermentum
//                     efficitur est dictu.
//                   </p>
//               </div>
//                 <div className="author-info flex items-center justify-start px-4 py-2 ">
//                   <Image
//                     src={ManImg2}
//                     alt="Avatar 1 Image"
//                     width={48}
//                     height={48}
//                     className="rounded-full"
//
//                   />
//                  <p className="text-[#42526B] pl-4 text-base font-medium  ">
//                  Cameron Williamson<br/> <span className="text-[#42526B] text-sm font-normal">5 min read</span>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className=" max-w-[340px]bg-[#ffffff]"

//             >
//               <div >
//                 <Image
//                   src={rectangleImg3}
//                   alt="Robo Image"
//                   width={410}
//                   height={220}
//
//                   className="rounded-t-lg"
//                   objectFit="cover"
//                   />
//                   <div className="flex flex-col gap-4 content px-4 py-4">
//                   <div className="flex items-center gap-4">
//                   <div
//                     onClick={handleClick1}
//                     className="flex items-center gap-3"
//                   >
//                     <FontAwesomeIcon
//                       icon={faThumbsUp}
//                       className="w-6 h-6"
//                       style={{
//                         color: liked ? "#0073e6" : "#808080",
//                         cursor: "pointer",
//                       }}
//                     />
//                     <p className="text-[#061C3D] text-sm ">2,729 Like</p>
//                   </div>

//                   <div
//                     onClick={handleClick2}
//                     className="flex items-center gap-3"
//                   >
//                   <FontAwesomeIcon
//                     icon={faCommentDots}
//                     className="h-6 w-6"
//                     style={{
//                       color: comment ? "#0073e6" : "#808080",
//                       cursor: "pointer",
//                     }}
//                   />
//                   <p className="text-[#061C3D] text-sm ">273 Comments</p>
//                 </div>
//                 </div>
//                 <p className="text-[#0F172A] mb-5 text-sm lg:text-base leading-6">
//                   Mauris ullamcorper tortor sed purus interdum, fermentum
//                   efficitur est dictu.
//                 </p>
//             </div>
//                 <div className="author-info flex items-center justify-start px-4 py-2">
//                   <Image
//                     src={ManImg3}
//                     alt="Avatar 2 Image"
//                     width={48}
//                     height={48}
//                     className="rounded-full"
//
//                   />
//                  <p className="text-[#42526B] pl-4 text-base font-medium  ">
//                  Savannah Nguyen<br/> <span className="text-[#42526B] text-sm font-normal">5 min read</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </main> */
// }
