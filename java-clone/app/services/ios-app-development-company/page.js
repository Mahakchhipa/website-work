import OurClients from "@/components/clients/page";

import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";

import TechSuccess from "@/lib/colab/techSuccess";

import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import OurBlogs from "@/lib/clientsReviews/blogs";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import NativeCards from "@/lib/secondpage/nativeapp/nativecards";

import VectorBanner from "@/components/VectorBanner";
// import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";

import Weblanguages from "@/components/weblanguages";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTAButton from "@/components/getStarted/CTAButton";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const firstColumnData = [
  {
    heading: "Expert iOS Developers",
    paragraph:
      "Want to hire iOS app developers? Our team consists of expert iOS app developers who are adept in the latest technologies and methodologies, ensuring your app is built on a foundation of excellence and innovation. Their deep expertise enables us to tackle complex challenges.",
  },
  {
    heading: "Customized Solutions",
    paragraph:
      "At Techanic Infotech, we understand that each project is unique. We specialize in custom iOS app development, tailoring every aspect of the app to meet your specific business needs and objectives, ensuring a product that's not only functional but also aligns perfectly with your vision.",
  },
  {
    heading: "Agile Methodology",
    paragraph:
      "We employ agile development practices to ensure flexibility, transparency, and rapid delivery. This approach allows us to adapt to changes quickly, keep you informed at every stage, and bring your iOS app to market faster without compromising on quality.",
  },
];

const secondColumnData = [
  {
    heading: "End-to-End Services",
    paragraph:
      "From ideation to launch and beyond, we offer comprehensive iOS app development services. This includes market analysis, design, development, testing, deployment, and post-launch support, providing a complete ecosystem for your app's success.",
  },
  {
    heading: "Quality Assurance",
    paragraph:
      "Quality is at the core of our ethos. Our rigorous testing and QA processes ensure that your iOS app is reliable, secure, and meets the highest standards of performance, providing an exceptional user experience on all Apple devices.",
  },
  {
    heading: "Client-Centric Approach",
    paragraph:
      "We pride ourselves on our client-centric approach, prioritizing your needs and maintaining open lines of communication throughout the development process. This ensures that the final product not only meets but exceeds your expectations, driving growth and success for your business.",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "iOS App Development Company | Hire iOS App Developers",
  description:
    "Techanic Infotech is a leading iOS app development company. We offer top-notch iOS application development services to build high-quality iOS applications.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/ios-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "iOS App Development Company | Hire iOS App Developers",
    description:
      "Techanic Infotech is a leading iOS app development company. We offer top-notch iOS application development services to build high-quality iOS applications.",
    url: "https://www.techanicinfotech.com/services/ios-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/ios-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "iOS App Development Company | Hire iOS App Developers",
    description:
      "Techanic Infotech is a leading iOS app development company. We offer top-notch iOS application development services to build high-quality iOS applications.",
      images: [
        {
          url: "https://www.techanicinfotech.com/OGI/services/ios-app-development-og.webp", // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ],
  },
  robots: "index, follow",
};

export default function IOSdev() {
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
            "name": "ios App Development Company | Hire ios App Developers",
            "url": "https://www.techanicinfotech.com/services/ios-app-development-company",
            "image": "https://www.techanicinfotech.com/OGI/services/ios-app-development-og.webp",
            "description": "Techanic Infotech is a leading flutter app development company. We provide scalable and highly functional flutter apps with expert flutter app developers.",
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
      {/* <script
      async
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Techanic Infotech",
            "image": "https://www.techanicinfotech.com/OGI/services/ios-app-development-og.webp",
            "@id": "https://www.techanicinfotech.com/services/ios-app-development-company",
            "url": "https://www.techanicinfotech.com/services/ios-app-development-company",
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
              "https://www.techanicinfotech.com/services/ios-app-development-company"
            ]
          }
        `
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
            "url": "https://www.techanicinfotech.com/services/ios-app-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/services/ios-app-development-og.webp",
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
              "https://www.techanicinfotech.com/services/ios-app-development-company"
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
            "@id":"https://www.techanicinfotech.com/services/ios-app-development-company",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why should I choose Techanic InfoTech for my iOS app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic InfoTech is dedicated to delivering a superior iOS app development experience, emphasizing market research, agile processes, modern technology, and cost-effective maintenance. Our commitment to quality, round-the-clock support, and stringent security measures ensures a service that's custom-tailored to your project's needs."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop an iOS app with Techanic InfoTech?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The development time for an iOS app at Techanic InfoTech varies based on complexity and features, typically ranging from a few weeks for basic apps to several months for intricate, custom solutions. Our efficient processes aim to save time without compromising on quality."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of developing an iOS app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of iOS app development at Techanic InfoTech is competitive, reflecting the app's complexity, design, and functionalities. We offer transparent pricing models starting from $10,000 to $50,000, designed to accommodate diverse business requirements and budgets."
                }
              },
              {
                "@type": "Question",
                "name": "What tools and technologies do you use for iOS app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At Techanic InfoTech, we use state-of-the-art tools and technologies, including Kotlin, Java, iOS Studio, and cross-platform frameworks like ios and React Native, to deliver modern, efficient, and scalable app solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Does Techanic InfoTech assist in uploading iOS apps to the App Store?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we guide you through the entire App Store submission process, from setting up your developer account to managing your app's listing and submission."
                }
              },
              {
                "@type": "Question",
                "name": "Will Techanic InfoTech sign an NDA for my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize your confidentiality and are ready to sign an NDA, ensuring that your project ideas and information remain secure with us."
                }
              },
              {
                "@type": "Question",
                "name": "Do I get the source code of my project after completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upon project completion, Techanic InfoTech hands over the source code and ownership to you, providing full control over your application."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of post-launch support and maintenance do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide extensive post-launch support and maintenance services to ensure that your app stays updated with the latest iOS changes, features, and security protocols."
                }
              },
              {
                "@type": "Question",
                "name": "What hiring models are available for iOS developers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic InfoTech offers versatile hiring models for iOS developers, including fixed-cost, dedicated teams, and time & material-based models, adaptable to your project's scale and budgetary needs."
                }
              }
            ]
          }
        `,
        }}
      />

      {/* <EwalletImgRotate
        heading="IOS App Development Company"
        paragraph="Elevate your digital presence with Techanic InfoTech's iOS app development services. Experience
         be spoke solutions that blend innovation with functionality, tailored to give your business a competitive edge.
         Unlock the full potential of your ideas with our expert iOS app developers. Start your journey towards a seamless, robust, and intuitive iOS app that stands out in the App Store with Techanic InfoTech."
        bgImage="backgroundImages/ios-frame-banner.png"
        textposition="center"
        contentposition="center"
        text="View More"
        justifyContent="between"
        // color1="#5F9EA0"
        // color2="black"
        textColor1="white"
        btntextcolor="black"
        btnbg="B0B0B0"
        gif="contentImages/ios-banner-logo.png"
      /> */}
      <VectorBanner
        headingPart1="IOS App "
        headingPart2="Development Company"
        spanColor="#0F53FF"
        paragraph="Elevate your digital presence with Techanic InfoTech's iOS app development services. Experience
         be spoke solutions that blend innovation with functionality, tailored to give your business a competitive edge.
         Unlock the full potential of your ideas with our expert iOS app developers. Start your journey towards a seamless, robust, and intuitive iOS app that stands out in the App Store with Techanic InfoTech."
        btnContent="View More"
        vectorImage="/assets/bannerimages/ios-vector-banner.svg"
        image="/assets/bannerimages/ios-devlopment.webp"
        imagewidth="600px"
        justifyimage="center"
        itemsposition="center"
        showBorder={false}
        solidColor="#0F53FF"
        btntext="white"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <NativeApp1
        headingPart1=" The Power Of "
        headingPart2="IOS App Development"
        paragraph1={`iOS stands as a cornerstone of mobile technology, powering a vast array of Apple devices with its robust, 
        user-friendly operating system. Esteemed for its secure architecture and intuitive design, iOS facilitates a seamless 
        experience for iPhone and iPad users worldwide, making it a pivotal platform for app development. iOS mobile application
         development services are crucial for businesses aiming to tap into the affluent Apple user base, offering tailored solutions
          that leverage the platform's advanced features and capabilities.`}
        paragraph2="Techanic Infotech emerges as a premier iOS app development company, specializing in crafting be spoke
         iPhone app development services that cater to the unique needs of its clients. With a team of expert iOS app developers,
          Techanic Infotech delivers iOS application development services that not only meet but exceed client expectations. By 
          focusing on custom iOS app development, the iOS app development firm ensures that each application is optimized for performance,
         security, and user engagement, thereby empowering businesses to achieve their digital objectives effectively."
        image="/assets/ios-native-app-developer-image.webp"
        showStartWithUS={false}
        isGradient={true}
        bgcolor="108.7deg, rgba(217, 231, 252, 0.55) 4.7%, rgba(180, 201, 232, 0.55) 62.64%"
      />

      <ServicePagesCards
        headingPart1="iOS App "
        headingPart2="Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`At Techanic Infotech, we offer a comprehensive suite of iOS app development services designed to navigate the intricacies of the iOS platform, delivering cutting-edge applications that stand out in the App Store. Our commitment to excellence and innovation positions us as a leading iOS development company.`}
        techcard={[
          {
 
            image: "/assets/icons/servicesIcons/custom-ios-app-icon.png",
            title: "Custom iOS App Development",
            description:
              "Tailoring solutions to fit unique business needs, our custom iOS app development is at the forefront of innovation. We harness the latest iOS features to create bespoke apps that offer unparalleled functionality, and user experience, setting new standards in the iOS app development domain.",
          },
          {
 
            image: "/assets/icons/servicesIcons/ios-app-design-icon.png",
            title: "iOS App Design",
            description:
              "Aesthetics meets functionality in our iOS app design services. With a focus on intuitive user interfaces and engaging user experiences, our iPhone app development company crafts visually stunning and easy-to-navigate apps, ensuring it adhere to Apple's design principles.",
          },
          {
          
            image: "/assets/icons/servicesIcons/ipad-app-development-icon.png",
            title: "iPad App Development",
            description:
              "Expanding digital landscapes with our iPad app development, we leverage the larger screen and powerful capabilities of iPads to deliver apps that excel in performance and user engagement. Our iPad app development services are tailored to exploit the device's unique features.",
          },
          {
 
            image:
              "/assets/icons/servicesIcons/ios-application-testing-icon.png",
            title: "iOS Application Testing & QA",
            description:
              "Quality assurance is paramount in our iOS application development services. We employ rigorous testing methodologies to ensure that every iOS app we develop is bug-free, performs flawlessly across all Apple devices, and meets the highest standards of quality and reliability.",
          },
          {
 
            image:
              "/assets/icons/servicesIcons/ios-application-integration-icon.png",
            title: "iOS Application Integration",
            description:
              "Integrating your iOS app with existing systems and third-party services is a key aspect of our development process. Our iOS app development solutions include seamless integration capabilities, ensuring your app works harmoniously with social media, and enterprise software.",
          },
          {
 
            image: "/assets/icons/enhance-customer-conveneince-icon.png",
            title: "Maintenance & Support",
            description:
              "Post-launch, our iOS app development service continues with comprehensive maintenance and support. We monitor app performance, address any emerging issues, and roll out updates to ensure your app remains current with the latest iOS features and security standards. ",
          },
        ]}
      />

      <CTAButton
        heading="Start Your IOS Journey Today"
        paragraph="Ready to transform your vision into a standout iOS app?
         Contact Techanic Infotech now and take the first step towards digital excellence."
        backgroundImage="/assets/ios-cta-banner-image.webp"
        btntext="Talk To Us"
        bgColor="#0F53FF"
        text="white"
      />
      <HiringDevelopers
        headingPart1="Hire IOS App "
        headingPart2="Developers In 24 Hours"
        paragraph1="In the rapidly evolving digital landscape, the ability to swiftly 
        scale your development team can be a game-changer for your project's success. 
        Techanic Infotech stands out by offering an unparalleled service: the opportunity
         to hire expert iOS app developers within 24 hours. This swift onboarding process 
         ensures that your project maintains momentum, with no time
         wasted in lengthy hiring procedures, making it ideal for projects with tight deadlines
          or those requiring immediate attention."
        paragraph2="Our team of iOS app developers is not only skilled in the latest technologies
         and development practices but is also trained to seamlessly integrate
         into existing projects, ensuring a smooth transition and immediate productivity.
          Opting for Techanic Infotech's rapid hiring process means choosing a path of least
           resistance to innovation and quality, ensuring that your iOS app development is in capable
            hands from the get-go, and keeping your project on track toward its strategic goals."
        image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <NativeCards
        showLastFourCards={true}
                      gridClass='grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-6'
        heading="  IOS Innovation Across Industries"
        paragraph={` What makes us a leading app development agency in the market is our dedication to delivering 
        innovative iOS app development solutions  throughout different industries, enabling businesses, start-ups, and enterprises to grow.`}
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
        mainHeading="Choose Techanic InfoTech For Your Next iOS App Development Project"
        mainParagraph="Choosing Techanic Infotech as your iOS app development company means partnering with a leader in the field of digital innovation and app creation. Our commitment to excellence, combined with a deep understanding of the iOS ecosystem, positions us uniquely to transform your ideas into reality."
        mainParagraph1="With Techanic Infotech, you're not just hiring a service provider; you're gaining a partner dedicated to pushing the boundaries of what's possible in iOS application development solutions."
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <TechSuccess
        headingPart1="Elevate Your "
        headingPart2="Business With Techanic Infotech"
        paragraph="Looking to make an impact in the App Store? Partner with Techanic Infotech –
         the best iOS software development company, for unparalleled iOS app development services.
         Let's build something remarkable together—reach out today to explore how we can elevate your business."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3=" Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      {/* <TechStack
        heading="IOS App Development Tech Stack"
        paragraph={` As a market-leading iOS mobile application development company, 
        our expert developers only use the best mobile app tech stack to<br/> create IOS
         mobile apps that perform well in the market.`}
      /> */}
      <Languages
        head="IOS App Development Tech Stack"
        para="As a market-leading iOS mobile application development company,our expert developers only use the best mobile app tech stack to  create IOS mobile apps that perform well in the market."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/languages-icon.svg",
            label: "Programming Languages",
          },
          {
            image: "/assets/icons/frameworks-icon.png",
            label: "Frameworks",
          },
          {
            image: "/assets/icons/cms-label-icon.png",
            label: "CMS",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Databases",
          },
          {
            image: "/assets/icons/toolkit-icon.png",
            label: "Tools",
          },
          {
            image: "/assets/icons/deployment-icon.svg",
            label: "Deployment",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective-C",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/flutter-icon.png",
            label: "ios",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React Native",
            section: "Programming Languages",
          },

          {
            image: "/assets/icons/ionic-icon.png",
            label: "Ionic",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/apple-ui-kit-icon.png",
            label: "Apple UI Kit",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/core-ml-icon.png",
            label: "Core ML",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/core-audio-icon.png",
            label: "Core Audio",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/core-data-icon.png",
            label: "Core Data",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/ar-kit-icon.png",
            label: "ARKit",
            section: "Frameworks",
          },

          {
            image: "/assets/icons/contentful-icon.png",
            label: "Contentful",
            section: "CMS",
          },
          {
            image: "/assets/icons/shopify-icon.png",
            label: "Shopify",
            section: "CMS",
          },
          {
            image: "/assets/icons/wordpress-icon.png",
            label: "WordPress",
            section: "CMS",
          },
          {
            image: "/assets/icons/big-commerce-icon.png",
            label: "BigCommerce",
            section: "CMS",
          },
          {
            image: "/assets/icons/strapi-icon.png",
            label: "Strapi",
            section: "CMS",
          },
          {
            image: "/assets/icons/prismic-icon.png",
            label: "Prismic",
            section: "CMS",
          },

          {
            image: "/assets/icons/sqlite-icon.png",
            label: "SQLite",
            section: "Databases",
          },
          {
            image: "/assets/icons/rest-kit-icon.png",
            label: "Rest Kit",
            section: "Databases",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Databases",
          },
          {
            image: "/assets/icons/core-data-icon.png",
            label: "Core Data",
            section: "Databases",
          },
          {
            image: "/assets/icons/firebase-icon.png",
            label: "Firebase",
            section: "Databases",
          },

          {
            image: "/assets/icons/test-flight-icon.png",
            label: "TestFlight",
            section: "Tools",
          },
          { image: "/assets/icons/ga4-icon.png", label: "GA4", section: "Tools" },
          {
            image: "/assets/icons/apple-xcode-icon.png",
            label: "Xcode",
            section: "Tools",
          },

          {
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud",
            section: "Deployment",
          },
          {
            image: "/assets/icons/aws-icon.png",
            label: "AWS",
            section: "Deployment",
          },
          {
            image: "/assets/icons/imgix-icon.png",
            label: "ImgIX",
            section: "Deployment",
          },
          {
            image: "/assets/icons/vercel-icon.png",
            label: "Vercel",
            section: "Deployment",
          },
          {
            image: "/assets/icons/digital-ocean-icon.png",
            label: "DigitalOcean",
            section: "Deployment",
          },
        ]}
      />

      <AppDevelop
        headingPart1="IOS App "
        headingPart2="Development Process"
        paragraph=" Our expert iOS app developers go through the planned mobile app development process,
         helping us ensure the quality of our solution along with transparency."
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Conceptualization and Planning",
            description:
              "We start by understanding your vision, goals, and user needs to lay a solid foundation for the app.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design & User Experience",
            description:
              "Our team crafts intuitive designs and user experiences, focusing on usability and aesthetics to engage users.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Development & Coding",
            description:
              "Utilizing the latest iOS technologies, we build your app with clean, efficient code tailored to your specific requirements.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Testing & Quality Assurance",
            description:
              "Rigorous testing ensures your app is reliable, bug-free, and performs seamlessly across all targeted devices.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Deployment & Launch",
            description:
              "After ensuring compliance with App Store guidelines, we manage the submission process, leading to the successful launch of your app.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Maintenance and Support",
            description:
              "Post-launch, we provide ongoing support and updates, keeping your app current with the latest iOS features and security standards.",
          },
        ]}
      />
      <ServicePagesCards
        headingPart1="Benefits of Our iOS App "
        headingPart2="Development Services for Businesses & Their Users"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`As one of the best iOS app development firms in the industry, we believe in enabling ambitious
  businesses to deliver limitless value to their end-user while also skyrocketing growth for themselves.`}
        techcard={[
          {
 
            image: "/assets/icons/increased-market-research-icon.png",
            title: "Increased Reach & Engagement",
            description:
              "Our iOS app development solutions help businesses tap into the vast, affluent Apple user base, increasing reach and user engagement.",
          },
          {
 
            image: "/assets/icons/brand-reputation-building.png",
            title: "Enhanced Brand Recognition",
            description:
              "A bespoke iOS app acts as a direct channel to consumers, boosting brand visibility and recognition in a competitive digital marketplace.",
          },
          {
          
            image: "/assets/icons/customer-relationship-management.png",
            title: "Improved Customer Loyalty",
            description:
              "Custom iOS apps provide a personalized user experience, fostering customer loyalty and encouraging repeat business.",
          },
          {
 
            image: "/assets/icons/enhanced-user-experience-icon.png",
            title: "Intuitive User Experiences",
            description:
              "Users enjoy intuitive and seamless app experiences, thanks to our focus on user-centric design and usability in iOS app development.",
          },
          {
 
            image: "/assets/icons/robust-security-icon.png",
            title: "Reliability & Security",
            description:
              "Our rigorous testing and adherence to Apple’s guidelines ensure that apps are reliable, secure, and protect user data.",
          },
          {
 
            image: "/assets/icons/customizable-features-icon.png",
            title: "Access to Innovative Features",
            description:
              "Leveraging the latest iOS technologies, we deliver apps that offer innovative features and functionalities, enhancing the overall user experience.",
          },
        ]}
        position="center"
        cardBG="ffffff"
        bgcolor="#eeeeee"
        color="000000"
        showExtraCards={false}
        radius="20"
        height="380px"
      />

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common FAQs about iOS app development services."
        questions={[
          "Q1: Why should I choose Techanic InfoTech for my iOS app development?",
          "Q2: How long does it take to develop an iOS app with Techanic InfoTech?",
          "Q3: What is the cost of developing an iOS app?",
          "Q4: What tools and technologies do you use for iOS app development?",
          "Q5: Does Techanic InfoTech assist in uploading iOS apps to the App Store?",
          "Q6: Will Techanic InfoTech sign an NDA for my project?",
          "Q7: Do I get the source code of my project after completion?",
          "Q8: What kind of post-launch support and maintenance do you offer?",
          "Q9: What hiring models are available for iOS developers?",
        ]}
        answers={[
          "A1: Techanic InfoTech is dedicated to delivering a superior iOS app development experience, emphasizing market research, agile processes, modern technology, and cost-effective maintenance. Our commitment to quality, round-the-clock support, and stringent security measures ensures a service that's custom-tailored to your project's needs.",
          "A2: The development time for an iOS app at Techanic InfoTech varies based on complexity and features, typically ranging from a few weeks for basic apps to several months for intricate, custom solutions. Our efficient processes aim to save time without compromising on quality.",
          "A3: The cost of iOS app development at Techanic InfoTech is competitive, reflecting the app's complexity, design, and functionalities. We offer transparent pricing models starting from $10,000 to $50,000, designed to accommodate diverse business requirements and budgets.",
          "A4: At Techanic InfoTech, we use state-of-the-art tools and technologies, including Kotlin, Java, iOS Studio, and cross-platform frameworks like ios and React Native, to deliver modern, efficient, and scalable app solutions.",
          "A5: Yes, we guide you through the entire App Store submission process, from setting up your developer account to managing your app's listing and submission.",
          "A6: We prioritize your confidentiality and are ready to sign an NDA, ensuring that your project ideas and information remain secure with us.",
          "A7: Upon project completion, Techanic InfoTech hands over the source code and ownership to you, providing full control over your application.",
          "A8: We provide extensive post-launch support and maintenance services to ensure that your app stays updated with the latest iOS changes, features, and security protocols.",
          "A9: Techanic InfoTech offers versatile hiring models for iOS developers, including fixed-cost, dedicated teams, and time & material-based models, adaptable to your project's scale and budgetary needs.",
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
