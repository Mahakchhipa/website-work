import CustomImage from "@/components/BlogComponents/CustomeImage";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
    alternates: {
      canonical: new URL('https://www.techanicinfotech.com/thank-you'),   
    },
    robots: "index, follow",
};
export default function ThankYou() {
  return (
    <>
     <div className="h-[400px] lg:h-[760px] 2xl:h-screen w-full relative" style={{ backgroundImage: `url('/assets/bannerimages/thank-you-banner.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
  <div className="absolute inset-0 flex pt-24 lg:pt-0 lg:items-center justify-start bg-opacity-50 bg-black">
    <div className="max-w-[600px] px-6 text-center text-white lg:ml-20">
      <h1 className="text-3xl md:text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-4">
        THANK <span className="text-[#0000ff]">YOU</span>
      </h1>
      <p className="lg:text-2xl md:text-lg text-base font-normal mb-4">
        We've received your inquiry. One of our team members will connect with you soon.
      </p>
      <button
        style={{ userSelect: "none" }}
        className="mt-3 md:mt-8 font-normal w-fit px-[31px] py-[15px] bg-[#0000ff] rounded-full text-white text-[16px] lg:text-[20px] transition-transform duration-300 transform hover:scale-110"
      >
        <div className="flex justify-center items-center">
          <Link href="/" className="text-xl">
            Return To Home
          </Link>
        </div>
      </button>
    </div>
  </div>
</div>

    </>
  );
}
