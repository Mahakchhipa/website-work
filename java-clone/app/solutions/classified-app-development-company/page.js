import OurClients from "@/components/clients/page";
import ContactInfo from "@/components/formSection/contactInfo";
import Portfolio from "@/components/getStarted/portfolio/portfolio";

import StartWithUS from "@/components/getStarted/startWithus";

import ClientTestimonials from "@/lib/clientsReviews/clients";
import TechSuccess from "@/lib/colab/techSuccess";
import Content from "@/lib/secondpage/Ewallet/content";

import EwalletCards from "@/lib/secondpage/Ewallet/ewalletcards";

import Experts from "@/lib/secondpage/dev";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import Feature from "@/lib/secondpage/features";

import Banner from "@/lib/secondpage/Ewallet/Banner";
import HiringDevs from "@/lib/secondpage/hireDev";
import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";
import Weblanguages from "@/components/weblanguages";
import Head from "next/head";
import Panel from "@/lib/secondpage/Panel";
import PageBanner from "../../../components/PageBanner";
import CloneApp from "../../../lib/secondpage/cloneapp";
import CTAButton from "../../../components/getStarted/CTAButton";
import CardSection from "../../../lib/secondpage/cardssection";
import Panels from "../../../lib/secondpage/Panels";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Languages from "@/components/getStarted/allTechLAnguages/languages";

import SolutionPagesCards from "@/lib/secondpage/devProcess/SolutionPagesCards";

const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/locanto-portfolio-image.webp",
    heading: "Locanto App",
    para: "With the Locanto app, users may post job listings, buy and sell products locally, and locate services. ",
    webLink: "https://www.locanto.com.au/",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/bakeca-portfolio-image.webp",
    heading: "Bakeca.it",
    para: "With its headquarters in Italy, Bakeca.it is an online marketplace with many categories for buying and selling products and services. ",
    webLink: "https://www.bakeca.it",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/zamroo-portfolio-image.webp",
    heading: "Zamroo",
    para: "An Indian marketplace for buying and selling products and services is provided by the classifieds app Zamroo. ",
    webLink: "https://www.zamroo.com",
  },
  {
    id: 4,
    image: "/assets/portfolioImages/wall-classified-portfolio-image.webp",
    heading: "Wall Classified",
    para: "Wall Classifieds is an online platform that allows users to buy, sell, and trade goods and services within their local communities. ",
    webLink: "https://www.wallclassifieds.com/#google_vignette",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Classified App Development Company – Techanic Infotech",
  description:
    "Techanic Infotech is leading classified app development company. Get classified apps clone solution similar to OLX, Quikr, Craigslist etc with source code.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/classified-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Classified App Development Company – Techanic Infotech",
    description:
      "Techanic Infotech is leading classified app development company. Get classified apps clone solution similar to OLX, Quikr, Craigslist etc with source code.",
    url: "https://www.techanicinfotech.com/solutions/classified-app-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/classified-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Classified App Development Company – Techanic Infotech",
    description:
      "Techanic Infotech is leading classified app development company. Get classified apps clone solution similar to OLX, Quikr, Craigslist etc with source code.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/classified-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function Classified() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            priceRange: "$25-$50",
            name: "Classified App Development Company - Techanic Infotech",
            url: "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            image:
              "https://www.techanicinfotech.com/OGI/solutions/classified-app-development-og.webp",
            description:
              "Techanic Infotech offers expert classified app development services. Hire our developers for tailored solutions that enhance user engagement and drive business growth.",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur ,Rajasthan, India",
                addressLocality:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302026",
                addressCountry: "IN",
                telephone: "+91 7222001000",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressLocality:
                  "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressRegion: "New York",
                postalCode: "10001",
                telephone: "+1 8053364021",
                addressCountry: {
                  "@type": "Country",
                  name: "US",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                addressLocality:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road",
                addressRegion: "DUBAI",
                postalCode: "417213",
                telephone: "+971 524981077",
                addressCountry: {
                  "@type": "Country",
                  name: "AE",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO 20123, ITALY",
                addressLocality:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO",
                addressRegion: "MILANO",
                postalCode: "20123",
                telephone: "+39 3517578120",
                addressCountry: {
                  "@type": "Country",
                  name: "IT",
                },
              },
            ],
          }),
        }}
      />
      {/* LocalBusiness Schema */}
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Techanic Infotech",
            image: "https://www.techanicinfotech.com/OGI/solutions/classified-app-development-og.webp",
            "@id":
              "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            url: "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            priceRange: "$25-$50",
            address: [
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur  Rajasthan, India",
                addressLocality:
                  "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur",
                addressRegion: "Rajasthan",
                postalCode: "302026",
                addressCountry: "IN",
                telephone: "+91 7222001000",
              },
              {
                "@type": "PostalAddress",
                streetAddress: "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressLocality:
                  "224 W 35th St Ste 500 #2215 New York, NY 10001",
                addressRegion: "New York",
                postalCode: "10001",
                telephone: "+1 8053364021",
                addressCountry: {
                  "@type": "Country",
                  name: "US",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                addressLocality:
                  "404-F Aspin Commercial Tower, Sheikh Zayed Road",
                addressRegion: "DUBAI",
                postalCode: "417213",
                telephone: "+971 524981077",
                addressCountry: {
                  "@type": "Country",
                  name: "AE",
                },
              },
              {
                "@type": "PostalAddress",
                streetAddress:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO 20123, ITALY",
                addressLocality:
                  "Via Giuseppe Mazzini nu. 6, Flat nu 107, MILANO",
                addressRegion: "MILANO",
                postalCode: "20123",
                telephone: "+39 3517578120",
                addressCountry: {
                  "@type": "Country",
                  name: "IT",
                },
              },
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/techanicinfotech/",
              "https://x.com/techanicinfo",
              "https://www.instagram.com/techanic_infotech_/",
              "https://www.linkedin.com/company/techanic-infotech/",
              "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            ],
          }),
        }}
      /> */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Techanic Infotech",
            alternateName: "Techanic Infotech",
            url: "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            logo: "https://www.techanicinfotech.com/OGI/solutions/classified-app-development-og.webp",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 7222001000",
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+1 8053364021",
                contactType: "sales",
                areaServed: "US",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+971 525981077",
                contactType: "sales",
                areaServed: "AE",
                availableLanguage: "en",
              },
              {
                "@type": "ContactPoint",
                telephone: "+39 3517578120",
                contactType: "sales",
                areaServed: "IT",
                availableLanguage: "en",
              },
            ],
            sameAs: [
              "https://www.facebook.com/techanicinfotech/",
              "https://x.com/techanicinfo",
              "https://www.instagram.com/techanic_infotech_/",
              "https://www.linkedin.com/company/techanic-infotech/",
              "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            ],
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@id":
              "https://www.techanicinfotech.com/solutions/classified-app-development-company",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes Techanic Infotech stand out for classified app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Techanic Infotech distinguishes itself through customized solutions, advanced technological integration, and a deep understanding of the classified app market. Our commitment to innovation, quality, and client collaboration ensures your app is not just developed but strategically positioned for success.",
                },
              },
              {
                "@type": "Question",
                name: "How does Techanic Infotech ensure the security of classified apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We prioritize security in every classified app we develop by implementing the latest encryption technologies, secure data handling practices, and compliance with international security standards. Our robust security measures protect user data and transactions, building a trustworthy platform.",
                },
              },
              {
                "@type": "Question",
                name: "Can Techanic Infotech develop a classified app that fits my specific business needs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Our approach to classified app development is highly customizable. We work closely with you to understand your business objectives, target audience, and specific requirements to craft an app that perfectly aligns with your vision and business model.",
                },
              },
              {
                "@type": "Question",
                name: "What is the process of developing a classified app with Techanic Infotech?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our development process includes requirement analysis, design and prototyping, development, quality assurance, deployment, and ongoing maintenance. This structured approach ensures your classified app is delivered with high quality and within the agreed timeline.",
                },
              },
              {
                "@type": "Question",
                name: "Does Techanic Infotech offer post-launch support and maintenance for classified apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer comprehensive post-launch support and maintenance services to ensure your classified app remains up-to-date, secure, and efficient in catering to your users' needs.",
                },
              },
              {
                "@type": "Question",
                name: "Will Techanic Infotech sign a Non-Disclosure Agreement (NDA) for my classified app project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we understand the importance of confidentiality in app development projects. Techanic Infotech is committed to protecting your intellectual property and business ideas, and we are willing to sign a Non-Disclosure Agreement (NDA) before the commencement of your project.",
                },
              },
            ],
          }),
        }}
      />
      <PageBanner
        headingPart1="Classified App"
        headingPart2=" Development Company"
        paragraph="Welcome to Techanic Infotech, your premier classified app development company. We specialize in crafting bespoke classified app solutions that empower your business, connecting buyers and sellers with ease and efficiency. With our cutting-edge technology and innovative approach, we bring your classified app vision to life."
        showVideo={false}
        mobileBackground="/assets/classified-banner-image.png"
        image="/assets/bannerimages/classified-app.webp"
        btntext="Let's Get Started"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <CloneApp
        id="grad-5"
        headingPart1="Comprehensive Classified"
        headingPart2="App Clone Solutions"
        cloneData={[
          {
            id: 0,
            label: "eBay Clone Development",
            content:
              "Unleash the potential of an online auction marketplace with our eBay clone development. Our classified mobile app development offers an engaging platform for users to bid, buy, or sell items, integrated with secure payment and communication features.",
            image: "/assets/cloneappImages/ebay-clone-image.webp", // Replace with the appropriate image
          },

          {
            id: 1,
            label: "OLX Clone Development",
            content:
              "Step into the global marketplace with an OLX clone that offers versatile classified listings. Our OLX clone classified platform development focuses on user engagement and simplicity, making it easier for users to navigate, post ads, and connect with local and international buyers and sellers.",
            image: "/assets/cloneappImages/olx-clone-image.webp", // Replace with the appropriate image
          },
          {
            id: 2,
            label: "Letgo Clone Development",
            content:
              "Embrace the future of local buy and sell with our Letgo clone development services. Our classified app designers and developers craft an intuitive and visually appealing platform that makes classified transactions effortless, fostering a community of trusted users and sustainable growth.",
            image: "/assets/cloneappImages/letgo-clone-image.webp", // Replace with the appropriate image
          },
          {
            id: 3,
            label: "OfferUp Clone Development",
            content:
              "Transform the way people buy and sell locally with an OfferUp clone. Our development services emphasize a mobile-first approach, ensuring a seamless and engaging user experience, complete with chat functionality and user-friendly listing processes.",
            image: "/assets/cloneappImages/offerup-clone-image.webp", // Replace with the appropriate image
          },
          {
            id: 4,
            label: "Gumtree Clone Development",
            content:
              "Enter the diverse classified market with a Gumtree clone that caters to a wide range of categories. Our Gumtree clone development is centered around creating a community-based platform where users can easily search, post, and interact within their local area or beyond.",
            image: "/assets/cloneappImages/gumtree-clone-image.webp", // Replace with the appropriate image
          },
          {
            id: 5,
            label: "Craigslist Clone Development",
            content:
              "Experience the power of a Craigslist-like platform with our Craigslist online classified app development. We replicate the simplicity and effectiveness of Craigslist, ensuring a user-friendly interface and robust functionality for seamless buying and selling experiences.",
            image: "/assets/cloneappImages/craigslist-clone-image.webp", // Assuming you want to reuse images, adjust as needed
          },
        ]}
      />
      <CTAButton
        heading="Get Started Today"
        paragraph="Embark on your journey with the leading classified website development services. Our team is ready to transform your ideas into a dynamic classified platform, tailor-made for your business needs."
        btntext="Discover More"
        // color1="#4F08C4"
        // color2="#4F08C4"
        // color3="#26045E"
        // color4="#4F08C4"
        backgroundImage="/assets/cta-button-bg-image.png"
        textColor="white"
        bgColor="#ffffff"
        text="black"
      />
      <CardSection
        headingPart1="Expert Classified"
        headingPart2="Website Development Services"
        mobileheadingPart1="Expert Classified"
        mobileheadingPart2="Website Development Services"
        color="0F53FF"
        paragraph="As a premium classified portal development company, we offer a comprehensive suite of services tailored to your classified website development needs. Our expertise ensures your platform is innovative, user-friendly, and scalable."
        cardItems={[
          {
            image: "/assets/icons/classified-icon.png",
            title: "Custom Classified App Development",
            description:
              "Our custom classified app development service is designed to bring your unique vision to life. We focus on creating bespoke solutions that cater to your specific business model, target audience, and operational needs, ensuring a truly personalized classified app experience.",
          },
          {
            image: "/assets/icons/classified-software-development-icon.png",
            title: "Classified Software Development",
            description:
              "Leverage our classified software development expertise to build robust, secure, and scalable classified platforms. Our solutions are engineered to support high volumes of listings and transactions, providing a seamless experience for users and administrators alike.",
          },
          {
            image: "/assets/icons/classified-portal-icon.png",
            title: "Classified Portal Development",
            description:
              "We specialize in classified portal development solution, creating platforms that facilitate easy navigation, advanced search functionalities, and a secure environment for transactions. Our portals are designed to enhance user engagement and drive business growth.",
          },
          {
            image: "/assets/icons/classified-website-icon.png",
            title: "Classified Website Development",
            description:
              "Our classified website development services ensure your online presence is strong, professional, and effective. We integrate the latest web technologies to create responsive, fast-loading, and SEO-optimized classified websites that attract and retain users.",
          },
          {
            image: "/assets/icons/classified-maintenance-icon.png",
            title: "Classified App & Website Maintenance",
            description:
              "Beyond development, we offer classified app and website maintenance services to ensure your platform remains up-to-date, secure, and efficient. Our ongoing support includes regular updates, security checks, and feature enhancements to keep your classified platform at the forefront.",
          },
          {
            image: "/assets/icons/classified-upgradation-migration-icon.png",
            title: "Classified Solution Upgradation & Migration",
            description:
              "As a market leading, classified app and classified website development company, Techanic Infotech help you move your legacy system to newer version with powerful classified app development solution. So, if you want to be part of the future, contact us today.",
          },
        ]}
        isVisible={false}
      />

      <Panels
        headingPart1="Advanced Features"
        headingPart2="For Classified Apps"
        paragraph="Techanic Infotech as a classified website development company, integrates cutting-edge features into every classified app to enhance user engagement and operational efficiency. Our feature-rich platforms cater to all stakeholders."
        li1="User Panel Features"
        li2="Admin Panel Features"
        li3="Advanced Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small3="Advance"
        showLi3={true}
        bgColor="F3F3FA"
        textColor="black"
        textColor1="white"
        hoverBgColor="buttonGradient"
        backColor="#282828"
        userPanelCards={[
          {
            icon1: "/assets/icons/user-profile-icon.svg",
            h1: "User Registration & Profile Management",
            p1: "Secure sign-up and customizable user profiles for a personalized experience, including preferences and history.",
            icon2: "/assets/icons/advance-search-icon.svg",
            h2: "Advanced Search & Filters",
            p2: "Intuitive search functionality with comprehensive filters to narrow down listings by category, location, price, and more.",
          },
          {
            icon1: "/assets/icons/messaging-communication-icon.svg",
            h1: "Messaging & Communication",
            p1: "In-app messaging system allowing seamless communication between buyers and sellers without leaving the platform.",
            icon2: "/assets/icons/listing-creation-icon.svg",
            h2: "Listing Creation & Management",
            p2: "Easy-to-use interfaces for users to create, edit, and manage their classified ads with multimedia support.",
          },
          {
            icon1: "/assets/icons/rating-icon.svg",
            h1: "Ratings & Reviews",
            p1: "Users can rate and review transactions, enhancing trust and credibility within the community.",
            icon2: "/assets/icons/favourite-icon.svg",
            h2: "Favorites & Alerts",
            p2: "Option to save favorite listings and set up alerts for specific search criteria, improving user convenience.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: "/assets/icons/dashboard-analytics--icon.svg",
            h1: "Dashboard & Analytics",
            p1: "Real-time insights into app performance, user activity, and transaction metrics for informed decision-making.",
            icon2: "/assets/icons/user-listing-icon.svg",
            h2: "User & Listings Management",
            p2: "Comprehensive tools to manage user accounts and listings, including approval processes and moderation.",
          },
          {
            icon1: "/assets/icons/payment-subscription-icon.svg",
            h1: "Payment & Subscription Management",
            p1: "Integrated payment gateways and subscription model management for monetization efficiency.",
            icon2: "/assets/icons/content-management-icon.svg",
            h2: "Content Management System (CMS)",
            p2: "Easy-to-use CMS for updating app content, including categories, banners, and promotional materials.",
          },
          {
            icon1: "/assets/icons/security-compliance-icon.svg",
            h1: "Security & Compliance",
            p1: "Robust security measures to protect user data and transactions, ensuring compliance with regulations.",
            icon2: "/assets/icons/technical-support-icon.svg",
            h2: "Technical Support & Assistance",
            p2: "Dedicated support tools for handling user queries and technical issues, maintaining platform integrity.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: "/assets/icons/location-icon.svg",
            h1: "Geo-Location Services",
            p1: "Enables users to search and list products based on their geographic location, enhancing local marketplace functionality.",
            icon2: "/assets/icons/social-media-icon.svg",
            h2: "Social Media Integration",
            p2: "Allows for easy sharing of listings on social media platforms and login via social media accounts for a streamlined experience.",
          },
          {
            icon1: "/assets/icons/notification-icon.svg",
            h1: "Push Notifications",
            p1: "Keeps users engaged with timely updates on listings, messages, and promotions, driving platform activity.",
            icon2: "/assets/icons/ai-powered-icon.svg",
            h2: "AI-Powered Recommendations",
            p2: "Machine learning algorithms suggest relevant listings based on user behavior and preferences, personalizing the user experience.",
          },
          {
            icon1: "/assets/icons/multi-languages-support-icon.svg",
            h1: "Multi-Language Support",
            p1: "Cater to a global audience with multi-language capabilities, breaking down language barriers and expanding market reach.",
            icon2: "/assets/icons/payment-gateway-icon.svg",
            h2: "Secure Payment Gateways",
            p2: "Integrated secure payment solutions that support multiple payment methods, ensuring convenient and safe transactions.",
          },
        ]}
      />

      <CTABannerImage
        heading="Discover The Difference"
        paragraph="Why settle for ordinary when you can have extraordinary? Dive into the world of custom classified app development with Techanic Infotech. Let's create a classified app that stands out."
        text="Customize Now"
        bgColor="ffffff"
        media="image"
        // imageSrc="backgroundImages/dating-experts-back.svg"

        btnbg="#ffffff"
        btntext="#0F53FF"
        mobileImage="/assets/background-mobile-image-expert-section.png"
        backColor="#290465"
        textColor="white"
        image="/assets/background-image-expert.webp"
      />

      <HiringDevelopers
        heading="Hire Classified App Developers"
        headingPart1="Hire Classified"
        headingPart2=" App Developers"
        paragraph1="At Techanic Infotech, hiring classified app 
       developers means bringing on board a team with unparalleled
        expertise and a proven track record. Our classified portal
         developers are adept at transforming your ideas into reality,
          creating classified apps that are not only visually appealing
           but also feature-rich, scalable, and secure. They stay ahead 
           of technology trends to ensure your app remains relevant in the rapidly evolving digital marketplace."
        paragraph2="Our collaborative approach involves you at every step, ensuring that the final product aligns perfectly with your vision and business objectives. With Techanic Infotech, you gain access to classified website developers who are committed to excellence and innovation, guaranteeing your classified app stands out from the competition. Let our experts drive your project to success with their technical prowess and industry insights."
        listData={[
          "Expert Technical Skills",
          "Innovative Solutions",
          "On-Time Delivery",
          "Post-Launch Support",
        ]}
        image="/assets/hiring-developers-image.webp"
        bgColor="ffffff"
        divBtn="yellow"
        direction="right"
        color1=" #C8C829"
        color2="#C8C829"
        btntxt="white"
      />
      <TechSuccess
        heading="Win The Web With Our Solution"
        headingPart1="Win The Web"
        headingPart2="With Our Solution"
        paragraph="Transform your business process with our comprehensive classified website development solution. Driven by expert developers and years of experience, we know how to deliver solutions that reshape market success. "
        n1="5"
        p1=" Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      <Languages
        head="Leading-Edge Technology For Classified Apps"
        para="At Techanic Infotech, we harness the power of the latest technologies to build robust and scalable classified website and apps. Our expert custom classified portal development team is adept in utilizing a wide range of tech stacks, ensuring your classified platform is fast, reliable, and ahead of the curve. Embrace innovation with us."
        bgColor="#ffffff"
        iconheight="60px"
        iconwidth="60px"
        sections={[
          {
            image: "/assets/icons/mobile-platform-icon.svg",
            label: "Mobile Platforms",
          },
          {
            image: "/assets/icons/web-icon.svg",
            label: "Web",
            flipIcon: "/assets/icons/web.png",
          },
          {
            image: "/assets/icons/payment-icon.svg",
            label: "Payment Gateways",
          },
          {
            image: "/assets/icons/realtime-analytics.svg",
            label: "Real-time Analytics",
          },
          {
            image: "/assets/icons/push-notification-icon.svg",
            label: "Push Notifications",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/android-icon.png",
            label: "Android",
            section: "Mobile Platforms",
          },
          {
            image: "/assets/icons/ios-icon.png",
            label: "iOS",
            section: "Mobile Platforms",
          },
          {
            image: "/assets/icons/cross-platform-icon.png",
            label: "Cross-Platform",
            section: "Mobile Platforms",
          },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Web",
          },
          {
            image: "/assets/icons/dot-net-icon.png",
            label: ".NET",
            section: "Web",
          },
          {
            image: "/assets/icons/html-icon.png",
            label: "HTML",
            section: "Web",
          },
          {
            image: "/assets/icons/paypal-icon.png",
            label: "PayPal",
            section: "Payment Gateways",
          },
          {
            image: "/assets/icons/braintree-icon.png",
            label: "Braintree",
            section: "Payment Gateways",
          },
          {
            image: "/assets/icons/stripe-icon.png",
            label: "Stripe",
            section: "Payment Gateways",
          },
          {
            image: "/assets/icons/big-data-icon.png",
            label: "BigData",
            section: "Real-time Analytics",
          },
          {
            image: "/assets/icons/hadoop-icon.png",
            label: "Hadoop",
            section: "Real-time Analytics",
          },
          {
            image: "/assets/icons/spark-icon.png",
            label: "Spark",
            section: "Real-time Analytics",
          },
          {
            image: "/assets/icons/apacheflink-icon.png",
            label: "Apache Flink",
            section: "Real-time Analytics",
          },
          {
            image: "/assets/icons/pushio-icon.png",
            label: "Push.io",
            section: "Push Notifications",
          },
          {
            image: "/assets/icons/twilio-icon.png",
            label: "Twilio",
            section: "Push Notifications",
          },
        ]}
      />
      <AppDevelop
        headingPart1="Classified App "
        headingPart2="Development Process"
        heading=" Classified App Development Process"
        paragraph="At Techanic Infotech, our on demand classified app development process is designed to be transparent, efficient, and tailored to meet your specific needs. From ideation to launch, we ensure every step is meticulously planned and executed, involving you in the journey towards creating a successful classified app."
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Requirement Analysis"
        p1="Understanding your business needs and defining project objectives."
        image2="/assets/icons/design-prototype-icon.png"
        h2="Design & Prototyping"
        p2="Crafting user-centric designs and interactive prototypes for feedback."
        image3="/assets/icons/development-icon.png"
        h3="Development"
        p3="Coding the app with the latest technologies and best practices."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance"
        p4="Rigorous testing to ensure the app is bug-free and user-friendly."
        image5="/assets/icons/launch-deployment-icon.png"
        h5="Deployment"
        p5="Launching the app on the desired platforms with full support."
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Maintenance & Updates"
        p6="Providing ongoing support to keep the app updated and efficient."
        align="center"
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Requirement Analysis",
            description:
              "Understanding your business needs and defining project objectives.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design & Prototyping",
            description:
              "Crafting user-centric designs and interactive prototypes for feedback.",
          },
          {
            image: "/assets/icons/development-icon.png",
            title: "Development",
            description:
              "Coding the app with the latest technologies and best practices.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Rigorous testing to ensure the app is bug-free and user-friendly.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Deployment",
            description:
              "Launching the app on the desired platforms with full support.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Maintenance & Updates",
            description:
              "Providing ongoing support to keep the app updated and efficient.",
          },
        ]}
      />
      <CTABannerImage
        heading="Discuss Your Idea With Industrial Experts & Experienced Developers"
        //         childheading1=" Transform The Way People Connect."
        //         childheading2="Let’s Build Something Special Together!
        // "

        paragraph="Discuss Your Idea With Industrial Experts & Experienced Developers"
        useBackgroundImage={true}
        image="/assets/bannerimages/classified-app-cta-button-banner.webp"
        textColor="white"
        buttonColor="#ffffff"
        btntextColor="#0F53FF"
        mobileImage="/assets/bannerimages/classified-cta-banner-mobile-image.png"
        backColor="#290465"
        text="Customize Now"
        bgColor="ffffff"
        media="image"
        // imageSrc="backgroundImages/dating-experts-back.svg"

        btnbg="#ffffff"
        btntext="#0F53FF"
      />
      <SolutionPagesCards
        headingPart1="Why Choose Techanic Infotech For Your"
        headingPart2="Classified App Development?"
        mobileheadingPart1="Why Choose Techanic Infotech For Your"
        mobileheadingPart2="Classified App Development?"
        paragraph={`Developing your classified app with Techanic Infotech means setting a benchmark in the digital marketplace. Our expertise, innovative approach, and commitment to quality ensure your app not only meets but exceeds user expectations. With us, you gain a partner dedicated to propelling your business forward.`}
        cardItems={[
          {
            image: "/assets/icons/customized-solution-icon.png",
            title: "Customized Solutions",
            description:
              "Tailored On demand classified app development services that aligns with your business model, enhancing user engagement and satisfaction.",
          },
          {
            image: "/assets/icons/advance-technology-icon.png",
            title: "Advanced Technology",
            description:
              "Access to the latest technology and trends, ensuring your classified app development solution is innovative and future-ready.",
          },
          {
            image: "/assets/icons/market-expertise-icon.png",
            title: "Market Expertise",
            description:
              "Years of experience in on demand classified portal development, providing you with insights into what works best in the market.",
          },
          {
            image: "/assets/icons/scalable-application-icon.png",
            title: "Scalable Applications",
            description:
              "Classified apps designed to grow with your business, ensuring they can handle increasing user numbers and data.",
          },
          {
            image: "/assets/icons/robust-security-icon.png",
            title: "Robust Security",
            description:
              "Implementing top-notch security measures in classified solution development to protect user data and transactions, building trust and reliability.",
          },
          {
            image: "/assets/icons/continuous-support-icon.png",
            title: "Continuous Support",
            description:
              "From ideation to post-launch, our classified app development team offers continuous support and updates, keeping your app at its peak performance.",
          },
        ]}
        color="0F53FF"
      />
      <Portfolio
        heading="Our Classified Website Development Successes"
        headingpart1="Our Classified Website"
        headingpart2="Development Successes"
        bgColor="ffffff"
        paragraph={`Explore our portfolio to witness the breadth of our expertise in classified website development. Each project showcases our commitment to excellence, innovation, and client satisfaction. Let our past work inspire your next classified app venture with Techanic Infotech.`}
        cards={cards}
        divBtn="yellow"
        direction="right"
        color1=" #EBEB84"
        color2="#EBEB84"
        btntext="black"
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are answers to some of the top questions asked about on demand classified website  development. "
        questions={[
          "Q1: What makes Techanic Infotech stand out for classified app development?",
          "Q2: How does Techanic Infotech ensure the security of classified apps?",
          "Q3: Can Techanic Infotech develop a classified app that fits my specific business needs?",
          "Q4: What is the process of developing a classified app with Techanic Infotech?",
          "Q5: Does Techanic Infotech offer post-launch support and maintenance for classified apps?",
          "Q6: Will Techanic Infotech sign a Non-Disclosure Agreement (NDA) for my classified app project?",
        ]}
        answers={[
          "A1: Techanic Infotech distinguishes itself through customized solutions, advanced technological integration, and a deep understanding of the classified app market. Our commitment to innovation, quality, and client collaboration ensures your app is not just developed but strategically positioned for success.",
          "A2: We prioritize security in every classified app we develop by implementing the latest encryption technologies, secure data handling practices, and compliance with international security standards. Our robust security measures protect user data and transactions, building a trustworthy platform.",
          "A3: Absolutely. Our approach to classified app development is highly customizable. We work closely with you to understand your business objectives, target audience, and specific requirements to craft an app that perfectly aligns with your vision and business model.",
          "A4: Our development process includes requirement analysis, design and prototyping, development, quality assurance, deployment, and ongoing maintenance. This structured approach ensures your classified app is delivered with high quality and within the agreed timeline.",
          "A5: Yes, we offer comprehensive post-launch support and maintenance services to ensure your classified app remains up-to-date, secure, and efficient in catering to your users' needs.",
          "A6: Yes, we understand the importance of confidentiality in app development projects. Techanic Infotech is committed to protecting your intellectual property and business ideas, and we are willing to sign a Non-Disclosure Agreement (NDA) before the commencement of your project.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What Our Clients Say?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
