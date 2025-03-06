// // "use client";

// import Image from "next/image";
// import "./links.css";
// import CustomImage from "../BlogComponents/CustomeImage";
// const images = [

//   "icons/behr-icon.png",
//   "icons/sanyo-icon.png",
//   "icons/edra-icon.png",
//   "icons/airbnb-icon.png",
//   "icons/fila-icon.png",

//   "icons/discord-icon.png",
//   "icons/walmart-icon.png",

//   "icons/elevance-icon.png",
//   "icons/plum-guide-icon.webp",
//   "icons/roche-icon.png",
// ];

// export default function CompaniesLinks() {
//   const imagesLoop = [...images, ...images];

//   return (
//     <div className="h-auto w-full overflow-hidden py-[10px] px-5 flex flex-col justify-center items-center bg-white rounded-lg md:rounded-xl">
//       <section id="marquee__container" className="p-0 md:flex hidden">
//         {/* <div className="marquee"> */}
//         <ol className="marquee__content lg:gap-[6rem] gap-5 md:flex hidden">
//           {/* Image Url map */}
//           {imagesLoop.map((image, index) => (
//             <li key={index} className=" px-8 flex flex-col gap-3 ">
//               <div className="w-20">
//                 {" "}
//                 <CustomImage
//                   // className="marquee__img"
//                   publicImage={image}
//                   alt={`Logo ${index + 1}`}
//                   width={150}
//                   height={60}
//                   className="bg-inherit"
//                 />
//               </div>
//             </li>
//           ))}
//         </ol>
//       </section>
//     </div>
//   );
// }

// "use client";

import Image from "next/image";
import "./links.css";

import CustomImage from "../BlogComponents/CustomeImage";

const images = [
  {
    icon: "/assets/icons/behr-icon.png",
    width: "66px",
    height: "16px",
  },
  { icon: "/assets/icons/sanyo-icon.png", width: "75px", height: "42px" },
  { icon: "/assets/icons/edra-icon.png", width: "60px", height: "25px" },
  { icon: "/assets/icons/airbnb-icon.png", width: "77px", height: "24px" },
  { icon: "/assets/icons/fila-icon.png", width: "55px", height: "31px" },

  { icon: "/assets/icons/discord-icon.png", width: "82px", height: "22px" },
  { icon: "/assets/icons/walmart-icon.png", width: "84px", height: "20px" },

  { icon: "/assets/icons/elevance-icon.png", width: "53px", height: "22px" },
  { icon: "/assets/icons/plum-icon.png", width: "43px", height: "35px" },
  { icon: "/assets/icons/roche-icon.png", width: "46px", height: "23px" },
];

export default function CompaniesLinks() {
  const imagesLoop = [...images, ...images,...images];

  return (
    <>
        <div className="h-auto w-full overflow-hidden py-[10px] px-5 flex flex-col justify-center items-center bg-[#fbfbff] rounded-lg md:rounded-xl  md:flex hidden">
       <section id="marquee__container" className="p-0 ">
        {/* <div className="marquee"> */}
        <ol className="marquee__content gap-[6rem] ">
          {/* Image Url map */}
          {imagesLoop.map((image, index) => (
            <li key={index} className=" px-8 flex flex-col ">
              <div className="w-20">
                {" "}
                <CustomImage
                  // className="marquee__img"
                  publicImage={image.icon}
                  alt={`Logo ${index + 1}`}
                   rounded="rounded-none"
                  className="bg-inherit marquee_img"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>
      </div>
      <div className="h-auto w-full overflow-hidden py-[10px] px-5 flex flex-col justify-center items-center bg-[#fbfbff]  rounded-lg md:rounded-xl md:hidden " >
      <section id="marquee__container" className="p-0 md:flex hidden marquee_mobile">
        {/* <div className="marquee"> */}
        <ol className="marquee__content md:gap-[6rem] gap-4 ">
          {/* Image Url map */}
          {imagesLoop.map((image, index) => (
            <li key={index} className=" px-8 flex flex-col ">
              <div className="">
                {" "}
                <CustomImage
                  // className="marquee__img"
                  publicImage={image.icon}
                  alt={`Logo ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="bg-inherit"
                     rounded="rounded-none"
                />
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
    </>

  );
}
