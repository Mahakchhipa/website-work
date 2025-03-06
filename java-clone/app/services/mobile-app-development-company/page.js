import OurClients from "@/components/clients/page";

import TechSuccess from "@/lib/colab/techSuccess";
import WebPages from "@/lib/webFields/webpages";
import Experts from "@/lib/secondpage/dev";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";
import ViewFirstSection from "@/lib/secondpage/development/frontSection";
import TechStack from "@/lib/secondpage/development/techstack";
import AndroidDev from "@/lib/secondpage/mobileApp/androiddev";
 
import LanguagesCards from "@/lib/secondpage/mobileApp/languageCards";

import Ratings from "@/lib/reviews/reviews";

import Weblanguages from "@/components/weblanguages";

import Startwithussection2 from "@/components/getStarted/startwithussection2";
import ContactInfo from "@/components/formSection/contactInfo";
import ClientTestimonials from "@/lib/clientsReviews/clients";
import FoodDeliveryBanner from "@/components/FoodDeliveryBanner";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import CTAButtonDevelopment from "@/components/getStarted/CTABUttonDevelopment";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
export const metadata = {
  contentLanguage: "en-us",
  title: "Mobile App Development Company | Hire App Developers",
  description:
    "Looking for a leading mobile app development company? Techanic Infotech develops feature-rich apps for Android and iOS platforms. Hire app developers now.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/mobile-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Mobile App Development Company | Hire App Developers",
    description:
      "Looking for a leading mobile app development company? Techanic Infotech develops feature-rich apps for Android and iOS platforms. Hire app developers now.",
    url: "https://www.techanicinfotech.com/services/mobile-app-development-company",
    images: [
      {
        url: 'https://www.techanicinfotech.com/OGI/services/mobile-app-development-og.webp', // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ]
  },

  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Mobile App Development Company | Hire App Developers",
    description:
      "Looking for a leading mobile app development company? Techanic Infotech develops feature-rich apps for Android and iOS platforms. Hire app developers now.",
      images: [
        {
          url: 'https://www.techanicinfotech.com/OGI/services/mobile-app-development-og.webp', // Must be an absolute URL
          width: 1200,
          height: 630,
        },
      ]
  },
  robots: "index, follow",

};

export default function MobileApp() {
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
            "name": "Mobile App Development Company | Hire App Developers",
            "url": "https://www.techanicinfotech.com/services/mobile-app-development-company",
            "image": "https://www.techanicinfotech.com/OGI/services/mobile-app-development-og.webp",
            "description": "Looking for a leading mobile app development company? Techanic Infotech develops feature-rich apps for Android and iOS platforms. Hire app developers now.",
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
            "image": "https://www.techanicinfotech.com/OGI/services/mobile-app-development-og.webp",
            "@id": "https://www.techanicinfotech.com/services/mobile-app-development-company",
            "url": "https://www.techanicinfotech.com/services/mobile-app-development-company",
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
              "https://www.techanicinfotech.com/services/mobile-app-development-company"
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
            "url": "https://www.techanicinfotech.com/services/mobile-app-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/services/mobile-app-development-og.webp",
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
              "https://www.techanicinfotech.com/services/mobile-app-development-company"
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
            "@id":"https://www.techanicinfotech.com/services/mobile-app-development-company",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the cost of developing a mobile app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of mobile app development varies depending on complexity, platform, and features. Techanic Infotech offers competitive pricing and transparent quotes tailored to your specific needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sign a Non-Disclosure Agreement (NDA)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we prioritize your confidentiality. Techanic Infotech is committed to security and will sign an NDA to protect your app idea and data."
                }
              },
              {
                "@type": "Question",
                "name": "Which platforms do you develop apps for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We develop apps for all major platforms, including iOS, Android, and cross-platform solutions utilizing Flutter, React Native, Xamarin, and more."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with app store submission?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, our team handles the entire app store submission process, ensuring that your app complies with all the guidelines for a smooth launch."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you specialize in for app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic Infotech has extensive experience across industries like eCommerce, healthcare, fintech, travel, and more, providing specialized app solutions for each sector."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a mobile app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Development time may vary. We follow an agile development process to deliver quality apps in the most efficient timeframe, typically ranging from a few weeks to several months."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide maintenance and support after app deployment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer ongoing support and maintenance services to ensure your app remains up-to-date and performs optimally post-launch."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the quality of the app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our quality assurance process includes rigorous testing phases to ensure the app is secure, user-friendly, and bug-free before it goes live."
                }
              },
              {
                "@type": "Question",
                "name": "Can you assist with app design and user experience?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our UI/UX design experts create intuitive and engaging designs that ensure a seamless user experience."
                }
              },
              {
                "@type": "Question",
                "name": "What is your app development methodology?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We employ a systematic approach that includes ideation, strategy, design, development, quality assurance, deployment, and maintenance for a comprehensive development lifecycle."
                }
              }
            ]
          }
        `,
        }}
      />
      <FoodDeliveryBanner
        headingPart1="Mobile App"
        headingPart2="Development Company "
        // heading="E-Commerce Development Company "
        paragraph="Transform your vision into reality with Techanic InfoTech, a leading mobile app development company. We specialize in crafting seamless, robust, and scalable mobile experiences that drive growth and engage users. Elevate your business with our bespoke mobile app solutions."
        bgImage="backgroundImages/ecommerce-app-banner.svg"
        showGif={false}
        showBorder={true}
        border="white"
        btntext="white"
        hovercolor="#ffffff"
        hovertext="black"
        image="/assets/bannerimages/mobile-app.webp"
        textposition="center"
        gradient="188.56deg, #05060A 6.54%, #384370 149.45%"
        textcolor="white"
        itemsposition="end"
        fillcolor="white"
        btnContent="Contact Us"
      />

      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <ServicePagesCards
        headingPart1="Versatile Mobile "
        headingPart2="App Development Services"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph="Discover a spectrum of mobile app development services designed to empower your business. At Techanic InfoTech, we blend innovation with functionality to deliver outstanding mobile applications."
        techcard={[
          {
 
            image: "/assets/icons/android-icon.png",
            title: "Android App Development",
            description:
              "Techanic InfoTech excels in Android app development, delivering custom apps that excel in performance and user experience. Our apps leverage the full potential of the Android platform to cater to a global audience.",
          },
          {
 
            image: "/assets/icons/ios-icon.png",
            title: "iOS App Development",
            description:
              "Our iOS app development services combine sleek design with powerful features. We build high-quality iPhone and iPad apps that meet the high standards of the Apple ecosystem and its users.",
          },
          {
          
            image: "/assets/icons/kotlin-icon.png",
            title: " Kotlin App Development",
            description:
              "Kotlin app development at Techanic InfoTech means modern, concise, and safe apps. We harness the power of Kotlin to offer Android apps that are both robust and maintainable.",
          },
          {
 
            image: "/assets/icons/flutter-icon.png",
            title: "Flutter App Development",
            description:
              "Embrace cross-platform excellence with our Flutter app development services. We craft visually stunning and natively compiled applications for both Android and iOS from a single codebase.",
          },
          {
 
            image: "/assets/icons/xamarin-icon.png",
            title: "Xamarin App Development",
            description:
              "Techanic InfoTech’s Xamarin app development services are focused on delivering native-like experiences with the benefits of cross-platform development, ensuring compatibility and performance.",
          },
          {
 
            image: "/assets/icons/react-icon.png",
            title: " React Native App Development",
            description:
              "With React Native app development, we provide an efficient and scalable solution to build mobile apps that feel native on both Android and iOS platforms, speeding up the development process without sacrificing quality.",
          },
        ]}
      />
      <ExpertsDev
        heading="Custom Mobile App Development"
        paragraph="Start your journey with tailor-made mobile applications. Our dedicated mobile app developers bring precision, innovation, and performance to every project."
        isGradientPage={false}
        showBorder={true}
        border="white"
        backColor="#000000"
        color="FDBEC0"
        image="/assets/mobile-app-cta-image-1.webp"
        text="Customize Now"
        btnbg="#ffffff"
        initialcolor="white"
        btntext="white"
        textColor="white"
        hovercolor="#ffffff"
        hovertext="black"
        justifyImage="end"
      />

      <TechSuccess
        headingPart1="Develop "
        headingPart2="With The Best"
        paragraph="Join forces with the best mobile app development company to stay ahead in the competitive digital arena. From native mobile app development to cross-platform solutions, we ensure your app thrives on every device and platform. Experience the blend of aesthetics and functionality with our mobile app designing and development prowess."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
      />

      <AndroidDev />
      <Ratings
        heading="Best Recognized By The Best"
        paragraph="Techanic InfoTech is recognized as the best mobile app development company in the industry by top tech critiques and platforms. "
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
      <Languages
        head="Leading-Edge Technology Stack"
        para="Our mobile app developers are fluent in the language of innovation, utilizing the latest mobile app development frameworks and tools. From iOS and Android app development to Flutter and hybrid solutions, our tech stack is designed to propel your mobile app to the forefront of the industry."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/front-end-icon.svg",
            label: "Languages",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Databases",
          },
          {
            image: "/assets/icons/testing-icon.svg",
            label: "Testing Tools",
          },
          {
            image: "/assets/icons/api-icon.png",
            label: "APIs",
            flipIcon: "/assets/icons/api.png",
          },
          {
            image: "/assets/icons/cloud-environment-icon.png",
            label: "Cloud Services",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular",
            section: "Languages",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective C",
            section: "Languages",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Languages",
          },
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Languages",
          },

          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Languages",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Back-end",
          },

          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Back-end",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Languages",
          },

          {
            image: "/assets/icons/firebase-icon.png",
            label: "Firebase",
            section: "Databases",
          },
          {
            image: "/assets/icons/sqlite-icon.png",
            label: "SQLite",
            section: "Databases",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Databases",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Databases",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "Postgre SQL",
            section: "Databases",
          },

          {
            image: "/assets/icons/oracle-icon.png",
            label: "Oracle",
            section: "Databases",
          },
          {
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud",
            section: "Cloud Services",
          },

          {
            image: "/assets/icons/rest-api-icon.png",
            label: "REST API",
            section: "APIs",
          },
          {
            image: "/assets/icons/graphql-icon.png",
            label: "GraphQL",
            section: "APIs",
          },
          {
            image: "/assets/icons/soap-icon.png",
            label: "SOAP",
            section: "APIs",
          },
          {
            image: "/assets/icons/keychain-api-icon.png",
            label: "Keychain API",
            section: "APIs",
          },

          {
            image: "/assets/icons/finger-print-api-icon.png",
            label: "Fingerprint API",
            section: "APIs",
          },
          {
            image: "/assets/icons/apiary-icon.png",
            label: "Apiary",
            section: "APIs",
          },
          {
            image: "/assets/icons/heroku-icon.png",
            label: "Heroku",
            section: "Cloud Services",
          },
          {
            image: "/assets/icons/aws-icon.png",
            label: "AWS",
            section: "Cloud Services",
          },
          {
            image: "/assets/icons/azure-icon.png",
            label: "Azure",
            section: "Cloud Services",
          },
          {
            image: "/assets/icons/selenium-icon.png",
            label: "Selenium",
            section: "Testing Tools",
          },
          {
            image: "/assets/icons/apache-jmeter-icon.png",
            label: "Apache JMeter",
            section: "Testing Tools",
          },
          {
            image: "/assets/icons/appium-icon.png",
            label: "Appium",
            section: "Testing Tools",
          },
          {
            image: "/assets/icons/jest-icon.png",
            label: "Jest",
            section: "Testing Tools",
          },
          {
            image: "/assets/icons/mocha-icon.png",
            label: "Mocha",
            section: "Testing Tools",
          },
        ]}
      />
      {/* <TechStack
        heading="Leading-Edge Technology Stack"
        paragraph="Our mobile app developers are fluent in the language of innovation, utilizing the latest mobile app development frameworks and tools. From iOS and Android app development to Flutter and hybrid solutions, our tech stack is designed to propel your mobile app to the forefront of the industry."
      /> */}

      <AppDevelop
        headingPart1="Streamlined App"
        headingPart2="Development Process"
        paragraph="Our strategic app development process is designed to deliver excellence. Every step is tailored to foster innovation and ensure your app's success."
        image1="/assets/icons/idea-validation-icon.png"
        h1="Ideation & Strategy"
        p1="We begin by defining the app's concept, purpose, and strategy to align with your business objectives."
        image2="/assets/icons/design-prototype-icon.png"
        h2="UI/UX Design"
        p2="Our team designs intuitive and engaging user interfaces and experiences, ensuring your app is accessible and user-friendly."
        image3="/assets/icons/development-testing-icon.png"
        h3="Development"
        p3="Expert developers bring the design to life with robust coding, ensuring seamless functionality across platforms."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance"
        p4="Comprehensive testing is conducted to ensure the app is reliable, secure, and bug-free before launch."
        image5="/assets/icons/launch-deployment-icon.png"
        h5="Deployment"
        p5="We assist in the app's launch, managing deployment to app stores and ensuring compliance with platform guidelines.
        "
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Support & Maintenance"
        p6="Post-launch, we offer ongoing support and maintenance to adapt to user feedback and evolving market needs.
        "
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Ideation & Strategy",
            description:
              "We begin by defining the app's concept, purpose, and strategy to align with your business objectives.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "Our team designs intuitive and engaging user interfaces and experiences, ensuring your app is accessible and user-friendly.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Development",
            description:
              "Expert developers bring the design to life with robust coding, ensuring seamless functionality across platforms.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Comprehensive testing is conducted to ensure the app is reliable, secure, and bug-free before launch.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Deployment",
            description:
              "We assist in the app's launch, managing deployment to app stores and ensuring compliance with platform guidelines.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Support & Maintenance",
            description:
              "Post-launch, we offer ongoing support and maintenance to adapt to user feedback and evolving market needs.",
          },
        ]}
        align="center"
      />
      <CTAButtonDevelopment
        heading="Comprehensive Mobile App Consultancy Services"
        paragraph="Plan your app's success with Techanic InfoTech's expert consultancy. Navigate the mobile app industry with our strategic insights and integrated approach."
        useBackgroundImage={true}
        backimage="/assets/mobile-app-cta-banner-image.png"
        image="/assets/mobile-app-cta-image-2.webp"
        textColor="white"
        buttonColor="#ffffff"
      />

      <WebPages
        heading="Industry-Specific App Development"
        paragraph="We create bespoke mobile applications tailored to diverse industry needs. Our expertise extends across sectors, ensuring your app resonates with your target audience."
        p1="Boost your sales with our custom eCommerce and retail apps, designed for an exceptional shopping experience and customer engagement."
        p2="Enhance your restaurant's reach and streamline orders with a personalized app that caters to the dynamic food industry."
        p3="Captivate audiences with a media and entertainment app that offers immersive content and interactive features."
        p4="Simplify property listings and client engagement with a real estate app that offers virtual tours and comprehensive databases."
        p5="Our healthcare apps prioritize patient care with features for appointment scheduling, telemedicine, and health tracking."
        p6="Streamline educational processes with a school management app that facilitates communication, scheduling, and e-learning."
        p7="Optimize your logistics with an app that enhances route planning, tracking, and the delivery experience."
        p8="Secure and innovate financiahttps://www.google.com/chrome/l services with a fintech app designed for user-friendly experiences in banking and investments."
        p9="Transform travel experiences with an app that simplifies bookings, provides local insights, and offers 24/7 customer service."
      />

      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Got any questions? Here are some important Frequently asked questions and their answeres. "
        questions={[
          "Q1: What is the cost of developing a mobile app?",
          "Q2: Do you sign a Non-Disclosure Agreement (NDA)?",
          "Q3: Which platforms do you develop apps for?",
          "Q4:  Can you help with app store submission?",
          "Q5: What industries do you specialize in for app development?",
          "Q6: How long does it take to develop a mobile app?",
          "Q7:  Do you provide maintenance and support after app deployment?",
          "Q8: How do you ensure the quality of the app?",
          "Q9: Can you assist with app design and user experience?",
          "Q10: What is your app development methodology?",
        ]}
        answers={[
          "A1:    The cost of mobile app development varies depending on complexity, platform, and features. Techanic InfoTech offers competitive pricing and transparent quotes tailored to your specific needs.",
          "A2:  Yes, we prioritize your confidentiality. Techanic InfoTech is committed to security and will sign an NDA to protect your app idea and data.",
          "A3:    We develop apps for all major platforms, including iOS, Android, and cross-platform solutions utilizing Flutter, React Native, Xamarin, and more.",
          "A4:    Absolutely, our team handles the entire app store submission process, ensuring that your app complies with all the guidelines for a smooth launch.",
          "A5:  Techanic InfoTech has extensive experience across industries like eCommerce, healthcare, fintech, travel, and more, providing specialized app solutions for each sector.",
          "A6:  Development time can vary. We follow an agile development process to deliver quality apps in the most efficient timeframe, typically ranging from a few weeks to several months.",
          "A7: We offer ongoing support and maintenance services to ensure your app remains up-to-date and performs optimally post-launch.",
          "A8: Our quality assurance process includes rigorous testing phases to ensure the app is secure, user-friendly, and bug-free before it goes live.",
          "A9: Yes, our UI/UX design experts create intuitive and engaging designs that ensure a seamless user experience.",
          "A10: We employ a systematic approach that includes ideation, strategy, design, development, quality assurance, deployment, and maintenance for a comprehensive development lifecycle.",
        ]}
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
