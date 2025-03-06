import OurClients from "@/components/clients/page";
 
import NativeCards from "@/lib/secondpage/nativeapp/nativecards";

import ClientTestimonials from "@/lib/clientsReviews/clients";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
 

import TechSuccess from "@/lib/colab/techSuccess";
import Appdev from "@/lib/secondpage/nativeapp/Appdev";

import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";
import Weblanguages from "@/components/weblanguages";

import FoodDeliveryBanner from "@/components/FoodDeliveryBanner";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTAButton from "@/components/getStarted/CTAButton";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const firstColumnData = [
  { heading: "Proven Expertise in React Native Development", paragraph: "Techanic Infotech brings a wealth of knowledge and proven expertise in React Native application development. Our developers stay ahead of the curve by continually updating their skills to provide cutting-edge solutions." },
  { heading: "Dedicated React Native Developers for Hire", paragraph: "Our team consists of dedicated React Native developers for hire who are committed to building scalable, secure, and engaging mobile applications that drive business success and provide a competitive edge." },
  { heading: "Customized React Native App Solutions", paragraph: "At Techanic Infotech, we understand that each project is unique. That's why we offer customized React Native app solutions that are meticulously crafted to align with your specific business requirements and objectives." },
];

const secondColumnData = [
  { heading: "Agile Development Process", paragraph: "Our React Native development process is agile and transparent, ensuring timely delivery with regular updates. We adapt quickly to changes, ensuring that your project remains on track and within budget." },
  { heading: "Comprehensive React Native Consulting Services", paragraph: "Benefit from our all-inclusive React Native consulting services, where our React Native experts guide you through the entire app development lifecycle, from ideation to deployment and beyond." },
  { heading: "Post-Launch Support and Maintenance", paragraph: "Techanic Infotech stands by its React Native mobile app development long after the launch. We offer ongoing support and maintenance to ensure your application adapts and grows with your business and the latest technology trends." },
];
export const metadata = {
  contentLanguage: "en-us",
  title: "React Native App Development Company – Techanic Infotech",
  description:
    "Techanic Infotech is a leading react native app development company. We build cost-effective, high-performing cross-platform apps for iOS and Android.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/react-native-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "React Native App Development Company – Techanic Infotech",
    description:
      "Techanic Infotech is a leading react native app development company. We build cost-effective, high-performing cross-platform apps for iOS and Android.",
    url: "https://www.techanicinfotech.com/services/react-native-app-development-company",
    
       alt: "Techanic Infotech",
       images: [
        {
          url: "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp", // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Native App Development Company – Techanic Infotech",
    description:
      "Techanic Infotech is a leading react native app development company. We build cost-effective, high-performing cross-platform apps for iOS and Android.",
    handle: "@Techanicinfo",
    image: "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp",
    url: "https://www.techanicinfotech.com/services/react-native-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function ReactNative1() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "ProfessionalService",
              "priceRange" : "$25-$50",
              "name": "React Native App Development Company – Techanic Infotech",
              "url": "https://www.techanicinfotech.com/services/react-native-app-development-company",
              "image": "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp",
              "description": "Techanic Infotech is a leading React Native app development company. We build cost-effective, high-performing cross-platform apps for iOS and Android.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur, Rajasthan, India",
                  "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "302026",
                  "addressCountry": "IN",
                  "telephone": "+91 7222001000"
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",

                  "addressRegion": "New York",
                  "postalCode": "10001",
                  "telephone": "+1 8053364021",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "US"
                  }
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "Dubai",
                  "postalCode": "417213",
                  "telephone": "+971 524981077",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "AE"
                  }
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "Via Giuseppe Mazzini nu. 6, Flat nu 107, Milano 20123",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "Milano",
                  "postalCode": "20123",
                  "telephone": "+39 3517578120",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "IT"
                  }
                }
              ]
            }
          `,
        }}
      />
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Techanic Infotech",
              "image": "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp",
              "@id": "https://www.techanicinfotech.com/services/react-native-app-development-company",
              "url": "https://www.techanicinfotech.com/services/react-native-app-development-company",
              "priceRange": "$25-$50",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar, Jaipur, Rajasthan, India",
                  "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                  "addressRegion": "Rajasthan",
                  "postalCode": "302026",
                  "addressCountry": "IN",
                  "telephone": "+91 7222001000"
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                  "addressRegion": "New York",
                  "postalCode": "10001",
                  "telephone": "+1 8053364021",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "US"
                  }
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "404-F Aspin Commercial Tower, Sheikh Zayed Road, Dubai",
                 "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road, Dubai",

                  "addressRegion": "Dubai",
                  "postalCode": "417213",
                  "telephone": "+971 524981077",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "AE"
                  }
                },
                {
                  "@type" : "PostalAddress",
                  "streetAddress": "Via Giuseppe Mazzini nu. 6, Flat nu 107, Milano 20123",
                   "addressLocality": "Via Giuseppe mazzini nu. 6, flat nu 107 MILANO",
                  "addressRegion": "Milano",
                  "postalCode": "20123",
                  "telephone": "+39 3517578120",
                  "addressCountry" : {
                    "@type" : "Country",
                    "name" : "IT"
                  }
                }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/techanicinfotech/",
                "https://x.com/techanicinfo",
                "https://www.instagram.com/techanic_infotech_/",
                "https://www.linkedin.com/company/techanic-infotech/",
                "https://www.techanicinfotech.com/services/react-native-app-development-company"
              ]
            }
          `,
        }}
      /> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Techanic Infotech",
              "alternateName": "Techanic Infotech",
              "url": "https://www.techanicinfotech.com/services/react-native-app-development-company",
              "logo": "https://www.techanicinfotech.com/OGI/services/react-native-app-development-og.webp",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91 7222001000",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1 8053364021",
                  "contactType": "sales",
                  "areaServed": "US",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+971 524981077",
                  "contactType": "sales",
                  "areaServed": "AE",
                  "availableLanguage": "en"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+39 3517578120",
                  "contactType": "sales",
                  "areaServed": "IT",
                  "availableLanguage": "en"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/techanicinfotech/",
                "https://x.com/techanicinfo",
                "https://www.instagram.com/techanic_infotech_/",
                "https://www.linkedin.com/company/techanic-infotech/",
                "https://www.techanicinfotech.com/services/react-native-app-development-company"
              ]
            }
          `,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "https://schema.org",
              "@id":"https://www.techanicinfotech.com/services/react-native-app-development-company",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why should I choose Techanic InfoTech for my React Native app development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Choosing Techanic InfoTech means you're partnering with a seasoned React Native development company that integrates extensive market research, an agile development process, and the latest React Native technologies. Our commitment to quality, round-the-clock client support, and a steadfast focus on security ensures a top-notch development experience that's tailored to your project's needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much time does it take to develop a React Native app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline for React Native app development can vary widely based on the app's complexity, desired features, and design intricacy. It can range from a couple of months for a straightforward app to over a year for a detailed, custom solution. Techanic InfoTech is known for its efficient development processes, which can significantly shorten this duration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to develop a React Native app?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of React Native app development at Techanic InfoTech is competitive, reflecting the complexity, design specifics, and functionality. While costs can range on average from $15,000 to $100,000, our transparent pricing models are designed to cater to diverse business needs and offer cost-effective solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tools and technologies do you use for React Native app development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Techanic InfoTech utilizes a variety of cutting-edge tools and technologies for React Native app development, including the React Native framework itself, combined with modern development environments and coding practices to deliver efficient, scalable, and robust app solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you assist in launching the React Native app on app stores?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Techanic InfoTech provides comprehensive support in deploying your React Native app to both the Apple App Store and Google Play Store, managing all aspects of the launch process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will Techanic InfoTech sign an NDA to ensure the confidentiality of my project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely, Techanic InfoTech prioritizes the security and privacy of your project. We are ready to sign a Non-Disclosure Agreement (NDA) to protect all project-related information, underscoring our position as a trusted React Native app development agency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I retain the ownership of the source code after my project is completed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upon completion, Techanic InfoTech ensures that the source code and ownership rights are fully transferred to you. We believe in complete transparency and empower you with full control over your application."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of support and maintenance can I expect after the completion of my React Native app project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As a leading provider of React Native app development services, Techanic InfoTech offers extensive post-launch support and maintenance to ensure your app is always up-to-date with the latest features and security protocols."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of hiring models does Techanic InfoTech offer for React Native developers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Techanic InfoTech offers versatile hiring models for our expert React Native developers, which include fixed-cost contracts, dedicated teams, or time and material models, allowing us to accommodate various project sizes and budgets effectively."
                  }
                }
              ]
            }
          `,
        }}
      />

      <FoodDeliveryBanner
        headingPart1="React Native "
        headingPart2="App Development Company "
        spanColor="#0F53FF"
        // heading="E-Commerce Development Company "
        paragraph="Techanic Infotech, empower Your Vision with Premier React Native App Development Services.
        Leverage our expertise as a leading React Native app development company to create high-quality, cross-platform mobile apps that deliver seamless user experiences across iOS and Android."
        bgImage="backgroundImages/ecommerce-app-banner.svg"
        showGif={false}
        btnbg="93.29deg, #2051CC -48.03%, #0F52FF 160.39%"
        btntext="white"
        hovercolor="#ffffff"
        hovertext="black"
        image="/assets/bannerimages/react-native-banner-image.webp"
        textposition="center"
        colorBg="#EBF1F6"
        textcolor="black"
        itemsposition="end"
        fillcolor="black"
        btnContent="View More"
        condition={true}
        width="1000px"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="Modern Mobile App Solutions "
        headingPart2="With React Native App Development "
        paragraph1=" In the rapidly evolving mobile app landscape, React Native stands
        out as an essential tool for developing high-quality, cross-platform
        apps. Techanic Infotech expertly leverages this powerful framework
        to address the rising need for seamless user experiences across both
        Android and iOS platforms. Our commitment to utilizing React
        Native's dynamic capabilities enables us to deliver versatile and
        efficient mobile solutions."
        paragraph2=" At Techanic Infotech, we pride ourselves on our deep expertise in
        React Native app development. Our team of skilled React Native
        developers employs the latest development tools and practices to
        create apps that not only meet but exceed client expectations. By
        choosing Techanic Infotech, you're partnering with a React Native
        development agency that is dedicated to transforming your vision
        into reality with innovative, high-performing mobile apps."
        image="/assets/react-native-app-image.webp"
        solidColor="#EBF1F6"
        showStartWithUS={true}
      />
      <ServicePagesCards
        headingPart1="React Native App "
        headingPart2="Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        textcolor="#0F53FF"
        paragraph="At Techanic InfoTech we are harnessing the power of React native solution development to deliver a range of different solutions that cater to the diverse needs
  of ambitious businesses and startups. That’s what makes us a market leader and how we help you become one."
        techcard={[
          {
 
            image: "/assets/icons/custom-react-native-app-icon.png",
            title: "Custom React Native App Development",
            description:
              "At Techanic Infotech, we specialize in tailoring React Native applications to fit your unique business needs. Our custom app solutions are designed with scalability, performance, and user engagement in mind, ensuring your app stands out in the competitive market.",
          },
          {
 
            image: "/assets/icons/react-native-ui-ux-icon.png",
            title: "React Native UI/UX Design",
            description:
              "Our React Native app design services focus on creating intuitive and engaging user interfaces that enhance user experiences. Techanic Infotech's design team employs the latest design trends and user behavior insights to craft visually appealing and user-friendly apps.",
          },
          {
          
            image: "/assets/icons/react-native-mobile-app-development-icon.png",
            title: "React Native Mobile App Development",
            description:
              "Leverage Techanic Infotech's expertise in React Native mobile app development to build high-performance Android and iOS apps from a single codebase. This approach accelerates development time, reduces costs, and maintains consistent quality across platforms.",
          },
          {
 
            image: "/assets/icons/react-native-widget-development-icon.png",
            title: "React Native Widget and Component Development",
            description:
              "Techanic Infotech offers React Native widget and component development to add advanced functionality and interactivity to your mobile apps. Our custom widgets enhance app performance and user engagement, making your app more versatile and functional.",
          },
          {
 
            image: "/assets/icons/react-native-app-integration-icon.png",
            title: "React Native App Integration",
            description:
              "Our React Native development services include seamless integration of your app with existing systems and third-party services. Techanic Infotech ensures that your React Native app works flawlessly with back-end systems, APIs, and cloud services.",
          },
          {
 
            image: "/assets/icons/enhance-customer-conveneince-icon.png",
            title: "React Native App Maintenance and Support",
            description:
              "Techanic Infotech provides comprehensive React Native app maintenance and support to ensure your app remains up-to-date, secure, and performs at its best. Our ongoing support services include regular updates, bug fixes, performance optimization, and feature enhancements. ",
          },
        ]}
      />

      <CTAButton
        heading="Create React Native Solutions With Us"
        paragraph="Techanic Infotech is a market-leading react native app development agency here to help you."
        btntext="Talk To Us"
        // color1="#4F08C4"
        // color2="#4F08C4"
        // color3="#26045E"
        // color4="#4F08C4"
        backgroundImage="/assets/react-native-cta-banner-image-1.svg"
        textColor="white"
        bgColor="#ffffff"
        text="black"
      />

      <HiringDevelopers
        headingPart1="Hire React Native "
        headingPart2="App Developers In 24 Hours"
        paragraph1="When you're looking to bring your mobile app vision to life, Hire a React Native app developer from Techanic Infotech, a decision that guarantees expertise and efficiency. With over five years of specialized experience in the React Native framework, our developers are not just proficient in the technical aspects, but also deeply understand the nuances of creating engaging, user-centric mobile applications. By choosing our seasoned professionals, you're ensuring that your project is handled with the utmost skill and dedication,
         delivering a product that aligns perfectly with your expectations and business objectives."
        paragraph2="At Techanic Infotech, we recognize the urgency of market demands and the value of your time. That's why we've streamlined our hiring process, allowing you to onboard a skilled React Native developer within 24 hours. Our developers are well-versed in the React Native app solutions ecosystem, bringing with them a wealth of knowledge in cross-platform development, ensuring your app performs flawlessly on any mobile platform. Partner with us, and take the first step towards creating a React Native mobile app that is as fast and responsive as it is
         aesthetically pleasing, all with the convenience and speed your project demands."
        divBtn="#0000ff"
        direction="right"
        color1="#0000ff"
        color2="#001289"
        btntxt="white"
        image="/assets/hire-developers-service-page-image.webp"
      />
      <NativeCards
        showLastFourCards={true}
                      gridClass='grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-6'
        heading="Techanic InfoTech, Your Partner Across Industries"
        paragraph={`We use our React native development services to help businesses across
      different industries achieve their business targets and build digital
      products that make an impact.`}
        bg="#000000"
        text="white"
        cardData = {[
          {
            href: "/solutions/dating-app-development-company",
            icon: "/assets/icons/servicesIcons/dating.png",
            label: "Dating",
          },
          {
            href: "/solutions/salon-app-development-company",
            icon: "/assets/icons/servicesIcons/salon.png",
            label: "Salon",
          },
          {
            href: "/solutions/matrimonial-app-development-company",
            icon: "/assets/icons/servicesIcons/matrimonial.png",
            label: "Matrimonial",
          },
          {
            href: "/solutions/classified-app-development-company",
            icon: "/assets/icons/servicesIcons/classified.png",
            label: "Classified",
          },
          {
            href: "/solutions/education-app-development-company",
            icon: "/assets/icons/servicesIcons/elarning.png",
            label: "E-Learning",
          },
          {
            href: "/solutions/courier-delivery-app-development-company",
            icon: "/assets/icons/servicesIcons/courier.png",
            label: "Courier Delivery",
          },
          {
            href: "/solutions/doctor-on-demand-app-development-company",
            icon: "/assets/icons/servicesIcons/doctor-on-demand.png",
            label: "Doctor On Demand",
          },
        ]}
      />

<Appdev
  mainHeading="Why Choose Techanic Infotech "
  mainHeading1="For React Native App Development"
  spancolor="#0F53FF"
  mainParagraph="Choosing Techanic Infotech for your React Native app development means partnering with a proven leader in the industry. Our extensive experience of over five years has positioned us as the go-to React Native development agency for businesses seeking to create top-tier mobile applications."
  mainParagraph1="With our deep understanding of the React Native framework and commitment to innovation, we deliver not just apps, but comprehensive solutions tailored to meet your strategic goals."
  firstColumnData={firstColumnData}
  secondColumnData={secondColumnData}
/>
      <TechSuccess
        headingPart1="Achieve True "
        headingPart2="Cross-Platform Innovation?"
        paragraph="Hire React Native app developers with Techanic InfoTech who have more than 5 years of experience and over 99 client satisfaction, 
        recognized by top platforms are one of the best in the market. We can turn your idea into reality in no time."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="430"
        p3=" Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#EBF1F6"
      />
      {/* <TechnologiesUsed
        head="React Native App Development, Tech Stack"
        para="To exploit the full potential of the React native framework, we use an industrially approved mobile app development tech stack.
         This helps our team ensure quality and consistency in React native solutions."
        bgColor="#F1F5F9"
      /> */}
      <Languages
        head="React Native App Development, Tech Stack"
        para="To exploit the full potential of the React native framework, we use an industrially approved mobile app development tech stack.
         This helps our team ensure quality and consistency in React native solutions."
        bgColor="#EBF1F6"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/front-end-icon.svg",
            label: "Front-end",
          },
          {
            image: "/assets/icons/backend-icon.svg",
            label: "Back-end",
          },

          {
            image: "/assets/icons/react-native-tools-icon.svg",
            label: "React Native Tools",
          },
          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "UI Kits",
          },
          {
            image: "/assets/icons/testing-icon.svg",
            label: "Test-Automation",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/react-icon.png",
            label: "React",
            section: "Front-end",
          },

          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Front-end",
          },

          {
            image: "/assets/icons/typescript-icon.png",
            label: "TypeScript",
            section: "Front-end",
          },
          {
            image: "/assets/icons/bootstrap-icon.png",
            label: "BootStrap",
            section: "Front-end",
          },

          {
            image: "/assets/icons/rest-api-icon.png",
            label: "Rest API",
            section: "Back-end",
          },
          // { image: djImg, label: "django", section: "Back-end" },
          {
            image: "/assets/icons/graphql-icon.png",
            label: "Graph QL",
            section: "Back-end",
          },
          {
            image: "/assets/icons/apollo-graphql-icon.png",
            label: "Apollographql",
            section: "Back-end",
          },

          {
            image: "/assets/icons/expo-icon.png",
            label: "Expo",
            section: "React Native Tools",
          },
          {
            image: "/assets/icons/react-navigation-icon.png",
            label: "React Navigation",
            section: "React Native Tools",
          },

          {
            image: "/assets/icons/redux-sauce-icon.png",
            label: "Reduxsauce",
            section: "React Native Tools",
          },
          {
            image: "/assets/icons/reactotron-icon.png",
            label: "Reactotron",
            section: "React Native Tools",
          },
          {
            image: "/assets/icons/nativebase-icon.png",
            label: "Nativebase",
            section: "UI Kits",
          },
          {
            image: "/assets/icons/igniteui-icon.png",
            label: "Ignite UI",
            section: "UI Kits",
          },

          {
            image: "/assets/icons/react-native-elements-icon.png",
            label: "React Native Elements",
            section: "UI Kits",
          },
          {
            image: "/assets/icons/ui-kitten-icon.png",
            label: "UI kitten",
            section: "UI Kits",
          },

          {
            image: "/assets/icons/detox-icon.png",
            label: "Detox",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/jest-icon.png",
            label: "Jest",
            section: "Test-Automation",
          },
          {
            image: "/assets/icons/enzyme-icon.png",
            label: "Enzyme",
            section: "Test-Automation",
          },
        ]}
      />
      <AppDevelop
        headingPart1="React App "
        headingPart2="Development Process  "
        paragraph="We follow a well-planned mobile app Development process,
           helping us maintain collaborative channels and transparency with clients."
        image1="/assets/icons/idea-validation-icon.png"
        h1="Conceptualization and Planning"
        p1="Our React native experts start by defining app objectives and planning the development roadmap."
        image2="/assets/icons/design-prototype-icon.png"
        h2=" UI/UX Design"
        p2="React native app design is all about crafting intuitive and engaging user interfaces and experiences."
        image3="/assets/icons/development-testing-icon.png"
        h3="Development"
        p3="With that done, our skilled React native app developers writes clean, efficient code for robust app functionality."
        image4="/assets/icons/market-research-icon.png"
        h4="Quality Assurance"
        p4="After development, it’s time for rigorous testing to ensure the app's performance and reliability."
        image5="/assets/icons/launch-deployment-icon.png"
        h5="Deployment"
        p5="This step of native app development is about Launching the app on the appropriate mobile platforms."
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Maintenance and Updates"
        p6="Even after finishing React Native project, we provide ongoing support to keep the app up-to-date and efficient."
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Conceptualization and Planning",
            description:
              "Our React native experts start by defining app objectives and planning the development roadmap.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "React native app design is all about crafting intuitive and engaging user interfaces and experiences.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Development",
            description:
              "With that done, our skilled React native app developers write clean, efficient code for robust app functionality.",
          },
          {
            image: "/assets/icons/market-research-icon.png",
            title: "Quality Assurance",
            description:
              "After development, it’s time for rigorous testing to ensure the app's performance and reliability.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Deployment",
            description:
              "This step of native app development is about launching the app on the appropriate mobile platforms.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Maintenance and Updates",
            description:
              "Even after finishing the React Native project, we provide ongoing support to keep the app up-to-date and efficient.",
          },
        ]}
        align="center"
      />
      <ServicePagesCards
        headingPart1="Expert React Native App Developers, "
        headingPart2="Empowering Businesses & Users"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        textcolor="#0F53FF"
        paragraph="With a team filled with React native developers, Techanic Infotech is helping brands deliver value to their end users in a modern and personalized way."
        techcard={[
          {
 
            image:
              "/assets/icons/servicesIcons/cross-platform-compatibility-icon.png",
            title: "Cross-Platform Compatibility",
            description:
              "React Native enables the development of apps for both Android app development and iOS app development from a single codebase, reducing development time and costs while ensuring a consistent user experience.",
          },
          {
 
            image: "/assets/icons/servicesIcons/time-to-market-icon.png",
            title: "Faster Development and Time-to-Market",
            description:
              "With its hot reload feature and a vast library of pre-built components, React Native accelerates the app development process, enabling businesses to launch their apps faster and capitalize on market opportunities promptly.",
          },
          {
          
            image: "/assets/icons/servicesIcons/high-performence-icon.png",
            title: "High Performance",
            description:
              "React Native apps are compiled into native code, which ensures optimal performance on both Android and iOS devices. This results in smooth animations and transitions, as well as responsive interfaces that provide users with an experience that rivals native apps.",
          },
          {
 
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost Efficiency",
            description:
              "Businesses benefit from the cost-effective nature of React Native app development, as it eliminates the need for separate iOS and Android development teams, thereby saving on manpower and resources.",
          },
          {
 
            image: "/assets/icons/enhanced-operational-efficiency-icon.png",
            title: "Live Updates and CodePush",
            description:
              "React Native's support for live updates allows developers to push updates directly to users' devices without going through the app store update cycle, ensuring that users always have the latest version of the app without any downtime.",
          },
          {
 
            image: "/assets/icons/enhance-customer-conveneince-icon.png",
            title: "Community and Support",
            description:
              "Being an open-source framework, React Native has a strong community of developers who contribute to its extensive library of tools, documentation, and third-party plugins, which facilitates continuous improvement and support for businesses.",
          },
        ]}
        bgcolor="#EBF1F6"
      />
      {/* <LanguagesCards
        heading="Expert React Native App Developers, Empowering Businesses & Users"
        paragraph="With a team filled with React native developers, Techanic Infotech is helping brands deliver value to their end users in a modern and personalized way."
        techcard={[
          {
            image: "icons/cross-platform-compatibility.png",
            title: "Cross-Platform Compatibility",
            description:
              "React Native enables the development of apps for both Android app development and iOS app development from a single codebase, reducing development time and costs while ensuring a consistent user experience.",
          },
          {
            image: "icons/faster-time-to-market.png",
            title: "Faster Development and Time-to-Market",
            description:
              "With its hot reload feature and a vast library of pre-built components, React Native accelerates the app development process, enabling businesses to launch their apps faster and capitalize on market opportunities promptly.",
          },
          {
            image: "icons/high-performence.png",
            title: "High Performance",
            description:
              "React Native apps are compiled into native code, which ensures optimal performance on both Android and iOS devices. This results in smooth animations and transitions, as well as responsive interfaces that provide users with an experience that rivals native apps.",
          },
          {
            image: "icons/cost-efficiency.png",
            title: "Cost Efficiency",
            description:
              "Businesses benefit from the cost-effective nature of React Native app development, as it eliminates the need for separate iOS and Android development teams, thereby saving on manpower and resources.",
          },
          {
            image: "icons/live-updates-codepush.png",
            title: "Live Updates and CodePush",
            description:
              "React Native's support for live updates allows developers to push updates directly to users' devices without going through the app store update cycle, ensuring that users always have the latest version of the app without any downtime.",
          },
          {
            image: "icons/strong-community-support.png",
            title: "Community and Support",
            description:
              "Being an open-source framework, React Native has a strong community of developers who contribute to its extensive library of tools, documentation, and third-party plugins, which facilitates continuous improvement and support for businesses.",
          },
        ]}
        position="center"
        bgcolor="#eeeeee"
        cardBG="ffffff"
        color="1434A4"
        showExtraCards={false}
        radius="8"
        height="450px"
      /> */}

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common and frequently asked questions about React native development services. "
        questions={[
          "Q1: Why should I choose Techanic InfoTech for my React Native app development?",
          "Q2: How much time does it take to develop a React Native app?",
          "Q3: How much does it cost to develop a React Native app?",
          "Q4: What tools and technologies do you use for React Native app development?",
          "Q5: Do assistance in launching the React Native app on app stores?",
          "Q6: Will Techanic InfoTech sign an NDA to ensure the confidentiality of my project?",
          "Q7: Do I retain the ownership of the source code after my project is completed?",
          "Q8: What kind of support and maintenance can I expect after the completion of my React Native app project?",
          "Q9: What types of hiring models does Techanic InfoTech offer for React Native developers?",
        ]}
        answers={[
          "A1: Choosing Techanic InfoTech means you're partnering with a seasoned React Native development company that integrates extensive market research, an agile development process, and the latest React Native technologies. Our commitment to quality, round-the-clock client support, and a steadfast focus on security ensures a top-notch development experience that's tailored to your project's needs.",
          "A2: The timeline react native app solutions to be completed can vary widely based on the app's complexity, desired features, and design intricacy. It can range from a couple of months for a straightforward app to over a year for a detailed, custom solution. Techanic InfoTech is known for its efficient development processes, which can significantly shorten this duration.",
          "A3: The cost of React Native app development at Techanic InfoTech is competitive, reflecting the complexity, design specifics, and functionality. While costs can range on average from $15,000 to $100,000, our transparent pricing models are designed to cater to diverse business needs and offer cost-effective solutions.",
          "A4: Techanic InfoTech utilizes a variety of cutting-edge tools and technologies for React Native app development, including the React Native framework itself, combined with modern development environments and coding practices to deliver efficient, scalable, and robust app solutions.",
          "A5: Yes, Techanic InfoTech provides comprehensive support in deploying your React Native app to both the Apple App Store and Google Play Store, managing all aspects of the launch process.",
          "A6: Absolutely, Techanic InfoTech prioritizes the security and privacy of your project. We are ready to sign a Non-Disclosure Agreement (NDA) to protect all project-related information, underscoring our position as a trusted React Native app development agency.",
          "A7: Upon completion, Techanic InfoTech ensures that the source code and ownership rights are fully transferred to you. We believe in complete transparency and empower you with full control over your application.",
          "A8: As a leading provider of React Native app development services, Techanic InfoTech offers extensive post-launch support and maintenance to ensure your app is always up-to-date with the latest features and security protocols.",
          "A9: Techanic InfoTech offers versatile hiring models for our expert React Native developers, which include fixed-cost contracts, dedicated teams, or time and material models, allowing us to accommodate various project sizes and budgets effectively.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What Our Clients Say ?"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
