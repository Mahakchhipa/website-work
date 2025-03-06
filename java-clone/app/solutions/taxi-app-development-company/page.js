import Ewallet from "@/lib/secondpage/Ewallet/ewalletApp";
import Image from "next/image";

import OurClients from "@/components/clients/page";

import Portfolio from "@/components/getStarted/portfolio/portfolio";

import TechSuccess from "@/lib/colab/techSuccess";

import ClientTestimonials from "@/lib/clientsReviews/clients";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import ContactInfo from "@/components/formSection/contactInfo";
import Panel from "@/lib/secondpage/Panel";
import FoodDeliveryBanner from "@/components/FoodDeliveryBanner";
import CloneApp from "@/lib/secondpage/cloneapp";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import CardSection from "@/lib/secondpage/cardssection";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";
import Panels from "@/lib/secondpage/Panels";

import Icons from "@/lib/secondpage/Icons";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import SolutionPagesCards from "@/lib/secondpage/devProcess/SolutionPagesCards";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/cabify-portfolio-image.webp",
    heading: "Cabify",
    para: "Cabify is a transportation network startup that provides ride-hailing services via its mobile app and is present in numerous European and Latin American countries. ",
    webLink: "https://cabify.com/en",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.cabify.rider&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/es/app/cabify/id476087442",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/shuma-portfolio-image.webp",
    heading: "Huma Drive",
    para: "A transportation app called Huma Drive cab offers cab services whenever they're needed. ",
    webLink: "https://www.shumatech.co.za",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=uz.bdmgroup.humo_taxi_driver&pcampaignid=web_share",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/jugnoo-portfolio-image.webp",
    heading: "Jugnoo Taxis",
    para: "A taxi service called Jugnoo Taxis provides on-demand trips via a mobile app.",
    webLink:
      "https://jugnoo.io/?utm_source=google_search&utm_medium=Jugnoo_Branded_IND&utm_term=jugnoo&utm_campaign=20575896454&gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8cHhaMv46eBN0Rrv47JGGRjDJ_9ePDtQ6BT9R6oQ2OGIMwfZFas9SMaAq9PEALw_wcB",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=product.clicklabs.jugnoo&pcampaignid=web_share",
    appleLink: "https://apps.apple.com/in/app/jugnoo-driver/id1378177428",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Taxi App Development Company | Hire Taxi App Developers",
  description:
    "Techanic Infotech is a leading taxi app development company. Hire taxi app developers to get feature-rich taxi app solutions for your business.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/taxi-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Taxi App Development Company | Hire Taxi App Developers",
    description:
      "Techanic Infotech is a leading taxi app development company. Hire taxi app developers to get feature-rich taxi app solutions for your business.",
    url: "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
    
    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi App Development Company | Hire Taxi App Developers",
    description:
      "Techanic Infotech is a leading taxi app development company. Hire taxi app developers to get feature-rich taxi app solutions for your business.",
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    image: "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp",
    url: "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow ",
};

export default function TaxiApp() {
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
            "name": "Taxi App Development Company | Hire Taxi App Developers",
            "url": "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
            "image": "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp",
            "description": "Techanic Infotech is a leading taxi app development company. Hire taxi app developers to get feature-rich taxi app solutions for your business.",
           "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur - 302026 Rajasthan, India",
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
            "streetAddress": "404-F Aspin Commercial Tower, sheikh Zayed road. Dubai",
            "addressLocality": "404-F Aspin Commercial Tower, sheikh Zayed road",
            "addressRegion": "DUBAI",
            "postalCode": "417213",
            "telephone": "+971 524981077",
            "addressCountry" : {
              "@type" : "Country",
              "name" : "AE"
            }
          },
          {
            "@type" : "PostalAddress",
            "streetAddress": "Via Giuseppe Mazzini, 6, flat 107 MILANO 20123 ITALY",
            "addressLocality": "Via Giuseppe Mazzini, 6, flat 107 MILANO",
            "addressRegion": "MILANO",
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
            "image": "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp",
            "@id": "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
            "url": "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
            "priceRange": "$25-$50",
             "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Balaji blessing – 01, D-125, Narayan Vihar Jaipur - 302026 Rajasthan, India",
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
              "https://www.techanicinfotech.com/solutions/taxi-app-development-company"
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
            "url": "https://www.techanicinfotech.com/solutions/taxi-app-development-company",
            "logo": "https://www.techanicinfotech.com/OGI/solutions/taxi-app-development-og.webp",
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
                "telephone": "+971 525981077",
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
              "https://www.techanicinfotech.com/solutions/taxi-app-development-company"
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
              "@id":"https://www.techanicinfotech.com/solutions/taxi-app-development-company",
            "@type": "FAQPage",
              
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What sets Techanic InfoTech's taxi booking apps apart in user-friendliness?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our taxi app development process at Techanic InfoTech is dedicated to creating an intuitive and smooth user interface, making navigation and ride-booking seamless for users."
                }
              },
              {
                "@type": "Question",
                "name": "How secure are the taxi booking apps developed by Techanic InfoTech?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Security is paramount in our taxi application development, with the integration of advanced encryption and secure payment gateways to protect user data and transactions."
                }
              },
              {
                "@type": "Question",
                "name": "Are Techanic InfoTech's taxi apps capable of handling a surge in ride bookings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our robust taxi mobile app development infrastructure is designed to support high-volume transactions and maintain performance during peak demand times."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to develop a taxi booking app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While on average cost to develop taxi booking ranges from $10,000 to $50,000 Techanic InfoTech offers cost-effective taxi app development services, ensuring clients receive a high-quality product that aligns with their financial planning."
                }
              },
              {
                "@type": "Question",
                "name": "How does Techanic InfoTech maintain a competitive edge with its taxi booking apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We stay ahead by continually updating our taxi booking app development services with the latest features and technological innovations to meet modern-day ride-hailing needs."
                }
              },
              {
                "@type": "Question",
                "name": "What features does Techanic InfoTech incorporate to enhance user engagement in its taxi apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Features such as in-app wallets, loyalty rewards, and customizable user profiles are included in our taxi booking app solution to boost user retention and engagement."
                }
              },
              {
                "@type": "Question",
                "name": "Does Techanic InfoTech respect confidentiality in taxi app development projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, we uphold client confidentiality with the utmost seriousness and are ready to sign NDAs to guarantee privacy in all our taxi booking app development projects."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose Techanic InfoTech for developing a taxi booking app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Selecting Techanic InfoTech as your taxi booking app development company means you’re opting for a partnership that promises innovative solutions, expert developers, and a successful app delivery."
                }
              },
              {
                "@type": "Question",
                "name": "How does Techanic InfoTech contribute to the success of a taxi booking app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our dedicated team of taxi app developers ensures your app is equipped with all the necessary tools for success, from initial design to the final launch and beyond."
                }
              },
              {
                "@type": "Question",
                "name": "Can Techanic InfoTech deliver a taxi app that supports multiple regions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our taxi booking mobile app development is adaptable to various geographical locations and can cater to different regional needs, making it versatile for global operations."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I get a taxi app development team from Techanic InfoTech started on my project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer a swift onboarding process, enabling you to hire taxi app developers from Techanic InfoTech who can get started on your project almost immediately."
                }
              }
            ]
          }
        `,
        }}
      />
      <FoodDeliveryBanner
        headingPart1="Taxi App "
        headingPart2="Development Company"
        heading="Taxi App  Development Company"
        paragraph={`Navigate the future of urban mobility with Techanic InfoTech’s 
        premier taxi app development services, where sophistication meets functionality.
        As a market-leading taxi booking app development company, we are here to help you. Accelerate your ride-hailing business with our seamless,
         feature-rich taxi booking solutions that redefine the user experience.`}
        width="760px"
        image="/assets/bannerimages/taxi-app.webp"
        gradient="85.65deg, #FFD84D -10.94%, #EADFDF 140.45%"
        showBorder={true}
        textcolor="black"
        border="black"
        hovercolor="#000000"
        hovertext="white"
        paddingBottom="40px"
        fillcolor="black"
        btnContent="Contact Us"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <CloneApp
        id="grad-6"
        headingPart1="Create A"
        headingPart2="Taxi App Clone"
        heading="Create A Taxi App Clone"
        paragraph="Enter the ride-hailing market with a solution inspired by the best. Techanic InfoTech offers a range of different taxi app clone solutions.
       So, whether you want to go with an Uber-like taxi app solution or a LYFT clone, we have got you covered."
        cloneData={[
          // Add Uber like apps data
          {
            id: 0,
            label: "Uber Like App Development",
            content:
              "Techanic InfoTech is a leading taxi app development company specializing in Uber-like app solutions, equipped with features such as real-time tracking, automatic fare calculation, and a smooth ride-booking experience. We empower your business with a robust taxi booking app solution that mirrors Uber’s efficient and user-friendly service.",
            image: "/assets/cloneappImages/booksy-clone-app-image.webp",
          },
          {
            id: 1,
            label: "Lyft Clone App Development",
            content:
              "Our taxi booking app development services extend to creating Lyft clone apps that offer seamless ride-sharing capabilities, in-app payment options, and advanced route optimization. With a focus on community and affordability, our Lyft clone is designed to support your mission of providing cost-effective travel options.",
            image: "/assets/cloneappImages/lyft-clone-app-image.webp",
          },
          {
            id: 2,
            label: "Ola Clone App Development",
            content:
              "As a proficient taxi app development company, Techanic InfoTech crafts Ola clone apps that include intuitive navigation, quick booking features, and secure payment gateways, ensuring a hassle-free experience for users. Our Ola clone stands out for its reliability and user-centric design.",
            image: "/assets/cloneappImages/ola-image.webp",
          },
          {
            id: 3,
            label: "Didi Clone App Development",
            content:
              "Leverage our taxi app development expertise to launch a Didi clone app, complete with features like driver and passenger ratings, dynamic pricing, and safety protocols. Our Didi clone is a testament to our commitment to creating safe and reliable taxi services.",
            image: "/assets/cloneappImages/didi-clone-app-image.webp",
          },
          {
            id: 4,
            label: "Grab Clone App Development",
            content:
              "Techanic InfoTech offers comprehensive Grab clone app development services, integrating features like multi-service offerings, digital wallets, and localized navigation for an all-in-one taxi booking experience. Our Grab clone is tailored to meet the diverse needs of the Southeast Asian market.",
            image: "/assets/cloneappImages/grab-clone-app-image.webp",
          },
          {
            id: 5,
            label: "Gett Clone App Development",
            content:
              "Choose our taxi booking app development company for crafting a Gett clone app that prioritizes straightforward corporate travel solutions, automated expense reporting, and high-quality ride options. With our Gett clone, experience the sophistication of business-oriented ride-hailing services.",
            image: "/assets/cloneappImages/gett-image.webp",
          },
        ]}
        bg="C59900"
        textcolor="#ffffff"
        colorpara="white"
        arrowback="#000000"
        height="1200px"
      />
      <ExpertsDev
        heading="Taking You From Idea To Market Dominance "
        paragraph="Collaboration with the best cab booking app development company and develop the next best ride-hailing solution. "
        text="Customize Now"
        gradient="93.21deg, #FCD962 -12.79%, #E8EADE 107.02%"
        btntext="black"
        hovertext="white"
        textColor="black"
        isGradientPage={true}
        useGif={true}
        gifSrc="/assets/taxi-app-cta-image-1.webp"
        image="/assets/taxi-app-cta-image-1.webp"
        showBorder={true}
        hovercolor="black"
        border="black"
        justifyImage="center"
      />
      <CardSection
        color="0F53FF"
        headingPart1="Taxi App"
        headingPart2="development Services"
        mobileheadingPart1="Taxi App"
        mobileheadingPart2="development Services"
        paragraph="At Techanic Infotech, we understand the diverse needs of businesses to adopt and capture every changing market and their target audience.
         That’s why, we offer a range of different taxi app development services."
        cardItems={[
          {
            image: "/assets/icons/custom-taxi-app-icon.png",
            title: "Custom Taxi App Development",
            description:
              "Techanic InfoTech excels in custom taxi app development, providing tailor-made solutions that cater specifically to your business's unique requirements and customer demands. Our dedicated team ensures your custom taxi app stands out for its innovative features and user-centric design.",
          },
          {
            image: "/assets/icons/taxi-app-aggregator-icon.png",
            title: "Taxi App Aggregator Development",
            description:
              "Our taxi app development services include creating aggregator platforms that seamlessly connect passengers with multiple taxi services. As a top-tier taxi app development company, we focus on aggregator apps that offer extensive choices and competitive pricing for users.",
          },
          {
            image: "/assets/icons/taxi-dispatch-software-icon.png",
            title: "Taxi Dispatch Software Development",
            description:
              "We specialize in taxi dispatch software development for streamlined operations, enabling efficient management of bookings, dispatches, and fleets. Techanic InfoTech delivers dispatch solutions that optimize your taxi service's response times and customer satisfaction.",
          },
          {
            image: "/assets/icons/aggregator-food-delivery-app-icon.png",
            title: "Taxi Booking Software Development",
            description:
              "Techanic InfoTech offers robust taxi booking software development to automate and enhance the reservation process. Our software supports real-time booking and scheduling, ensuring a smooth and efficient experience for both operators and customers.",
          },
          {
            image: "/assets/icons/classified-maintenance-icon.png",
            title: "Taxi Management App Development",
            description:
              "Our comprehensive taxi management app development service helps manage your fleet with precision, from tracking each vehicle's performance to optimizing routes. We build management apps that are crucial for maintaining high service standards and operational efficiency.",
          },
          {
            image: "/assets/icons/food-delivery-website-development-icon.png",
            title: "On-Demand Taxi App Development",
            description:
              "As an experienced taxi booking app development agency, Techanic InfoTech creates on-demand taxi apps that cater to the immediate transportation needs of users with features like quick booking, payment flexibility, and real-time driver tracking, ensuring a seamless ride from start to finish.",
          },
        ]}
        position="start"
        bgColor="ffffff"
        cardBG="ffffff"
        showExtraCards={false}
        radius="8"
        foodcardback="backgroundImages/taxi-cards-banner-1.png"
        height="450px"
      />

      <Panels
        headingPart1="Create A Taxi App,"
        headingPart2="Filled With Right Features"
        heading="Create A Taxi App, Filled With Right Features"
        paragraph="When you create a taxi app with Techanic Infotech, we help you craft the perfect
         solution with the right feature that caters to your user’s demands and needs. That’s what makes our taxi solution market-leading."
        userPanelCards={[
          {
            icon1: Icons.RideBooking,
            h1: "One-Tap Ride Booking",
            p1: "Book rides effortlessly with a single tap, using an intuitive interface designed for convenience.",
            icon2: Icons.GpsTracking,
            h2: "Real-Time GPS Tracking",
            p2: "Track your taxi in real-time as it makes its way to your location for pickup.",
          },
          {
            icon1: Icons.Payment,
            h1: "In-App Payment Integration",
            p1: "Complete payments securely and swiftly within the app through multiple payment gateways.",
            icon2: Icons.OrderHistory,
            h2: "Ride History",
            p2: "Access your previous rides and receipts for easy management and rebooking.",
          },
          {
            icon1: Icons.Rating,
            h1: "Rating & Review System",
            p1: "Share your ride experience by rating the service and providing feedback.",
            icon2: Icons.FareCalculator,
            h2: "Fare Calculator",
            p2: "Get an estimated fare before confirming the ride, ensuring transparency and trust.",
          },
        ]}
        managenentPanelCards={[
          {
            icon1: Icons.RouteOptimization,
            h1: "Route Optimization",
            p1: "Receive the most efficient routes in real-time to ensure quick and cost-effective trips.",
            icon2: Icons.EarningsTracker,
            h2: "Earnings Tracker",
            p2: "Keep track of earnings with a detailed breakdown of daily, weekly, and monthly income.",
          },
          {
            icon1: Icons.ChatSupport,
            h1: "In-App Chat Support",
            p1: "Communicate with passengers directly through the app for better coordination.",
            icon2: Icons.DocumentUpload,
            h2: "Document Upload",
            p2: "Easy upload and management of necessary documents directly in the app.",
          },
          {
            icon1: Icons.Toggle,
            h1: "Availability Toggle",
            p1: "Drivers can easily switch their availability status to manage their working hours.",
            icon2: Icons.SosButton,
            h2: "SOS Button",
            p2: "Enhance driver safety with an SOS button for immediate assistance in emergencies.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.Dashboard,
            h1: "Centralized Dashboard",
            p1: "Monitor your entire taxi operation from a single, comprehensive dashboard.",
            icon2: Icons.DriverManagement,
            h2: "Driver Management",
            p2: "Oversee driver profiles, documents, and performance metrics in one place.",
          },
          {
            icon1: Icons.UserListing,
            h1: "User Analytics",
            p1: "Gain insights into user behavior, preferences, and usage patterns to make informed decisions.",
            icon2: Icons.GpsTracking,
            h2: "Fleet Tracking",
            p2: "Track all vehicles in the fleet in real-time for improved operational control.",
          },
          {
            icon1: Icons.MenuManagement,
            h1: "Promotions and Discounts Management",
            p1: "Deploy promotional campaigns and discounts directly from the admin panel.",
            icon2: Icons.RevenueTracking,
            h2: "Revenue Reports",
            p2: "Analyze revenue streams with detailed reports and accounting features.",
          },
        ]}
        // textColor="white"
        textColor1="white"
        showLi4={true}
        hoverBgColor="buttonGradient"
        backColor="#282828"
        li1="User Panel Features"
        li4="Driver Panel Features"
        li2="Admin Panel Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small4="Driver"
        panelImage="/assets/icons/driver-panel-icon.png"
      />
      <HiringDevelopers
        headingPart1="Hire Taxi App"
        headingPart2="Developers In 24 Hours "
        heading="Hire Taxi App Developers In 24 Hours "
        paragraph1="Techanic InfoTech stands as a beacon in the taxi booking app development company landscape, 
        offering you the opportunity to hire taxi app developers who are not only adept 
        in the latest technological trends but also have a deep understanding of the ride-hailing
         industry's demands. Our taxi app developers for hire bring with them a wealth of experience 
         in creating sophisticated apps that promise to elevate your taxi business. From integrating 
         real-time GPS tracking to ensuring seamless payment transactions, our developers focus on every detail that contributes to crafting an exceptional taxi booking mobile app development experience."
        paragraph2="By choosing to collaborate with our taxi booking app development company,
         you're ensuring that your project is in the hands of experts who are committed to delivering
          excellence. Within 24 hours, Techanic InfoTech can assemble a dedicated team of taxi app developers,
           ready to dive into your project with the zeal to innovate and drive success. Whether you're looking
            to build a taxi app from scratch or seeking enhancements to an existing platform, our taxi booking 
            app developers are equipped to deliver a taxi booking app solution that aligns with your
             vision and exceeds market standards."
        divBtn="#AA8913"
        image="/assets/hiring-developers-image.webp"
        direction="right"
        color2="#BD9506"
        color1="#DFAF05"
        bgColor="ffffff"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Choose The Best Taxi"
        headingPart2="Booking Development Company"
        heading="Choose The Best Taxi Booking Development Company "
        paragraph="Are you ready to enable explosive growth in the market?
         Techanic Infotech with a team of experienced app developers and app designers 
         is here to help you. With over 5 years of experience and boasting 99% customer satisfaction,
         we are here to help you become the next best with a custom and readymade taxi booking app."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="430"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      <Languages
        head="Tech Stack For Taxi Booking App Development"
        para="Our team uses only the best technology stack in taxi app development. Ensuring high-quality solutions
         that deliver performance and help businesses reach market targets."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
        sections={[
          {
            image: "/assets/icons/technologies-label-icon.svg",
            label: "Technologies",
            flipIcon: "icons/Technologies-icon.svg",
          },
          { image: "/assets/icons/front-end-icon.svg", label: "Front-end" },
          { image: "/assets/icons/backend-icon.svg", label: "Back-end" },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          {
            image: "/assets/icons/ui-ux-label-icon.svg",
            label: "UI/UX",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/android-icon.png",
            label: "Android",
            section: "Technologies",
          },
          {
            image: "/assets/icons/ios-icon.png",
            label: "iOS",
            section: "Technologies",
          },
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Technologies",
          },
          {
            image: "/assets/icons/xamarin-icon.png",
            label: "Xamarin",
            section: "Technologies",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React Native",
            section: "Technologies",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective-C",
            section: "Technologies",
          },
          {
            image: "/assets/icons/html-icon.png",
            label: "HTML5",
            section: "Front-end",
          },
          {
            image: "/assets/icons/css-icon.png",
            label: "CSS3",
            section: "Front-end",
          },
          {
            image: "/assets/icons/javascript-icon.png",
            label: "JavaScript",
            section: "Front-end",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "Angular",
            section: "Front-end",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "React",
            section: "Front-end",
          },
          {
            image: "/assets/icons/vue-js-icon.png",
            label: "Vue.js",
            section: "Front-end",
          },
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Back-end",
          },
          {
            image: "/assets/icons/django-icon.png",
            label: "Django",
            section: "Back-end",
          },
          {
            image: "/assets/icons/redis-icon.png",
            label: "Redis",
            section: "Back-end",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "NodeJS",
            section: "Back-end",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Back-end",
          },
          {
            image: "/assets/icons/python-icon.png",
            label: "Python",
            section: "Back-end",
          },
          {
            image: "/assets/icons/rdbms-icon.png",
            label: "RDBMS",
            section: "Database",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database",
          },
          {
            image: "/assets/icons/rethink-db-icon.png",
            label: "RethinkDB",
            section: "Database",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          {
            image: "/assets/icons/in-vision-icon.png",
            label: "inVision",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/sketch-icon.png",
            label: "Sketch",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/flinto-icon.png",
            label: "Flinto",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/adobe-xd-icon.png",
            label: "Adobe XD",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/figma-icon.png",
            label: "Figma",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/photoshop-icon.png",
            label: "Photoshop",
            section: "UI/UX",
          },
        ]}
      />
      <AppDevelop
        headingPart1="Taxi Booking App "
        headingPart2="Development Process"
        paragraph="We follow a planned taxi app development process
           to ensure transparency and ensure collaboration between our team and the client."
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Requirement Analysis"
        p1="We begin by thoroughly understanding your business 
          needs and user expectations to tailor the taxi app development process."
        image2="/assets/icons/design-prototype-icon.png"
        h2=" UI/UX Design"
        p2="Our designers craft a user-friendly and aesthetically pleasing interface,
           focusing on ease of navigation and a seamless user experience."
        image3="/assets/icons/development-icon.png"
        h3="Backend Development"
        p3="Our skilled developers build a robust and scalable backend to handle
           bookings, payments, and other critical operations efficiently."
        image4="/assets/icons/deployment-icon.png"
        h4="Frontend Development"
        p4="The front end is developed with engaging and responsive design elements,
           ensuring compatibility across all devices and platforms."
        image5="/assets/icons/quality-assurance-icon.png"
        h5="Quality Assurance and Testing"
        p5="The taxi app undergoes rigorous testing for functionality, 
          performance, security, and usability to ensure a flawless user journey."
        image6="/assets/icons/maintenance-updates-icon.png"
        h6="Deployment and Launch"
        p6="After thorough testing, the taxi app is launched on the App Store and 
          play store, ready to serve your customers and drivers."
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Requirement Analysis",
            description:
              "We begin by thoroughly understanding your business needs and user expectations to tailor the taxi app development process.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "Our designers craft a user-friendly and aesthetically pleasing interface, focusing on ease of navigation and a seamless user experience.",
          },
          {
            image: "/assets/icons/development-icon.png",
            title: "Backend Development",
            description:
              "Our skilled developers build a robust and scalable backend to handle bookings, payments, and other critical operations efficiently.",
          },
          {
            image: "/assets/icons/deployment-icon.png",
            title: "Frontend Development",
            description:
              "The front end is developed with engaging and responsive design elements, ensuring compatibility across all devices and platforms.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance and Testing",
            description:
              "The taxi app undergoes rigorous testing for functionality, performance, security, and usability to ensure a flawless user journey.",
          },
          {
            image: "/assets/icons/maintenance-updates-icon.png",
            title: "Deployment and Launch",
            description:
              "After thorough testing, the taxi app is launched on the App Store and Play Store, ready to serve your customers and drivers.",
          },
        ]}
        align="center"
      />
      <ExpertsDev
        heading="Build A Taxi Booking App"
        paragraph="With the market larger than ever, this is 
             high time to invest in cab booking app development. Reach out to us."
        isGradientPage={false}
        backColor="#F9DC76"
        color="FDBEC0"
        image="/assets/taxi-app-cta-image-2.webp"
        text="Customize Now"
        btnbg="#000000"
        btntext="white"
        textColor="black"
        hovercolor="#ffffff"
        hovertext="black"
        justifyImage="center"
      />

      <SolutionPagesCards
        color="0F53FF"
        headingPart1="Supercharged Taxi Apps"
        headingPart2="For Users & Businesses"
        heading="Supercharged Taxi Apps For Users & Businesses"
        paragraph="Our solutions are supercharged to help businesses grow explosively in the market while delivering value to their end user. That’s how we achieve ultimate client satisfaction."
        backImgCards="backgroundImages/taxi-cards-banner-2.jpg"
        headingColor="white"
        paragraphColor="white"
        cardItems={[
          {
            image: "/assets/icons/enhanced-operational-efficiency-icon.png",
            title: "Enhanced Operational Efficiency",
            description:
              "Partnering with Techanic InfoTech for taxi app development services streamlines your business operations, optimizing route planning and reducing wait times for customers.",
          },
          {
            image: "/assets/icons/data-driven-insights-icon.png",
            title: "Increased Market Reach",
            description:
              "Our custom taxi app development expands your customer base by connecting you with tech-savvy riders through a user-friendly, on-demand taxi app platform.",
          },
          {
            image: "/assets/icons/secure-payment-options-icon.png",
            title: "Secure and Diverse Payment Options",
            description:
              "Users enjoy multiple payment gateways integrated into their taxi booking app, ensuring secure and convenient transactions. That’s what makes our taxi app solution the best.",
          },
          {
            image: "/assets/icons/real-time-analytics-data-icon.png",
            title: "Real-Time Analytics for Data-Driven Strategies",
            description:
              "The taxi booking app development solution from Techanic InfoTech provides valuable insights, allowing you to make informed decisions to grow your taxi service.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalable Taxi Booking Mobile App Development",
            description:
              "As a leading taxi booking app development company, we ensure your app can grow with your business, supporting an increasing number of users and rides.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost effective solutions",
            description:
              "When you are working with us, you don’t have to worry about taxi booking app development cost, we can care of it with affordable solutions.",
          },
        ]}
      />
      <Portfolio
        heading="Portfolio"
        headingpart1="Our"
        headingpart2="Portfolio"
        bgColor="F3F3FA"
        paragraph="Techanic InfoTech is the best team of taxi app developers in the market. This is not a bluff, but something backed by evidence. Our work speaks for itself. "
        cards={cards}
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Here are answers to some of the most frequently asked questions about Taxi mobile application development."
        questions={[
          "Q1: What sets Techanic InfoTech's taxi booking apps apart in user-friendliness?",
          "Q2: How secure are the taxi booking apps developed by Techanic InfoTech?",
          "Q3: Are Techanic InfoTech's taxi apps capable of handling a surge in ride bookings?",
          "Q4: How much does it cost to develop a taxi booking app?",
          "Q5: How does Techanic InfoTech maintain a competitive edge with its taxi booking apps?",
          "Q6: What features does Techanic InfoTech incorporate to enhance user engagement in its taxi apps?",
          "Q7: Does Techanic InfoTech respect confidentiality in taxi app development projects?",
          "Q8: Why should I choose Techanic InfoTech for developing a taxi booking app?",
          "Q9: How does Techanic InfoTech contribute to the success of a taxi booking app?",
          "Q10: Can Techanic InfoTech deliver a taxi app that supports multiple regions?",
          "Q11: How quickly can I get a taxi app development team from Techanic InfoTech started on my project?",
        ]}
        answers={[
          "A1: Our taxi app development process at Techanic InfoTech is dedicated to creating an intuitive and smooth user interface, making navigation and ride-booking seamless for users.",
          "A2: Security is paramount in our taxi application development, with the integration of advanced encryption and secure payment gateways to protect user data and transactions.",
          "A3: Yes, our robust taxi mobile app development infrastructure is designed to support high-volume transactions and maintain performance during peak demand times.",
          "A4: While on average cost to develop taxi booking ranges from $10,000 to $50,000 Techanic InfoTech offers cost-effective taxi app development services, ensuring clients receive a high-quality product that aligns with their financial planning.",
          "A5: We stay ahead by continually updating our taxi booking app development services with the latest features and technological innovations to meet modern-day ride-hailing needs.",
          "A6: Features such as in-app wallets, loyalty rewards, and customizable user profiles are included in our taxi booking app solution to boost user retention and engagement.",
          "A7: Absolutely, we uphold client confidentiality with the utmost seriousness and are ready to sign NDAs to guarantee privacy in all our taxi booking app development projects.",
          "A8: Selecting Techanic InfoTech as your taxi booking app development company means you’re opting for a partnership that promises innovative solutions, expert developers, and a successful app delivery.",
          "A9: Our dedicated team of taxi app developers ensures your app is equipped with all the necessary tools for success, from initial design to the final launch and beyond.",
          "A10: Our taxi booking mobile app development is adaptable to various geographical locations and can cater to different regional needs, making it versatile for global operations.",
          "A11: We offer a swift onboarding process, enabling you to hire taxi app developers from Techanic InfoTech who can get started on your project almost immediately.",
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
