// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";

// export default function AboutUsBanner() {
//   const { ref, inView } = useInView();
//   const [startCounting, setStartCounting] = useState(false);
//   const [countN1, setCountN1] = useState(false);
//   const [countN2, setCountN2] = useState(false);
//   const [countN3, setCountN3] = useState(false);
//   const [countN4, setCountN4] = useState(false);

//   useEffect(() => {
//     if (inView && !startCounting) {
//       setStartCounting(true);
//     }
//   }, [inView, startCounting]);

//   useEffect(() => {
//     if (startCounting) {
//       setCountN1(true);
//       setCountN2(true);
//       setCountN3(true);
//       setCountN4(true);
//     }
//   }, [startCounting]);

//  return (
//     <>
//       <div className="pb-10" ref={ref}>
//         <div style={{ position: "relative" }}>
//           <Image
//             src="backgroundImages/about-us-banner-image.webp"
//             width={5000}
//             height={5000}
//             alt="Background Image"

//           />

//           <div className="absolute top-[120%] md:top-[110%] left-[50%] md:left-[30%] transform -translate-y-1/2 -translate-x-1/2 bg-gray-300 text-black rounded-xl p-4 w-[290px] md:w-[400px]">
//             <h1 className="lg:text-4xl text-2xl font-bold">About Us</h1>
//             <p className="lg:text-xl text-lg mt-5">
//               Learn what makes Techanic InfoTech the mobile app/web development
//               company it is today. Driven by mission, vision, and technical
//               innovation.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-1 mx-auto max-w-[450px] mt-[200px] md:mt-24 mr-10">
//           <div className="flex flex-row gap-4">
//             <div className="relative flex flex-col items-start justify-end max-w-[290px] px-[20px] py-[20px] w-full h-auto">
//               <div className="flex flex-col items-center text-start">
//                 {/* <div className="flex items-center"> */}
//                   <div className="ml-4">
//                     <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-gray-800">
//                       {countN1 && <CountUp start={0} end={5} />}
//                       {!countN1 && 5}+
//                     </p>
//                     <p className="text-sm text-gray-600">Years Experience</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="border-t border-r border-gray-300"></div>
//             <div className="relative flex flex-col items-start justify-start max-w-[290px] px-[20px] py-[20px] w-full h-auto">
//               <div className="flex flex-col items-center text-start">
//                 <div className="flex items-center mt-4">
//                   <div className="ml-4">
//                     <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-gray-800">
//                       {countN2 && <CountUp start={0} end={99} />}
//                       {!countN2 && 99}%+
//                     </p>
//                     <p className="text-sm text-gray-600">Client Retention</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="border-l border-gray-300 border-r border-b"></div>
//           <div className="flex flex-row  gap-4">
//             <div className="relative flex flex-col items-start justify-start max-w-[290px] px-[20px] py-[20px] w-full h-auto">
//               <div className="flex flex-col items-center text-start">
//                 <div className="flex items-start md:items-center mt-4">
//                   <div className="ml-4">
//                     <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-gray-800">
//                       {countN3 && <CountUp start={0} end={730} />}
//                       {!countN3 && 730}+
//                     </p>
//                     <p className="text-sm text-gray-600">Satisfied Customers</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="border-t  border-l border-gray-300"></div>
//             <div className="relative flex flex-col items-start justify-start max-w-[290px] px-[20px] py-[20px] w-full h-auto">
//               <div className="flex flex-col  items-center text-start">
//                 <div className="flex items-center mt-4">
//                   <div className="ml-4">
//                     <p className="lg:text-4xl md:text-3xl text-2xl font-semibold text-gray-800">
//                       {countN4 && <CountUp start={0} end={70} />}
//                       {!countN4 && 70}+
//                     </p>
//                     <p className="text-sm text-gray-600">Expert Developers</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AboutUsBanner({
  bgImage,
  heading,
  textColor1,
  mobilebgImage,
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check the screen size and set the state
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add listener on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const currentBgImage = isDesktop ? bgImage : mobilebgImage;
  const currentHeight = isDesktop ? "350px" : "300px";

  return (
    <div
      className="relative w-full"
      style={{
        height: currentHeight,
        backgroundImage: `url(${currentBgImage})`,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="flex items-center justify-center h-full w-full">
        <div className="absolute responsive-text inset-0 w-full h-full flex flex-col justify-center items-start gap-3 text-start px-[20px] xl:px-[100px]">
          <h1 className={`text-${textColor1} font-bold`}>{heading}</h1>
          <div className="mt-12">
            <button>
              <Link href="/" className="text-white flex items-center">
                Back
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="white"
                >
                  <path d="M12 2l10 10-10 10-1.41-1.41L18.17 12 10.59 4.41 12 2z" />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
