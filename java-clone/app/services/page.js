import ServicesCards from "@/components/Services/Servicecards";
import TechSuccess from "@/lib/colab/techSuccess";
import BannerImage from "@/components/BannerImage";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import Ratings from "@/lib/reviews/reviews";
export const metadata = {
  title: "Web, App and On-Demand Development Services – Techanic Infotech",
  description:
    "Techanic Infotech provides top digital services to unlock the full potential of your business. We provide cutting-edge software development.",
  alternates: {
    canonical: new URL("https://www.techanicinfotech.com/services"),
  },
  robots: "index, follow",
};

const services = [
  {
    id: 1,
    title: "Mobile App Development Company",
    image: "assets/cards/mobile-app-banner.webp",
    link: "/services/mobile-app-development-company",
    description:
      "Transform your vision into reality with Techanic InfoTech, a leading mobile app development company.We specialize in crafting seamless, robust, and scalable mobile experiences that drive growth and engage users. Elevate your business with our bespoke mobile app solutions.",
  },
  {
    id: 2,
    title: "E-Commerce Development Company",
    image: "assets/cards/E-Commerce Development Company.webp",
    link: "/services/ecommerce-development-company",
    description:
      "Welcome to Techanic Infotech, your trusted eCommerce development company, where innovation meets expertise. We specialize in transforming your business vision into reality with cutting-edge eCommerce solutions. Elevate your online presence and sales with our tailored eCommerce website development services, designed to cater to your unique business needs.",
  },
  {
    id: 3,
    title: "Web Development Company",
    image: "assets/cards/web-development-banner.webp",
    link: "/services/web-development-company",
    description:
      "In the world of the internet, we are empowering companies with the unlocked power of WWW,enabling explosive growth.Work with the market-leading web development company, Techanic InfoTech, and supercharge business growth.",
  },
  {
    id: 4,
    title: "React Native App Development Company",
    image: "assets/cards/react-native-service-card.webp",
    link: "/services/react-native-app-development-company",
    description:
      "Techanic Infotech, empower Your Vision with Premier React Native App Development Services. Leverage our expertise as a leading React Native app development company to create high-quality, cross-platform mobile apps that deliver seamless user experiences across iOS and Android.",
  },
  {
    id: 5,
    title: "iOS App Development Company",
    image: "assets/cards/ios--service-card.webp",
    link: "/services/ios-app-development-company",
    description:
      "Elevate your digital presence with Techanic InfoTech's iOS app development services. Experience be spoke solutions that blend innovation with functionality, tailored to give your business a competitive edge.Unlock the full potential of your ideas with our expert iOS app developers. Start your journey towards a seamless, robust, and intuitive iOS app that stands out in the App Store with Techanic InfoTech.",
  },
  {
    id: 6,
    title: "Flutter App Development Company",
    image: "assets/cards/flutter-service-card.webp",
    link: "/services/flutter-app-development-company",
    description:
      "Unlock the full potential of cross-platform solutions with our premier Flutter app development services. As a leading Flutter app development company, Techanic InfoTech specialize in crafting robust, high-quality mobile applications that deliver seamless performance across Android and iOS. Partner with us to transform your vision into a dynamic Flutter application tailored to your business needs.",
  },
  {
    id: 7,
    title: "PHP Development Company",
    image: "assets/cards/php-service-card.webp",
    link: "/services/php-development-company",
    description:
      "Elevate your digital presence with Techanic Infotech's expert PHP development services. Choose the best PHP development company for innovation, reliability, and excellence in Web solutions.Our seasoned PHP developers, with over 5 years of experience, craft custom web solutions that drive growth, enhance user experiences, and provide cost-effective solutions for businesses of all sizes.",
  },
  {
    id: 8,
    title: "WordPress Development Company",
    image: "assets/cards/wordpress-service-card.webp",
    link: "/services/wordpress-development-company",
    description:
      "Unlock the full potential of your online presence with Techanic Infotech, a leading WordPress development company. We specialize in creating bespoke WordPress development services that elevate your brand and engage your audience.",
  },
  {
    id: 9,
    title: "React JS Development Company",
    image: "assets/cards/reactjs-service-card.webp",
    link: "/services/reactjs-development-company",
    description:
      "Unleash the power of ReactJS with Techanic InfoTech — where innovative design meets unparalleled functionality As a market-leading ReactJS development company, we are here to help you with your next project, react out to us.",
  },
  {
    id: 10,
    title: "Python Development Company",
    image: "assets/cards/python-service-card.webp",
    link: "/services/python-development-company",
    description:
      "Unleash the power of ReactJS with Techanic InfoTech — where innovative design meets unparalleled functionality As a market-leading ReactJS development company, we are here to help you with your next project, react out to us.",
  },
  {
    id: 11,
    title: "Android App Development Company",
    image: "assets/cards/android-banner.webp",
    link: "/services/android-app-development-company",
    description:
      "Techanic InfoTech is here to help you unlock the power of Android app development and enter the world’s largest user base for mobile apps, opening doors to seamless business success.Collaborate with the renowned Android app development company and make your app idea a reality.",
  },
  {
    id: 12,
    title: "NodeJS Development Company",
    image: "assets/cards/nodejs-service-card.webp",
    link: "/services/nodejs-development-company",
    description:
      "Welcome to Techanic Infotech, a leading NodeJS Development Company dedicated to crafting high-performance, scalable, and feature-rich Node.js websites and applications.Our team of expert developers leverages the full potential of Node.js to deliver custom solutions that meet your unique business needs.",
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

export default function Services() {
  return (
    <>
      <BannerImage
      bgImage='/assets/bannerimages/service-page-banner-image.webp'
        mobileBackground='/assets/bannerimages/service-page-banner-image.webp'
        headingPart1="Our Services"
        paragraph="At Techanic Infotech, we leverage cutting-edge technology to provide
            bespoke app development solutions designed to meet your business
            requirements. Experience a journey where your concepts transform
            into outstanding digital experiences."
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
        paragraph="From startups to enterprises, Techanic Infotech provides a full spectrum of app
          development solutions. Explore our services designed to empower your
          business with cutting-edge technology."
        heading="Comprehensive Development Services"
        services={services}
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
