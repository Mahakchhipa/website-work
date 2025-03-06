import ServicesCards from "@/components/Services/Servicecards";
import TechSuccess from "@/lib/colab/techSuccess";
import Link from "next/link";
import Image from "next/image";
import BannerImage from "@/components/BannerImage";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import Ratings from "@/lib/reviews/reviews";
export const metadata = {
  title: "Custom Web, App and On-Demand Solutions Across Industries",
  description:
    "Techanic Infotech provides innovative apps and software solutions to solve complex industry challenges for taxi, dating, video streaming, food delivery education, etc.",
  alternates: {
    canonical: new URL("https://www.techanicinfotech.com/solutions"),
  },
  robots: "index, follow",
};

const solutions = [
  {
    id: 1,
    title: "Dating App Development Company",
    image: "assets/cards/dating-solution-card.webp",
    link: "/solutions/dating-app-development-company",
    description:
      " Elevate your digital dating experience with Techanic Infotech,a premier dating app development company. Transforming ideas into connections, we craft bespoke solutions that resonate with the heart.",
  },
  {
    id: 2,
    title: "Taxi App Development Company",
    image: "assets/cards/portfolio-background-taxi-image.webp",
    link: "/solutions/taxi-app-development-company",
    description:
      "Navigate the future of urban mobility with Techanic InfoTech’s premier taxi app development services, where sophistication meets functionality.As a market-leading taxi booking app development company, we are here to help you. Accelerate your ride-hailing business with our seamless, feature-rich taxi booking solutions that redefine the user experience.",
  },
  {
    id: 3,
    title: "Salon App Development Company",
    image: "assets/cards/salon-solution-card.webp",
    link: "/solutions/salon-app-development-company",
    description:
      "Elevate your salon business with Techanic Infotech, a premier salon app development company. Our expertise transforms your vision into a seamless digital experience.",
  },
  {
    id: 4,
    title: "Matrimonial App Development Company",
    image: "assets/cards/matrimonial-solution-card.webp",
    link: "/solutions/matrimonial-app-development-company",
    description:
      "Navigate the path of creating meaningful connections with premier matrimonial app development company. At Techanic InfoTech, we blend innovation with tradition to develop matrimonial apps that are secure, user-friendly, and tailored to meet the unique needs of modern love. Trust us to empower your matrimonial journey with cutting-edge technology.",
  },
  {
    id: 5,
    title: "Doctor On Demand App Development Company",
    image: "assets/cards/health-solution-card.webp",
    link: "/solutions/doctor-on-demand-app-development-company",
    description:
      "Revolutionize healthcare accessibility with Techanic InfoTech, your premier doctor on demand app development company. Seamlessly connecting patients to medical professionals, we embody innovation, reliability, and top-notch healthcare solutions in the palm of your hand.",
  },
  {
    id: 6,
    title: "Classified App Development Company",
    image: "assets/cards/classified-solution-card.webp",
    link: "/solutions/classified-app-development-company",
    description:
      "Welcome to Techanic Infotech, your premier classified app development company. We specialize in crafting bespoke classified app solutions that empower your business, connecting buyers and sellers with ease and efficiency. With our cutting-edge technology and innovative approach, we bring your classified app vision to life.",
  },
  {
    id: 7,
    title: "Courier Delivery App Development Company",
    image: "assets/cards/courier-solution-card.webp",
    link: "/solutions/courier-delivery-app-development-company",
    description:
      "At Techanic Infotech, we redefine the dynamics of logistical solutions through cutting-edge courier delivery app development services. Our expertise in crafting scalable, intuitive, and robust courier apps ensures your business stays ahead in the fast-paced delivery domain. Embrace innovation with the best courier delivery app development company and transform your courier service vision into reality.",
  },
  {
    id: 8,
    title: "Food Delivery App Development Company",
    image: "assets/cards/food-delivery-solution-card.webp",
    link: "/solutions/food-delivery-app-development-company",
    description:
      "WEmbark on a journey to digital excellence with Techanic InfoTech – A Leading Food Delivery App Development Company. This is where innovative food delivery app development meets business acumen. Elevate your culinary venture with our cutting-edge, user-centric app solutions designed for success in the bustling food delivery landscape. Let's craft your success story, one order at a time.",
  },
];
const items = [
  {
    id: 1,
    src: "contentImages/reactjs-content-image.webp",
    rating: 5.0,
    rate: 5.0,
  },
  {
    id: 2,
    src: "contentImages/GoodFirms1.png",
    rating: 4.9,
    rate: 4.9,
  },
  {
    id: 3,
    src: "contentImages/designrush.png",
    rating: 4.6,
    rate: 4.6,
  },
  {
    id: 4,
    src: "contentImages/g2.png",
    rating: 4.5,
    rate: 4.5,
  },
];

export default function Solutions() {
  return (
    <>
      <BannerImage
        bgImage="/assets/bannerimages/solution-page-banner-image.webp"
                mobileBackground="/assets/bannerimages/solution-page-banner-image.webp"
        headingPart1="Innovative Solutions for Tomorrow's Challenges"
        paragraph="At Techanic InfoTech, we leverage cutting-edge technology to deliver
            app At Techanic InfoTech, we utilize advanced technology to create
            app development solutions that solve real-world problems. We combine
            innovation with reliability to turn your vision into powerful,
            impactful outcomes."
        btnContent="Contact With Us"
        textColor1="white"
        btnbg="white"
      />
    <Ratings
        heading="Best Recognized By The Best"
        paragraph="Techanic InfoTech is recognized as one of the best web and app development companies in the industry by top tech critiques and platforms."
        items={[
          {
            src: "/assets/clutch-image.webp",

            alt: "clutchImg",
            para: "Clutch.co has recognized Techanic InfoTech as one of the best in the market. We have earned a 4.7 Star rating.",
          },
          {
            src: "/assets/good-firms-image.webp",

            alt: "firmsImg",
            para: "Techanic InfoTech is among the top names in GoodFirm's list of top mobile app development and web development firms.",
          },
          {
            src: "/assets/designrush-image.webp",

            alt: "designofrushImg",
            para: "With our software development and designing capacities, we have earned 4.8-star rating with a rank among top names.",
          },
          {
            src: "/assets/business-of-apps-image.webp",

            alt: "businessImg",
            para: "A top platform in the world of tech and app development, BusinessofApps gives Techanic InfoTech a 4.8-star rating.",
          },
          {
            src: "/assets/g2-image.webp",

            alt: "g2Img",
            para: "The well-known tech critique and review platform, G2 awards Techanic InfoTech with near perfect 4.9 star rating.",
          },
        ]}
        textcolor="#00008B"
      />
      <ServicesCards
        paragraph="Techanic Infotech specializes in creating bespoke app solutions across various domains. Whether you're looking to disrupt markets or enhance operational efficiency, our solutions are designed to propel your business forward."
        heading="Tailored App Development Solutions"
        services={solutions}
      />
      <TechSuccess
        headingPart1="Ready For "
        headingPart2="Tech Success?"
        paragraph="Are you ready to experience the level of success that others can only dream of? We enable explosive market success with streamlined business operations while keeping end users happy. Techanic InfoTech with renowned web and mobile app development services is here to help you."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#ffffff"
      />
      <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />

      {/* <OurBlogs /> */}
    </>
  );
}
