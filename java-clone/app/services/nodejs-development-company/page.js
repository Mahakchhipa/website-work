import OurClients from "@/components/clients/page";
 

import Experts from "@/lib/secondpage/dev";
import HiringDevs from "@/lib/secondpage/hireDev";
import NativeCards from "@/lib/secondpage/nativeapp/nativecards";
import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import TechSuccess from "@/lib/colab/techSuccess";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import BannerImage from "@/components/BannerImage";
import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";
import Weblanguages from "@/components/weblanguages";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";
import CTAButton from "@/components/getStarted/CTAButton";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const firstColumnData = [
  {
    heading: "Expert Development Team",
    paragraph:
      "Our team of NodeJS experts is equipped with deep industry knowledge and technical expertise to tackle even the most complex challenges, ensuring a high-quality outcome for every project.",
  },
  {
    heading: "Proven Track Record",
    paragraph:
      "Techanic Infotech boasts a proven track record of successful NodeJS development solutions, reflecting our ability to deliver solutions that consistently exceed client expectations.",
  },
  {
    heading: "Customer-Centric Approach",
    paragraph:
      "We take the time to understand your business, enabling us to offer personalized services that are tailored to your specific needs and goals.",
  },
];

const secondColumnData = [
  {
    heading: "Agile and Adaptive",
    paragraph:
      "Our agile development process allows us to adapt quickly to changes and deliver functional increments promptly, keeping your NodeJS development project on schedule.",
  },
  {
    heading: "Comprehensive Support",
    paragraph:
      "From ideation to launch and beyond, we offer comprehensive support and maintenance, ensuring your NodeJS applications remain up-to-date and perform at their best.",
  },
  {
    heading: "Future-Ready Solutions",
    paragraph:
      "We leverage the latest tools and technologies to build solutions that are not just relevant for today but are also adaptable to the technological advancements of tomorrow.",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "NodeJS Development Company | NodeJS Development Services",
  description:
    "Techanic Infotech is the best NodeJS development company offering NodeJS development services to build real-time, secure and scalable NodeJS apps.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/nodejs-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "NodeJS Development Company | NodeJS Development Services",
    description:
      "Techanic Infotech is the best NodeJS development company offering NodeJS development services to build real-time, secure and scalable NodeJS apps.",
    url: "https://www.techanicinfotech.com/services/nodejs-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/nodejs-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "NodeJS Development Company | NodeJS Development Services",
    description:
      "Techanic Infotech is the best NodeJS development company offering NodeJS development services to build real-time, secure and scalable NodeJS apps.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/nodejs-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function NodeJS() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            "priceRange": "$25-$50",
            "name": "NodeJS Development Company | NodeJS Development Services",
            "url": "https://www.techanicinfotech.com/services/nodejs-development-company",
            "image": "https://www.techanicinfotech.com/OGI/services/nodejs-development-og.webp",
            "description": "Techanic Infotech is the best NodeJS development company offering NodeJS development services to build real-time, secure and scalable NodeJS apps.",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur, Rajasthan, India",
                "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                "addressRegion": "Rajasthan",
                     "postalCode": "302026",
                "addressCountry": "IN",
                "telephone": "+91 7222001000"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                "addressRegion": "New York",
                "postalCode": "10001",
                "telephone": "+1 8053364021",
                "addressCountry": {
                  "@type": "Country",
                  "name": "US"
                }
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
                "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
                "addressRegion": "DUBAI",
                "postalCode": "417213",
                "telephone": "+971 524981077",
                "addressCountry": {
                  "@type": "Country",
                  "name": "UAE"
                }
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO 20123 ITALY",
                "addressLocality": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO",
                "addressRegion": "MILANO",
                "postalCode": "20123",
                "telephone": "+39 3517578120",
                "addressCountry": {
                  "@type": "Country",
                  "name": "Italy"
                }
              }
            ]
          }
        `,
        }}
      />
      {/* LocalBusiness Schema */}
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Techanic Infotech",
            "image": "https://www.techanicinfotech.com/OGI/services/nodejs-development-og.webp",
            "@id": "https://www.techanicinfotech.com/services/nodejs-development-company",
            "url": "https://www.techanicinfotech.com/services/nodejs-development-company",
            "priceRange": "$25-$50",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur, Rajasthan, India",
                "addressLocality": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur",
                "addressRegion": "Rajasthan",
                     "postalCode": "302026",
                "addressCountry": "IN",
                "telephone": "+91 7222001000"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                "addressLocality": "224 W 35th St Ste 500 #2215 New York, NY 10001",
                "addressRegion": "New York",
                "postalCode": "10001",
                "telephone": "+1 8053364021",
                "addressCountry": {
                  "@type": "Country",
                  "name": "US"
                }
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
                "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
                "addressRegion": "DUBAI",
                "postalCode": "417213",
                "telephone": "+971 524981077",
                "addressCountry": {
                  "@type": "Country",
                  "name": "AE"
                }
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO 20123 ITALY",
                "addressLocality": "Via Giuseppe mazzini nu. 6 ,flat nu 107 MILANO",
                "addressRegion": "MILANO",
                "postalCode": "20123",
                "telephone": "+39 3517578120",
                "addressCountry": {
                  "@type": "Country",
                  "name": "IT"
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
              "https://www.techanicinfotech.com/services/nodejs-development-company"
            ]
          }
        `,
        }}
      /> */}
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Techanic Infotech",
            "alternateName": "Techanic Infotech",
            "url": "https://www.techanicinfotech.com/services/nodejs-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/services/nodejs-development-og.webp",
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
              "https://www.techanicinfotech.com/services/nodejs-development-company"
            ]
          }
        `,
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@id":"https://www.techanicinfotech.com/services/nodejs-development-company",
            "@type": "FAQPage",
            "@id": "https://www.techanicinfotech.com/services/nodejs-development-company",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What hiring models do you offer for NodeJS development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flexible hiring models to suit your project's needs, including full-time, part-time, and project-based engagements. Our aim is to provide you with the expertise you need in the most cost-effective manner."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the cost-effectiveness of a NodeJS solution?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NodeJS development solutions are inherently cost-effective due to its efficient use of system resources, which reduces server costs. At Techanic Infotech, we further enhance cost efficiency by employing reusable code and robust libraries to decrease development time."
                }
              },
              {
                "@type": "Question",
                "name": "Why should we choose Techanic Infotech for NodeJS development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic Infotech offers a unique blend of expert NodeJS developers, a customer-centric approach, and a track record of delivering successful, scalable solutions. We ensure that your NodeJS investment yields the best possible returns."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sign NDAs for NodeJS development projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we prioritize your confidentiality. An NDA is a standard part of our engagement process to ensure your intellectual property and project details are fully protected."
                }
              },
              {
                "@type": "Question",
                "name": "What industries can benefit from NodeJS development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NodeJS website and apps are versatile and can benefit a range of industries including, but not limited to, e-commerce, real estate, entertainment, travel, and healthcare due to its ability to handle data-intensive tasks effectively."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide maintenance and support post NodeJS development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, as a renowned Node.JS development company, our commitment to our clients extends beyond development. We offer comprehensive maintenance and support services to ensure your NodeJS applications remain up-to-date and operate flawlessly."
                }
              },
              {
                "@type": "Question",
                "name": "What makes NodeJS a preferred technology for startups to enterprises?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NodeJS is scalable, efficient, and allows for rapid development and deployment, which is crucial for startups. Its robustness and capability to handle large-scale applications also make it ideal for enterprise-level solutions."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle project management for NodeJS development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a custom NodeJS web development company, our project management approach is agile and transparent. We use the latest tools and methodologies to ensure that communication is clear and that milestones are met on schedule."
                }
              },
              {
                "@type": "Question",
                "name": "Is NodeJS suitable for developing eCommerce applications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, NodeJS web development services are a great choice for developing eCommerce applications due to its ability to handle high volumes of transactions and provide real-time responses."
                }
              },
              {
                "@type": "Question",
                "name": "What if I need to scale my NodeJS application in the future?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NodeJS applications are built to be scalable. We – being a top Node.JS development agency - use best practices to ensure that your application can grow with your business, handling increased load and complexity without a hitch."
                }
              }
            ]
          }
        `,
        }}
      />
      <BannerImage
        headingPart1="NodeJS "
        headingPart2="Development Company"
        paragraph="Welcome to Techanic Infotech, a leading NodeJS Development 
        Company dedicated to crafting high-performance,
         scalable, and feature-rich Node.js websites and applications.Our team of expert developers leverages the full potential of Node.js to deliver custom solutions that meet your unique business needs."
        mobileBackground="/assets/bannerimages/nodejs-development-mobile-banner-image.webp"
        bgImage="/assets/bannerimages/nodejs-development-banner-image.webp"
        btnContent="Contact Us"
        textColor1="white"
        btnbg="#ffffff"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1="The Future "
        headingPart2="Is NodeJS"
        paragraph1={`NodeJS has emerged as a game-changer in the world of web development, heralding a new era of real-time, data-intensive, and scalable applications. Its non-blocking, event-driven architecture makes it an ideal choice for applications that require high throughput and low latency. As the digital landscape evolves,NodeJS is positioned at the forefront, 
        empowering developers to build more efficient and robust web solutions.`}
        paragraph2="At Techanic Infotech, we recognize the transformative potential of NodeJS and are committed to leveraging its capabilities to propel our clients' projects forward. Our expert team of NodeJS developers harnesses the power of this cutting-edge technology to create dynamic, feature-rich applications that not only meet the current demands of users but are also future-ready. Partnering with us mean stapping 
        into the full potential of NodeJS to drive innovation and achieve sustainable growth.."
        image="/assets/nodejs-development-section-image.webp"
      />
      <CTAButton
        btntext="Let’s Get Started"
        heading="Hire NodeJS Developers"
        backgroundImage="/assets/nodejs-cta-vector-banner-image.svg"
        bgColor="#ffffff"
        paragraph="Find the expertise you need to elevate your project. Hire top-tier NodeJS developers from Techanic Infotech today"
      />
      <ServicePagesCards
        headingPart1="Our "
        headingPart2="NodeJS Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`Our suite of NodeJS services is designed to cater to a wide range of business requirements, ensuring you have the tools and expertise necessary to navigate the digital world. With Techanic Infotech, you gain access to top-tier NodeJS development services that guarantee quality, innovation, and performance.`}
        techcard={[
          {
            image:
              "/assets/icons/servicesIcons/nodejs-web-development-icon.png",
            title: "NodeJS Web Development",
            description:
              "Experience seamless and scalable web solutions with our NodeJS Web Development service. We focus on delivering high-performance websites that cater to your business needs while ensuring rapid development and deployment.",
          },
          {
            image: "/assets/icons/custom-android-app-development-icon.png",
            title: "NodeJS Application Development",
            description:
              "Our NodeJS Application Development service is all about creating robust and feature-packed server-side applications. We build scalable and efficient applications that are tailored to meet the complex demands of your business.",
          },
          {
            image: "/assets/icons/servicesIcons/nodejs-consulting-icon.png",
            title: "NodeJS Consulting",
            description:
              "Navigate the NodeJS landscape with our expert consulting services. Our knowledgeable consultants provide insights and strategies to optimize your NodeJS projects, ensuring best practices are followed for maximum efficiency.",
          },
          {
            image:
              "/assets/icons/servicesIcons/custom-nodejs-development-icon.png",
            title: "Custom NodeJS Development",
            description:
              "Bring your unique ideas to life with our Custom NodeJS Development service. We develop bespoke solutions that align perfectly with your business goals, offering unparalleled flexibility and functionality. ",
          },
          {
            image: "/assets/icons/servicesIcons/nodejs-migration-icon.png",
            title: "NodeJS Migration and Upgrade Services",
            description:
              "Stay up-to-date with the latest in NodeJS with our Migration and Upgrade services. We provide seamless transition strategies for your existing applications to the newest NodeJS environment without compromising on functionality or data integrity.",
          },
          {
            image:
              "/assets/icons/servicesIcons/nodejs-api-development-icon.png",
            title: "NodeJS API Development",
            description:
              "Our NodeJS API Development service ensures your applications are connected and communicative. We create secure, scalable, and maintainable APIs that facilitate seamless integration with other services and applications.",
          },
          {
            image:
              "/assets/icons/servicesIcons/nodejs-plugin-development-icon.png",
            title: "NodeJS Plugin Development",
            description:
              "Extend the functionality of your NodeJS applications with our Plugin Development service. Our team crafts custom plugins that enhance performance, add new features, and ensure greater scalability.",
          },
          {
            image:
              "/assets/icons/servicesIcons/nodejs-microservices-development-icon.png",
            title: "NodeJS Microservices Development",
            description:
              "Adopt a modern architectural approach with our NodeJS Microservices Development service. We build resilient, independently deployable microservices that contribute to a more organized and efficient application structure.",
          },
          {
            image:
              "/assets/icons/servicesIcons/nodejs-ecommerce-development-icon.png",
            title: "NodeJS eCommerce Development",
            description:
              "Elevate your online store with our NodeJS eCommerce Development service. We construct swift, secure, and scalable eCommerce platforms that provide a smooth shopping experience to your customers and easy management tools for you.",
          },
        ]}
        bgcolor="#f8f8f8"
        cardBG="ffffff"
        color="008000"
        showExtraCards={true}
        radius="8"
        position="start"
        height="500px"
      />
      {/* background: linear-gradient(105.72deg, rgba(85, 158, 89, 0.55) 18%, rgba(122, 202, 203, 0.55) 119.11%); */}

      <ExpertsDev
        heading="Explore Our NodeJS Services"
        paragraph="Dive into our comprehensive NodeJS development services. From custom development to consulting, we've got you covered."
text="Let’s Get Started"
        btnbg="#ffffff"
        isGradientPage={true}
        gradient="105.72deg, rgba(85, 158, 89, 0.55) 18%, rgba(122, 202, 203, 0.55) 119.11%"
        image="/assets/nodejs-development-cta-image.webp"
        justifyImage="center"
      />
      <ServicePagesCards
        headingPart1="Benefits Of Choosing "
        headingPart2="NodeJS For Your Company"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        cardType={false}
        paragraph={`Opting for NodeJS presents a multitude of advantages for businesses aiming to stay competitive and agile in the digital age. NodeJS is renowned for its speed, efficiency, and scalability, making it a stellar choice for companies looking to innovate and grow.`}
        techcard={[
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Enhanced Performance and Scalability",
            description:
              "NodeJS operates on a non-blocking I/O model, which significantly boosts performance and scalability, allowing businesses to handle a vast number of simultaneous connections with ease.",
          },
          {
            image: "/assets/icons/servicesIcons/time-to-market-icon.png",
            title: "Faster Time-to-Market",
            description:
              "The simplicity and efficiency of NodeJS mean developers can expedite the development process, resulting in a quicker time-to-market for your applications and services.",
          },
          {
            image: "/assets/icons/servicesIcons/rich-ecosystem-icon.png",
            title: "Rich Ecosystem",
            description:
              "Leveraging NodeJS gives you access to an expansive ecosystem of open-source libraries via npm, ensuring that developers have all the resources they need to build comprehensive solutions.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost-Effective Solutions",
            description:
              "NodeJS can reduce overall development costs due to its efficient use of system resources and the ability to handle multiple requests on a single thread, minimizing server costs and resource consumption.",
          },
          {
            image: "/assets/icons/real-time-analytics-data-icon.png",
            title: "Real-Time Data Processing",
            description:
              "NodeJS is ideal for applications that require real-time data processing, such as chat applications and online gaming, due to its event-driven architecture and WebSocket support.",
          },
          {
            image: "/assets/icons/strong-community-support-icon.png",
            title: "Strong Corporate Support",
            description:
              "NodeJS enjoys robust support from a large community and corporations, providing a stable foundation for building long-term projects with confidence in the technology's longevity and reliability.",
          },
        ]}
      />

      <HiringDevelopers
        headingPart1="Hire "
        headingPart2="NodeJS Developers"
        paragraph1="Unlock the full potential of your web presence with our dedicated NodeJS developers.
         At Techanic Infotech, our developers are not just code experts; they are innovators with a 
         knack for crafting scalable, high-performance solutions that power leading-edge web experiences."
        paragraph2="When you hire our NodeJS professionals, you're getting more than just development expertise.
         You're getting a commitment to excellence, a passion for technology,and a partner who understands the 
         importance of delivering on time and with in budget. Our developers integrate seamlessly into your projects,
          ensuring asmooth development process from conception to launch."
        listData={[
          "Expert Coders",
          "Agile Methodology",
          "Timely Delivery",
          "Cost-Effective",
        ]}
        btntxt="white"
        image="/assets/hire-developers-service-page-image.webp"
      />
      <NativeCards
        showLastFourCards={true}
                      gridClass='grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-6'
        bg="#000000"
        text="white"
        heading="Type of Android Apps We Develop"
        paragraph={`In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor.`}
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
        mainHeading="Why Choose Techanic Infotech"
        mainParagraph="At Techanic Infotech, we don't just build applications—we build partnerships that foster growth and success. Our commitment to excellence and innovation is evident in every project we undertake. With a focus on modern technologies and customer satisfaction, we ensure that our NodeJS solutions are not only cutting-edge but also strategically aligned with your business objectives to deliver tangible results."
        mainParagraph1="Contact us today to learn more about how we can help elevate your business with our NodeJS solutions!"
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <TechSuccess
        headingPart1=" Get A "
        headingPart2="Free Consultation"
        paragraph="Ready to start your NodeJS project? Contact us now for a free consultation. 
        Discover how our tailored NodeJS development solutions can transform your ideas into reality, 
        ensuring a seamless user experience and cutting-edge performance for your web applications."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#EFF3FF"
      />
      {/* <TechnologiesUsed
        head="Our NodeJS Tech Stack"
        para="At Techanic Infotech, we harness a wide array of modern technologies
         and tools to bring our NodeJS projects to life. Our tech stack is carefully
          chosen to ensure robustness, scalability, and performance, featuring the latest
           in Node.js frameworks,databases,front-end technologies, and development tools."
      /> */}
      <Languages
        head="Our NodeJS Tech Stack"
        para="At Techanic Infotech, we harness a wide array of modern technologies and tools to bring our NodeJS projects to life. Our tech stack is carefully chosen to ensure robustness, scalability, and performance, featuring the latest in Node.js frameworks, databases, front-end technologies, and development tools.
        "
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/front-end-icon.svg",
            label: "Frontend",
          },
          {
            image: "/assets/icons/languages-icon.svg",
            label: "Languages",
          },
          {
            image: "/assets/icons/testing-icon.svg",
            label: "Testing",
          },
          {
            image: "/assets/icons/frameworks-icon.png",
            label: "Frameworks",
          },
          {
            image: "/assets/icons/library-icon.png",
            label: "Libraries",
          },
        ]}
        languages={[
          // Frontend
          {
            image: "/assets/icons/bootstrap-icon.png",
            label: "Bootstrap",
            section: "Frontend",
          },
          {
            image: "/assets/icons/html-icon.png",
            label: "HTML 5",
            section: "Frontend",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular.JS",
            section: "Frontend",
          },
          {
            image: "/assets/icons/css-icon.png",
            label: "CSS3",
            section: "Frontend",
          },
          {
            image: "/assets/icons/vue-js-icon.png",
            label: "Vue.JS",
            section: "Frontend",
          },
          {
            image: "/assets/icons/jquery-icon.png",
            label: "jQuery",
            section: "Frontend",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React.JS",
            section: "Frontend",
          },

          // Languages
          {
            image: "/assets/icons/typescript-icon.png",
            label: "Typescript",
            section: "Languages",
          },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Languages",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "NodeJS",
            section: "Languages",
          },
          {
            image: "/assets/icons/ecma-icon.png",
            label: "ECMA",
            section: "Languages",
          },

          // Testing
          {
            image: "/assets/icons/supertest-icon.png",
            label: "Supertest",
            section: "Testing",
          },
          {
            image: "/assets/icons/sinon-icon.png",
            label: "Sinon",
            section: "Testing",
          },
          {
            image: "/assets/icons/chai-icon.png",
            label: "Chai",
            section: "Testing",
          },
          { image: "/assets/icons/ava-icon.png", label: "Ava", section: "Testing" },
          {
            image: "/assets/icons/jasmine-icon.png",
            label: "Jasmin",
            section: "Testing",
          },
          {
            image: "/assets/icons/mocha-icon.png",
            label: "Mocha",
            section: "Testing",
          },

          // Frameworks
          {
            image: "/assets/icons/socket.io-icon.png",
            label: "Socket.io",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/axios-icon.png",
            label: "Axios",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/koa-icon.png",
            label: "Koa.js",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/webpack-icon.png",
            label: "Webpack",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/express-js-icon.png",
            label: "Express.js",
            section: "Frameworks",
          },

          // Libraries
          {
            image: "/assets/icons/react-router-icon.png",
            label: "React-Router",
            section: "Libraries",
          },
          {
            image: "/assets/icons/redux-sauce-icon.png",
            label: "Redux",
            section: "Libraries",
          },
          {
            image: "/assets/icons/git-icon.png",
            label: "Git",
            section: "Libraries",
          },
          {
            image: "/assets/icons/c3-icon.png",
            label: "C3.Js",
            section: "Libraries",
          },
          {
            image: "/assets/icons/lodash-icon.png",
            label: "Lodash",
            section: "Libraries",
          },
        ]}

      />

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Got questions about NodeJS development? We've got answers!Check out our FAQs to learn more."
        questions={[
          "Q1: What hiring models do you offer for NodeJS development?",
          "Q2: How do you ensure the cost-effectiveness of a NodeJS solution?",
          "Q3: Why should we choose Techanic Infotech for NodeJS development?",
          "Q4: Do you sign NDAs for NodeJS development projects?",
          "Q5: What industries can benefit from NcodeJS development?",
          "Q6: Can you provide maintenance and support post NodeJS development?",
          "Q7: What makes NodeJS a preferred technology for startups to enterprises?",
          "Q8: How do you handle project management for NodeJS development?",
          "Q9: Is NodeJS suitable for developing eCommerce applications?",
          "Q10: What if I need to scale my NodeJS application in the future?",
        ]}
        answers={[
          "A1: We offer flexible hiring models to suit your project's needs, including full-time, part-time, and project-based engagements. Our aim is to provide you with the expertise you need in the most cost-effective manner.",
          "A2: NodeJS development solutions are inherently cost-effective due to its efficient use of system resources, which reduces server costs. At Techanic Infotech, we further enhance cost efficiency by employing reusable code and robust libraries to decrease development time.",
          "A3: Techanic Infotech offers a unique blend of expert NodeJS developers, a customer-centric approach, and a track record of delivering successful, scalable solutions. We ensure that your NodeJS investment yields the best possible returns.",
          "A4: Yes, we prioritize your confidentiality. An NDA is a standard part of our engagement process to ensure your intellectual property and project details are fully protected.",
          "A5: NodeJS website and apps are versatile and can benefit a range of industries including, but not limited to, e-commerce, real estate, entertainment, travel, and healthcare due to its ability to handle data-intensive tasks effectively.",
          "A6: Absolutely, as an renowned Node.JS development company, our commitment to our clients extends beyond development. We offer comprehensive maintenance and support services to ensure your NodeJS applications remain up-to-date and operate flawlessly.",
          "A7: NodeJS is scalable, efficient, and allows for rapid development and deployment, which is crucial for startups. Its robustness and capability to handle large-scale applications also make it ideal for enterprise-level solutions.",
          "A8: As custom NodeJS web development company, our project management approach is agile and transparent. We use the latest tools and methodologies to ensure that communication is clear and that milestones are met on schedule.",
          "A9: Yes, NodeJS web development services are a great choice for developing eCommerce applications due to its ability to handle high volumes of transactions and provide real-time responses.",
          "A10: NodeJS applications are built to be scalable. We – being a top Node.JS development agency - use best practices to ensure that your application can grow with your business, handling increased load and complexity without a hitch.",
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
