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

import ClientTestimonials from "@/lib/clientsReviews/clients";
// import ContactInfo from "@/components/formSection/contactInfo";
import FrequentQuestions from "@/lib/secondpage/devProcess/questions";

import BannerImage from "@/components/BannerImage";
import Languages from "@/components/getStarted/allTechLAnguages/languages";
import VectorBanner from "@/components/VectorBanner";
import Icons from "@/lib/secondpage/Icons";
import ServiceCtaButton from "@/components/getStarted/ServicesCtaButtons";
export const metadata = {
  title: " Social Media App Development Company - Techanic Infotech ",
  description:
    " Techanic Infotech is a leading social media app development company. We deliver top-notch social media app development services with expert developers.",
  contentLanguage: "en-us",
  alternates: {
    canonical: new URL(
      "https://www.techanicinfotech.com/solutions/social-media-app-development-company"
    ),
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: " Social Media App Development Company - Techanic Infotech ",
    description:
      "Techanic Infotech is a leading social media app development company. We deliver top-notch social media app development services with expert developers.",
    url: "https://www.techanicinfotech.com/solutions/social-media-app-development-company",

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
    title: " Social Media App Development Company - Techanic Infotech ",
    description:
      "Techanic Infotech is a leading social media app development company. We deliver top-notch social media app development services with expert developers.",
    site: "@Techanicinfo",
    creator: "@Techanicinfo",
    // image: "https://www.techanicinfotech.com/OGI/og-image.png",
    url: "https://www.techanicinfotech.com/solutions/social-media-app-development-company",
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
export default function SocialMedia() {
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
        "name": "Social Media App Development Company - Techanic Infotech",
        "url": "https://www.techanicinfotech.com/solutions/social-media-app-development-company",
        "image": "https://www.techanicinfotech.com/OGI/og-image.png",
        "description": "Techanic Infotech is a leading social media app development company. We deliver top-notch social media app development services with expert developers..",
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
        "@id": "https://www.techanicinfotech.com/solutions/social-media-app-development-company",
        "url": "https://www.techanicinfotech.com/solutions/social-media-app-development-company",
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
          "https://www.techanicinfotech.com/solutions/social-media-app-development-company"
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
        "url": "https://www.techanicinfotech.com/solutions/social-media-app-development-company",
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
          "https://www.techanicinfotech.com/solutions/social-media-app-development-company"
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
        "@id":"https://www.techanicinfotech.com/solutions/social-media-app-development-company",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What experience does Techanic InfoTech have in social media app development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Techanic InfoTech boasts a rich history of developing diverse social media apps. Our portfolio includes custom solutions for image sharing, forums, video platforms, and networking apps, crafted by a team of seasoned developers."
            }
          },
          {
            "@type": "Question",
            "name": "How does Techanic InfoTech ensure the security of social media apps? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We prioritize security by integrating advanced protocols, including data encryption and secure authentication, to protect user data and privacy, thereby ensuring a safe and trustworthy environment for all users."
            }
          },
          {
            "@type": "Question",
            "name": "Can Techanic InfoTech create a social media app that stands out in the market?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Our custom development approach means your app is built with unique features and functionalities that highlight your brand's strengths and resonate with your target audience."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies does Techanic InfoTech use for app development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We utilize a robust tech stack, including the latest frameworks and programming languages, to build scalable, high-performance social media apps that are both agile and future-proof."
            }
          },
          {
            "@type": "Question",
            "name": "Why should we choose Techanic InfoTech over other development companies? ",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choosing Techanic InfoTech means partnering with a company that offers unparalleled expertise, a user-centric development approach, continuous support, and a commitment to innovation and excellence in the social media app market."
            }
          },
          {
            "@type": "Question",
            "name": "Does Techanic InfoTech sign a Non-Disclosure Agreement (NDA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": " Yes, we understand the importance of confidentiality. We are committed to protecting your intellectual property and will sign an NDA to ensure your project details and proprietary information remain secure."
            }
          }
        ]
      }
    `,
        }}
      />
      <VectorBanner
        headingPart1="Social Media "
        headingPart2="App Development Company"
        paragraph="Elevate your digital presence with our bespoke social media app development services. At the forefront of innovation, our team crafts cutting-edge platforms that connect and engage. Experience the synergy of design and technology that puts your brand in the spotlight. Techanic InfoTech as a leading social media app development company is here to help you."
        showGif={false}
        image="/assets/bannerimages/social-media-app.webp"
        vectorImage="/assets/bannerimages/social-media-banner-vector-image.svg"
        imagewidth="600px"
        btnContent="Let’s Get Started "
        showBorder={true}
        border="#000000"
        hovercolor="#000000"
        hovertext="white"
      />

      <OurClients
        headingpart1="Working With "
        headingpart2="The Best"
        paragraphText="Clients"
      />
      <CloneApp
        headingPart1="Social Media App "
        headingPart2="Clone Solutions"
        paragraph="Unlock the potential of popular platforms with our tailored social media app clone solutions. Techanic InfoTech replicates success by integrating familiar features with unique twists into your custom app."
        cloneData={[
          {
            id: 0,
            label: "Instagram Clone Development",
            content:
              "Immerse your audience in a visually stunning experience with our Instagram clone development service. Capitalize on a proven format, enhanced with your unique branding and innovative features for sharing life's moments.",
            image: "/assets/cloneappImages/instagram-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 1,
            label: "Twitter Clone Development",
            content:
              "Capture the essence of real-time communication with our Twitter clone development. We create a space for concise, impactful interactions, ensuring your app becomes the go-to for the latest news and trends.",
            image: "/assets/cloneappImages/twitter-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 2,
            label: "Facebook Clone Development",
            content:
              "Build a community around your brand with our Facebook clone development. From personal profiles to business pages, we incorporate comprehensive networking features to keep your users connected and engaged.",
            image: "/assets/cloneappImages/facebook-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 3,
            label: "LinkedIn Clone Development",
            content:
              "Our LinkedIn clone development equips professionals with networking tools tailored to industry needs. Foster professional growth and opportunities with a platform designed for career advancement.",
            image: "/assets/cloneappImages/linkedin-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 4,
            label: "TikTok Clone Development",
            content:
              "Dive into the short-form video trend with our TikTok clone social media mobile app development. Engage a youthful audience with creative, interactive, and viral content creation tools that will set your platform apart.",
            image: "/assets/cloneappImages/tiktok-clone-app-image.webp", // Update with correct image path
          },
          {
            id: 5,
            label: "Snapchat Clone Development",
            content:
              "Offer a unique ephemeral messaging solution with our Snapchat clone social networking app development. Introduce fun, dynamic content that disappears, encouraging more authentic and spontaneous communication.",
            image: "/assets/cloneappImages/snapchat-clone-app-image.webp", // Update with correct image path
          },
        ]}
      />
      <ExpertsDev
        heading="Discover Possibilities"
        paragraph="Connect with a global audience through a custom social media app designed just for you. Let's shape the future of social interaction together."
        isGradientPage={true}
        gradient="85.85deg, #EAEDFF 28.05%, #F4BAB8 123.64%"
        color="FDBEC0"
        image="/assets/social-media-cta-image-1.webp"
        text="Discover More"
        btnbg="#000000"
        btntext="#ffffff"
        justifyImage="center"
      />

      <CardSection
        headingPart1="Diverse Social Media"
        headingPart2="App Development Services"
        mobileheadingPart1="Diverse Social Media"
        mobileheadingPart2="App Development Services"
        paragraph="Expand your reach with our all-encompassing social media app development services. Tailored to meet the dynamic needs of the digital landscape, we ensure your social media app solutions stand out and deliver."
        cardItems={[
          {
            image: "/assets/icons/custom-social-media-app-development-icon.png",
            title: "Custom Social Media App Development",
            description:
              "Our custom social media app development crafts a unique platform right from scratch, ensuring your brand's ethos is embedded in every feature and interaction, driving engagement and growth. That’s what makes us a top social app development company.",
          },
          {
            image: "/assets/icons/image-sharing-app-development-icon.png",
            title: "Image Sharing App Development",
            description:
              "Seize the visual platform market with our image sharing social media application development, where vivid design meets fluid functionality, allowing users to effortlessly share their creativity and daily moments.",
          },
          {
            image: "/assets/icons/online-forum-app-development-icon.png",
            title: "Online Forum App Development",
            description:
              "Engage niche communities with our online forum app development, creating a hub for discussion, collaboration, and knowledge exchange, wrapped in an intuitive user interface with expert social networking app developers.",
          },
          {
            image: "/assets/icons/video-sharing-app-development-icon.png",
            title: "Video Sharing App Development",
            description:
              "With our video sharing social media platform development, cater to the burgeoning demand for multimedia content, offering a rich, interactive experience that keeps users returning for more.",
          },
          {
            image: "/assets/icons/social-networking-app-development-icon.png",
            title: "Social Networking App Development",
            description:
              "As leading social media app developers, we propel your brand into the social stratosphere with our social networking app development, facilitating meaningful connections through a seamless, feature-rich networking interface.",
          },
          {
            image: "/assets/icons/chat-app-development-icon.png",
            title: "Chat App Development",
            description:
              "Our chat app development combines real-time messaging with innovative features, ensuring privacy, user-friendly design, and a vibrant communication ecosystem. That’s what makes us a leading social networking app development company.",
          },
        ]}
        color="0F53FF"
      />

      {/* <Portfolio
        heading="Innovative Tech at Your Fingertips"
        bgColor="ffffff"
        paragraph={`Our social media app development company harnesses the latest technologies to build robust and scalable apps. From native to cross-platform solutions, we tailor the tech stack to fit your unique needs, ensuring seamless performance and a stellar user experience.`}
        slides={slideFood}
        btntext="white"
          
        divBtn="#0000ff "
        direction="right"
        color1="#0000ff"
        color2="#001289"
      /> */}
      <Panels
        headingPart1="Robust Features "
        headingPart2="for Social Media Apps"
        paragraph="Our social media app solutions come packed with an array of features designed for maximum engagement and ease of management. That’s what make our custom social media app development stand out of the rest."
        li1="User Panel Features"
        li2="Admin Panel Features"
        li3="Advance Panel Features"
        li1Small1="User"
        li1Small2="Admin"
        li1Small3="Advance"
        bgColor="F3F3FA"
        showLi3={true}
        textColor="black"
        userPanelCards={[
          {
            icon1: Icons.UserProfile,
            h1: "Personalized User Profiles",
            p1: "Customize profiles with themes and privacy settings, offering a personal touch while maintaining user security.",
            icon2: Icons.SocialConnect,
            h2: "Social Connect",
            p2: "Easy linking to other social platforms, broadening the network and enhancing the social experience.",
          },
          {
            icon1: Icons.SecureMessaging,
            h1: "Real-Time Messaging",
            p1: "Smooth, instant messaging capabilities that keep users connected with peers, with optional end-to-end encryption.",
            icon2: Icons.SearchIcon,
            h2: "Search and Discover",
            p2: "Intuitive search tools that let users explore content, hashtags, and profiles, fostering discovery and new connections.",
          },
          {
            icon1: Icons.ContentModeration,
            h1: "Content Sharing",
            p1: "Effortless sharing of photos, videos, and posts to encourage active engagement and community building.",
            icon2: Icons.Notifications,
            h2: "Notifications",
            p2: "Timely alerts for interactions, ensuring users stay up-to-date with content and engagements relevant to them.",
          },
        ]}
        adminPanelCards={[
          {
            icon1: Icons.Dashboard,
            h1: "Dashboard Analytics",
            p1: "Comprehensive analytics for user behavior, content reach, and engagement metrics to guide decision-making.",
            icon2: Icons.UserManagement,
            h2: "User Management",
            p2: "Tools for monitoring user activity, managing reports, and addressing grievances to maintain a healthy community.",
          },
          {
            icon1: Icons.ContentModeration,
            h1: "Content Moderation",
            p1: "Automated and manual moderation tools to oversee content, ensuring community guidelines are upheld.",
            icon2: Icons.MarketingTools,
            h2: "Marketing Tools",
            p2: "Integrated marketing features for promotions, advertisements, and user engagement analysis.",
          },
          {
            icon1: Icons.UserFeedback,
            h1: "Feedback System",
            p1: "Channels for receiving user feedback, enabling continuous improvement and user satisfaction.",
            icon2: Icons.PerformenceAnalytics,
            h2: "Performance Monitoring",
            p2: "Real-time monitoring of app performance, with alerts for any issues or required updates.",
          },
        ]}
        advancePanelCards={[
          {
            icon1: Icons.AdvanceMatchFilters,
            h1: "Augmented Reality Filters",
            p1: "AR filters for photos and videos, offering a fun, interactive element to content creation.",
            icon2: Icons.LiveSession,
            h2: "Live Streaming",
            p2: "Facilities for live broadcasting, connecting users and their audience in real-time.",
          },
          {
            icon1: Icons.PharmacyIntegration,
            h1: "E-commerce Integration",
            p1: "Seamless e-commerce features for users to buy, sell, and advertise products within the app.",
            icon2: Icons.Encryption,
            h2: "Data Encryption",
            p2: "Robust data encryption for enhanced security, protecting user data and ensuring trust.",
          },
          {
            icon1: Icons.Feed,
            h1: "Customizable Feeds",
            p1: "AI-powered feeds that adapt to user preferences, delivering a tailored content experience.",
            icon2: Icons.MultiLanguageSupport,
            h2: "Multi-language Support",
            p2: "Accessibility through multiple language options, catering to a global user base.",
          },
        ]}
        textColor1="white"
      />

      <HireDevelopers
        headingPart1="Hire Social Media App Developers"
        paragraph1="Embark on a journey to build the next-gen social media application with our expert team of developers. Our social media app developers are not just coders; they are innovators with a knack for creating trendsetting social apps that resonate with users worldwide. They blend creativity with technical prowess to deliver apps that are both visually appealing and functionally superior."
        paragraph2="By choosing to hire social media app developers from our pool, you gain access to professionals who are adept at turning your concept into a reality. Our social media app designers & developers stay ahead of the curve by employing cutting-edge technologies and methodologies to ensure your app is robust, scalable, and ready to captivate users."
        listData={[
          "Tech-Savvy Professionals",
          "Agile Development Approach",
          "Commitment to Excellence",
          "Strategic Implementation",
        ]}
        image="/assets/cloneappImages/hiring-developers-image.webp"
        btntxt="white"
        textcolor1="white"
      />
      <TechSuccess
        headingPart1="Lead The "
        headingPart2="Social Revolution"
        paragraph="Join the ranks of social media innovators. Our comprehensive social media solutions ensure that your app is not just part of the conversation but leading it. Engage, inspire, and grow your community with an app that represents the pinnacle of connectivity and usability."
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
        head="Innovative Tech at Your Fingertips"
        para="Our social media app development company harnesses the latest technologies to build robust and scalable apps. From native to cross-platform solutions, we tailor the tech stack to fit your unique needs, ensuring seamless performance and a stellar user experience."
        bgColor="#F3F3FA"
        iconheight="60px"
        iconwidth="60px"
        sections={[
          {
            image: "/assets/icons/languages-icon.svg",
            label: "Programming Languages",
          },
          {
            image: "/assets/icons/notifications-icon.svg",
            label: "Push Notifications",
          },
          {
            image: "/assets/icons/database-icon.svg",
            label: "Database Management",
          },
          { image: "/assets/icons/storage-icon.svg", label: "Storage" },
          { image: "/assets/icons/analytics-icon.svg", label: "Analytics" },
        ]}
        languages={[
          {
            image: "/assets/icons/kotlin-icon.png",
            label: "Kotlin",
            section: "Programming Languages",
          },
          {
            image: "/assets/icons/objective-c-icon.png",
            label: "Objective-C",
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
            image: "/assets/icons/apple-push-notifications-icon.png",
            label: "Apple Push Notifications",
            section: "Push Notifications",
          },
          {
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud Messaging",
            section: "Push Notifications",
          },
          {
            image: "/assets/icons/mongodb-icon.png",
            label: "MongoDB",
            section: "Database Management",
          },
          {
            image: "/assets/icons/sql-icon.png",
            label: "SQL",
            section: "Database Management",
          },
          {
            image: "/assets/icons/core-data-icon.png",
            label: "Core Data",
            section: "Database Management",
          },
          {
            image: "/assets/icons/sqlite-icon.png",
            label: "SQLite",
            section: "Database Management",
          },
          {
            image: "/assets/icons/mysql-icon.png",
            label: "MySQL",
            section: "Database Management",
          },
          {
            image: "/assets/icons/icloud-icon.png",
            label: "iCloud",
            section: "Storage",
          },
          {
            image: "/assets/icons/amazone-s3-icon.png",
            label: "Amazon S3",
            section: "Storage",
          },
          {
            image: "/assets/icons/azure-icon.png",
            label: "Azure Server",
            section: "Storage",
          },
          {
            image: "/assets/icons/google-cloud-icon.png",
            label: "Google Cloud Storage",
            section: "Storage",
          },
          {
            image: "/assets/icons/app-analytics-icon.png",
            label: "App Analytics",
            section: "Analytics",
          },
          {
            image: "/assets/icons/flurry-icon.png",
            label: "Flurry",
            section: "Analytics",
          },
          {
            image: "/assets/icons/azure-stream-analytics-icon.png",
            label: "Azure Stream Analytics",
            section: "Analytics",
          },
          {
            image: "/assets/icons/mix-panel-icon.png",
            label: "MixPanel",
            section: "Analytics",
          },
          {
            image: "/assets/icons/firebase-icon.png",
            label: "Firebase Analytics",
            section: "Analytics",
          },
        ]}
      />

      <ServiceCtaButton
        heading="Transform Ideas Into Reality"
        paragraph="Your vision can redefine social media. Partner with our seasoned developers and watch your ideas come to life in a dynamic app."
        text="Get Started"
        isGradientPage={true}
        gradient="266.1deg, #BAC0EB -13.34%, #F69D9A 77.41%"
        showBorder={false}
        color="FDBEC0"
        image="/assets/social-media-cta-image-2.webp"
        btnbg="#000000"
        initialcolor="white"
        btntext="white"
        textColor="black"
        hovercolor="#ffffff"
        hovertext="black"
        justifyImage="start"
      />
      <AppDevelop
        headingPart1="Social Media "
        headingPart2="App Development Process"
        paragraph="Embark on a transformative development journey tailored to create social media app that disrupts the market. Our social networking platform development process is meticulous and transparent, ensuring that each phase aligns with your strategic goals and market demands.  "
        image1="/assets/icons/idea-validation-icon.png"
        h1="Conceptualization"
        p1="Crafting a unique app strategy based on your vision and user needs."
        image2="/assets/icons/design-prototype-icon.png"
        h2="Design"
        p2="Creating an intuitive, attractive UI/UX that enhances user engagement."
        image3="/assets/icons/development-icon.png"
        h3="Development"
        p3="Coding the app with robust functionality and seamless performance."
        image4="/assets/icons/development-testing-icon.png"
        h4="Testing"
        p4="Rigorous QA testing to ensure a bug-free, smooth user experience."
        image5="/assets/icons/launch-deployment-icon.png"
        h5="Launch"
        p5="Deploying the app to the marketplace with a bang, ready for users."
        image6="/assets/icons/post-launch-support-icon.png"
        h6="Support & Maintenance"
        p6="Providing ongoing support to keep the app up-to-date and performing optimally."
        cards={[
          {
            image: "/assets/icons/idea-validation-icon.png",
            title: "Conceptualization",
            description:
              "Crafting a unique app strategy based on your vision and user needs.",
          },
          {
            image: "/assets/icons/design-prototype-icon.png",
            title: "Design",
            description:
              "Creating an intuitive, attractive UI/UX that enhances user engagement.",
          },
          {
            image: "/assets/icons/development-icon.png",
            title: "Development",
            description:
              "Coding the app with robust functionality and seamless performance.",
          },
          {
            image: "/assets/icons/development-testing-icon.png",
            title: "Testing",
            description:
              "Rigorous QA testing to ensure a bug-free, smooth user experience.",
          },
          {
            image: "/assets/icons/launch-deployment-icon.png",
            title: "Launch",
            description:
              "Deploying the app to the marketplace with a bang, ready for users.",
          },
          {
            image: "/assets/icons/post-launch-support-icon.png",
            title: "Support & Maintenance",
            description:
              "Providing ongoing support to keep the app up-to-date and performing optimally.",
          },
        ]}
        align="center"
      />
      <CardSection
        headingPart1="Innovating How People Connect With"
        headingPart2="Next Gen Social Media App Development"
        mobileheadingPart1="Innovating How People Connect With"
        mobileheadingPart2="Next Gen Social Media App Development"
        paragraph={`Choosing Techanic InfoTech for your social media app development ensures a partnership with a leader in innovation and customer satisfaction. We bring your vision to life with a user-centric approach, advanced technologies, and a commitment to delivering excellence. Our experienced team ensures that your social media solution is not just a product, but a growth catalyst for your business.`}
        cardItems={[
          {
            image: "/assets/icons/social-platforms-icon.png",
            title: "Expertise in Diverse Social Platforms",
            description:
              "Our social media solution developers possess deep expertise across various social platforms, ensuring your app caters to all aspects of social media, from networking to content sharing and beyond.",
          },
          {
            image: "/assets/icons/robust-security-icon.png",
            title: "State-of-the-Art Security Measures",
            description:
              "Social media app Security is paramount; hence we integrate the latest security protocols to protect user data and build trust from the first login, creating a social networking app that's a safe space for interaction.",
          },
          {
            image: "/assets/icons/customization-core-icon.png",
            title: "Customization at Its Core",
            description:
              "We believe in a bespoke experience; thus, every app is tailored to meet your specific needs, ensuring that your brand stands out in the crowded social media landscape.",
          },
          {
            image: "/assets/icons/scalable-solution-icon.png",
            title: "Scalable Solutions for Growing Audiences",
            description:
              "At Techanic InfoTech, as a leading social media application developer, our solutions are designed for scalability, allowing you to build a social media app that grows seamlessly with your user base and adapts to the ever-evolving market demands.",
          },
          {
            image: "/assets/icons/data-driven-insights-icon.png",
            title: "Data-Driven Approach for User Engagement",
            description:
              "We employ a data-driven approach to enhance user engagement in our social media app development services, utilizing analytics to drive decisions and create a personalized experience for each user.",
          },
          {
            image: "/assets/icons/continuous-support-icon.png",
            title: "Continuous Support and Optimization",
            description:
              "Our relationship doesn't end at launch. At Techanic InfoTech, our social media app design and development team provide continuous support and optimization services to ensure your social media app remains competitive and cutting-edge.",
          },
        ]}
        color="0F53FF"
      />

      <FrequentQuestions
        heading="FAQs"
        paragraph="Here are answers to some of the top questions asked about on demand social media app development."
        questions={[
          "Q1: What experience does Techanic InfoTech have in social media app development?",
          "Q2: How does Techanic InfoTech ensure the security of social media apps?",
          "Q3: Can Techanic InfoTech create a social media app that stands out in the market?",
          "Q4: What technologies does Techanic InfoTech use for app development?",
          "Q5: Why should we choose Techanic InfoTech over other development companies?",
          "Q6: Does Techanic InfoTech sign a Non-Disclosure Agreement (NDA)?",
        ]}
        answers={[
          "A1: Techanic InfoTech boasts a rich history of developing diverse social media apps. Our portfolio includes custom solutions for image sharing, forums, video platforms, and networking apps, crafted by a team of seasoned developers.",
          "A2: We prioritize security by integrating advanced protocols, including data encryption and secure authentication, to protect user data and privacy, thereby ensuring a safe and trustworthy environment for all users.",
          "A3: Absolutely. Our custom development approach means your app is built with unique features and functionalities that highlight your brand's strengths and resonate with your target audience.",
          "A4: We utilize a robust tech stack, including the latest frameworks and programming languages, to build scalable, high-performance social media apps that are both agile and future-proof.",
          "A5: Choosing Techanic InfoTech means partnering with a company that offers unparalleled expertise, a user-centric development approach, continuous support, and a commitment to innovation and excellence in the social media app market.",
          "A6: Yes, we understand the importance of confidentiality. We are committed to protecting your intellectual property and will sign an NDA to ensure your project details and proprietary information remain secure.",
        ]}
      />
      {/* <OurBlogs /> */}
      <ClientTestimonials
        heading="What our clients say"
        paragraph="Discover how Techanic Infotech has propelled businesses into the future with our transformative solutions."
        cardBgColor="ffffff"
        bgColor="F1F5F9"
      />
    </>
  );
}
