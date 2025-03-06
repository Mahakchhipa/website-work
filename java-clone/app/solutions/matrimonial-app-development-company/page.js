import OurClients from "@/components/clients/page";

import Portfolio from "@/components/getStarted/portfolio/portfolio";

import ClientTestimonials from "@/lib/clientsReviews/clients";
import TechSuccess from "@/lib/colab/techSuccess";

import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import HiringDevs from "@/lib/secondpage/hireDev";

import BannerImage from "@/components/BannerImage";
import CardSection from "@/lib/secondpage/cardssection";
import CTAButton from "@/components/getStarted/CTAButton";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import Panels from "@/lib/secondpage/Panels";
import SolutionPagesCards from "@/lib/secondpage/devProcess/SolutionPagesCards";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import CTABannerImage from "@/lib/secondpage/CTABannerImage";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import Icons from "@/lib/secondpage/Icons";

const cards = [
  {
    id: 1,
    image: "/assets/portfolioImages/nepali-matrimony-image.webp",
    heading: "Nepali Matrimony",
    para: "A portal called Nepali Matrimony was created to assist individuals in Nepal and the Nepali diaspora in finding compatible life partners. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.nepalimatrimony&pcampaignid=web_share",
    webLink: "https://www.nepal-matrimony.com/success",
  },
  {
    id: 2,
    image: "/assets/portfolioImages/pakistani-matrimony-image.webp",
    heading: "Pakistani Matrimony",
    para: "The purpose of the app Pakistani Matrimony is to assist individuals of Pakistani descent in finding compatible life partners. ",
    playstoreLink:
      "https://play.google.com/store/apps/details?id=com.PakistaniMatrimony&pcampaignid=web_share",
    webLink: "https://nikah.com/pk",
  },
  {
    id: 3,
    image: "/assets/portfolioImages/wedgate-matrimony-image.webp",
    heading: "Wedgate Matrimony",
    para: "A mobile app called Wedgate Matrimony serves people who are looking for life partners in the Indian community. ",
    webLink:
      "https://www.wedgatematrimony.com/?gad_source=1&gclid=Cj0KCQjwmMayBhDuARIsAM9HM8e1O4LHd067t4qm1axI2l5JgJtiaE-gsPSml8w7IIVeaLX3Tmzl6_kaAkWwEALw_wcB",
  },
];

export const metadata = {
  contentLanguage: "en-us",
  title: "Matrimonial App Development Company - Techanic Infotech",
  description:
    "Techanic Infotech is a leading matrimonial app development company. We provide matrimonial app development services for businesses worldwide.",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Matrimonial App Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading matrimonial app development company. We provide matrimonial app development services for businesses worldwide.",
    url: "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/dsolutions/matrimonial-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    handle: "@Techanicinfo",
    title: "Matrimonial App Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading matrimonial app development company. We provide matrimonial app development services for businesses worldwide.",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/dsolutions/matrimonial-app-development-og.webp", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};
export default function Matrimonial() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            priceRange: "$25-$50",
            name: "Matrimonial App Development Company - Techanic Infotech",
            url: "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
            image:
              "https://www.techanicinfotech.com/OGI/dsolutions/matrimonial-app-development-og.webp",
            description:
              "Techanic Infotech is a leading matrimonial app development company. We provide matrimonial app development services for businesses worldwide.",
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
            image: "https://www.techanicinfotech.com/OGI/dsolutions/matrimonial-app-development-og.webp",
            "@id":
              "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
            url: "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
            priceRange: "$25-$50",
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
              "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
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
            url: "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
            logo: "https://www.techanicinfotech.com/OGI/dsolutions/matrimonial-app-development-og.webp",
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
              "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
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
              "https://www.techanicinfotech.com/solutions/matrimonial-app-development-company",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the cost of matrimonial app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost can vary based on the complexity, features, and design specifics of the app. We offer a tailored quote after understanding your exact requirements to ensure cost-effective and value-driven development.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to develop a matrimonial app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Development time is contingent on the scope of your project. A standard matrimonial app can take anywhere from a few weeks to several months. We can provide a more accurate timeline once we discuss and define the project scope.",
                },
              },
              {
                "@type": "Question",
                name: "Do you sign a Non-Disclosure Agreement (NDA)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Protecting your intellectual property and privacy is paramount. We're committed to confidentiality and are happy to sign an NDA before any detailed discussions.",
                },
              },
              {
                "@type": "Question",
                name: "Can you customize matrimonial apps to specific needs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in creating custom matrimonial apps tailored to the unique needs of your target audience, ensuring a perfect fit for your business model.",
                },
              },
              {
                "@type": "Question",
                name: "What post-launch support do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide comprehensive matrimonial app maintenance and support services post-launch to ensure your app remains updated with the latest technologies and features.",
                },
              },
              {
                "@type": "Question",
                name: "How do you ensure the security of the matrimonial app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We integrate the latest security protocols, including secure coding practices, data encryption, and compliance with privacy laws, to protect user data and ensure a secure platform.",
                },
              },
              {
                "@type": "Question",
                name: "What technologies do you use for matrimonial app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our tech stack includes the latest and most reliable technologies such as AI matchmaking algorithms, scalable server architectures, and intuitive UX/UI design tools.",
                },
              },
              {
                "@type": "Question",
                name: "How do we track the progress of our matrimonial app development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We believe in transparent communication and provide regular updates and access to project management tools where you can track progress and provide feedback.",
                },
              },
            ],
          }),
        }}
      />
      <BannerImage
        headingPart1="Matrimonial App "
        headingPart2="Development Company"
        spancolor="#0F4FFF"
        btnbg="#0F4FFF"
        btntext="white"
        paragraph="Navigate the path of creating meaningful connections with premier matrimonial app development company. At Techanic InfoTech, we blend innovation with tradition to develop matrimonial apps that are secure, user-friendly, and tailored to meet the unique needs of modern love. Trust us to empower your matrimonial journey with cutting-edge technology."
        // showVideo={false}
        textColor1="white"
        bgImage="/assets/bannerimages/matrimony-banner-image.webp"
        mobileBackground="/assets/bannerimages/matrimony-banner-mobile-image.webp"
        opacity="10"
        btnContent="Let’s Get Started "
        isOpaque={false}
      />
      <OurClients
        headingpart1="Working With "
        headingpart2="The Best "
        paragraphText="Our Clients"
      />
      <CardSection
        id="grad-5"
        headingPart1="Comprehensive Matrimonial"
        headingPart2="Solution Development Services"
        mobileheadingPart1="Matrimonial Solution"
        mobileheadingPart2="Development
              Services"
        paragraph="At Techanic InfoTech, we offer a spectrum of matrimonial app development services to launch your platform with a promise of quality and commitment. From app creation to website development, our solutions are designed to foster connections and build a thriving matrimonial community."
        cardItems={[
          {
            image: "/assets/icons/classified-icon.png",
            title: "Matrimonial App Development",
            description:
              "Our matrimonial app development services ensure a seamless, user-friendly experience. We focus on creating interactive and intuitive apps that connect soulmates across the globe as leading Matrimonial platform development company",
          },
          {
            image: "/assets/icons/classified-software-development-icon.png",
            title: "Matrimonial Website Development",
            description:
              "Craft your online presence with our matrimonial website development. We design websites that are not only visually appealing but also robust and scalable, ready to meet the demands of countless users.",
          },
          {
            image: "/assets/icons/custom-matrimonial-icon.png",
            title: "Custom Matrimonial App Design",
            description:
              "Tailor-made solutions with our custom matrimonial app design services cater to your specific business needs. Stand out in the market with a unique app that reflects your brand's vision and values.",
          },
          {
            image: "/assets/icons/matrimonial-software-development-icon.png",
            title: "Matrimonial Software Development ",
            description:
              "We provide comprehensive matrimonial software solutions that encompass advanced features and functionalities. Our Matrimonial portal development solution ensures reliability and efficiency in helping users find their perfect match.",
          },
          {
            image: "/assets/icons/classified-maintenance-icon.png",
            title: "On-Demand Matrimonial Portal Development Services ",
            description:
              "Develop a fully functional matrimonial portal with our expert matrimonial portal development company. Our portals are equipped with the latest technologies to facilitate a safe and engaging environment for users seeking life partners.",
          },
          {
            image: "/assets/icons/dating-app-maintenance-icon.png",
            title: "On-Demand Matrimonial App Development",
            description:
              "Embrace flexibility with our on-demand matrimonial app development services. We offer scalable solutions that grow with your business, ensuring you can meet the evolving preferences of your users.",
          },
        ]}
        color="0F53FF"
        bgColor="#ffffff"
      />
      <ExpertsDev
        heading="Start Your Success Story"
        paragraph="Begin the journey towards a successful matchmaking business. Tap into the world of possibilities with our bespoke matrimonial app solutions designed for engagement and love."
        isGradientPage={false}
        backColor="#FDBEC0"
        color="FDBEC0"
        image="/assets/matrimonial-expert-section-image.webp"
        text="Customize Now"
        btnbg="#000000"
        btntext="#ffffff"
        justifyImage="center"
      />

      <Panels
        headingPart1="Innovative Features For"
        headingPart2="Matchmaking Excellence"
        paragraph="Elevate your matrimonial service with our suite of advanced features. Designed for engagement and user satisfaction, our features set the stage for love to blossom."
        li1="User Panel"
        li2="Admin Panel"
        li3="Advance Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small3="Advance"
        showLi3={true}
        // bgColor="F3F3FA"
        textColor1="white"
        textColor="black"
        hoverBgColor="buttonGradient"
        // backColor="#282828"
        userPanelCards={[
          {
            icon1: Icons.UserProfile,
            h1: "Personalized Profiles",
            p1: "Users can create detailed profiles to express their personality and preferences.",
            icon2: Icons.AdvanceMatchFilters,
            h2: "Advanced Match Filters",
            p2: "Search functionality with custom filters to find the perfect match.",
          },
          {
            icon1: Icons.SecureMessaging,
            h1: "Secure Messaging",
            p1: "A private and secure communication channel for users to connect.",
            icon2: Icons.Favorites,
            h2: "Favorites & Interests",
            p2: "Option to bookmark favorite profiles and express interest discreetly.",
          },
          {
            icon1: Icons.RealTimeAlerts,
            h1: "Real-Time Notifications",
            p1: "Instant updates on profile matches, messages, and interests.",
            icon2: Icons.UserFeedback,
            h2: "User Feedback System",
            p2: "An integrated system for users to provide feedback for continuous improvement.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.DashboardAnalytics,
            h1: "Dashboard Analytics",
            p1: "Comprehensive analytics for monitoring user activity and app performance.",
            icon2: Icons.UserManagement,
            h2: "User Management",
            p2: "Full control over user profiles, with options to moderate content for quality.",
          },
          {
            icon1: Icons.FinancialManagement,
            h1: "Financial Reporting",
            p1: "Detailed financial reports to track revenue streams effectively.",
            icon2: Icons.MatchmakingAlgorithms,
            h2: "Matchmaking Algorithms",
            p2: "Control over the algorithms that drive matches between profiles.",
          },
          {
            icon1: Icons.MarketingTools,
            h1: "Marketing Tools Integration",
            p1: "Tools to promote the app and engage users through various channels.",
            icon2: Icons.Support,
            h2: "Technical Support Access",
            p2: "Quick access to technical support for maintaining app integrity.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: Icons.AIPoweredMatchmaking,
            h1: "AI-Powered Matchmaking",
            p1: "Intelligent algorithms that learn and adapt to user preferences.",
            icon2: Icons.Location,
            h2: "Geolocation Services",
            p2: "Users can search for matches based on their location preferences.",
          },
          {
            icon1: Icons.ProfileManagement,
            h1: "Profile Verification",
            p1: "Rigorous verification process to ensure genuine profiles.",
            icon2: Icons.MultiLanguageSupport,
            h2: "Multi-language Support",
            p2: "The app supports multiple languages for a diverse user base.",
          },
          {
            icon1: Icons.InAppPurchases,
            h1: "In-App Purchases",
            p1: "Feature to monetize through premium features and subscriptions.",
            icon2: Icons.BehavioralAnalytics,
            h2: "Behavioral Analytics",
            p2: "Insights into user behavior to refine and improve the matchmaking process.",
          },
        ]}
      />
      {/* <Experts
        heading="Customize Your Matchmaking"
        paragraph="Personalize your approach to matrimonial services. With our custom matrimonial app development, craft an exclusive experience for your users."
        text="Customize Now"
        media="image"
        imageSrc="backgroundImages/matrimonial-experts-back.jpg"
        TextColor="white"
        btntext="white"
        divBtn="#006a4e"
        direction="right"
        color1="#339D81"
        color2="#006a4e"
        justify="end"
      /> */}
      <HiringDevs
        heading="Hire Expert Matrimonial App Developers"
        paragraph1="Embark on a journey of crafting your dream matrimonial platform with our team of skilled matrimonial portal developers. At Techanic InfoTech, we understand the nuances of matchmaking and bring you a team that's adept in turning your vision into a reality. Our website developers are not just coders; they are architects of digital matchmaking spaces."
        paragraph2="By hiring our matrimonial app developers, you gain access to professionals who are up-to-date with the latest trends and technologies in the dating and matrimonial app industry. They work tirelessly to ensure that your app is robust, secure, and delivers a seamless user experience that stands the test of time and technology shifts."
        listData={[
          "Tailored Development Approach",
          "Cutting-Edge Tech Expertise",
          "Continuous Technical Support",
          "Agile & Adaptive Coding",
        ]}
        // bgColor="E7E7E8"
        divBtn="#006a4e"
        direction="right"
        color1="#339D81"
        color2="#006a4e"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Expand "
        headingPart2="Your Horizons"
        paragraph="Why settle for the ordinary when your matrimonial app can be extraordinary? Our on demand matrimonial portal development services offer scalability, robust features, and a global reach. Elevate your platform with our comprehensive matrimonial app development solutions that cater to every need. Make your mark in the matrimonial industry with an app that's as unique as your users."
        n1="5"
        p1="Years Experience"
        n2="99"
        p2=" Client Retention"
        n3="730"
        p3="Satisfied Customers"
        n4="70"
        p4="Expert Developers"
        bgColor="#F3F3FA"
      />
      <Languages
        head="Built With The Best Tech Stack"
        iconheight="60px"
        iconwidth="60px"
        para="Our technical expertise is our pride. We leverage a diverse tech stack, ensuring our matrimonial app development services utilize industry-leading technologies. From scalable server architectures to intuitive front-end designs, our stack is curated to build top-notch digital matrimonial platforms."
        sections={[
          { image: "/assets/icons/backend-icon.svg", label: "Backend" },

          {
            image: "/assets/icons/payment-icon.svg",
            label: "Payments",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database",
          },
          {
            image: "/assets/icons/cloud-environment-icon.png",
            label: "Cloud Environments",
            flipIcon: "icons/cloud-environment.png",
          },
          {
            image: "/assets/icons/realtime-analytics.svg",
            label: "Realtime Analytics",
          },
        ]}
        languages={[
          {
            image: "/assets/icons/php-development-icon.png",
            label: "PHP",
            section: "Backend",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "Node.js",
            section: "Backend",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Backend",
          },
          {
            image: "/assets/icons/paypal-icon.png",
            label: "PayPal",
            section: "Payments",
          },
          {
            image: "/assets/icons/braintree-icon.png",
            label: "Braintree",
            section: "Payments",
          },
          {
            image: "/assets/icons/stripe-icon.png",
            label: "Stripe",
            section: "Payments",
          },

          {
            image: "/assets/icons/cassandra-icon.png",
            label: "Cassandra",
            section: "Database",
          },
          {
            image: "/assets/icons/mailchimp-icon.png",
            label: "Mail Chimp",
            section: "Database",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Database",
          },
          {
            image: "/assets/icons/hbase-icon.png",
            label: "HBase",
            section: "Databases",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Database",
          },
          {
            image: "/assets/icons/aws-icon.png",
            label: "AWS",
            section: "Cloud Environments",
          },
          {
            image: "/assets/icons/google-icon.png",
            label: "Google",
            section: "Cloud Environments",
          },
          {
            image: "/assets/icons/azure-icon.png",
            label: "Azure",
            section: "Cloud Environments",
          },
          {
            image: "/assets/icons/big-data-icon.png",
            label: "BigData",
            section: "Realtime Analytics",
          },
          {
            image: "/assets/icons/apacheflink-icon.png",
            label: "Apache Flink",
            section: "Realtime Analytics",
          },
          {
            image: "/assets/icons/ibm-icon.png",
            label: "IBM",
            section: "Realtime Analytics",
          },
          {
            image: "/assets/icons/hadoop-icon.png",
            label: "Hadoop",
            section: "Realtime Analytics",
          },
          {
            image: "/assets/icons/spark-icon.png",
            label: "Spark",
            section: "Realtime Analytics",
          },
        ]}
        bgColor="#F3F3FA"
      />

      <AppDevelop
        headingPart1="Matrimonial App "
        headingPart2="Development Process"
        // heading="Matrimonial App Development Process"
        paragraph="Our development process is meticulous and transparent, ensuring that your matrimonial app is developed to the highest standards. From initial concept to launch, we prioritize your vision and user satisfaction at every step."
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Requirement Analysis"
        p1="We carefully analyze your requirements to ensure a targeted development strategy."
        image2="/assets/icons/design-prototype-icon.png"
        h2="Design & Prototyping"
        p2="Crafting intuitive designs and interactive prototypes for stakeholder review."
        image3="/assets/icons/development-testing-icon.png"
        h3="Agile Development"
        p3="Iterative development with regular updates for continuous improvement."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance"
        p4="Rigorous testing to ensure a bug-free and seamless user experience."
        image5="/assets/icons/deployment-icon.png"
        h5="Deployment"
        p5="Launching your app with precision to ensure optimal performance across all devices."
        image6="/assets/icons/maintenance-updates-icon.png"
        h6="Maintenance & Support"
        p6="Providing ongoing support and updates to keep your app competitive."
        align="center"
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Requirement Analysis",
            description:
              "We carefully analyze your requirements to ensure a targeted development strategy.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design & Prototyping",
            description:
              "Crafting intuitive designs and interactive prototypes for stakeholder review.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Agile Development",
            description:
              "Iterative development with regular updates for continuous improvement.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Rigorous testing to ensure a bug-free and seamless user experience.",
          },
          {
            image: "/assets/icons/deployment-icon.png",
            title: "Deployment",
            description:
              "Launching your app with precision to ensure optimal performance across all devices.",
          },
          {
            image: "/assets/icons/maintenance-updates-icon.png",
            title: "Maintenance & Support",
            description:
              "Providing ongoing support and updates to keep your app competitive.",
          },
        ]}
      />

      <ExpertsDev
        heading="Customize Your Matchmaking"
        paragraph="Personalize your approach to matrimonial services. With our custom matrimonial app development, craft an exclusive experience for your users."
        text="Customize Now"
        bgColor="ffffff"
        btnbg="#000000"
        btntext="white"
        isGradientPage={false}
        justifyImage="center"
        backColor="#FDBEC0"
        image="/assets/matrimony-background-cta-image.webp"
      />
      <SolutionPagesCards
        headingPart1="Advantages Of Partnering With Us"
        headingPart2="For Matrimonial App Development"
        paragraph={`Choosing Techanic InfoTech for your matrimonial app development guarantees a partner committed to excellence and innovation. Our approach ensures that your app stands out in the market, offering a unique blend of technology and user-centric design.`}
        cardItems={[
          {
            image: "/assets/icons/expert-developement-team-icon.png",
            title: "Expert Development Team",
            description:
              "Our developers possess the niche expertise required for matrimonial app development, ensuring that your app is built by knowledgeable professionals who understand the matchmaking domain.",
          },
          {
            image: "/assets/icons/advance-security-icon.png",
            title: "Advanced Security Measures",
            description:
              "We prioritize the safety and privacy of your users with state-of-the-art security protocols, creating a trusted environment for them to connect and interact.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalable Solutions",
            description:
              "Our development strategy involves scalable solutions that grow with your business, ensuring that as your user base expands, your app can handle increased traffic and data with ease.",
          },
          {
            image: "/assets/icons/customizable-features-icon.png",
            title: "Customizable Features",
            description:
              "We offer fully customizable features that allow you to tailor the user experience to match the specific needs and preferences of your target audience.",
          },
          {
            image: "/assets/icons/cost-effective-development-icon.png",
            title: "Cost-Effective Development",
            description:
              "Our competitive pricing models provide cost-effective development without compromising on quality, giving you the best return on investment.",
          },
          {
            image: "/assets/icons/continuous-support-icon.png",
            title: "Post-Launch Support",
            description:
              "Our relationship doesn't end at launch. We provide comprehensive post-launch support and maintenance to ensure your app remains up-to-date and continues to deliver excellent user experiences.",
          },
        ]}
        color="0F53FF"
        bgColor="ffffff"
      />
      <Portfolio
        heading="Success In Matchmaking "
        headingpart1="Success"
        headingpart2="In Matchmaking"
        paragraph={`Explore our portfolio to witness the successful love stories our matrimonial apps have written. Each project reflects our commitment to excellence in matrimonial app development, showcasing diverse functionalities that bring people together.`}
        cards={cards}
        divBtn="#006a4e"
        direction="right"
        color1="#339D81"
        color2="#006a4e"
        btntext="white"
        bgColor="F3F3FA"
      />
      <FrequentQuestions
        heading="Frequently Asked Questions (FAQs)"
        paragraph="Got questions about matrimonial app development? We’ve compiled a list of FAQs to help clarify your queries and ease your decision-making process."
        questions={[
          "Q1: What is the cost of matrimonial app development?",
          "Q2: How long does it take to develop a matrimonial app?",
          "Q3: Do you sign a Non-Disclosure Agreement (NDA)?",
          "Q4: Can you customize matrimonial apps to specific needs?",
          "Q5: What post-launch support do you offer?",
          "Q6: How do you ensure the security of the matrimonial app?",
          "Q7: What technologies do you use for matrimonial app development?",
          "Q8: How do we track the progress of our matrimonial app development?",
        ]}
        answers={[
          "A1: The cost can vary based on the complexity, features, and design specifics of the app. We offer a tailored quote after understanding your exact requirements to ensure cost-effective and value-driven development.",
          "A2: Development time is contingent on the scope of your project. A standard matrimonial app can take anywhere from a few weeks to several months. We can provide a more accurate timeline once we discuss and define the project scope.",
          "A3: Absolutely. Protecting your intellectual property and privacy is paramount. We're committed to confidentiality and are happy to sign an NDA before any detailed discussions.",
          "A4: Yes, we specialize in creating custom matrimonial apps tailored to the unique needs of your target audience, ensuring a perfect fit for your business model.",
          "A5: We provide comprehensive matrimonial app maintenance and support services post-launch to ensure your app remains updated with the latest technologies and features.",
          "A6: We integrate the latest security protocols, including secure coding practices, data encryption, and compliance with privacy laws, to protect user data and ensure a secure platform.",
          "A7: Our tech stack includes the latest and most reliable technologies such as AI matchmaking algorithms, scalable server architectures, and intuitive UX/UI design tools.",
          "A8: We believe in transparent communication and provide regular updates and access to project management tools where you can track progress and provide feedback.",
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
