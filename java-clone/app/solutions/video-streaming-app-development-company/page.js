import OurClients from "@/components/clients/page";
import CloneApp from "@/lib/secondpage/cloneapp";
import TechSuccess from "@/lib/colab/techSuccess";
import CardSection from "@/lib/secondpage/cardssection";
import Panels from "@/lib/secondpage/Panels";
import ExpertsDev from "@/lib/secondpage/ExpertsDev";
import HireDevelopers from "@/lib/secondpage/HireDevelopers";
import TechnologiesUsed from "@/components/getStarted/technologies";
import AppDevelop from "@/lib/secondpage/mobileApp/Appdevelop";
import Portfolio from "@/components/getStarted/portfolio/portfolio";
import CTAButton from "@/components/getStarted/CTAButton";
import ServicesCtaButton from "@/components/getStarted/ServicesCtaButtons";
import ClientTestimonials from "@/lib/clientsReviews/clients";
// import ContactInfo from "@/components/formSection/contactInfo";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import BannerImage from "@/components/BannerImage";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import Icons from "@/lib/secondpage/Icons";
export const metadata = {
  title: " Video Streaming App Development Company - Techanic Infotech",
  description:
    " Techanic Infotech is a leading video streaming app development company. Hire video streaming app developers to get unique entertainment experiences..",
  contentLanguage: "en-us",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company"
    ),
  
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: " Video Streaming App Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading video streaming app development company. Hire video streaming app developers to get unique entertainment experiences..",
    url: "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",

    alt: "Techanic Infotech",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: " Video Streaming App Development Company - Techanic Infotech",
    description:
      "Techanic Infotech is a leading video streaming app development company. Hire video streaming app developers to get unique entertainment experiences..",
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    // image: "https://www.techanicinfotech.com/OGI/og-image.png",
    url: "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
    images: [
      {
        url: "https://www.techanicinfotech.com/OGI/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
};

// const slideFood = [
//   {
//     img1: pikitImg1,
//     img2: pikitImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=in.pikit.app&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/in/app/pikit-food-grocery-delivery/id1536007416",
//   },
//   {
//     img1: msosiImg1,
//     img2: msosiImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/am/app/msosidrop-food-delivery/id1669215594",
//   },
//   {
//     img1: glovoImg1,
//     img2: glovoImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=tz.co.dukaapp.food&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/us/app/glovo-food-delivery-and-more/id951812684",
//   },
//   {
//     img1: wellServedImg1,
//     img2: wellServedImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       "https://play.google.com/store/apps/details?id=com.teonite.wellserved&pcampaignid=web_share",
//     appleLink: "https://apps.apple.com/pl/app/wellserved/id874376551",
//   },
//   {
//     img1: menuamImg1,
//     img2: menuamImg2,
//     heading: "Enjoy your time working",
//     paragraph:
//       "Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.",
//     playstoreLink:
//       " https://play.google.com/store/apps/details?id=am.menu.app&pcampaignid=web_share",
//     appleLink:
//       "https://apps.apple.com/us/app/menu-am-food-more-delivery/id991535987",
//   },
// ];
export default function VideoStreaming() {
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
        "name": "Video Streaming App Development Company - Techanic Infotech",
        "url": "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
        "image": "https://www.techanicinfotech.com/OGI/og-image.png",
        "description": "Techanic Infotech is a leading video streaming app development company. Hire video streaming app developers to get unique entertainment experiences...",
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
      {/* <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Techanic Infotech",
        "image": "https://www.techanicinfotech.com/OGI/og-image.png",
        "@id": "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
        "url": "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
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
          "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company"
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
        "url": "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
        "logo": "https://www.techanicinfotech.com/OGI/og-image.png",
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
          "https://www.techanicinfotech.com/solutions/video-streaming-app-development-company"
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
        "@id":"https://www.techanicinfotech.com/solutions/video-streaming-app-development-company",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the process of video streaming app development at your company? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our development process is comprehensive, beginning with conceptualization and planning, followed by design, technical development, rigorous quality assurance, deployment, and ongoing maintenance and updates to ensure a state-of-the-art streaming experience."
            }
          },
          {
            "@type": "Question",
            "name": "Can we hire developers for both Android and iOS video streaming app development? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, we offer dedicated developers for both platforms. Our team is proficient in creating cross-platform streaming apps that provide a consistent user experience on both Android and iOS devices."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure the security and privacy of the video streaming app? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Security is our top priority. We integrate the latest encryption methods, and secure protocols, and follow best practices for data protection. We also adhere to strict NDAs to ensure your project’s confidentiality."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of support can we expect after the launch of the app? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Post-launch, we provide continuous support to address any technical issues, along with regular updates to keep your app optimized and introduce new features that keep your service competitive."
            }
          },
          {
            "@type": "Question",
            "name": " How do you handle content management for a video streaming service? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our developers implement a robust content management system (CMS) that allows for easy uploading, categorizing, and managing video content, providing content providers with a seamless experience."
            }
          },
          {
            "@type": "Question",
            "name": "What are the monetization options available for video streaming apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We can integrate various monetization models such as subscriptions, pay-per-view, advertisements, and sponsored content to ensure a profitable streaming service. "
            }
          },
              {
            "@type": "Question",
            "name": "How is the cost of video streaming app development determined? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": Development cost varies depending on app complexity, features, platform choice, and development time. We provide a detailed quote after discussing your specific requirements to ensure transparency."
            }
          },
                {
            "@type": "Question",
            "name": "Do you offer any packages for startups or small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Yes, we offer scalable solutions tailored to the needs and budgets of startups and small businesses, ensuring they can launch competitive streaming apps without compromising on quality."
            }
          }
        ]
      }
    `,
        }}
      />
      <BannerImage
        bgImage="/assets/bannerimages/video-streaming-app-banner-image.webp"
        mobileBackground="/assets/bannerimages/video-streaming-app-banner-mobile-image.webp"
        headingPart1="Video Streaming "
        headingPart2="App Development Company"
        paragraph={`Elevate Your Audience's Viewing with Cutting-edge Video Streaming App Solutions,
         Driving business experience with superior user experience.Build dynamic connections in real time,
          crafted by Techanic Infotech, a leading Video Streaming app development company.
         `}
        isOpaque={true}
        btnContent="View More"
        contentposition="center"
        textposition="start"
        arrowbg="white"
        arrowtext="black"
        textColor1="white"
        btntextcolor="white"
        btnbg="#ffffff"
        spancolor="#0F4FFF"
      />

      <OurClients
        headingpart1="Working With"
        headingpart2="The Best"
        paragraphText="Clients"
      />
      <CloneApp
        id="grad-5"
        headingPart1="Video Streaming Clone"
        headingPart2="App Development"
        paragraph="Techanic InfoTech specializes in video streaming clone app development, offering customized solutions that replicate the success of popular streaming platforms. Our clone apps incorporate essential features and functionalities to ensure a seamless and engaging viewing experience for users."
        cloneData={[
          {
            id: 0,
            label: "Netflix Clone App Development",
            content:
              "Harness the power of on-demand video streaming app development to launch your own Netflix-like platform. Our video streaming app developers craft immersive user experiences that captivate and engage, ensuring your app is the go-to destination for video content.",
            image: "/assets/cloneappImages/netflix-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 1,
            label: "Hulu Clone App Development",
            content:
              "Enter the competitive streaming service arena with a Hulu clone app, designed by a top-tier video streaming app development company. Our live streaming app development services focus on creating intuitive interfaces and robust architectures for seamless streaming.",
            image: "/assets/cloneappImages/hulu-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 2,
            label: "Amazon Prime Video Clone App Development",
            content:
              "Our video streaming app solutions make it simple to roll out an Amazon Prime Video clone app. From user experience to video content management, our team delivers a comprehensive package tailored to your business model.",
            image: "/assets/cloneappImages/amazon-prime-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 3,
            label: "Disney+ Clone App Development",
            content:
              "Take advantage of our online video streaming app development expertise to build a Disney+ clone that features family-friendly content and live broadcasts. Our live-streaming app developers ensure high performance and real-time streaming capabilities.",
            image: "/assets/cloneappImages/disney-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 4,
            label: "HBO Max Clone App Development",
            content:
              "Collaborate with our video streaming app development company to produce an HBO Max replica app. We integrate the latest VOD app development insights to deliver a high-caliber streaming application, complete with monetization models.",
            image: "/assets/cloneappImages/hbo-max-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 5,
            label: "Apple TV Clone App Development",
            content:
              "Embrace the future with an Apple TV clone app that our iOS video streaming app development team can help bring to life. Live streaming app solutions are at the core of what we offer, ensuring your app supports the latest in live video streaming technology.",
            image: "/assets/cloneappImages/apple-tv-clone-app-image.webp", // Update with correct image path
          },
        ]}
      />

      <CTAButton
        heading="Deliver Superior Streaming Service With Robust Streaming Application "
        paragraph="Collaborate with our video streaming app designing and development team and turn your idea into reality. "
        btntext="Let’s get started."
        backgroundImage="/assets/bannerimages/video-streaming-cta-banner-image-1.png"
        textColor="white"
        bgColor="#ffffff"
        text="black"
      />
      <CardSection
        headingPart1="Innovative On-Demand Video "
        headingPart2="Streaming App Development Services"
        paragraph="Give a digital edge to your streaming services with our range of on-demand video streaming app development services hand-crafted for you. Techanic InfoTech is here to help you be the next best."
        cardItems={[
          {
            image:
              "/assets/icons/servicesIcons/custom-video-streaming-app-icon.png",
            title: "Custom Video Streaming App Development",
            description:
              "Create a unique space in the digital streaming world with our custom video streaming app development services. We focus on delivering tailored functionalities, robust performance, and a user-centric design to enhance the video content consumption experience.",
          },
          {
            image:
              "/assets/icons/servicesIcons/music-video-app-development-icon.png",
            title: "Music Video Streaming App Development",
            description:
              "Dive into the rhythm with a music video streaming app crafted by experienced video streaming app developers. Our innovative solutions offer a specialized platform for music lovers to enjoy, discover, and share music videos with a global audience.",
          },
          {
            image: "/assets/icons/servicesIcons/live-streaming-icon.png",
            title: "Live Streaming App Development",
            description:
              "Broadcast life as it happens with our live video streaming app development services. Engage with audiences in real-time, leverage monetization models, and deliver high-definition live broadcasts through an intuitive streaming platform.",
          },
          {
            image:
              "/assets/icons/servicesIcons/educational-video-streaming-app-icon.png",
            title: "Educational Video Streaming App Development",
            description:
              "Empower learning and knowledge sharing with an educational video streaming app. Our video streaming app development company specializes in creating apps that provide interactive, educational content, catering to the needs of learners and educators alike.",
          },
          {
            image:
              "/assets/icons/servicesIcons/fitness-streaming-app-development-icon.png",
            title: "Fitness Streaming App Development",
            description:
              "Motivate and inspire health enthusiasts with a fitness streaming app. Our live-streaming app developers incorporate features for live workout sessions, on-demand fitness classes, and real-time interaction to keep your user base active and engaged.",
          },
          {
            image:
              "/assets/icons/servicesIcons/event-broadcasting-app-development-icon.png",
            title: "Event Broadcasting App Development",
            description:
              "Capture and share moments from events with an app designed for live-streaming special occasions. Whether it's a concert, conference, or personal celebration, our live-streaming app solutions make it possible for users to partake in events virtually, from anywhere.",
          },
        ]}
        color="0F53FF"
      />

      {/* <Portfolio
        heading="Portfolio"
        bgColor="ffffff"
        paragraph="Whether it is live video streaming app development or video-on-demand software development, we know how to do it. And our work speaks for itself."
        slides={slideFood}
        btntext="white"
        divBtn="#0000ff "
        direction="right"
        color1="#0000ff"
        color2="#001289"
      /> */}
      <ServicesCtaButton
        heading="Work with the best video streaming app developers"
        paragraph="Want to develop a video streaming app? We have got 
        you covered with an expert video streaming platform development company."
        isGradientPage={true}
        gradient="85.85deg, #E14646 28.05%, #454545 123.64%"
        image="/assets/video-streaming-cta-image.webp"
        showBorder={true}
        border="white"
        initialcolor="white"
        textColor="white"
        text="Customize Now"
        hovercolor="#ffffff"
        hovertext="black"
      />
      <Panels
        headingPart1="Feature Driven Mobile "
        headingPart2="Streaming App Development"
        paragraph="We drive value in our mobile streaming app development solution with a rich feature set that caters to 
        your end users. That’s what makes our live video streaming app stand out from the rest."
        panelImage="/assets/icons/content-provider-panel-icon.svg"
        userPanelCards={[
          {
            icon1: Icons.AccountCreation,
            h1: "Seamless Account Creation",
            p1: "Quick and easy sign-up to start enjoying your favorite shows.",
            icon2: Icons.Recommendations,
            h2: "Personalized Recommendations",
            p2: "Tailored video suggestions based on your viewing history.",
          },
          {
            icon1: Icons.Synchronization,
            h1: "Multi-Device Synchronization",
            p1: "Continue watching across any device, anytime, anywhere.",
            icon2: Icons.SocialSharing,
            h2: "Social Sharing Integration",
            p2: "Share favorite moments or shows directly on social media.",
          },
          {
            icon1: Icons.OfflineDownload,
            h1: "Offline Download Capability",
            p1: "Download content to watch later without an internet connection.",
            icon2: Icons.RealTimeAlerts,
            h2: "Real-time Notifications",
            p2: "Stay updated with alerts for new releases and live events.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.UserManagement,
            h1: "User Management System",
            p1: "Comprehensive tools to manage user accounts and permissions.",
            icon2: Icons.ContentModeration,
            h2: "Content Moderation Controls",
            p2: "Ensure content quality with advanced moderation features.",
          },
          {
            icon1: Icons.FinancialManagement,
            h1: "Financial Dashboard",
            p1: "Oversee revenue streams and process payouts to content providers.",
            icon2: Icons.PromotionsManagement,
            h2: "Marketing and Promotion Modules",
            p2: "Craft and monitor marketing campaigns within the platform.",
          },
          {
            icon1: Icons.Support,
            h1: "Technical Support Hub",
            p1: "Manage support tickets and provide assistance efficiently.",
            icon2: Icons.AccountApproval,
            h2: "System Analytics Suite",
            p2: "Access in-depth insights for informed decision-making and strategy development.",
          },
        ]}
        managenentPanelCards={[
          {
            icon1: Icons.Dashboard,
            h1: "Intuitive Dashboard",
            p1: "Easily manage and upload video content in a user-friendly interface.",
            icon2: Icons.AnalyticsReporting,
            h2: "Analytics and Reporting",
            p2: "Track viewer engagement and performance metrics in real time.",
          },
          {
            icon1: Icons.ContentModeration,
            h1: "Content Monetization Options",
            p1: "Multiple revenue models such as ads, subscriptions, or pay-per-view.",
            icon2: Icons.Security,
            h2: "Robust Security Features",
            p2: "Protect your content with state-of-the-art encryption and DRM.",
          },
          {
            icon1: Icons.LiveSession,
            h1: "Live Broadcasting Tools",
            p1: "Stream live content with high-definition quality and low latency.",
            icon2: Icons.MarketingTools,
            h2: "Community Engagement Tools",
            p2: "Interact with viewers through comments, likes, and shares.",
          },
        ]}
        li1Small1="User "
        li1Small2="Admin"
        li1Small4="Content"
        li1="User Panel Features"
        showLi4={true}
        li4="Content Provider Panel Features"
        li2="Admin Panel Features"
        textColor1="white"
        textColor="black"
      />

      {/* <ExpertsDev
        heading="Work with the best video streaming app developers"
        paragraph="Want to develop a video streaming app? We have got 
        you covered with an expert video streaming platform development company."
        isGradientPage={false}
        backColor="#FDBEC0"
        color="FDBEC0"
        image="/assets/matrimonial-expert-section-image.png"
        text="Customize Now"
        btnbg="#000000"
        btntext="#ffffff"
        justifyImage="center"
      /> */}
      <HireDevelopers
        headingPart1="Hire Video App Developers in 24 Hours"
        paragraph1="Harness the expertise of our seasoned video streaming app developers to bring your vision to life. Our team specializes in crafting custom streaming solutions that stand out in the digital landscape. With a focus on innovative features and user-driven design, our developers ensure your platform delivers content seamlessly across all devices."
        paragraph2="Choose excellence for your project by partnering with a Video Streaming app development company that understands the nuances of live video streaming app development. Our developers are adept in the latest technologies, from Android video streaming app development to iOS video streaming app development, positioning your service at the forefront of the streaming revolution. It’s high time to hire live-streaming app developers, contact us now."
        image="/assets/hiring-developers-image.webp"
        btntxt="white"
      />
      <TechSuccess
        headingPart1="Choose The Best "
        headingPart2="Video Streaming App Development Company"
        paragraph="Driven by 5+ years of experience and a proud 99% client retention, we deliver on-demand live-streaming app development solution that works. 
        That’s what makes us the first choice for"
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
        head="Tech Stack for Video Streaming App Development"
        para="Techanic InfoTech uses only the best tech stack for video streaming platform development to ensure the quality of digital products and customer satisfaction. That’s what makes our solution outshine the rest."
        bgColor="#F3F3FA"
        iconheight="60px"
        iconwidth="60px"
        sections={[
          {
            image: "/assets/icons/languages-icon.svg",
            label: "Programming Languages",
          },
          { image: "/assets/icons/front-end-icon.svg", label: "Frontend" },
          {
            image: "/assets/icons/backend-icon.svg",
            label: "Backend & Database",
          },
          {
            image: "/assets/icons/technologies-label-icon.svg",
            label: "JS Frameworks",
          },
          { image: "/assets/icons/ui-ux-label-icon.svg", label: "UI/UX" },
        ]}
        languages={[
          {
            image: "/assets/icons/flutter-icon.png",
            label: "Flutter",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/java-icon.png",
            label: "Java",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/swift-icon.png",
            label: "Swift",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/apple-xcode-icon.png",
            label: "Xcode",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective-C",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/react-native-elements-icon.png",
            label: "React Native",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/wordpress-icon.png",
            label: "WordPress",
            section: "Frontend",
          },
          {
            image: "/assets/icons/laravel-icon.png",
            label: "Laravel",
            section: "Frontend",
          },
          {
            image: "/assets/icons/magento-icon.png",
            label: "Magento",
            section: "Frontend",
          },
          {
            image: "/assets/icons/opencart-icon.png",
            label: "OpenCart",
            section: "Frontend",
          },
          {
            image: "/assets/icons/cakephp-icon.png",
            label: "CakePHP",
            section: "Frontend",
          },
          {
            image: "/assets/icons/code-igniter-icon.png",
            label: "CodeIgniter",
            section: "Frontend",
          },
          {
            image: "/assets/icons/rethink-db-icon.png",
            label: "RethinkDB",
            section: "Backend & Database",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Backend & Database",
          },
          {
            image: "/assets/icons/postgre-sql-icon.png",
            label: "PostgreSQL",
            section: "Backend & Database",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Backend & Database",
          },
          {
            image: "/assets/icons/node-js-icon.png",
            label: "NodeJS",
            section: "JS Frameworks",
          },
          {
            image: "/assets/icons/react-icon.png",
            label: "ReactJS",
            section: "JS Frameworks",
          },
          {
            image: "/assets/icons/angular-icon.png",
            label: "AngularJS",
            section: "JS Frameworks",
          },
          {
            image: "/assets/icons/jasmine-icon.png",
            label: "Jasmine",
            section: "JS Frameworks",
          },
          {
            image: "/assets/icons/mocha-icon.png",
            label: "Mocha",
            section: "JS Frameworks",
          },
          {
            image: "/assets/icons/photoshop-icon.png",
            label: "Photoshop",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/sketch-icon.png",
            label: "Sketch",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/figma-icon.png",
            label: "Figma",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/adobe-xd-icon.png",
            label: "Adobe XD",
            section: "UI/UX",
          },
          {
            image: "/assets/icons/illustrator-icon.png",
            label: "Illustrator",
            section: "UI/UX",
          },
        ]}
      />
      <AppDevelop
        headingPart1="Video Streaming "
        headingPart2="App Development Process"
        paragraph="Here’s the video streaming app development process that our team of developers and designers follow to ensure transparency and collaboration. "
        image1="/assets/icons/requirement-analysis-icon.png"
        h1="Conceptualization and Planning"
        p1="Outline your vision, define the target audience, and establish the core features your video streaming app will offer."
        image2="/assets/icons/design-prototype-icon.png"
        h2="Design and Prototyping"
        p2="Craft a user-centric design with an engaging UI/UX, and develop a prototype to visualize the app's functionality."
        image3="/assets/icons/development-icon.png"
        h3="Technical Development"
        p3="Begin the coding process, set up servers, and integrate streaming protocols for smooth video delivery."
        image4="/assets/icons/quality-assurance-icon.png"
        h4="Quality Assurance"
        p4="Conduct thorough testing for performance, security, and usability to ensure a seamless streaming experience."
        image5="/assets/icons/deployment-icon.png"
        h5="Deployment"
        p5="Launch your app on platforms like iOS and Android, ensuring compliance with respective app store guidelines."
        image6="/assets/icons/maintenance-updates-icon.png"
        h6="Maintenance and Updates"
        p6="Provide continuous support, release regular updates, and add new features to keep the app relevant and efficient."
        cards={[
          {
            image: "/assets/icons/requirement-analysis-icon.png",
            title: "Conceptualization and Planning",
            description:
              "Outline your vision, define the target audience, and establish the core features your video streaming app will offer.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design and Prototyping",
            description:
              "Craft a user-centric design with an engaging UI/UX, and develop a prototype to visualize the app's functionality.",
          },
          {
            image: "/assets/icons/development-icon.png",
            title: "Technical Development",
            description:
              "Begin the coding process, set up servers, and integrate streaming protocols for smooth video delivery.",
          },
          {
            image: "/assets/icons/quality-assurance-icon.png",
            title: "Quality Assurance",
            description:
              "Conduct thorough testing for performance, security, and usability to ensure a seamless streaming experience.",
          },
          {
            image: "/assets/icons/deployment-icon.png",
            title: "Deployment",
            description:
              "Launch your app on platforms like iOS and Android, ensuring compliance with respective app store guidelines.",
          },
          {
            image: "/assets/icons/maintenance-updates-icon.png",
            title: "Maintenance and Updates",
            description:
              "Provide continuous support, release regular updates, and add new features to keep the app relevant and efficient.",
          },
        ]}
        align="center"
      />
      {/* <EwalletCards
   
 
    position="start"
    bgColor="F1F5F9"
    cardBG="ffffff"
    color="0F172A"
    showExtraCards={false}
    radius="8"
/> */}
      <CardSection
        headingPart1="Empowering Business & Users With  "
        headingPart2="Video Streaming App Development "
        paragraph="Techanic Infotech with both hands on deck helps businesses deliver value to their user while also helping businesses improve revenue, streamline business operations, and grow."
        cardItems={[
          {
            image: "/assets/icons/increased-visibility-icon.png",
            title: "Increased Reach and Engagement",
            description:
              "Video streaming apps connect you with a global audience, significantly expanding your market reach and user engagement.",
          },
          {
            image: "/assets/icons/increased-market-research-icon.png",
            title: "Monetization Opportunities",
            description:
              "They open up diverse revenue streams such as subscriptions, advertisements, and pay-per-view services for businesses.",
          },
          {
            image: "/assets/icons/real-time-analytics-data-icon.png",
            title: "Real-Time Content Delivery",
            description:
              "Users enjoy live content with minimal delay, which is ideal for sports, concerts, and real-time interactive shows.",
          },
          {
            image: "/assets/icons/data-driven-insights-icon.png",
            title: "Data-Driven Insights",
            description:
              "Businesses gain valuable insights through analytics on user behavior, preferences, and viewing patterns to make informed decisions.",
          },
          {
            image: "/assets/icons/cost-effective-solution-icon.png",
            title: "Cost-Effective Marketing",
            description:
              "Streaming apps provide a platform for businesses to showcase products and services through live demos and events, reducing traditional marketing costs.",
          },
          {
            image: "/assets/icons/enhanced-user-experience-icon.png",
            title: "Personalized User Experiences",
            description:
              "Advanced algorithms help tailor content to user preferences, enhancing satisfaction and loyalty.",
          },
        ]}
        color="0F53FF"
      />
      <FrequentQuestions
        heading="Frequently asked questions"
        paragraph="Here are answers to some of the most frequently asked questions about video streaming app development services."
        questions={[
          "Q1: What is the process of video streaming app development at your company?",
          "Q2: Can we hire developers for both Android and iOS video streaming app development?",
          "Q3: How do you ensure the security and privacy of the video streaming app?",
          "Q4: What kind of support can we expect after the launch of the app?",
          "Q5: How do you handle content management for a video streaming service?",
          "Q6: What are the monetization options available for video streaming apps?",
          "Q7: How is the cost of video streaming app development determined?",
          "Q8: Do you offer any packages for startups or small businesses?",
        ]}
        answers={[
          "A1: Our development process is comprehensive, beginning with conceptualization and planning, followed by design, technical development, rigorous quality assurance, deployment, and ongoing maintenance and updates to ensure a state-of-the-art streaming experience.",
          "A2: Absolutely, we offer dedicated developers for both platforms. Our team is proficient in creating cross-platform streaming apps that provide a consistent user experience on both Android and iOS devices.",
          "A3: Security is our top priority. We integrate the latest encryption methods, and secure protocols, and follow best practices for data protection. We also adhere to strict NDAs to ensure your project’s confidentiality.",
          "A4: Post-launch, we provide continuous support to address any technical issues, along with regular updates to keep your app optimized and introduce new features that keep your service competitive.",
          "A5: Our developers implement a robust content management system (CMS) that allows for easy uploading, categorizing, and managing video content, providing content providers with a seamless experience.",
          "A6: We can integrate various monetization models such as subscriptions, pay-per-view, advertisements, and sponsored content to ensure a profitable streaming service.",
          "A7: Development cost varies depending on app complexity, features, platform choice, and development time. We provide a detailed quote after discussing your specific requirements to ensure transparency.",
          "A8: Yes, we offer scalable solutions tailored to the needs and budgets of startups and small businesses, ensuring they can launch competitive streaming apps without compromising on quality.",
        ]}
      />

      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What our clients say"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
      />
    </>
  );
}
