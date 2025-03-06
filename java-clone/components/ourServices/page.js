import Image from "next/image";

import Card from "@/lib/secondpage/cards";

import StartWithUS from "@/components/getStarted/startWithus";
const cardItems = [
  {
    image: "/assets/icons/classified-icon.png",
    index: 0,
    title: "App Development",
    description:
      "Work with the finest in mobile app development team At Techanic Infotech, we don't just build apps; we breathe digital life into your innovative ideas, transforming them into stellar digital experiences. Our dedicated team combines design elegance with functional brilliance.Transform your vision into reality with Techanic InfoTech.",
    href: "/services/mobile-app-development-company",
    link: "/services/mobile-app-development-company",
  },
  {
    image: "/assets/icons/web-development-icon.png",
    index: 1,
    title: "Web Development",
    description:
      "The era of the Web is far from over. With Techanic Infotech, dominate the world wide web with our data-driven web development services. Our expertise and experience guide our bespoke approach. Techanic Infotech is driving business success and value for the users with web development services .",
    href: "/services/web-development-company",
    link: "/services/web-development-company",
  },
  {
    image: "/assets/icons/react-icon.png",
    index: 2,
    title: "ReactJS Development",
    description:
      "At Techanic InfoTech, we pride ourselves as a top ReactJS development company, equipped with a team of expert ReactJS developers dedicated to crafting high-performing web applications. Our commitment is to deliver cutting-edge solutions that drive success for your business. ",
    href: "/services/reactjs-development-company",
    link: "/services/reactjs-development-company",
  },
  {
    image: "/assets/icons/python-icon.png",
    index: 3,
    title: "Python Development",
    description:
      "At Techanic Infotech, we harness the full potential of Python to deliver exceptional Python development services that cater to your specific business needs. Our expert Python developers are skilled in leveraging Python's robust features to create bespoke solutions, from Python web applications to comprehensive Python software development. ",
    href: "/services/python-development-company",
    link: "/services/python-development-company",
  },
  {
    image: "/assets/icons/php-development-icon.png",
    index: 4,
    title: "PHP Development",
    description:
      " Choose the best PHP development company for innovation, reliability, and excellence in Web solutions. Our seasoned PHP developers, with over 5 years of experience, craft custom web solutions that drive growth, enhance user experiences, and provide cost-effective solutions for businesses of all sizes.Our seasoned PHP developers, with over 5 years of experience.",
    href: "/services/php-development-company",
    link: "/services/php-development-company",
  },
  {
    image: "/assets/icons/node-js-icon.png",
    index: 5,
    title: "NodeJS Development",
    description:
      "At Techanic Infotech, we recognize the transformative potential of NodeJS and are committed to leveraging its capabilities to propel our clients' projects forward. Our expert team of NodeJS developers harnesses the power of this cutting-edgetechnology to create dynamic, feature-rich applications that not only meet the current demands of users but are also future-ready. ",
    href: "/services/nodejs-development-company",
    link: "/services/php-development-company",
  },
];
export default function OurServices({ color, height }) {
  return (
    <>
      <div className="flex flex-col h-auto bg-[#F6FAFD]">
        <div
          id="Ourservices"
          className="lg:py-[40px] py-[20px]  px-[24px] xl:px-[100px] w-full flex flex-col gap-[10px] md:gap-4 items-center justify-center"
        >
          {/* <div className="absolute inset-0 z-0">
            <Image
              src="backgroundImages/elearning-cards-banner-1.svg"
            
              layout="fill"
              objectFit="cover"
              alt="Background"
               
            />
          </div> */}
          <div className="child-text container flex flex-col gap-[10px] md:gap-4">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold  text-black  lg:text-center w-fit mx-auto ">
              <span> 360 &deg;</span> Development <span> Services</span>
            </h2>
            <p className="font-normal text-lg text-[#363636] md:text-black  leading-relaxed lg:border-0 border-l-2 border-blue-800 lg:text-center lg:pl-0 pl-2 md:flex hidden">
              Techanic InfoTech as a market-leading IT consulting understands
              what the market demands. That's why our software development
              services are made to help business face ever-changing market
              needs.
            </p>
          </div>
          <Card
            cardItems={cardItems}
            showLink={true}
            bColor={color}
            hoverback={color}
            fillIcon="#e8f4f8"
            heightcard={height}
            cardlink={true}
            isMainPage={true}
            // touchcolor="ffffff"
          />
        </div>
        <StartWithUS
          heading="Turn Ideas To Digital Brilliance"
          paragraph="Our team of developers and designers are eager to help you give birth to the best."
          btntext=" Request a Quote"
        />
      </div>
    </>
  );
}
