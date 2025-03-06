import Image from "next/image";
import CareerPageBanner from '@/components/careers/CareerPageBanner'
import Openings from "@/components/formSection/Openings";

export default function Careers() {
  return (
    <>
      <CareerPageBanner />
      <Openings />
      <div className="w-full bg-[#eeeeee] py-[80px]">
        <div className="mx-auto mt-8 max-w-[900px] flex gap-14 flex-col items-center text-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg">OUR HR DEPARTMENT</h3>
            <p className="text-xl lg:text-3xl font-bold text-blue-950 ">
              Get Ready to Pass Many More Milestones!
            </p>
          </div>

          <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
            <div className="absolute inset-0 border-[20px] md:border-[35px] rounded-full border-[#c1f2ed] animate-ping"></div>
            <Image
              src="icons/hr-image.jpg"
              width={100}
              height={100}
              alt="HR image"
              className="w-full h-full rounded-full"
               
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Human Resource</h3>
            <p className="text-xl">Techanic InfoTech HR Manager</p>
          </div>
          <div className="flex md:flex-row flex-col gap-3">
            <div className="px-1 py-1 bg-blue-600 rounded-full w-fit   transition-transform duration-300 transform hover:scale-110 mx-auto ">
              <a
                href="mailto:info@techanicinfotech.com"
                type="submit"
                id="btnSubmit"
                className="quote-shadow flex  gap-4 text-base 2xl:text-lg  px-10 py-3 buttonGradient border-2 border-[#FFFFFF] rounded-full text-white "
              >
                hr@techanicinfotech.com
              </a>
            </div>
            <div className="px-1 py-1 bg-blue-600 rounded-full w-fit   transition-transform duration-300 transform hover:scale-110 mx-auto ">
              <a
                href="tel:+917222001000"
                className="quote-shadow flex  gap-4 text-base 2xl:text-lg  px-10 py-3 buttonGradient border-2 border-[#FFFFFF] rounded-full text-white "
              >
                +91 7222 001 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
