import OurClients from "@/components/clients/page";

import ClientTestimonials from "@/lib/clientsReviews/clients";
import TechSuccess from "@/lib/colab/techSuccess";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";

import HiringDevs from "@/lib/secondpage/hireDev";

import Opportunity from "@/lib/secondpage/devProcess/opportunity";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import ContactInfo from "@/components/formSection/contactInfo";
import Panel from "@/lib/secondpage/Panel";
import SolutionPagesBanner from "@/components/SolutionPagesBanner";
import CardSection from "@/lib/secondpage/cardssection";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import Panels from "@/lib/secondpage/Panels";
import SolutionPagesCards from "@/lib/secondpage/devProcess/SolutionPagesCards";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import HiringDevelopers from "@/lib/secondpage/HireDevelopers";

export const metadata = {
  title: "Doctor On Demand App Development Company ",
  description:
    "Techanic Infotech is a top doctor on demand app development company that strives to build a robust and reliable doctor appointment app at an affordable price.",
  contentLanguage: "en-us",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Doctor On Demand App Development Company",
    description:
      "Techanic Infotech is a top doctor on demand app development company that strives to build a robust and reliable doctor appointment app at an affordable price.",
    url: "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development-company",
    
    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor On Demand App Development Company",
    description:
      "Techanic Infotech is a top doctor on demand app development company that strives to build a robust and reliable doctor appointment app at an affordable price.",
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    image: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp",
    url: "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/dr-on-demand-portfolio-image.webp",
    heading: "Dr+ On Demand",
    para: "A telehealth program offering easily accessible and convenient medical consultations.",
    webLink: "https://doctorondemand.com",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/medibuddy-portfolio-image.webp",
    heading: "MediBuddy",
    para: "MediBuddy is an all-inclusive healthcare app offering services such as teleconsultations, lab test bookings, medication orders, and doctor appointments.",
    webLink: "https://www.medibuddy.in/doctors/online-consultation",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/doctor-365-portfolio-image.webp",
    heading: "Doctor 365 Mullingar",
    para: "Doctor 365 Mullingar is a healthcare portal providing Mullingar patients with access to medical care, telehealth consultations, and online health record management. ",
    webLink: "https://doctor365.co.in/online-doctors.php",
  },
  {
    id: 4,
    image: "/assets/portfolioImages/health-direct-portfolio-image.webp",
    heading: "Health Direct",
    para: "Health Direct is a comprehensive digital health platform offering virtual consultations, symptom checkers, and personal health record management.",
    webLink: "https://www.healthdirect.gov.au/",
  },
];

export default function DoctorOnDemand() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            priceRange: "$25-$50",
            name: "Doctor On Demand App Development Company",
            url: "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
            image: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp",
            description:
              "Techanic Infotech is a top doctor on demand app development company that strives to build a robust and reliable doctor appointment app at an affordable price.",
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
            image: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp",
            "@id":
              "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
            url: "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
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
              "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
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
            url: "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
            logo: "https://www.techanicinfotech.com/OGI/solutions/doctor-on-demand-app-development-og.webp",
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
              "https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
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
            "@id":"https://www.techanicinfotech.com/solutions/doctor-on-demand-app-development",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the typical cost of developing a doctor on demand app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost varies depending on app complexity, features, and specific client requirements. We offer competitive pricing and can provide a detailed quote after understanding your project needs.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to develop a doctor on demand app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Development time can range from a few weeks to several months, influenced by the app's features, design complexity, and iterations based on feedback.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide post-launch app support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer comprehensive post-launch support and maintenance to ensure your app continues to perform optimally and stays updated with the latest technology.",
                },
              },
              {
                "@type": "Question",
                name: "How do you ensure the security and privacy of the app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our apps are developed adhering to HIPAA compliance standards, with robust security protocols like encryption and secure data storage to protect user privacy.",
                },
              },
              {
                "@type": "Question",
                name: "Will I own the source code of my doctor on demand app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely, once the app is developed and fully paid for, the ownership of the source code is transferred to you.",
                },
              },
              {
                "@type": "Question",
                name: "Do you sign an NDA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we understand the importance of confidentiality in healthcare app development and are willing to sign a Non-Disclosure Agreement (NDA) before commencing the project.",
                },
              },
            ],
          }),
        }}
      />

      <SolutionPagesBanner
        headingPart1="Doctor On Demand"
        headingPart2="App Development Company"
        paragraph="Revolutionize healthcare accessibility with Techanic InfoTech, your premier doctor on demand app development company. Seamlessly connecting patients to medical professionals, we embody innovation, reliability, and top-notch healthcare solutions in the palm of your hand."
        bgImage="backgroundImages/doctor-on-demand-app-banner.webp"
        image="/assets/bannerimages/doctor-demand.webp"
        mobileBackground="/assets/bannerimages/doctor-on-demand-banner-image.png"
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <CardSection
        id="grad-5"
        headingPart1="Comprehensive Doctor"
        headingPart2="On Demand App Services"
        mobileheadingPart1="Comprehensive Doctor"
        mobileheadingPart2="On Demand App Services"
        paragraph="Dive into our diverse suite of doctor on demand app development services, designed to empower physicians and engage patients. Techanic InfoTech delivers innovative, user-friendly, and HIPAA-compliant digital solutions for every aspect of on-demand healthcare."
        heading="Comprehensive Doctor On Demand App Services"
        cardItems={[
          {
            image: "/assets/icons/doctor-app-development-icon.png",
            title: "Doctor App Development",
            description:
              "Our doctor app development solution puts a virtual clinic in your pocket. It's crafted for clinicians who want to extend their services online with secure, easy-to-use interfaces and robust functionality.",
          },
          {
            image: "/assets/icons/doctor-consultation-app-icon.png",
            title: "Doctor Consultation App Development",
            description:
              "We streamline the virtual care experience with our doctor consultation app development. Connect patients with specialists for real-time consultations, prescription management, and health monitoring.",
          },
          {
            image: "/assets/icons/doctor-appointment-app-icon.png",
            title: "Doctor Appointment App Development",
            description:
              "Enhance your practice's efficiency with our doctor appointment app development. Our doctor Appointment Mobile App Development solutions facilitate effortless booking, rescheduling, and reminders to keep your schedule running smoothly.",
          },
          {
            image: "/assets/icons/on-demand-doctor-app-development-icon.png",
            title: "On Demand Doctor App Development",
            description:
              "Tap into the telemedicine revolution with our on-demand doctor app development. We create apps that offer immediate medical advice, emergency consultations, and second opinions from certified professionals.",
          },
          {
            image: "/assets/icons/healthcare-app-development-icon.png",
            title: "Healthcare App Development",
            description:
              "Our healthcare app development goes beyond appointments and consultations. We integrate wellness tracking, health records, and personalized care plans to foster a holistic health ecosystem.",
          },
          {
            image:
              "/assets/icons/custom-doctor-on-demand-app-development-icon.png",
            title: "Custom Doctor On Demand App Development",
            description:
              "Realize your vision with our custom doctor on demand app development. Tailored features, brand-centric design, and cross-platform compatibility come together to create your ideal telehealth application.",
          },
        ]}
        color="0F53FF"
        bgColor="#ffffff"
      />

      {/* <Portfolio
        heading="Proven Expertise, Trusted Portfolio"
        bgColor="ffffff"
        paragraph={`Our portfolio showcases a range of successfully launched doctor on demand apps, each a testament to our commitment to excellence and innovation in healthcare app development. Let our past work inspire your future success.`}
        slides={slideFood}
        btntext="white"
        divBtn="#05476C"
        direction="right"
        color1="#0D5984"
        color2="#05476C"
      /> */}
      <CTABannerImage
        heading="Get Started Today"
        paragraph="Embark on the journey of digital healthcare transformation with us. Experience the pinnacle of convenience and care."
        text="Discover More"
        bgColor="ffffff"
        media="image"
        divBtn="#F9A8D4"
        direction="right"
        color1="#290465"
        color2="#290465"
        btnbg="#000000"
        btntext="#ffffff"
        mobileImage="/assets/doctor-on-demand-cta-mobile-image.png"
        backColor="#290465"
        textColor="black"
        // backImage="/assets/background-mobile-image-expert-section.png"
        image="/assets/doctor-on-demand-cta-background-image.webp"
      />

      <Panels
        heading="Essential Features For On Demand Doctor Apps"
        headingPart1="Essential Features For"
        headingPart2="On Demand Doctor Apps"
        paragraph="Enabling our clients to capture their users’ attention and spellbound them with feature-filled and meaningful food delivery applications. We are here to convert your audience’s requirements to robust features."
        li1="User Panel"
        li2="Admin Panel"
        li3="Advance  Panel"
        li4="Doctor Panel"
        li1Small1="User"
        li1Small2="Admin"
        li1Small3="Advance"
        li1Small4="Doctor"
        showLi4={true}
        showLi3={true}
        bgColor="F3F3FA"
        textColor1={"white"}
        panelImage="/assets/icons/doctor-panel-icon.png"
        userPanelCards={[
          {
            icon1: "/assets/icons/user-friendly-appointment-icon.svg",
            h1: "User-Friendly Appointment Scheduling",
            p1: "Book, cancel, or reschedule appointments with just a few taps.",
            icon2: "/assets/icons/in-app-message-icon.svg",
            h2: "Secure Messaging System",
            p2: "Communicate with healthcare providers safely and confidentially.",
          },
          {
            icon1: "/assets/icons/digital-prescription-icon.svg",
            h1: "Digital Prescription Access",
            p1: "Receive and manage prescriptions directly through the app.",
            icon2: "/assets/icons/health-records-icon.svg",
            h2: "Personal Health Records",
            p2: "Easily upload and store personal health information for quick access.",
          },
          {
            icon1: "/assets/icons/payment-gateway-icon.svg",
            h1: "Payment Gateway Integration",
            p1: "Convenient and secure in-app payment processing.",
            icon2: "/assets/icons/secure-messaging-icon.svg",
            h2: "Real-Time Notifications",
            p2: "Stay updated with appointment reminders and health tips.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: "/assets/icons/dashboard-analytics--icon.svg",
            h1: "Centralized Dashboard",
            p1: "Manage all aspects of the platform from a single interface.",
            icon2: "/assets/icons/user-management-icon.svg",
            h2: "User Management",
            p2: "Oversee patients and doctors, and control access as needed.",
          },
          {
            icon1: "/assets/icons/payment-gateway-integration-icon.svg",
            h1: "Financial Administration",
            p1: "Monitor transactions, process payments, and generate reports.",
            icon2: "/assets/icons/rating-icon.svg",
            h2: "Feedback and Ratings Oversight",
            p2: "Review and respond to user feedback for service improvement.",
          },
          {
            icon1: "/assets/icons/insight-analytics-icon.svg",
            h1: "Analytics and Reporting",
            p1: "Gain insights into app usage and performance metrics.",
            icon2: "/assets/icons/marketing-tools-icon.svg",
            h2: "Marketing Tools Integration",
            p2: "Manage promotional campaigns and communication within the app.",
          },
        ]}
        managenentPanelCards={[
          {
            icon1: "/assets/icons/doctor-profiles-icon.svg",
            h1: "Customizable Doctor Profiles",
            p1: "Showcase qualifications, specialties, and availability.",
            icon2: "/assets/icons/appointment-management-icon.svg",
            h2: "Appointment Management",
            p2: "Oversee and adjust appointment schedules effortlessly.",
          },
          {
            icon1: "/assets/icons/e-prescription-functionality-icon.svg",
            h1: "E-Prescription Functionality",
            p1: "Create and send digital prescriptions to patients.",
            icon2: "/assets/icons/health-tracking-icon.svg",
            h2: "Patient Health Tracking",
            p2: "Access and monitor patient health records and history.",
          },
          {
            icon1: "/assets/icons/consultation-notes-icon.svg",
            h1: "Consultation Notes",
            p1: "Record and retrieve notes from each patient interaction.",
            icon2: "/assets/icons/financial-reporting-icon.svg",
            h2: "Revenue Tracking",
            p2: "Keep track of earnings and financials within the app.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: "/assets/icons/ai-symptom-checker-icon.svg",
            h1: "AI Symptom Checker",
            p1: "Innovative AI-powered tool to pre-assess symptoms and suggest actions.",
            icon2: "/assets/icons/telemedicine-video-icon.svg",
            h2: "Telemedicine Video Conferencing",
            p2: "High-quality, secure video calls for remote consultations.",
          },
          {
            icon1: "/assets/icons/multi-language-support-icon.svg",
            h1: "Multi-Language Support",
            p1: "Break language barriers to provide care for diverse user bases.",
            icon2: "/assets/icons/health-wearable-icon.svg",
            h2: "Healthcare Wearable Integration",
            p2: "Sync with devices for real-time health data monitoring.",
          },
          {
            icon1: "/assets/icons/pharmacy-integration-icon.svg",
            h1: "Pharmacy Integration",
            p1: "Connect with pharmacies to facilitate medication orders.",
            icon2: "/assets/icons/emergency-services-icon.svg",
            h2: "In-App Emergency Services",
            p2: "Quick access to emergency contacts and services when needed.",
          },
        ]}
      />

      <HiringDevelopers
      headingPart1="Hire Expert On"
      headingPart2="Demand App Developers"
        heading="Hire Expert On Demand App Developers"
        paragraph1="At Techanic InfoTech, we take pride in our team of seasoned on demand app developers who are the driving force behind our successful doctor on demand app solutions. Their expertise in the latest technologies ensures that your app is not just functional but also ahead of the curve in the competitive healthcare market."
        paragraph2="Hire on demand doctor app developers understand the criticality of healthcare apps and are dedicated to delivering apps that are reliable, compliant, and user-friendly. They work closely with you to understand your specific needs, ensuring that the app we develop is perfectly aligned with your business goals and user expectations."
        listData={[
          "Certified Technical Experts",
          "Agile Development Process",
          "HIPAA Compliant Solutions",
          "Post-Launch Support",
        ]}
        btntxt="white"
        bgColor="ffffff"
          image="/assets/hiring-developers-image.webp"
      />

      <TechSuccess
    
        headingPart1="Comprehensive "
        headingPart2="Solutions"
        paragraph="For healthcare at the tap of a button, choose Techanic InfoTech. Our comprehensive doctor on demand app solutions encompass the spectrum of care - from initial consultation to follow-up. Elevate your practice with our cutting-edge technology and patient-centric approach."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2="Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />

      <Languages
        head="Technology That Powers Care"
        para="At Techanic InfoTech, we believe in using only the best-in-class technology stack to build your doctor on demand app. Our robust and scalable tech architecture ensures reliability, security, and a seamless user experience."
        bgColor="#F3F3FA"
             iconheight='60px'
        iconwidth='60px'
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
        headingPart1="Doctor On Demand App "
        headingPart2="Development Process"
        // heading="Doctor On Demand App Development Process"
        paragraph="Our development process for doctor on demand apps is meticulously crafted to ensure quality, efficiency, and transparency from ideation to launch."
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Requirement Analysis"
        p1="We begin by thoroughly understanding your project requirements and objectives."
        image2="/assets/icons/design-prototype-icon.png"
        h2="UI/UX Design"
        p2="Designing intuitive and engaging user interfaces for an optimal user experience."
        image3="/assets/icons/prototype-development-icon.png"
        h3="Prototype Development"
        p3="Creating an initial app prototype to visualize the concept and functionality."
        image4="/assets/icons/development-icon.png"
        h4="App Development"
        p4="Coding the app with robust and scalable technology to ensure high performance."
        image5="/assets/icons/quality-assurance-icon.png"
        h5="Quality Assurance"
        p5="Rigorous testing to identify and rectify any technical issues for a flawless app."
        image6="/assets/icons/deployment-icon.png"
        h6="Deployment and Support"
        p6="Launching the app on the desired platforms with ongoing maintenance and support."
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Requirement Analysis",
            description:
              "We begin by thoroughly understanding your project requirements and objectives.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "UI/UX Design",
            description:
              "Designing intuitive and engaging user interfaces for an optimal user experience.",
          },
          {
            image: "/assets/icons/prototype-development-icon.png",
            title: "Prototype Development",
            description:
              "Creating an initial app prototype to visualize the concept and functionality.",
          },
          {
            image: "/assets/icons/development-icon.png",
            title: "App Development",
            description:
              "Coding the app with robust and scalable technology to ensure high performance.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Rigorous testing to identify and rectify any technical issues for a flawless app.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Deployment and Support",
            description:
              "Launching the app on the desired platforms with ongoing maintenance and support.",
          },
        ]}
        align="center"
      />
      <CTABannerImage
        heading="Expert Development Team"
        paragraph="Our expert doctor on demand app developers craft solutions tailored to your unique requirements, ensuring quality and precision."
        text="Customize Now"
        bgColor="ffffff"
        media="image"
        divBtn="#F9A8D4"
        direction="right"
        color1="#290465"
        color2="#290465"
        btnbg="#000000"
        btntext="#ffffff"
        mobileImage="/assets/doctor-on-demand-cta-mobile-image.png"
        backColor="#290465"
        textColor="black"
        // backImage="/assets/background-mobile-image-expert-section.png"
        image="/assets/doctor-on-demand-cta-banner-2.webp"
      />
      <SolutionPagesCards
        headingPart1="Benefits Of Developing Doctor"
        headingPart2="On Demand App With Techanic InfoTech"
        mobileheadingPart1=""
        paragraph={`Choosing Techanic InfoTech for your doctor on demand app development means opting for excellence and innovation. Our approach ensures your app stands out in the healthcare market.`}
        cardItems={[
          {
            image: "/assets/icons/expertise-icon.png",
            title: "Expertise and Experience",
            description:
              "Our developers possess a deep understanding of the healthcare domain, ensuring your app is built on a foundation of expertise and tailored to the intricacies of medical services.",
          },
          {
            image: "/assets/icons/customized-solution-icon.png",
            title: "Customized Solutions",
            description:
              "We believe each healthcare provider is unique, and we reflect this belief in our custom app development, ensuring that your app resonates with your brand and patient care philosophy.",
          },
          {
            image: "/assets/icons/comprehensive-support-icon.png",
            title: "Comprehensive Support",
            description:
              "From conceptualization to post-launch, our team provides end-to-end support, guaranteeing a smooth journey and continuous operation of your app.",
          },
          {
            image: "/assets/icons/customizable-features-icon.png",
            title: "Cutting-edge Technology",
            description:
              "Techanic InfoTech employs the latest technology trends, from AI to IoT, ensuring your app is not just current but future-ready.",
          },
          {
            image: "/assets/icons/advance-security-icon.png",
            title: "Security and Compliance",
            description:
              "We prioritize the security of your data with HIPAA-compliant app development, protecting both patient information and your reputation.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalability",
            description:
              "Our scalable app solutions grow with your business, ensuring that as your patient base expands, your app can handle increased demand without a hitch.",
          },
        ]}
        color="0F53FF"
      />

      <Portfolio
        headingpart1="Proven Expertise ,"
        headingpart2="Trusted Portfolio"
        heading="Proven Expertise ,Trusted Portfolio"
        bgColor="ffffff"
        paragraph={`Our portfolio showcases a range of successfully launched doctor on demand apps, each a testament to our commitment to excellence and innovation in healthcare app development. Let our past work inspire your future success.`}
        cards={cards}
        btntext="white"
        divBtn="#05476C"
        direction="right"
        color1="#0D5984"
        color2="#05476C"
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Got questions about our doctor on demand app development services? Find the answers here to our most commonly asked questions, or reach out for more information."
        questions={[
          "Q1: What is the typical cost of developing a doctor on demand app?",
          "Q2: How long does it take to develop a doctor on demand app?",
          "Q3: Do you provide post-launch app support?",
          "Q4: How do you ensure the security and privacy of the app?",
          "Q5: Will I own the source code of my doctor on demand app?",
          "Q6: Do you sign an NDA?",
        ]}
        answers={[
          "A1: The cost varies depending on app complexity, features, and specific client requirements. We offer competitive pricing and can provide a detailed quote after understanding your project needs.",
          "A2: Development time can range from a few weeks to several months, influenced by the app's features, design complexity, and iterations based on feedback.",
          "A3: Yes, we offer comprehensive post-launch support and maintenance to ensure your app continues to perform optimally and stays updated with the latest technology.",
          "A4: Our apps are developed adhering to HIPAA compliance standards, with robust security protocols like encryption and secure data storage to protect user privacy.",
          "A5: Absolutely, once the app is developed and fully paid for, the ownership of the source code is transferred to you.",
          "A6: Yes, we understand the importance of confidentiality in healthcare app development and are willing to sign a Non-Disclosure Agreement (NDA) before commencing the project.",
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
