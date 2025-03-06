import OurClients from "@/components/clients/page";
import ClientTestimonials from "@/lib/clientsReviews/clients";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import NativeCards from "@/lib/secondpage/nativeapp/nativecards";
import Appdev from "@/lib/secondpage/nativeapp/Appdev";
import TechSuccess from "@/lib/colab/techSuccess";

import VectorBanner from "@/components/VectorBanner";
import NativeApp1 from "@/lib/secondpage/nativeapp/nativeapp1";
import ServicePagesCards from "@/lib/secondpage/mobileApp/ServicePagesCards";
import CTAButton from "@/components/getStarted/CTAButton";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Languages from "@/components/getStarted/allTechLAnguages/languages";

const firstColumnData = [
  {
    heading: "Expanded Market Research",
    paragraph:
      "At Techanic InfoTech, we deliver deep into market trends and user behaviours, employing comprehensive research methodologies to ensure your Android app not only meets but exceeds market demands and user expectations.",
  },
  {
    heading: "Quick Deployment",
    paragraph:
      "As one of the best Android app development firms, our agile development processes and experienced team enable rapid deployment of your Android application, reducing time-to-market and giving you a competitive edge.",
  },
  {
    heading: "3rd Party Integration",
    paragraph:
      "Being a known Android mobile application development company, we excel in seamlessly integrating third-party services and APIs into your Android app, enhancing its functionality and offering a richer user experience without compromising performance.",
  },
];
const secondColumnData = [
  {
    heading: "Cost-effective Maintenance",
    paragraph:
      "Techanic InfoTech offers affordable maintenance packages to ensure your Android app solution remains up-to-date and operates smoothly, minimizing your long-term Android app development costs as well as that of maintenance.",
  },
  {
    heading: "Ease of Customization",
    paragraph:
      "Our Android development services are highly flexible, allowing for easy customization. We work with you to adapt the app's features to your evolving business needs, ensuring longevity and relevance in a dynamic market.",
  },
  {
    heading: "Time-efficient Development",
    paragraph:
      "With a focus on efficiency and productivity, our team of Android application developers employs time-saving development practices that accelerate the app creation process without sacrificing quality or performance.",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Android App Development Company | Android App Developers",
  description:
    "Techanic Infotech is a leading android app development company. We provide android app development services with highly-skilled android app developers.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/services/android-app-development-company"
    ),
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Android App Development Company | Android App Developers",
    description:
      "Techanic Infotech is a leading android app development company. We provide android app development services with highly-skilled android app developers.",
    url: "https://www.techanicinfotech.com/services/android-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/android-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Android App Development Company | Android App Developers",
    description:
      "Techanic Infotech is a leading android app development company. We provide android app development services with highly-skilled android app developers.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/services/android-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

export default function AndroidAppDevelopment() {
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
            "name": "Android App Development Company | Android App Developers",
            "url": "https://www.techanicinfotech.com/services/android-app-development-company",
            "image": "https://www.techanicinfotech.com/OGI/services/android-app-development-og.webp",
            "description": "Techanic Infotech is a leading android app development company. We provide android app development services with highly-skilled android app developers.",
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
            "image": "https://www.techanicinfotech.com/OGI/services/android-app-development-og.webp",
            "@id": "https://www.techanicinfotech.com/services/android-app-development-company",
            "url": "https://www.techanicinfotech.com/services/android-app-development-company",
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
              "https://www.techanicinfotech.com/services/android-app-development-company"
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
            "url": "https://www.techanicinfotech.com/services/android-app-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/services/android-app-development-og.webp",
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
              "https://www.techanicinfotech.com/services/android-app-development-company"
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
            "@id":"https://www.techanicinfotech.com/services/android-app-development-company",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why Should I Choose Techanic InfoTech for My Android App Development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing Techanic InfoTech means partnering with a team that provides expansive market research, agile and transparent development processes, utilization of modern technologies, and cost-effective maintenance. Our commitment to quality, alongside 24/7 client assistance and a focus on security, ensures a premium development experience tailored to your needs."
                }
              },
              {
                "@type": "Question",
                "name": "How much time does it take to develop an Android app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The time to develop an Android app can vary greatly depending on its complexity, features, and design ranging from 2 months to 12 months. Techanic InfoTech follows an efficient and time-saving development process, typically ranging from a few weeks for a basic app to several months for a feature-rich, custom solution."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to develop an Android app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On Average Android app development cost ranges from $10,000 to $50,000. However, the cost of Android app development at Techanic InfoTech is competitive and budget-friendly, reflecting the app's complexity, design, and specific functionalities required. We provide transparent pricing models that cater to various business needs and ensure cost-effective solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What tools and technologies do you use to develop android apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic InfoTech uses the latest tools and technologies for Android app development, including but not limited to, Kotlin, Java, Android Studio, and cross-platform solutions like Flutter and React Native, ensuring modern, efficient, and scalable app solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you guys help to upload the Android app on the Play Store?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Techanic InfoTech assists with the entire process of uploading your app to the Google Play Store, including setting up your developer account, app listings, and the submission process."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sign an NDA to keep my project idea confidential?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, Techanic InfoTech respects the confidentiality of your project idea and is willing to sign a Non-Disclosure Agreement (NDA) to ensure that all your information remains secure and private. That’s what makes us a leading Android development service provider."
                }
              },
              {
                "@type": "Question",
                "name": "Will you provide the source code of my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, upon project completion, Techanic InfoTech hands over the source code and ownership to the client, ensuring you have full control over your application."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get support and maintenance after project completion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a leading Android mobile app development company, Techanic InfoTech offers comprehensive post-launch support and maintenance to ensure your app remains updated with the latest Android OS changes, features, and security enhancements."
                }
              },
              {
                "@type": "Question",
                "name": "What hiring models do you have for Android developers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Techanic InfoTech offers flexible hiring models for Android developers, which include fixed-cost projects, dedicated developer teams, and time & material-based models, to fit different project scopes and budgets."
                }
              }
            ]
          }
        `,
        }}
      />
      <VectorBanner
        headingPart1="Android App "
        headingPart2="Development Company"
        paragraph="Techanic InfoTech is here to help you unlock the power of Android app development and enter the world’s
         largest user base for mobile apps, opening doors to seamless business success.Collaborate with the renowned Android app development company and make your app idea a reality."
        vectorImage="/assets/bannerimages/android-app-development-vector-banner-image.svg"
        image="/assets/bannerimages/android-app-development-banner-image.webp"
        text="View More"
        textcolor="white"
        btnContent="View More"
        showBorder={false}
        solidColor="#ffffff"
        btntext="black"
        percentHeight="80%"
        percentWidth="80%"
      />
      <OurClients
        headingpart1="We Work With "
        headingpart2="The Best"
        paragraphText="Our Clients"
      />{" "}
      <NativeApp1
        headingPart1="The Power Of "
        headingPart2="Android App Development"
        paragraph1="In the world of mobile phones and mobile applications,
         Android is a well-known name. As a mobile platform and OS,
          it dominates the market capturing the largest user base.
           This is a power that you can harness and churn to drive
            business success with the help of Android application development
             services. Turn your idea of a perfect app into reality, taking 
             advantage of Android’s freedom of design and development."
        paragraph2="Techanic InfoTech as a market-leading Android 
        mobile app development company is here to help you do just that.
         With our command over creating native mobile applications, our
          team of app developers and UI UX Designers knows exactly what 
          takes to create the next platform. So, if you think you have an
           android app idea that can disrupt the market, 
        our team of Android app developers is here for you."
        image="/assets/android-app-development-section-image.webp"
      />
      <ServicePagesCards
        headingPart1="Android App "
        headingPart2="Development Services"
        gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        paragraph={`Techanic InfoTech is converting dreams to reality in the form of high-performance and capturing Android applications. To cater
             to your business, we offer a range of different Android app development solutions.`}
        techcard={[
          {
            image: "/assets/icons/android-app-consultation-icon.png",
            title: "Android App Consultation",
            description:
              "As a seasoned Android app development company, Techanic InfoTech provides comprehensive Android app consultation services. Our expert Android app developers understand your business objectives, ensuring Android application development services align perfectly.",
          },
          {
            image: "/assets/icons/android-app-design-prototype-icon.png",
            title: "Android App Designing & Prototyping",
            description:
              "Techanic InfoTech, an Android development company renowned for its meticulous attention to detail, offers Android app designing and prototyping services. We craft aesthetically pleasing and intuitive designs, culminating in interactive prototypes.",
          },
          {
            image: "/assets/icons/custom-android-app-development-icon.png",
            title: "Custom Android App Development",
            description:
              "Specializing in custom Android app development, Techanic InfoTech tailors Android mobile application development services to your specific business needs. Distinguishing us as a leading Android mobile app development company in the industry.",
          },
          {
            image: "/assets/icons/android-tv-app-development-icon.png",
            title: "Android TV App Development",
            description:
              "With our Android TV app development services, Techanic InfoTech expands your digital footprint to the living room. We are an Android app development agency that focuses on creating immersive big-screen applications.",
          },
          {
            image: "/assets/icons/mobile-app-icon.png",
            title: "Android Wearable App Development",
            description:
              "Our Android wearable app development services exemplify innovation. At Techanic InfoTech, we harness the potential of wearable technology to develop apps from the forward-thinking Android app development service provider.",
          },
          {
            image: "/assets/icons/cross-platform-app-development-icon.png",
            title: "Cross-platform App Development",
            description:
              "Techanic InfoTech’s cross-platform app development services are designed to build Android apps that offer a seamless user experience across various platforms. This service underscores our expertise as an Android development services provider, ensuring compatibility and performance on all devices.",
          },
          {
            image: "/assets/icons/android-app-integration-icon.png",
            title: "Android App Integration",
            description:
              "Our Android app integration services ensure your app functions in harmony with existing systems and third-party services. As a trusted Android application development company, Techanic InfoTech is committed to enhancing your app’s functionality and user experience with seamless integrations.",
          },
          {
            image: "/assets/icons/android-app-migration-icon.png",
            title: "Android App Migration & Upgradation",
            description:
              "As part of our Android development services, we offer Android app migration and upgradation, modernizing your legacy systems with the latest Android innovations. Our Android app development solutions are designed to transition your app smoothly to the most current Android platforms.",
          },
          {
            image: "/assets/icons/iot-android-app-development-icon.png",
            title: "IoT Powered Android App Development",
            description:
              "Techanic InfoTech is at the forefront of IoT-powered Android app development, delivering smart, interconnected solutions. Our Android mobile application development services are tailored to leverage IoT technology, connecting devices, and enhancing user engagement.",
          },
        ]}
        bgcolor="#eeeeee"
        color="228B22"
        showExtraCards={true}
        radius="8"
        height="500px"
      />
      <CTAButton
        heading="Develop Your Android App"
        paragraph="Build Native Android App With Market Experts and Become The NEXT BOG."
        btntext="Talk To Us"
        bgColor="#ffffff"
        backgroundImage="/assets/android-app-development-cta-image.webp"
      />
      <HiringDevelopers
        headingPart1="Hire Android App "
        headingPart2="Developers In 24 Hours"
        paragraph1="Looking to transform your innovative app concept into a dynamic Android application? Hire Android app developers from Techanic InfoTech, where expertise meets execution. Our team of seasoned Android developers brings a wealth of experience and technical prowess to the table, ensuring that your project is not just another app in the store but a standout piece of digital craftsmanship. We understand the nuances of Android's platform and are adept at tailoring solutions that cater to your specific market and user base. Our Android app developers are not just coders; they are innovators who stay on the cusp of Android's evolving landscape, delivering state-of-the-art app solutions."
        paragraph2="At Techanic InfoTech, when you hire our expert Android app developers, you're getting more than just programming expertise. You're also getting a strategic partner who commits to your vision and business goals. Whether it's a native Android app, a cross-platform solution, or integrating advanced features like IoT or AI, our team is equipped to handle your needs. Choose Techanic InfoTech – a leading Android app company, and take the first step towards building an Android app that resonates with quality, innovation, and user-centricity."
        image="/assets/hire-developers-service-page-image.webp"
        btntxt="white"
      />
      <NativeCards
              gridClass='grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-6'
        showLastFourCards={true}
        heading="Android Innovation Across Industries"
        paragraph="Empowering every industry from on-demand apps to fintech mobile 
       solutions with the power of Android application development solutions."
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
        mainHeading="Choose Techanic InfoTech For Your Next Android App Development Project"
        mainParagraph="We are here to end your search for Android App Development Agency! Techanic InfoTech has everything you are looking for and all an expert Android development company should have. Leveraging our years’ worth of experience and expertise in delivering remarkable native mobile applications on android platforms, we are the perfect for your next Android app development project."
        mainParagraph1="So, if you think you have the right idea for the next best, Techanic InfoTech as a leading native app development company is here to help you achieve your tech dream. Reach out to us and let’s get started."
        firstColumnData={firstColumnData}
        secondColumnData={secondColumnData}
      />
      <TechSuccess
        headingPart1="Achieve"
        headingPart2="Innovation?"
        paragraph="Collaborate with expert Android app developers and take
         advantage of their expertise, to build your own Android app. Streamline
          business processes while delivering value to the end user with 
          robust and precision-built android applications."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="430"
        p3=" Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#EFF3FF"
      />
      <Languages
        head="Android App Development Tech Stack"
        para="To ensure quality and top-notch performance in our Android development services, we use only the best and industrially approved Android app tech stack. This makes us stand out as an Android software development company."
        bgColor="#EFF3FF"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/languages-icon.svg",
            label: "Languages",
          },
          {
            image: "/assets/icons/frameworks-icon.png",
            label: "Frameworks",
          },
          {
            image: "/assets/icons/library-icon.png",
            label: "Libraries",
          },
          {
            image: "/assets/icons/qa-tools-icon.svg",
            label: "QA Tools",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          {
            image: "/assets/icons/deployment-icon.svg",
            label: "Build Tools",
          },
        ]}
        languages={[
          // Languages
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Languages",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Languages",
          },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "Javascript",
            section: "Languages",
          },
          {
            image: "/assets/icons/c-sharp-icon.png",
            label: "C Sharp",
            section: "Languages",
          },

          // Frameworks
          {
            image: "/assets/icons/android-sdk-icon.png",
            label: "Android SDK",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/jetpack-icon.png",
            label: "Jetpack Compose",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/xamarin-icon.png",
            label: "Xamarin",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/ionic-icon.png",
            label: "Ionic",
            section: "Frameworks",
          },
          {
            image: "/assets/icons/cordova-icon.png",
            label: "Cordova",
            section: "Frameworks",
          },

          // Libraries
          {
            image: "/assets/icons/rx-java-icon.png",
            label: "RxJava",
            section: "Libraries",
          },
          {
            image: "/assets/icons/kotlin-coroutines-icon.png",
            label: "Kotlin Coroutines",
            section: "Libraries",
          },
          {
            image: "/assets/icons/kotlin-flow-icon.png",
            label: "Kotlin-Flow",
            section: "Libraries",
          },
          {
            image: "/assets/icons/dagger-2-icon.png",
            label: "Dagger 2",
            section: "Libraries",
          },
          {
            image: "/assets/icons/koin-icon.png",
            label: "Koin",
            section: "Libraries",
          },
          {
            image: "/assets/icons/retrofit-icon.png",
            label: "Retrofit",
            section: "Libraries",
          },

          // QA Tools
          {
            image: "/assets/icons/junit-5-icon.png",
            label: "JUnit 5",
            section: "QA Tools",
          },
          {
            image: "/assets/icons/mockito-icon.png",
            label: "Mockito",
            section: "QA Tools",
          },
          {
            image: "/assets/icons/test-flight-icon.png",
            label: "TestFlight",
            section: "QA Tools",
          },
          {
            image: "/assets/icons/dagger-2-icon.png",
            label: "Dagger 2",
            section: "QA Tools",
          },
          {
            image: "/assets/icons/app-tester-icon.png",
            label: "AppTester",
            section: "QA Tools",
          },

          // Databases
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Database",
          },
          {
            image: "/assets/icons/microsoft-sql-server.png",
            label: "SQL Server",
            section: "Database",
          },
          {
            image: "/assets/icons/cassandra-icon.png",
            label: "Cassandra",
            section: "Database",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          {
            image: "/assets/icons/dynamodb-icon.png",
            label: "DynamoDB",
            section: "Database",
          },

          // Build Tools
          {
            image: "/assets/icons/gradle-icon.png",
            label: "Gradle",
            section: "Build Tools",
          },
          {
            image: "/assets/icons/teamcity-icon.png",
            label: "TeamCity",
            section: "Build Tools",
          },
          {
            image: "/assets/icons/jenkins-icon.png",
            label: "Jenkins",
            section: "Build Tools",
          },
          {
            image: "/assets/icons/gitlab-icon.png",
            label: "GitLab",
            section: "Build Tools",
          },
          {
            image: "/assets/icons/circleci-icon.png",
            label: "CircleCI",
            section: "Build Tools",
          },
          {
            image: "/assets/icons/bitrise-icon.png",
            label: "Bitrise",
            section: "Build Tools",
          },
        ]}
      />
      <AppDevelop
        headingPart1="Android App "
        headingPart2="Development Process"
        paragraph="We follow a well-planned process for the development of the Android app,
         helping us maintain collaborative channels and transparency with clients."
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Idea Analysis and Strategy",
            description:
              "We begin by analyzing your app idea, defining the strategy, and laying down the project's foundation.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "Our design team translates your concept into engaging and easy-to-navigate designs tailored to Android guidelines.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "App Development",
            description:
              "Techanic InfoTech's skilled developers code the app, incorporating custom functionalities with a focus on efficient code.",
          },
          {
            image: "/assets/icons/market-research-icon.png",
            title: "Quality Assurance",
            description:
              "Rigorous testing is conducted to ensure the app is bug-free and performs across different Android devices and versions.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "App Launch",
            description:
              "Techanic Infotech handle the app deployment, managing the launch process on the Google Play Store for you.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Post-Launch Support & Maintenance",
            description:
              "We provide support and maintenance to keep the app updated with the latest Android features and security enhancements.",
          },
        ]}
      />
      <ServicePagesCards
        headingPart1="Expert Android App Developers,"
        headingPart2=" Empowering Businesses & Users"
                gridStyles='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[56px] mt-8'
        cardType={false}
        paragraph={`Our team of expert Android app developers delivers solutions that help businesses 
      reach the peak of their market while also delivering unmatched value to their end users.`}
        techcard={[
          {
            image: "/assets/icons/agile-app-development-icon.png",
            title: "Agile App Development",
            description:
              "At Techanic InfoTech, we employ an agile app development methodology, allowing for flexible planning, progressive development, and continuous improvement, which facilitates the rapid delivery of high-quality software.",
          },
          {
            image: "/assets/icons/modern-technology-utilization-icon.png",
            title: "Modern Technologies Utilization",
            description:
              "We harness the power of the latest technologies in the Android ecosystem, from advanced programming languages to cutting-edge development tools, ensuring your app is modern, efficient, and ready for the future.",
          },
          {
            image: "/assets/icons/process-transparency-icon.png",
            title: "Process Transparency",
            description:
              "Our approach to Android app development is rooted in transparency. Clients have full visibility into the progress with regular updates and open communication, fostering trust and collaboration throughout the development lifecycle.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost-effective Pricing",
            description:
              "As a leading Android app development agency, Techanic InfoTech is committed to providing cost-effective pricing without compromising on quality, offering competitive rates that ensure you get the best return on your investment.",
          },
          {
            image: "/assets/icons/robust-security-icon.png",
            title: "Maximum Security",
            description:
              "Security is paramount in our development process. That’s why, we incorporate top-tier security measures in Android mobile apps to protect sensitive data and ensure compliance with the latest security standards.",
          },
          {
            image: "/assets/icons/client-assistance-icon.png",
            title: "24*7 Client Assistance",
            description:
              "We understand the importance of support, which is why we offer 24*7 client assistance to address any queries or issues promptly, ensuring smooth operation and peace of mind in addition to Android app development service.",
          },
        ]}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are some of the common FAQs about Android app development services."
        questions={[
          "Q1: Why Should I Choose Techanic InfoTech for My Android App Development?",
          "Q2: How much time does it take to develop an Android app?",
          "Q3: How much does it cost to develop an Android app?",
          "Q4: What tools and technologies do you use to develop android apps?",
          "Q5: Do you guys help to upload the Android app on the Play Store?",
          "Q6: Do you sign an NDA to keep my project idea confidential?",
          "Q7: Will you provide the source code of my project?",
          "Q8: Will I get support and maintenance after project completion?",
          "Q9: What hiring models do you have for Android developers?",
        ]}
        answers={[
          "A1: Choosing Techanic InfoTech means partnering with a team that provides expansive market research, agile and transparent development processes, utilization of modern technologies, and cost-effective maintenance. Our commitment to quality, alongside 24/7 client assistance and a focus on security, ensures a premium development experience tailored to your needs.",
          "A2: The time to develop an Android app can vary greatly depending on its complexity, features, and design ranging from 2 months to 12 months. Techanic InfoTech follows an efficient and time-saving development process, typically ranging from a few weeks for a basic app to several months for a feature-rich, custom solution.",
          "A3: On Average Android app development cost ranges from $10,000 to $50,000. However the cost of Android app development at Techanic InfoTech is competitive and budget-friendly, reflecting the app's complexity, design, and specific functionalities required. We provide transparent pricing models that cater to various business needs and ensure cost-effective solutions.",
          "A4: Techanic InfoTech uses the latest tools and technologies for Android app development, including but not limited to, Kotlin, Java, Android Studio, and cross-platform solutions like Flutter and React Native, ensuring modern, efficient, and scalable app solutions.",
          "A5: Yes, Techanic InfoTech assists with the entire process of uploading your app to the Google Play Store, including setting up your developer account, app listings, and the submission process.",
          "A6: Absolutely, Techanic InfoTech respects the confidentiality of your project idea and is willing to sign a Non-Disclosure Agreement (NDA) to ensure that all your information remains secure and private. That’s what makes us a leading Android development service provider. ",
          "A7: Yes, upon project completion, Techanic InfoTech hands over the source code and ownership to the client, ensuring you have full control over your application.",
          "A8: As a leading Android mobile app development company, Techanic InfoTech offers comprehensive post-launch support and maintenance to ensure your app remains updated with the latest Android OS changes, features, and security enhancements.",
          "A9: Techanic InfoTech offers flexible hiring models for Android developers, which include fixed-cost projects, dedicated developer teams, and time & material-based models, to fit different project scopes and budgets.",
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
