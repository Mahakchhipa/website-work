// import Portfolio from "@/components/getStarted/portfolio/portfolio";
import WebCollage from "./collage2";

export default function WebPages({heading , paragraph ,p1,p2,p3,p4,p5,p6,p7,p8,p9}) {
  return (
    <>
      <div className="flex flex-col justify-center  w-[100%] gap-[10px] md:gap-4 px-[24px] lg:py-[40px] py-[20px] 
       h-auto ">
        <div className="child-text flex flex-col gap-[10px] md:gap-4  max-w-[1320px]  text-center  mx-auto">
          <h2
            className="text-[#000000]  h-auto text-lg md:text-2xl lg:text-4xl
         font-bold mx-auto "
          >
            {heading}
          
          </h2>
          <p className="text-sm md:text-lg text-[#363636] md:text-[#000000]  font-normal  ">
            {paragraph}

          </p>
        </div>

        {/* Responsive Collage */}
        <div className="flex-row justify-center mx-auto max-w-[1420px] h-auto  ">
          <WebCollage p1={p1} p2={p2} p3={p3} p4={p4} p5={p5} p6={p6} p7={p7} p8={p8} p9={p9}/>
        </div>
      </div>
    
      {/* <Portfolio /> */}
    </>
  );
}
