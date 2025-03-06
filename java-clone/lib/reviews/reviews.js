import CustomImage from "@/components/BlogComponents/CustomeImage";
import Image from "next/image";

export default function Ratings({ heading, paragraph, textcolor ,items}) {
// const StarRating = ({}) => (
//   <div className="flex flex-col items-center">
//     <div className="flex justify-center">
//       <span className="text-xl text-yellow-500">
//         <i className="fas fa-star"></i>
//       </span>
//     </div>
//     <div className="flex justify-between gap-3">
//       <span className="text-xl text-yellow-500">
//         <i className="fas fa-star"></i>
//       </span>
//       <span className="text-xl text-yellow-500">
//         <i className="fas fa-star"></i>
//       </span>
//     </div>
//   </div>
// );

  return (
    <>
      <div className="bg-white w-full h-auto lg:h-[660px] px-[24px] lg:py-[40px] py-[20px] xl:px-[100px] flex flex-col gap-[10px] md:gap-4 ">
        <div className="child-text flex flex-col gap-[10px] md:gap-4 text-center max-w-[1280px] mx-auto">
          <h2 className={`font-bold ${textcolor}`}>{heading}</h2>
          <p className="text-[#363636] md:text-[#000000] text-center">
            {paragraph}
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 mx-auto gap-4 w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-xl h-auto flex flex-col justify-start items-start px-4 py-4 gap-4 bg-white w-full md:h-auto mx-auto transition-transform duration-300 transform hover:scale-110"
            >
              <div className="flex items-center justify-center gap-3 w-fit h-fit bg-[#D9D9D9]">
                <CustomImage
                  publicImage={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  // className="w-auto md:h-[200px] h-[100px]"
                />
              </div>

              <p className="text-base font-normal text-[#000000] hidden md:flex">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


{
  /* <div className="grid grid-cols-2  gap-2 w-full 
lg:max-w-[680px] containerCards items-center">
 
<div className="rounded-lg shadow-xl flex flex-col justify-start items-start 
px-8 py-8 gap-4 bg-white lg:w-auto w-full   h-[100px] md:h-auto mx-auw-full   h-[100px] md:h-autoto">
<Image src={rate1Img}  bg-graalt="clutchImg" className="w-auto h-auto"y-400 w-full h-fullheight={64} width={192} />
<Image src={googleImg} height={21} width={90}   />
<p className="text-base font-normal text-[#000000]">
The tech giant Google recognizes Techanic InfoTech as a top IT service provider with a near-perfect rating of 4.6 stars.
</p>
</div>
<div className="rounded-lg shadow-xl flex flex-col justify-start 
items-start px-8 py-8 gap-4 bg-[#F1F5F9] w-full   h-[100px] md:h-auto mx-auto">
<Image src={rate2Img} height=alt="clutchImg" className="w-auto h-auto"{64} width={192}   />
<Image src={businessImg} height={21} width={99.15} className="mt-3" />
<p className="text-base font-normal text-[#000000]">
A top platform in the world of tech and app development, Business of Apps gives Techanic InfoTech a 4.8-star rating.
</p>
</div>
<div className="rounded-lg shadow-xl h-auto  flex flex-col justify-start
items-start px-4 py-4 gap-4 bg-[#F1F5F9] w-full   h-[100px] md:h-auto mx- h-[220px] xl:h-[280px]auto">
<Image src={g} height={64} wialt="clutchImg" className="w-auto h-auto"dth={192}   />
<Image src={firmsImg} height={21} width={90}   className="mt-3"  />
<p className="text-base font-normal text-[#000000]">
Techanic InfoTech is among the top names in Good Firm's list of top mobile app development and web development firms.
</p>
</div>
<div className="rounded-lg shadow-xl h-auto  flex flex-col justify-start
items-start px-4 py-4 gap-4 bg-[#F1F5F9] w-full   h-[100px] md:h-auto mx- h-[220px] xl:h-[280px]auto">
<Image src={g} height={64} wialt="clutchImg" className="w-auto h-auto"dth={192}   />
<Image src={firmsImg} height={21} width={90}   className="mt-3"  />
<p className="text-base font-normal text-[#000000]">
Techanic InfoTech is among the top names in Good Firm's list of top mobile app development and web development firms.
</p>
</div>
</div> */
}
